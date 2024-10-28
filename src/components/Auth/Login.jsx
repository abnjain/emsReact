import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");

  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form 
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className="flex flex-col items-center justify-center" action="" method="get">
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    
                }} required className="border-2 border-emerald-600 py-3 px-4 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full" type="email" name="email" placeholder="Enter Your Email" />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    
                }} required className="mt-3 border-2 border-emerald-600 py-3 px-4 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full" type="password" name="password" placeholder="Enter Your Password" />
                <button className="mt-5 bg-emerald-600 py-3 px-4 text-xl rounded-full" >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login