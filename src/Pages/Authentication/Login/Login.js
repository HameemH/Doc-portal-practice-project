import React from 'react';
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
                                <span class="label-text-alt">{errors.email.message}</span>
                            </label>}
                            {errors.email?.type === 'pattern' && <label class="label">
                                <span class="label-text-alt">{errors.email.message}</span>
                            </label>}
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
                            class="input input-bordered w-full max-w-xs mt-5" />
                            {errors.password?.type === 'required' && <label class="label">
                                <span class="label-text-alt">{errors.email.message}</span>
                            </label>}
                            {errors.password?.type === 'minLength' && <label class="label">
                                <span class="label-text-alt">{errors.email.message}</span>
                            </label>}
                        </div>
                        <input className='btn w-full mt-5 btn-accent max-w-xs ' type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;