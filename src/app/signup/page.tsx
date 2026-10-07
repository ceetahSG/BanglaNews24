"use client";
import React, { SubmitEvent } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as {
      Name: string;
      Email: string;
      password: string;
    };
    console.log("User Data:", userData);
    const { data, error } = await authClient.signUp.email({
      name: userData.Name,
      email: userData.Email,
      password: userData.password,
      callbackURL: "/",
    });
    if (data) {
      console.log("Sign-up successful:", data);
      redirect("/signin");
    } else {
      console.error("Sign-up error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 ">
      <form
        onSubmit={handleSubmit}
        className="fieldset  border-base-300 rounded-box w-xs border p-4 bg-red-100"
      >
        <h2 className=" text-2xl font-bold flex items-center justify-center text-red-700">
          সাইন আপ
        </h2>

        <label className="label">নাম</label>
        <input name="Name" type="text" className="input" placeholder="Name" />

        <label className="label">ইমেইল</label>
        <input
          name="Email"
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">পাসওয়ার্ড</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral bg-red-700 mt-4">
          সাইন আপ করুন
        </button>
      </form>
      <div>
        <p>
          অ্যাকাউন্ট আছে?
          <span className="text-red-700 hover:underline cursor-pointer">
            <Link href="/signin"> সাইন ইন করুন</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
