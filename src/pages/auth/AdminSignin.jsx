import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import { loginAction } from "../../redux/authSlice";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
const AdminSignin = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const { loading, error, user } = useSelector((state) => state.auth);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <ToastContainer />
      <div className="w-full max-w-[45rem] px-4 mt-8 h-[25rem] rounded-xl flex flex-col items-center bg--200 mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            // perform login logic here

            const email = values.email;
            const password = values.password;
            dispatch(loginAction(email, password, toast));
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, values, isSubmitting, handleSubmit }) => (
            <Form
              action=""
              className="w-full flex flex-col mt-10 items-center space-y-6 py-4 "
            >
              <div className="w-full flex flex-col items-start  space-y-2">
                {/* <label className="text-lg text-black/50 text-left" htmlFor="">
                  Email
                </label> */}
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  values={values.email}
                  className="md:w-[70%] w-full px-3 mx-auto py-4 border border-black/50 rounded-lg"
                  placeholder="hex@gmail.com"
                />
                <ErrorMessage
                  className="text-red-400 text-sm "
                  name="email"
                  component="div"
                />
              </div>
              <div className="w-full mt-3 flex flex-col space-y-2">
                {/* <label className="text-lg text-black/50" htmlFor="">
                  Password
                </label> */}
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  values={values.password}
                  className="md:w-[70%] w-full px-3 mx-auto  py-4 border border-black/50 placeholder:text-3xl placeholder:font-bold rounded-lg"
                  placeholder="........"
                />
                <ErrorMessage
                  className="text-red-400 text-sm "
                  name="password"
                  component="div"
                />
              </div>
              <div className="w-[40%] flex space-y-2 flex-col mt-6  items-center ">
                {!loading ? (
                  <button
                    type="submit"
                    className="w-full py-2 lg:py-2 xl:py-3 bg-[#d69a6a] text-white rounded-lg"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="w-full py-2 lg:py-2 xl:py-3 bg-[#d69a6a] text-white rounded-lg"
                  >
                    <SyncLoader color="#fff" size={10} />
                  </button>
                )}
                {/* <p>
                  Dont have an account?{" "}
                  <Link href="/register" className="text-[#32C74A]">
                    Register
                  </Link>{" "}
                </p> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminSignin;
