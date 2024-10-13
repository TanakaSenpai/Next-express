"use client";
import React, { useEffect } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { signInSchema, SignInType } from "../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";


const SignIn = () => {
  const router = useRouter();
  const message = useSearchParams().get("message");

  useEffect(() => {
    if (message) toast.warning("Please sign in first!");
  }, [message]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInType) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) toast.error(result.error)
    else router.push("/")
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 w-full min-h-[calc(100vh-4rem)]">
      <div className="border-2 border-slate-300 p-6 rounded-lg bg-white">
        <h2 className="text-center text-3xl">Sign In</h2>
        <form
          className="mt-10 flex flex-col gap-4 w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <Button text="Sign in" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
