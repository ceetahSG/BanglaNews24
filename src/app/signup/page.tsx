import React from "react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 ">
      <fieldset className="fieldset  border-base-300 rounded-box w-xs border p-4 bg-red-100">
        <h2 className=" text-2xl font-bold flex items-center justify-center text-red-700">
          সাইন আপ
        </h2>

        <label className="label">নাম</label>
        <input name="Name" type="email" className="input" placeholder="Name" />

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

        <button className="btn btn-neutral bg-red-700 mt-4">
          সাইন আপ করুন
        </button>
      </fieldset>
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
