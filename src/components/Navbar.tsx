import React from "react";
import NavLinks, { Navs } from "./NavLinks";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    cache: "no-store",
  });
  const data = await res.json();
  const categories: Navs[] = data.data;
  return (
    <div>
      <NavLinks categories={categories} />
    </div>
  );
};

export default Navbar;
