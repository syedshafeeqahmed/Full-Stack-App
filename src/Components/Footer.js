import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><Link to="Achivements">Achivements</Link></li>
            <li><Link to="Team">Team</Link></li>
            <li><Link to="Contact">Contact</Link></li>
          
          </ul>
        </div>
        <div class="footer-col">
          <h4>Employees</h4>
          <ul>
            <li><Link to="Java">Java</Link></li>
            <li><Link to="ui_ux">UI UX</Link></li>
            <li><Link to="testing">Testing</Link></li>
            <li><Link to="managment">Managment</Link></li>
            <li><Link to="house_keeping">House keeping</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Keep In Touch</h4>
          <ul>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="6360084106">+6360084106</Link></li>
            <li><Link to="syedshafeeq2210@gmail.com">syedshafeeq2210@gmail.com</Link></li>

          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <Link to="#"><i class="fab fa-facebook-f"></i></Link>
            <Link to="#"><i class="fab fa-twitter"></i></Link>
            <Link to="#"><i class="fab fa-instagram"></i></Link>
            <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
     </div>
  </footer>

    </div>
  )
}
