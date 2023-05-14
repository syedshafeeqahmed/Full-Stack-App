
import './App.css';
import {BrowserRouter as Router, Routes , Route ,Link} from 'react-router-dom'
import Home from './pages/Home';
import Achivements from './pages/Achivements';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Managment from './Components/Managment';
import Testing from './Components/Testing';
import UI_UX from './Components/UI_UX';
import House_keeping from './Components/House_keeping';
import Java from './Components/Java';
import Team from './pages/Team';
import Footer from './Components/Footer';
import EmployeeCreate from './EmpMangSys/EmployeeCreate';
import EmpDetails from './EmpMangSys/EmpDetails';
import Navbar from './Components/Navbar';
import EmployeeView from './EmpMangSys/EmployeeView';
import EmployeeEdit from './EmpMangSys/EmployeeEdit';
import ContactDetails from './EmpMangSys/ContactDetails';



const username = sessionStorage.getItem('username')




function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route exact path='/' element={< Home />} />
      <Route exact path='/Achivements' element={<Achivements />} />
      
      <Route exact path='/Contact' element={<Contact />} /> 
      <Route exact path='/Login' element={<Login />} /> 
      <Route exact path='/Team' element={<Team />} /> 
      
   
  
  <Route exact path='/ui_ux' element={<UI_UX />}></Route>
  <Route exact path='/java' element={<Java />}></Route>
  <Route exact path='/testing' element={<Testing />}></Route>
  <Route exact path='/managment' element={<Managment/>}></Route>
  <Route exact path='/house_keeping' element={<House_keeping />}></Route>
  {username ==='shafeeq' &&  <>
  <Route exact path='/EmployeeCreate' element={<EmployeeCreate />}></Route>
  <Route exact path='/EmployeeDetails' element={<EmpDetails />}></Route>
  <Route exact path='/EmployeeView/:EmpId' element={<EmployeeView />}></Route>
  <Route exact path='/EmployeeEdit/:EmpId' element={<EmployeeEdit />}></Route>
  <Route exact path='/ContactDetails' element={<ContactDetails />}></Route>
  </>}
    </Routes> 
<Footer />
</Router>

  );
}

export default App;
