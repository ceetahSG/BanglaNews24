import React from "react";
export interface IMostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const data = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const res = await data.json();
  const mostReadNews: IMostRead[] = res.data;
  console.log(mostReadNews);
  return (
    <div className="border-gray-300 border p-5">
      <h2 className="text-2xl">সর্বাধিক পঠিত</h2>
      {mostReadNews.map((news) => (
        <div key={news.id}>
          <ul>
            <li className="text-lg font-bold m-2">{news.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
