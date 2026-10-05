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
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-3 m-5">
        {data.title}
      </h2>
      <div className="grid grid-cols-3 gap-4 m-5">
        {categoryNews.map((news: IArticle, i: number) => (
          <NewsCard key={i} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
