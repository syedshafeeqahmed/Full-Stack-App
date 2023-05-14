import React, { useEffect, useState } from 'react';

import TeamCards from '../Components/Team-cards';

export default function Team() {
  const [employee, setEmployee] = useState(null)
  useEffect(()=>{
    fetch("http://localhost:8000/employees").then((res)=>{
    return res.json();
    }).then((resp)=>{
      setEmployee(resp);
    }).catch((err)=>{
      alert("Employee details failed due to : " + err.message)
    })
},[]);
  return (
<div class="container-fluid">
  <div class="row">
    {employee && employee.map((Item)=>{return (<div class="col-6" key={Item.id}>
                                                <TeamCards img={Item.img} 
                                                            title={Item.name} 
                                                            text={Item.dept}
                                                            text2={Item.role}

                                                            idnum={Item.id}/>
                                                </div>)})}
  </div> 
</div>
  )
}





