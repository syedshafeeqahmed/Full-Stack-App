import './Contact.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [userID, setuserID] = useState('');
  const [message, setmessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    const user = {name, email, userID, message};
    //console.log(user);
    fetch("http://localhost:8000/contact",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(user)
    }).then((res)=>{
      alert("Your Details Submitted successfully..");
      navigate('/')
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
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        {/* <div className="screen-body-item left">
        
        </div> */}
        <div className="screen-body-item">
          <form className="app-form"   onSubmit={handleSubmit}>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="USER ID" onChange={(e)=>setuserID(e.target.value)}/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" onChange={(e)=> setmessage(e.target.value)}/>
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
