import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PrimaryInput from "../../components/inputs/PrimaryInput";
import PrimaryPassword from "../../components/inputs/PrimaryPassword";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import SubmitButton from "../../components/auth/SubmitButton";


const Login = () => {
  
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let name = e.target.name;
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  return (
    <section className="w-full ">
      <Navbar />
      <div className="w-90 min-h-[80vh] mx-auto  flex items-center justify-center mt-8">
        <div className="login-wrapper pt-5 pb-7 mx-auto w-full md:w-[550px] 2md:w-[600px] rounded-sm">
          <h3 className="font-bold uppercase text-center login-caption mt-5">
            log in
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <PrimaryInput
              name="username"
              value={formValues.username}
              onChangeInput={handleChange}
            />
            <PrimaryPassword
              name="password"
              value={formValues.password}
              onChangeInput={handleChange}
            />
            <div className="w-90 mx-auto capitalize text-right text-orange text-sm sm:w-[70%] md:w-[75%]">
              <p className="w-full">forgot password?</p>
            </div>
            <Link to="/OurServices" className="text-orange">
            <SubmitButton title="log in" /> 
                </Link>
             

            <div className="mt-3 w-full">
              <p className="font-bold w-full text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/startup-plan/Register" className="text-orange">
                  Sign up.
                </Link>
              </p>
            </div>

            <div className="mt-8 mb-5 w-90 mx-auto sm:w-[70%] md:w-[75%] text-[28px] text-orange flex justify-end">
              <FaQuestionCircle />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
