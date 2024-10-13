"use client"
import React from 'react'
import Button from '../components/Button';
import { useForm } from "react-hook-form";
import { registerSchema, RegType } from "../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import api from '@/configs/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegType>({
    resolver: zodResolver(registerSchema),
  })
  const router = useRouter()

  const onSubmit = async (data: RegType) => {
    try {
      const result = await api.post("/auth/sign-up", {
        name: data.name,
        email: data.email,
        password: data.password
      })
      if (result.status == 201) {
        const result = await signIn("credentials", {
          redirect:false, email: data.email, password: data.password
        })
        if (result?.error) toast.error(result.error)
        else router.push("/?message=reg-success")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) toast.error(error.response?.data.message || error.response?.data || error.message || "An error has occured.")
      else toast.error((error as Error).message)
    }

  };

  return (
    <div className="flex justify-center items-center bg-slate-100 w-full min-h-[calc(100vh-4rem)]">
      <div className="border-2 border-slate-300 p-6 rounded-lg bg-white">
        <h2 className="text-center text-3xl">Sign Up</h2>
        <form
          className="mt-10 flex flex-col gap-4 w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              {...register("name")}
              className="w-full border py-2 px-4 rounded-md"
              placeholder="Name"
            />
            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              className="w-full border py-2 px-4 rounded-md"
              placeholder="Email"
            />
            {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              className="w-full border py-2 px-4 rounded-md"
              placeholder="Password"
            />
            {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
          </div>

          <div>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full border py-2 px-4 rounded-md"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <p className='text-red-400'>{errors.confirmPassword.message}</p>}
          </div>

          <Button text="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default SignUp
