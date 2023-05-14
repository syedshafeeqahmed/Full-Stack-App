import React,{ useState } from "react";
import { useNavigate } from "react-router-dom"
import './Login.css'


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/admin/"+username).then((res)=>{
          return res.json();
        }).then((resp)=>{
            // console.log(resp)
          if (Object.keys(resp).length === 0) {
            alert("Please enter Valid Username")
          }else{
            if(resp.password === password){
              sessionStorage.setItem('username', username);
              navigate('/');
              window.location.reload();
            }else{
              alert("Bhai Password sahi daal")
            }
          }
         }).catch((err)=>{
              alert("Login faild due to : " + err.message)
            })
        };
   
        
      
  return (
    <div>
      <div className="container">
        <from className="card-log">
          <div className="login">Log in</div>
            <div className="inputBox">
                <input type="text" id="Text" placeholder="Admin name" onChange={(e)=>setUsername(e.target.value)} required/>
                {/* <span className="user">Username</span> */}
            </div>

            <div className="inputBox">
            <input type="Password" id="Password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
                {/* <span>Password</span> */}
            </div>
            <input type="submit"  className="enter" value={'Enter'} onClick={handleSubmit}/>
            

        </from>
    </div>
    </div>
  )
}
