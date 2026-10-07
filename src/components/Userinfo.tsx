"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Userinfo = () => {
  const router = useRouter();
  const { data: sesssion } = authClient.useSession();
  const user = sesssion?.user;

  const handleSignOut = async () => {
    try {
      const { error } = await authClient.signOut();
      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে।");
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("সাইন আউট করার সময় একটি সমস্যা হয়েছে।");
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
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex gap-2 sm:shrink-0 sm:gap-4">
          <Link href="/signin">
            <span className="btn btn-sm sm:btn-md">সাইন ইন</span>
          </Link>

          <Link href="/signup">
            <span className="btn btn-secondary btn-sm bg-red-700 text-white sm:btn-md">
              সাইন আপ
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
