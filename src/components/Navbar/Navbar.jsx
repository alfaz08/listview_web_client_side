import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


import {  toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {

   
    const {user,logOut} =useContext(AuthContext)
 
    const handleLogOut =()=>{
      logOut()
      .then(()=>
      {
       console.log('user logged out successfully')
      })
      .catch(error=>toast(error))
    
    }

   const navLinks =<>
         <li className="text-xl"><NavLink to="/">Home</NavLink></li>
        
         

   
   </>



  return (
    <div>
      <div className="navbar  p-2 bg-green-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>



    <div>
      <img className=" w-40 h-28" src="https://i.ibb.co/X8zVkt2/Green-Modern-Organic-Health-Food-Logo-1-removebg-preview.png" alt="" />
    </div>
    



  </div>
   
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>

  <div className="navbar-end">


    
  {
    user?
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className=" w-16 rounded-full">
        {
            user.photoURL ?
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL}  />
            :
            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/37dj5GJ/blank-profile-picture-973460-960-720.jpg" />
          }
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
        {user.displayName ?
           user.displayName
           :
          <div>
             Account
          </div>
        
        }
        </li>


        <li onClick={handleLogOut}><a className="hover:bg-green-200">Logout</a></li>
      </ul>
    </div>
    :
    <div>
      <Link to="/login" className="text-2xl font-bold">Join Now</Link>
    </div>
  }


  </div>



  </div>



    </div>
  );
};

export default Navbar;