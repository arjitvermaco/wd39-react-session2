import React, { useState } from 'react'

export default function LoginValidated() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword:''
  });
  const [errors, setErrors] = useState({});
 
  function handleChange(e){
    // console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }
  //Handle the form submit
  function handleSubmit(e){
   e.preventDefault()

   //Validation
   let validationErrors = {};
   if(!formData.email) validationErrors.email = "Email is Required"
   else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is invalid';

   if(!formData.password) validationErrors.password = "Password is Required"

   if(!formData.confirmPassword) validationErrors.confirmPassword = "Please Enter password again"
   else if(formData.confirmPassword !== formData.password) validationErrors.confirmPassword = "Passwords Dont Match"

   if(Object.keys(validationErrors).length > 0){
    setErrors(validationErrors)
    return;
   }

   setErrors({})
   console.log('Login details are ', formData)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="email"
          />
          {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="password"
          />
          {errors.password && <span className="text-xs text-red-600">{errors.password}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            id="confirmPassword"
          />
          {errors.confirmPassword && <span className="text-xs text-red-600">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  )
}
