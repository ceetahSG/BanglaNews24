import React from "react";
import Image from "next/image";
import Logo from "@/assetes/logo.webp";
import NavLinks, { Navs } from "./NavLinks";
import Userinfo from "./Userinfo";

const Header = async () => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    cache: "no-store",
  });

  const data = await res.json();

  const categories: Navs[] = data.data;

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Image src={Logo} alt="Logo" width={50} height={50} />

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-red-700 sm:text-xl">
              Bangla News 24
            </h1>

            <p className="text-sm sm:text-base">{formattedDate}</p>
          </div>
        </div>

        <Userinfo />
      </div>

      <div>
        <NavLinks categories={categories} />
      </div>
    </div>
  );
};

export default Header;
