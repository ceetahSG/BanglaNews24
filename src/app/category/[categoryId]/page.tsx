import NewsCard, { IArticle } from "@/components/NewsCard";
import React from "react";

const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  console.log(categoryId);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews = data.data;
  console.log(categoryNews);
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="border-b-2 border-red-700 pb-3 text-xl font-bold sm:text-2xl">
        {data.title}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categoryNews.map((news: IArticle, i: number) => (
          <NewsCard key={i} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
