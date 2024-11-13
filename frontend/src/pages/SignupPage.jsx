import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService.js";

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  

  async function handleSignup() {
    setError('');
    setSuccessMessage('');

    try {
      const message = await register(username, email, password);
      setSuccessMessage(message);
      setTimeout(() => {
        navigate('/login');  // Navigate to login page after successful signup
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  }
   
  return (
    <form className="w-5/12 max-w-xl bg-lime-200 mx-auto mt-12 p-8 rounded-lg">
      <div className="space-y-12">   
        <h2 className="text-4xl font-semibold text-stone-700 mx-auto text-center">Sign Up</h2>
        
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-full mx-5">
            <label htmlFor="username" className="block text-base font-medium text-stone-700">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder="Enter Your Username"
                className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-full mx-5">
            <label htmlFor="email" className="block text-base font-medium text-stone-700">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter Your Email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-full mx-5">
            <label htmlFor="password" className="block text-base font-medium text-stone-700">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter Your Password"
                autoComplete="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>  

          {successMessage && <div className="sm:col-span-full mx-5"><p className="text-lime-700 text-center mt-2">{successMessage}</p></div>} 
          {error && <div className="sm:col-span-full mx-5"><p className="text-red-500 text-center mt-2">{error}</p></div>}

          <div className="sm:col-span-full mt-6 flex items-center justify-center gap-x-6">        
            <button
              type="button"
              onClick={handleSignup}
              className="w-full sm:max-w-xs rounded-md bg-lime-600 sm:px-24 py-3 text-lg font-semibold text-amber-100 text-center shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
            >
              Submit
            </button>
          </div>
                
        </div>              
      </div>
     
    </form>
  )
}
