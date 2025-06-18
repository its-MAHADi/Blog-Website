import React, { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router'
import { auth, AuthContext } from '../provider/AuthProvider'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'


const Login = () => {
      const [showPassword,setShowPassword] = useState(false)
      const { signIn}=use(AuthContext);

      const provider = new GoogleAuthProvider

      const locaion = useLocation();
      const navigate = useNavigate();

      //Login
     const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email,password})
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            // toast.success('Login successful!');
            Swal.fire({
            title: "Login successful!",
            icon: "success",
            draggable: true
          });
            navigate(`${locaion.state?locaion.state : "/" }`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('Password is incorrect Please try again.');
          });
    }

     //google Login
    const handleGoogleLogin =()=>{
     // console.log("click hocche");
      signInWithPopup(auth,provider)
      .then(result =>{
         const user = result.user;
           // toast.success('Login successful!');
            Swal.fire({
            title: "Login successful!",
            icon: "success",
            draggable: true
          });
            navigate(`${locaion.state?locaion.state : "/" }`)
      })
      .catch(error =>{
         const errorCode = error.code;
         const errorMessage = error.message;
            toast.error('Please try again.');
      })
    }

  return (
     <div className='flex justify-center py-3 min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='text-center font-semibold text-2xl '>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
           {/* password */}
      <div className='relative'>
        <label className="label">Password</label>
        <input name='password' type={showPassword ? 'text' : 'password'}
         className="input" 
         placeholder="Password" required />
        <button onClick={()=>{setShowPassword(!showPassword)}} className='absolute btn btn-xs mt-2 items-center right-6'> 
             {
                showPassword ? <FaEyeSlash /> : <FaEye /> 
             }    
              </button>
        </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>

         {/* Google */}
        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        
           <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/auth/register" className='text-red-400' >Register</Link></p>
      </form>
      
    </div>
    </div>
  )
}

export default Login
