import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const username = sessionStorage.getItem('username')

export default function Navbar() {
    const navigate = useNavigate();
    function logout() {
        sessionStorage.clear();
        navigate("/");
        window.location.reload();
    }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className='logo-emp'>
      <img src='https://www.kindpng.com/picc/m/154-1546133_team-icon-clipart-png-download-employee-logo-blue.png' width={'70px' } height={'70px'}></img>
    </div>
<div className="container-fluid">

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="Nav-Modules" id="navbarNav">
    <ul className="navbar-nav">
  
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Achivements">Achivements</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropbtn" to="/team">Team</Link>
        <div class="dropdown-content ">
          <Link to="/java">Java </Link>
          <Link to="/ui_ux">UI UX </Link>
          <Link to="testing">Testing </Link>
          <Link to="managment">Managment </Link>
          <Link to="house_keeping">House keeping</Link>
          
          </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact</Link>
      </li>
  {username ==='shafeeq' &&  <li className="nav-item dropdown">
        <Link className="nav-link dropbtn">  <i class="fa-solid fa-sliders"></i> { username } </Link>
        <div class="dropdown-content ">
          
          <Link to="/EmployeeDetails"> Employee Details</Link>
          <Link to="/EmployeeCreate">Employee Create </Link>
          <Link to="/ContactDetails">Contact Details </Link>
          
         
          </div>
      </li>}
      {/* <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/web">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/create">Create</Link>
      </li>
      <li className="nav-item">
        <Link class="nav-link active" aria-current="page" to="/update">Update</Link>
      </li>  */}
    </ul>
  </div>
{username === null && <Link className='Admin' to='/Login'><button className='btn' type='button'>Admin Login</button></Link>}
{username !== null && <Link className='Admin' onClick={logout} ><button className='btn'type='button'>Log out</button></Link>}</div>

</nav>
  )
}
