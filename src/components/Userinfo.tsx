"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Userinfo = () => {
  const { data: sesssion } = authClient.useSession();
  const user = sesssion?.user;
  console.log("Session:", user);
  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div>
      {user ? (
        <div className="flex gap-2 sm:shrink-0 sm:gap-4">
          <h2 className="btn btn-sm sm:btn-md">Welcome {user.name}</h2>

          <button
            onClick={handleSignOut}
            className="btn btn-secondary btn-sm bg-red-700 text-white sm:btn-md"
          >
            <Link href="/signup">সাইন আউট</Link>
          </button>
        </div>
      ) : (
        <div className="flex gap-2 sm:shrink-0 sm:gap-4">
          <Link href="/signin">
            <button className="btn btn-sm sm:btn-md">সাইন ইন</button>
          </Link>

          <Link href="/signup">
            <button className="btn btn-secondary btn-sm bg-red-700 text-white sm:btn-md">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
