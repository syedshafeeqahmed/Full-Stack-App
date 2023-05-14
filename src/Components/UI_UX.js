import React, { useEffect, useState } from 'react';

import TeamCards from '../Components/Team-cards';

export default function UI_UX() {
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
    {employee && employee.filter((item)=> item.dept === 'Ui Ux Developers').map((filtereditem)=>{return (<div class="col-6" key={filtereditem.id}>
                                                        <TeamCards img={filtereditem.img} 
                                                            title={filtereditem.name} 
                                                            text={filtereditem.dept}
                                                            text2={filtereditem.role}

                                                            idnum={filtereditem.id}/>
                                                </div>)})}
  </div> 
</div>
  )
}





