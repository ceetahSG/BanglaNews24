import React from "react";
import Image from "next/image";
import { IArticle } from "./NewsCard";

const MainNews = ({ mainNews }: { mainNews: IArticle[] }) => {
  const firstNews = mainNews[0];

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            height={200}
            width={400}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700 ">প্রধান খবর</p>
          <h2 className="card-title text-2xl">{firstNews.title}</h2>
          <p>
            {firstNews.description.length > 300
              ? firstNews.description.substring(0, 300) + "..."
              : firstNews.description}
          </p>
        </div>
      </div>
      <div>
        {mainNews.slice(1, 5).map((news) => (
          <div key={news.id} className="card card-border bg-base-100">
            <div className="card-body">
              <p className="text-red-700">প্রধান খবর</p>
              <h2 className="card-title">{news.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
