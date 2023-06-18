import React,{Suspense , lazy} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./pages/About.jsx'));
const Error = lazy(()=>import('./pages/Error.jsx'));
const Navbar = lazy(()=>import('./components/Navbar.jsx'));
const UserList = lazy(()=>import('./users/UserList'))
const UserDetails=lazy(()=>import('./users/UserDetails'))
const NewTicketPage=lazy(()=>import('./pages/NewTicketPage'))
const Login=lazy(()=>import('./auth/Login'))
const Register = lazy(()=>import('./auth/Register'))
const End = lazy(()=>import('./auth/End'))
const Footer = lazy(()=>import('./pages/Footer'))

import img from './assets/lodinggears.svg';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div className="flex flex-col justify-center items-center align-middle bg-slate-200 h-full w-full"><img src={img} alt="loading..." /><h3 className="mt-15">LOADING...</h3></div>}>
   <div className="flex flex-col min-h-screen">

    <Navbar/>

      <Routes>

        <Route index element={<Home/>} />
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path='/ticket' element={<NewTicketPage/>}/>
          <Route exact path="/users" element={<UserList/>} />
          <Route path="/user/:userId" element={<UserDetails/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/end' element={<End/>}/>
          <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer/>
   </div>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App
