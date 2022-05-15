import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Registration from './Pages/Authentication/Registration';
import RequireAuth from './Pages/Authentication/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myappointments from './Pages/Dashboard/Myappointments';
import Myreview from './Pages/Dashboard/Myreview';

function App() {
  return (
    <div  >
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Registration></Registration>}></Route>
       <Route path='/apponintment' element={<RequireAuth>
        <Appointment></Appointment>
       </RequireAuth>}></Route>
       <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
           <Route index element={<Myappointments></Myappointments>}></Route>
           <Route path="review" element={<Myreview></Myreview>}></Route>

        
        </Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
