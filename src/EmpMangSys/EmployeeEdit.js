import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EmployeeEdit() {
    const { EmpId } = useParams();
    const [name, setName] = useState('');
    const [dept, setDept] = useState('Java Developers');
    const [role, setRole] = useState('');
    const [id, setId] = useState('');
    const [img, setImg] = useState('');
  
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch("http://localhost:8000/employees/" + EmpId)
          .then((res) => {
            return res.json();
          })
          .then((resp) => {
            setDept(resp.dept);
            setId(resp.id);
            setName(resp.name);
            setImg(resp.img);
            setRole(resp.role);
          })
          .catch((err) => {
            alert("Employee details failed due to : " + err.message);
          });
      }, []);
    
    const handleSubmit = (event) => {
  
      event.preventDefault();
      const employees = {name, role, id,dept, img};
      //console.log(user);
      fetch("http://localhost:8000/employees/"+EmpId,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(employees)
      }).then((res)=>{
        alert("Your Details Submitted successfully..");
        navigate('/EmployeeDetails')
      }).catch((err)=>{
        alert("Faild : "+ err.message);
      });
    };
  
  

  return (
    <div>
      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
        <Link className='btn btn-danger' to="/EmployeeDetails"> X </Link>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>Updating Employee</span>
            <span>Details</span>
          </div>
          {/* <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
        </div>
        <div className="screen-body-item">
          <form className="app-form"   onSubmit={handleSubmit}>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" onChange={(e)=>setName(e.target.value)} required value={name}/>
            </div>
            <div className="app-form-group">
              <select className="app-form-control" placeholder="Role" onChange={(e)=>setDept(e.target.value)} value={dept}>
                <option>Java Developers</option>
                <option>Ui Ux Developers</option>
                <option>Testing</option>
                <option>Management</option>
                <option>House Keeping</option>
                </select>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Role" onChange={(e)=>setRole(e.target.value)} required value={role}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="USER ID" onChange={(e)=>setId(e.target.value)} required value={id}/>
            </div>
            <div className="app-form-group img">
              <input className="app-form-control" placeholder="img" onChange={(e)=> setImg(e.target.value)} required value={img}/>
            </div>
            <div className="app-form-group buttons">
              
              <button className="app-form-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="credits">
    
     <Link className="credits-link" to="https://dribbble.com/shots/2666271-Contact" target="_blank">
        
          <g stroke="#ffffff" fill="none">
         
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
       
      
     </Link>
    </div>
  </div>
</div>

    </div>
  )
}
