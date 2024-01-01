import { useForm } from "react-hook-form";
import { Link,} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SignUp = () => {
  
 
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit =async (data)=>{
  const { name, email, phone,gender,password, source } = data;

    console.log(name, email, phone,gender,password, source);

   

   
    
   

 }


  return (
    <>
    <div>
   
  
<div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create an account</h1>
            
          </div>
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered border-green-300"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered border-green-300"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                  className="input input-bordered border-green-300"
                />
              
              </div>


              <div className="form-control">
  <label className="label">
    <span className="label-text">Gender</span>
  </label>
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        {...register("gender", { required: true })}
        className="mr-1"
      />
      Male
    </label>
    <label className="ml-4">
      <input
        type="radio"
        name="gender"
        value="female"
        {...register("gender", { required: true })}
        className="mr-1"
      />
      Female
    </label>
    <label className="ml-4">
      <input
        type="radio"
        name="gender"
        value="other"
        {...register("gender", { required: true })}
        className="mr-1"
      />
      Other
    </label>
  </div>
</div>


<div className="form-control">
  <label className="label">
    <span className="label-text">How did you hear about this?</span>
  </label>
  <div>
    <label>
      <input
        type="checkbox"
        name="source"
        value="LinkedIn"
        {...register("source")}
        className="mr-1"
      />
      LinkedIn
    </label>
    <label className="ml-4">
      <input
        type="checkbox"
        name="source"
        value="Friends"
        {...register("source")}
        className="mr-1"
      />
      Friends
    </label>
    <label className="ml-4">
      <input
        type="checkbox"
        name="source"
        value="JobPortal"
        {...register("source")}
        className="mr-1"
      />
      Job Portal
    </label>
    <label className="ml-4">
      <input
        type="checkbox"
        name="source"
        value="Other"
        {...register("source")}
        className="mr-1"
      />
      Other
    </label>
  </div>
</div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered border-green-300"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password less than 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one upper case one lower case one number
                    one special charcter
                  </span>
                )}
              </div>

              

           




              <div className="form-control mt-6">
                <input
                  className="btn bg-green-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mt-4 mb-4 ">
        <span className="text-xl font-semibold ">Already have an account.Please </span>
        <Link to="/login"  className=" font-bold text-blue-600 text-xl hover:text-red-600">Login</Link>
      </p>
            <div>
           
          </div>
          </div>
          
        </div>
      </div>
           
   
<div>


</div>

<ToastContainer/>
      </div>

    
    
    </>
  
  );
};

export default SignUp;