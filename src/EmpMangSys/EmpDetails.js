import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EmpDetails() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  const EmployeeEdit =(id)=>{
    navigate("/EmployeeEdit/"+id);
  }
  const EmployeeView =(id)=>{
    navigate("/EmployeeView/"+id);
  }
  const EmployeeRemove =(id)=>{
    if(window.confirm("Do you to Remove")){
      fetch("http://localhost:8000/employees/"+id,{
      method:"DELETE",
      }).then((res)=>{
      alert("Removed successfully..");
      window.location.reload();
      }).catch((err)=>{
      alert("Failed : " + err.message );
      });}
    }

  useEffect(()=>{
    fetch("http://localhost:8000/employees").then((res)=>{
    return res.json();
    }).then((resp)=>{
      setEmployee(resp);
    }).catch((err)=>{
      alert("Employee details failed due to : " + err.message)
    })
},[]);

  return (<>
  <table class="table table-striped">
  <thead>
    <tr>
      <th colSpan={'5'}><center>Employee Mangement System</center></th>
      <th><Link to="/EmployeeCreate">Add Employee (+)</Link></th>
    </tr><br/>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Dept</th>
      <th>Role</th>
      <th>Image</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
 {employee && employee.map((Item)=>{return (<tr key={Item.id}>
                                                <td>{Item.id}</td>
                                                <td>{Item.name} </td>
                                                <td>{Item.dept} </td>
                                                <td>{Item.role} </td>
                                                <td>{Item.img}</td>
                                                <td>
                                                <button className='btn btn-success me-2' onClick={()=>EmployeeEdit(Item.id)}>Edit</button>
                                                <button className='btn btn-primary me-2'  onClick={()=>EmployeeView(Item.id)}>Details</button>
                                                <button className='btn btn-danger me-2' onClick={()=>EmployeeRemove(Item.id)}>Remove</button>                                                
                                                </td></tr>)})}
  </tbody>
</table>
</>
  )
}





