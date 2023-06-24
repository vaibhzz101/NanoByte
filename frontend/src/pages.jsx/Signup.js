import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      password,
    };
    console.log(payload);
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
    setPassword("");
  };

  const loginClick = () => {
    setIsRegistered(false);
  };

  const handleRegistration = () => {
    setIsRegistered(true); // Set registration flag to true
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white	">
      <div className="w-full max-w-md mt-16">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Create your account
        </h2>
        <p className="text-gray-700 mb-8 text-center text-lg">
          Note that phone verification may be required for signup. Your number
          will only be used to verify your identity for security purposes.
        </p>
        {isRegistered ? (
          <form
            onSubmit={handleSignup}
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full  py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500	"
              />
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full  py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500	"
              />
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full  py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500	"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
            <p className=" text-center ">
              <span className="block">
                Already have an account?{" "}
                <button
                  className="text-blue-700 text-center mt-16"
                  onClick={loginClick}
                >
                  Log in?
                </button>
              </span>
            </p>
          </form>
        ) : (
          <Login handleRegistration={handleRegistration} />
        )}

        <div className=" bg-slate-700	 flex-col mx-8 mb-5 w-full max-w-sm shadow-md ">
          <button
            type="submit"
            className="flex items-center justify-center  text-white  py-3 px-5 rounded focus:outline-none focus:shadow-outline"
          >
            <img
              src="https://s4827.pcdn.co/wp-content/uploads/2018/04/Google-logo-2015-G-icon.png"
              alt="Google"
              className="w-14 h-10 mr-5"
            />
            Continue with Google
          </button>
        </div>

        <p className="text-blue-500 text-center mt-16">
          <span className="block">Terms of Use | Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

{
  /* ///////*************************   */
}

const Login = ({ handleRegistration }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
    Navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-xs">
        <h2 className="mb-4 text-2xl font-bold text-center">Welcome Back</h2>
        <form
          onSubmit={handleLogin}
          className=" bg-gray-100 shadow-md  rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleAdd(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              name="pass"
              type="password"
              placeholder="Password"
              onChange={(e) => handleAdd(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className=" text-center ">
          <span className="block" onClick={handleRegistration}>
            Don't have an account?<span className="text-blue-700">Sign Up</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
