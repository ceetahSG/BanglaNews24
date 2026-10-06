"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface Navs {
  slug: string;
  title: string;
  topicId: number | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = ({ categories }: { categories: Navs[] }) => {
  const pathname = usePathname();
  //   console.log(categories);
  const filteredCategories = categories.filter(
    (category) => category.scrapable,
  );

  return (
    <nav className="w-full overflow-x-auto border-y border-base-300 px-4 py-3">
      <div className="mx-auto flex min-w-max items-center justify-start gap-5 text-sm sm:justify-center sm:text-base">
        <Link
          href={"/"}
          className={`shrink-0 ${pathname === "/" ? "text-red-800" : "hover:text-black"}`}
        >
          হোম
        </Link>
        {filteredCategories.map((n, i) => (
          <Link
            key={i}
            href={`/category/${n.slug}`}
            className={`shrink-0 ${pathname === `/category/${n.slug}` ? "text-red-800" : "hover:text-black"}`}
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
