import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
export interface IMainNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
}

export default async function Home() {
  const data = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const res = await data.json();
  const mainNews: IMainNews[] = res.data[0].articles;

  return (
    <div>
      <Marquee></Marquee>
      <div className="container mx-auto grid grid-cols-3 ">
        {/* Main News */}
        <div className="col-span-2 m-5 ">
          <MainNews mainNews={mainNews}></MainNews>
        </div>
        {/* Maximum Read news */}
        <div className="col-span-1 m-5">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
