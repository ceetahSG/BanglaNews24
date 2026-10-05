import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
export interface News {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");
  const data = await res.json();
  const news: News[] = data.data;
  return (
    <div className="bg-red-700 text-white">
      <div className="flex items-center container mx-auto">
        <div className="bg-red-600 p-2 px-4">
          <h2>সর্বশেষ</h2>
        </div>
        <MarqueeText
          direction="right"
          duration={12}
          className="bg-red-700 text-white p-2"
        >
          {news.map((n) => (
            <span key={n.id}>
              {" "}
              <span>{n.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
