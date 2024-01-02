import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigation =useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, gender, password, source, city, state } = data;

    console.log(name, email, phone, gender, password, source);
    const result = await createUser(data.email, data.password);

    await updateUserProfile(data.name);
    const userInfo = {
      email: data.email,
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      source: data.source,
      city: data.city,
      state: data.state,
    };
    const userRes = await axiosPublic.post("/users", userInfo);
    if (userRes.data.insertedId) {
      console.log("user added to database");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign up has been successful",
        showConfirmButton: false,
        timer: 500,
      });
      setLoggedIn(true);
      navigation('/')
    }
  };

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
                    <span className="label-text">
                      How did you hear about this?
                    </span>
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
                    <span className="label-text">City</span>
                  </label>
                  <select
                    name="city"
                    defaultValue="default"
                    {...register("city", { required: true })}
                    className="select select-bordered border-green-300"
                  >
                    <option value="default" disabled >
                      Select a city
                    </option>
                    <option value="pune">Pune</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="mumbai">Mumbai</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">State</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    {...register("state", { required: true })}
                    placeholder="State"
                    className="input input-bordered border-green-300"
                  />
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
                      Password must have one upper case one lower case one
                      number one special charcter
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
            
              <div></div>
            </div>
          </div>
        </div>

        <div></div>

        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
