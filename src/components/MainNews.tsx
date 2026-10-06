import React from "react";
import Image from "next/image";
import { IArticle } from "./NewsCard";
import Link from "next/link";

const MainNews = ({ mainNews }: { mainNews: IArticle[] }) => {
  const firstNews = mainNews[0];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            height={300}
            width={600}
            layout="responsive"
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700 ">প্রধান খবর</p>
          <h2 className="card-title text-xl sm:text-2xl">{firstNews.title}</h2>
          <p>
            {firstNews.description.length > 300
              ? firstNews.description.substring(0, 300) + "..."
              : firstNews.description}
          </p>
        </div>
      </div>
      <div>
        {mainNews.slice(1, 5).map((news) => (
          <Link href={`/news/${news.id}`} key={news.id} className="block">
            <div
              key={news.id}
              className="card card-border bg-base-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="card-body">
                <p className="text-red-700">প্রধান খবর</p>
                <h2 className="card-title text-lg sm:text-xl">{news.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
