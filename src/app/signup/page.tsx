import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 bg-red-100">
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
    </div>
  );
};

export default SignUpPage;
