import { NavLink } from "react-router-dom";





const Navbar = () => {
 
 
 




  const navLinks = (
    <>
      <li className="text-xl"><NavLink to="/">Home</NavLink></li>
      <li className="text-xl"><NavLink to="/signUp">Sign Up</NavLink></li>
      <li className="bg-teal-200 rounded-lg">
        <div className="bg-teal-300">
          
          <div className="badge bg-teal-300 font-bold"></div>
        </div>
      </li>
      <li className="text-xl"><NavLink to="/contact" >Contact</NavLink></li>
    </>
  );
  
  return (
    <div>
      <div className="navbar bg-teal-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    
    <img className="hidden md:block w-24 h-16 rounded-full" src="https://i.ibb.co/rHdHPCh/Opinion-removebg-preview.png" alt="" />
    <h2 className="hidden md:block text-2xl font-bold">OpinionOverflow</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>



  <div className="navbar-end">
  
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
           
        </li>
     
        <li><a className="hover:bg-warning">Logout</a></li>
      </ul>
    </div>
    

  </div>



</div>
    </div>
  );
};

export default Navbar;