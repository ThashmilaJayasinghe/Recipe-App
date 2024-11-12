import { XMarkIcon, HeartIcon } from '@heroicons/react/24/solid'



export default function LoginPage() {
   
  return (
    <form className="w-5/12 max-w-xl bg-lime-200 mx-auto mt-20 p-8 rounded-lg">
      <div className="space-y-12">   
        <h2 className="text-2xl font-semibold text-stone-700 mx-auto text-center">Login</h2>
        
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">          
          
          <div className="sm:col-span-full mx-5">
            <label htmlFor="email" className="block text-base font-medium text-stone-700">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
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
                required
                placeholder="Enter Your Password"
                autoComplete="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>        
                
        </div>
              
      </div>
      <div className="mt-16 flex items-center justify-center gap-x-6">        
        <button
          type="submit"
          className="rounded-md bg-lime-600 px-24 py-3 mb-3 text-lg font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
        >
          Submit
        </button>
      </div>
      <hr className="border border-lime-300" />
      <p className="mt-2 text-sm text-lime-600 text-center">
        Don't have an account? <a href="/signup" className="text-lime-600 hover:underline hover:text-lime-800">Sign Up</a>
      </p>
    </form>
  )
}
