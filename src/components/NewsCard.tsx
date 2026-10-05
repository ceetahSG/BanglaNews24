import Image from "next/image";
import React from "react";
export interface IArticle {
  category: string;
  description: string;
  firstPublished: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  isLive: boolean;
  lastPublished: string;
  link: string;
  source: string;
  title: string;
  type: string;
}

const NewsCard = ({ news }: { news: IArticle }) => {
  const date = new Date(news.firstPublished);
  const formattedDate = date.toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          height={300}
          width={600}
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <p className="text-red-700 ">{news.category}</p>
        <h2 className="card-title text-2xl">{news.title}</h2>
        {news.description && <p>{news.description.slice(0, 100)}...</p>}
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default NewsCard;
