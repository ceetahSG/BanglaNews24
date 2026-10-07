"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SubmitEvent } from "react";

const SignUpPage = () => {
  const handleSignIn = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: userData.Email as string,
      password: userData.password as string,
      callbackURL: "/",
    });
    if (data) {
      console.log("Sign-in successful:", data);
      redirect("/");
    } else {
      console.error("Sign-in error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 ">
      <form
        onSubmit={handleSignIn}
        className="fieldset  border-base-300  rounded-box w-xs border p-4 bg-red-100"
      >
        <h2 className=" text-2xl font-bold flex items-center justify-center text-red-700">
          সাইন ইন
        </h2>

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
          সাইন ইন করুন
        </button>
      </form>
      <div>
        <p>
          অ্যাকাউন্ট নেই?
          <span className="text-red-700 hover:underline cursor-pointer">
            <Link href="/signup"> সাইন আপ করুন</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
