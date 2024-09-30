"use client"
import React from 'react'
import Button from '../components/Button';
import { useForm } from "react-hook-form";
import userSchema, { User } from '../schema/user';
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: zodResolver(userSchema),
  })

  const onSubmit = (data: User) => {
    console.log(data);
    console.log("finish")
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 w-full min-h-[calc(100vh-4rem)]">
      <div className="border-2 border-slate-300 p-6 rounded-lg bg-white">
        <h2 className="text-center text-3xl">Sign Up</h2>
        <form
          className="mt-10 flex flex-col gap-4 w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("name")}
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            type="email"
            {...register("email")}
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            {...register("password")}
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            type="password"
            className="w-full border py-2 px-4 rounded-md"
            placeholder="Confirm password"
          />
          <Button text="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default SignUp
