import { Link } from "react-router-dom";
const SignUpSuccessful = () => {
  return (
    <div className="container flex flex-col items-center mx-auto mt-8 text-center">
      <svg
        className=" w-1/4 pb-10"
        fill="#36619d"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 201 256"
        enableBackground="new 0 0 201 256"
        xmlSpace="preserve"
        stroke="#36619d"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M184.215,160.786V254H2.292v-32.517h52.027v-29.626h48.414v-31.071H184.215z M166.79,9.86c-2.556,2.556-6.646,2.556-9.202,0 c-0.383-0.383-0.767-0.767-1.022-1.278c-2.173-3.962-6.39-6.518-11.246-6.518c-7.157,0-12.908,5.751-12.908,12.908 s5.751,12.908,12.908,12.908c11.374,0,20.704-8.435,22.365-19.298C167.429,9.093,167.173,9.476,166.79,9.86z M197.078,3.725 c-2.173-2.173-5.751-2.173-8.051,0L163.85,28.902c-1.661,1.534-3.834,2.556-6.262,2.812h-24.41c-2.428-0.128-4.601-1.15-6.262-2.812 L101.739,3.725c-2.173-2.3-5.751-2.3-7.924,0c-2.173,2.3-2.173,5.751,0,8.051l0,0l33.739,33.739l0.128,2.3v101.346 c0,4.473,3.578,8.051,8.051,8.051s8.051-3.578,8.051-8.051V92.547c0-0.895,0.767-1.661,1.661-1.661s1.661,0.767,1.661,1.661v56.616 c0,4.473,3.578,8.051,8.051,8.051s8.051-3.578,8.051-8.051V47.817l0.128-2.3l33.739-33.739l0,0 C199.251,9.476,199.251,5.898,197.078,3.725z M88.895,122.19l-34.133,9.144l8.453,8.453L31.101,171.9H2.292v11.432h33.545 l35.461-35.462l8.454,8.454L88.895,122.19z"></path>{" "}
        </g>
      </svg>
      <h2 className="text-3xl font-bold mb-4">Sign Up Successful!</h2>
      <p className="text-gray-600">
        Thank you for registering. Your account has been created successfully.
      </p>
      <Link to="/login" className="text-blue-500 hover:underline">
        Back to Login
      </Link>
    </div>
  );
};

export default SignUpSuccessful;
