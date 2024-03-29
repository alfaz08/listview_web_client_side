import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";

import { ToastContainer,toast } from "react-toastify";


const Login = () => {
  const {signIn} =useContext(AuthContext)
  const navigate =useNavigate()
  const location =useLocation()

  const handleLogin=e=>{
    e.preventDefault();
    
  const email =e.target.email.value;
  const password =e.target.password.value;
  // console.log(email,password);
  signIn(email,password)
  .then(res=>{console.log(res.user)
    navigate('/')
   }) 
   .catch(error=>{
    console.log(error)
    toast.error(error.message)
    e.target.reset()
   })
  }

  return (
    <div className="container mx-auto">
    
   <div className="grid grid-cols-1 lg:grid-cols-4 lg:ml-36 ">
  <div className="hidden lg:block ">
    <img className="h-[530px] w-[420px] mt-32" src="https://i.ibb.co/DKWxY2N/login.png" alt="" />
  </div>
  <div className="">
  <div className="hero">
<div className="hero-content flex-col md:w-[700px] ">
 <div className="text-center lg:text-left">
   <h1 className="text-5xl font-bold">Login now!</h1>
   <p className="py-6">Welcome to our website and explore it</p>
 </div>
 <div className="card flex-shrink-0 w-full shadow-2xl bg-custom-color">
 <form onSubmit={handleLogin} className="card-body ">
     <div className="form-control">
       <label className="label">
         <span className="label-text text-xl font-semibold">Email</span>
       </label>
       <input type="email" name="email" placeholder="email" className="input input-bordered border-green-400" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-xl font-semibold">Password</span>
       </label>
       <input type="password" name="password" placeholder="password" className="input input-bordered border-green-400" required />
      
     </div>
     <div className="form-control mt-6">
     <button  className="btn   bg-custom-color text-black  bg-green-300 hover:bg-black hover:text-white">Login</button>
     </div>
   </form>










 </div>
</div>
</div>



  </div>

  

  

 </div>
 <ToastContainer></ToastContainer>
 </div>
  );
};

export default Login;