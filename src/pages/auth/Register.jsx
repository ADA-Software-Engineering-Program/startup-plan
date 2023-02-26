import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import PrimaryInput from "../../components/inputs/PrimaryInput";
import PrimaryPassword from "../../components/inputs/PrimaryPassword";
import SubmitButton from "../../components/auth/SubmitButton";

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
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
            create account
          </h3>

          <form className="w-full mt-5" onSubmit={handleSubmit}>
            <div
              className="submit-btn w-[65%] mx-auto sm:w-[270px] h-[45px] overflow-hidden mt-8 rounded-md mb-7"
              style={{ backgroundColor: "rgba(255, 69, 0, 0.2)" }}
            >
              <button className="w-full h-full flex items-center justify-center">
                <span className="text-[24px]">
                  <FcGoogle />
                </span>
                &nbsp;Sign up with Google
              </button>
            </div>

            <p className="relative border border-gray-600 mt-3 mx-auto w-[40px]">
              <span className="uppercase text-base absolute bg-white top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                or
              </span>
            </p>
            <div className="mt-10">
              <PrimaryInput
                value={formValues.username}
                onChangeInput={handleChange}
                name="username"
              />

              <PrimaryInput
                value={formValues.email}
                onChangeInput={handleChange}
                name="email"
                placeholder="E-MAIL"
                type="email"
              />

              <PrimaryPassword
                name="password"
                value={formValues.password}
                onChangeInput={handleChange}
                placeholder="PASSWORD"
                mb="mb-6"
              />

              <PrimaryPassword
                name="confirm_password"
                value={formValues.confirm_password}
                onChangeInput={handleChange}
                placeholder="CONFIRM PASSWORD"
                mb="mb-6"
              />
            </div>

            <div className="w-90 mx-auto capitalize text-sm sm:w-[70%] md:w-[75%] my-8 flex justify-center">
              <p className="font-bold capitalize">
                i agree to terms of service.
              </p>
              &nbsp;&nbsp;
              <input
                type="checkbox"
                id="terms"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="terms"></label>
            </div>

            <SubmitButton title="create account" />

            <div className="mt-3 w-full">
              <p className="font-bold w-full text-center text-sm">
                Already have an account?{" "}
                <Link to="/startup-plan/login" className="text-orange">
                  Log in.
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

export default Register;
