import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard, { IArticle } from "@/components/NewsCard";
import Link from "next/link";
interface IOtherSection {
  curationId: string;
  title: string;
  articles: IArticle[];
}

export default async function Home() {
  const data = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    cache: "no-store",
  });
  const res = await data.json();
  const sections = res.data;
  const mainNews = sections[0].articles;
  // console.log(mainNews);

  const otherSections: IOtherSection[] = sections.slice(1);
  // console.log(otherSections[0].articles[0].title);

  return (
    <div className="w-full">
      <div className="mx-auto grid w-full m-5 max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {/* Main News */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews mainNews={mainNews}></MainNews>
          {otherSections.map((section) => (
            <div key={section.curationId} className="mt-8">
              <h1 className="text-xl font-bold border-b-2 border-red-700 pb-3">
                {section.title}
              </h1>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {section.articles.map((article) => (
                  <NewsCard key={article.id} news={article}></NewsCard>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Maximum Read news */}
        <div className="min-w-0 lg:col-span-1 ">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
