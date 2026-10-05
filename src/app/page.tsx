import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard, { IArticle } from "@/components/NewsCard";
interface IOtherSection {
  curationId: string;
  title: string;
  articles: IArticle[];
}

export default async function Home() {
  const data = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const res = await data.json();
  const sections = res.data;
  const mainNews = sections[0].articles;
  // console.log(mainNews);

  const otherSections: IOtherSection[] = sections.slice(1);
  // console.log(otherSections[0].articles[0].title);

  return (
    <div>
      <Marquee></Marquee>
      <div className="container mx-auto grid grid-cols-3 ">
        {/* Main News */}
        <div className="col-span-2 m-5 ">
          <MainNews mainNews={mainNews}></MainNews>
          {otherSections.map((section) => (
            <div key={section.curationId} className="m-5  ">
              <h1 className="text-xl font-bold border-b-2 border-red-700 pb-3">
                {section.title}
              </h1>
              <div className="grid grid-cols-3 gap-4 mt-5">
                {section.articles.map((article) => (
                  <NewsCard key={article.id} news={article}></NewsCard>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Maximum Read news */}
        <div className="col-span-1 m-5">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
