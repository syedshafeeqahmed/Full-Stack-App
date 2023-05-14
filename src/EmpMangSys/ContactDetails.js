import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ContactDetails() {
  const [Contact, setContact] = useState(null);


  useEffect(()=>{
    fetch("http://localhost:8000/Contact").then((res)=>{
    return res.json();
    }).then((resp)=>{
      setContact(resp);
    }).catch((err)=>{
      alert("Contact details failed due to : " + err.message)
    })
},[]);

  return (<>
  <table class="table table-striped">
  <thead>
    <tr>
      <th colSpan={'4'}><center>Contact Details</center></th>
      <th><Link to="/Contact">Add Contact (+)</Link></th>
    </tr><br/>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>email</th>
      <th>userID</th>
      <th>message</th>
    </tr>
  </thead>
  <tbody>
 {Contact && Contact.map((Item)=>{return (<tr key={Item.id}>
                                                <td>{Item.id}</td>
                                                <td>{Item.name} </td>
                                                <td>{Item.email} </td>
                                                <td>{Item.userID} </td>
                                                <td>{Item.message}</td>
                                                </tr>)})}
  </tbody>
</table>
</>
  )
}





