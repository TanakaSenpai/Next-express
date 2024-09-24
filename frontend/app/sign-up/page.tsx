import React from 'react'
import Button from '../components/Button';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 w-full min-h-[calc(100vh-4rem)]">
      <div className="border-2 border-slate-300 p-6 rounded-lg bg-white">
        <h2 className="text-center text-3xl">Sign Up</h2>
        <form className="mt-10 flex flex-col gap-4 w-96">
          <input
            type="text"
            name=""
            id=""
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            name=""
            id=""
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Password"
          />
          <input
            type="password"
            name=""
            id=""
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Confirm password"
          />
          <Button text='Sign up' />
        </form>
      </div>
    </div>
  );
}

export default SignUp
