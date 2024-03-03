import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./App";
// import { singUp } from "./firebase/register";
import axios from "axios";

export default function SignUp() {
  const { email, setEmail, password, setPassword } = useContext(UserContext);
  const navigate = useNavigate();

  async function singIn(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        email: email,
        password: password,
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    // const statusSingUp = await singUp(email, password);
    // if (statusSingUp == true) {
    //   navigate("/SignUpSuccessful");
    //   setEmail("")
    //   setPassword("")
    // } else {
    //   navigate("/SignInFailed");
    // }
  }
  return (
    <div
      className="w-screen h-screen bg-blue-950 bg relative px-5 flex flex-col justify-center sm:justify-start sm:pt-28 
      lg:flex-none lg:relative lg:px-0 lg:pt-10"
    >
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
            Sign Up
          </div>
          <label className="block text-gray-600 mt-3 sm:text-2xl">
            Username
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="username"
            className=" text-black bg-slate-200  w-full p-1 border mt-3 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:mt-5 
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
            className=" text-black bg-slate-200  border mt-3 p-1 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:mt-5
             sm:h-20 sm:text-4xl
             lg:h-12 lg:mt-1"
          />
          <button
            onClick={singIn}
            className="w-full bg-blue-500 h-1 p-5 mt-5 font-bold rounded-xl flex flex-col justify-center items-center hover:bg-blue-700
           hover:text-white transition-all duration-300 
            sm:mt-20  sm:p-10 sm:rounded-3xl sm:text-4xl 
            lg:mt-6 lg:text-xl lg:py-7"
          >
            Sing In
          </button>

          <div className="w-full p-5 flex flex-col justify-center items-center">
            <p className="leading-relaxed text-grey-900 text-sm sm:text-2xl lg:text-sm">
              Already have an account?
              <span className="font-bold text-grey-700 text-sm sm:text-2xl lg:text-sm">
                <Link to="/login" className="text-black">
                  Log in
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
