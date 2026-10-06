import Link from "next/link";
import React from "react";
export interface IMostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const data = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const res = await data.json();
  const mostReadNews: IMostRead[] = res.data;
  // console.log(mostReadNews);
  return (
    <div className="border border-gray-300 p-4 sm:p-5 rounded-lg shadow-sm ">
      <h2 className="text-xl sm:text-2xl">সর্বাধিক পঠিত</h2>
      {mostReadNews.map((news, i) => (
        <div key={news.id}>
          <ul>
            <li className="m-2 flex gap-3 text-base font-bold sm:gap-4 sm:text-lg">
              <div className="text-xl text-red-600">{i + 1}</div>
              <Link href={`/news/${news.id}`} className="flex-1">
                <div className="min-w-0 hover:text-red-800 cursor-pointer transition-colors">
                  {news.title}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
