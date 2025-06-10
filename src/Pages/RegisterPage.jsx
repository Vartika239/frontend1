import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")

async function  handleSubmit(e){
  e.preventDefault()
  try {
    let res=await axios.post("http://localhost:5000/api/register",{
      name,
      email,
      password
      
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    alert(res.data.message)
    setName("")
    setEmail("");
      setPassword("");
  } catch (err) {
    if(err.response && err.response.data && err.response.data.error){
      alert(err.response.data.error)
    }else{
      alert("Something Went Wrong")
    }
    
  }

}

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black-700 px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-2 text-center">
          Don't Have an Account? Register Now
        </h1>
        <form  onSubmit={handleSubmit} className="bg-gray-200 mb-3   mt-10 rounded-3xl shadow-lg ">
          <div className="p-8 bg-white rounded-xl  max-w-md w-full">
            <div className="mb-3">
              <label
                className="block text-2xl ml-3 mt-3 font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                type="text"
                id="name"
                value={name}
                placeholder="Full Name"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

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
                 value={email}
                id="email"
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
              Sign Up
            </button>
            <div className="flex justify-center items-center mt-2">
              <h1 className="mt-3 mb-2 me-4 ">Or Sign Up using</h1>
              <div className="mb-3 mt-3  ">
                <i className="fa-brands fa-facebook fa-2x me-5"></i>
                <i className="fa-brands fa-square-twitter  fa-2x me-5"></i>
                <i className="fa-brands fa-google  fa-2x me-5"></i>
              </div>
            </div>
            <h1 className="text-center text-sm">
              Already Have an Account ?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:underline font-semibold"
              >
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
