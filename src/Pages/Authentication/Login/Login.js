import auth from './../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React,{useEffect} from 'react';

import Usetoken from './../../Hooks/Usetoken';


const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      const navigate = useNavigate()
      const [token]  = Usetoken(user || googleUser);

      let from = location.state?.from?.pathname || "/";
      let signInerror;
      useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
      if(loading || googleLoading){
        return <Loading></Loading>
      }
      if(error|| googleError){
          signInerror= <p className='text-red-500'>{error?.message} {googleError?.message}</p>
      }
   
    
    const onSubmit = data => {
       signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
   

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-xl">LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input 
                            type="email"
                            placeholder="Your Email"
                            {...register("email", {
                                required:{
                                   value:true,
                                   message:"Email is Requried"     
                                },
                                pattern: {
                                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                  message: 'Provide A Valid Email' // JS only: <p>error message</p> TS only support string
                                }
                              })}
                            className="input input-bordered w-full max-w-xs" />
                            {errors.email?.type === 'required' && <label class="label">
                                <span class="label-text-alt text-red-700">{errors.email.message}</span>
                            </label>}
                            {errors.email?.type === 'pattern' && <label class="label">
                                <span class="label-text-alt text-red-700">{errors.email.message}</span>
                            </label>}
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input 
                            type="passowrd"
                            placeholder="Password"
                            {...register("password", {
                                required:{
                                   value:true,
                                   message:"Password is Requried"     
                                },
                                minLength: {
                                    value:6,
                                    message: 'Password Should contain 6 characters' // JS only: <p>error message</p> TS only support string
                                  }
                              })}
                            class="input input-bordered w-full max-w-xs " />
                            {errors.password?.type === 'required' && <label class="label">
                                <span class="label-text-alt text-red-700">{errors.password.message}</span>
                            </label>}
                            {errors.password?.type === 'minLength' && <label class="label">
                                <span class="label-text-alt text-red-700">{errors.password.message}</span>
                            </label>}
                            {signInerror}
                        </div>
                       
                        <input className='btn w-full mt-5 btn-accent max-w-xs ' type="submit" value="LOGIN" />
                    </form>
                    <p>New to doctors portal? <Link to='/register' className="text-primary" >Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;