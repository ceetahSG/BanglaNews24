import React from "react";
import Image from "next/image";
import Logo from "@/assetes/logo.webp";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 p-4 ml-150">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <div>
            <h1 className="text-xl font-bold text-red-700">Bangla News 24</h1>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <button className="btn ">সাইন ইন</button>
          <button className="btn btn-secondary bg-red-700 text-white">
            সাইন আপ
          </button>
        </div>
      </div>
      <div>
        <NavLinks></NavLinks>
      </div>
    </div>
  );
};

export default Header;
