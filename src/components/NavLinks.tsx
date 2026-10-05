import Link from "next/link";
import React from "react";
export interface Navs {
  slug: string;
  title: string;
  topicId: number | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const categories: Navs[] = data.data;
//   console.log(categories);
  const filteredCategories = categories.filter(
    (category) => category.scrapable,
  );

  return (
    <div className="flex gap-4 p-4 justify-center items-center">
      <Link href={"/"}>হোম</Link>
      {filteredCategories.map((n, i) => (
        <a key={i} href={n.slug}>
          {n.title}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
