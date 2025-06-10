import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")
let navigate=useNavigate()

async function handleSubmit(e) {
  e.preventDefault()
  try {
    let res=await axios.post("http://localhost:5000/api/login",{
       email,
       password
    },{
      "Content-Type":"application/json"
    })
    alert(res.data.message)
    setEmail("");
    setPassword("");
    navigate("/dashboard")
  } catch (err) {
    if(err.response && err.response.data && err.response.data.error)
      alert(err.response.data.error)
    else
    alert("Somethng Went Wrong")
  }
  
}


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black-700 px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-2 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="bg-gray-200 mb-3  max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto  w-90 mt-10 rounded-3xl ">
          <div className="p-8 bg-white rounded-xl   w-full">
            <div className="mb-4">
              <label
                className="block text-2xl ml-3 mt-3 font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                type="email"
                id="email"
                value={email}
                placeholder="Email Address"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-2xl ml-3 mt-3 font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                type="password"
                value={password}
                id="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg">
              Login
            </button>

            <h1 className="text-center text-sm mt-2">
              Don't Have an Account ?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
