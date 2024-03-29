import React from "react";
import { useState } from "react";
import axios from "axios";
import signup from '../assets/icons/signup.png';
import bg from '../assets/icons/signupbg.jpg';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, username, password);
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
        <div className="absolute top-0 left-0 p-4 flex items-center">
          <img src={logo} alt="Better Care Logo" className="w-12 h-12 mr-2"/>
          <h1 className="text-2xl font-bold text-gray-800">Better Care</h1>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex w-3/4 lg:w-1/2 bg-white bg-opacity-80 shadow-lg rounded-lg p-8 relative"> 
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Sign Up</h1> 
              <form onSubmit={handleFormSubmit} className="space-y-4"> 
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600 text-sm font-medium">Name</label> 
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-gray-600 text-sm font-medium">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-gray-600 text-sm font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <p>Already a User? <Link to="/login" className="underline text-blue-500">Login</Link></p>
                <div className="flex justify-center">
                  <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-600">Sign Up</button> 
                </div>
              </form>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img src={signup} alt="signup icon" className="w-64 h-64"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
