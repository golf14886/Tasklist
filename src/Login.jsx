import { useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./App";
export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    userLoggedIn,
    setUserLoggedIn,
  } = useContext(UserContext);

  useEffect(() => {
    const cookies = document.cookie;
    const parts = cookies.split(";");
    for (let part of parts) {
      const [key, value] = part.split("=");
      if (key.trim() === "token") {
        navigate("/");
      }
    }
  }, []);

  async function loginTask() {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      const data = await response.data;
      await Cookies.set("token", data.token, { expires: 1 }); // 1 คือจำนวนวัน (24 ชั่วโมง)
      await Cookies.set("tokenEmail", email, { expires: 1 }); // 1 คือจำนวนวัน (24 ชั่วโมง)
      setUserLoggedIn(true);
      navigate("/");
    } catch (error) {}
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoginError(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loginError]);

  const LoginFailed = () => {
    return (
      <div className=" text-rose-700 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col items-center bg-white p-8 rounded-lg">
          <h2>Login Failed</h2>
          <p>
            Sorry, we couldnt log you in. Please check your email and password
            and try again.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="w-screen h-screen bg-blue-950 bg relative px-5 flex flex-col justify-center sm:justify-start sm:pt-28 
      lg:flex-none lg:relative lg:px-0 lg:pt-10"
    >
      {loginError ? <LoginFailed></LoginFailed> : null}
      <div className="text-3xl mb-10 text-center text-white sm:text-6xl lg:text-7xl lg:mb-0">
        “TaskList”
      </div>
      <div className=" lg:pl-20 lg:pt-24">
        <img
          src="../../public/img/11879344_Checklist.jpg"
          alt="no-img"
          className="hidden lg:block lg:w-1/2 lg:rounded-lg"
        />
      </div>

      <div className="h-96 lg:absolute lg:right-5 lg:bottom-28 ">
        <div
          className="  bg-white  px-5 pt-5 pb-16 rounded-md  flex flex-col sm:px-10 lg:px-12 
        lg:pt-10"
        >
          <div className="text-2xl text-center tracking-widest font-bold sm:text-4xl sm:mt-6">
            Login
          </div>
          <label className="block text-gray-600 mt-3 sm:text-2xl">
            Username
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="username"
            className=" text-slate-950 bg-slate-200 w-full p-1 border mt-3 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:mt-5 
            sm:h-20 sm:text-4xl lg:h-12 lg:mt-1 "
          />
          <label
            className="block mt-3 text-gray-600 sm:text-2xl
           sm:mt-5 lg:mt-1"
          >
            Plassword
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="username"
            className=" text-black bg-slate-200 border mt-3 p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:mt-5
             sm:h-20 sm:text-4xl
             lg:h-12 lg:mt-1"
          />
          <button
            onClick={loginTask}
            className="w-full bg-blue-500 h-1 p-5 mt-5 font-bold rounded-xl flex flex-col justify-center items-center hover:bg-blue-700
           hover:text-white transition-all duration-300 
            sm:mt-20  sm:p-10 sm:rounded-3xl sm:text-4xl 
            lg:mt-6 lg:text-xl lg:py-7"
          >
            LogIn
          </button>

          <div className="w-full p-5 flex flex-col justify-center items-center">
            <p className="leading-relaxed text-grey-900 text-sm sm:text-2xl lg:text-sm">
              Not registered yet?
              <span className="font-bold text-grey-700 text-sm sm:text-2xl lg:text-sm">
                <Link to="/SignUp" className=" text-black">
                  Create an Account
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
