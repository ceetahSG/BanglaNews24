import Image from "next/image";

import image1 from "../assetes/image2.png";

import React from "react";

const AuritoVSNiloy = () => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <figure>
        <Image
          src={image1}
          alt="{Oritro and Niloy}"
          height={300}
          width={600}
          layout="responsive"
        />
      </figure>

      <div className="card-body">
        <p className="text-red-700 ">এক্সক্লুসিভ গ্যাঞ্জাম ও বন্ধু-কূটনীতি</p>

        <h2 className="card-title text-xl sm:text-2xl">
          বন্ধু না দালাল? নিলয়ের এক 'বিস্ফোরক' মন্তব্যেই অরিত্রর হৃদয়ে সুনামি!
        </h2>

        {/* <p>
          বন্ধু মহলের আড্ডায় হঠাৎ করেই নেমে এসেছে শোকের ছায়া ও চরম উত্তেজনা!
          দীর্ঘদিনের দুই অবিচ্ছেদ্য বন্ধু ......
        </p> */}

        <p className="text-sm text-gray-500"></p>
      </div>
    </div>
  );
};

export default AuritoVSNiloy;
