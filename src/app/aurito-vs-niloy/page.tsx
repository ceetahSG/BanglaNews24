// import Image from "next/image";
// import React from "react";
// // তোমার ক্রপ করা ৪টি আলাদা ছবির পাথ এখানে দাও
// import image1 from "../../assetes/image1.png";
// import image2 from "../../assetes/image2.png";
// import image3 from "../../assetes/image3.png";
// import image4 from "../../assetes/image5.png";

// const GenjamPage = () => {
//   return (
//     <div className="max-w-4xl mx-auto my-10 p-5 sm:p-8 bg-base-100 shadow-md rounded-xl">
//       {/* News Header */}
//       <div className="mb-8 border-b pb-4">
//         <p className="text-red-700 font-bold mb-2">
//           এক্সক্লুসিভ গ্যাঞ্জাম ও বন্ধু-কূটনীতি
//         </p>
//         <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 leading-snug">
//           বন্ধু না দালাল? নিলয়ের এক 'বিস্ফোরক' মন্তব্যেই অরিত্রর হৃদয়ে সুনামি!
//         </h1>
//         <p className="text-gray-500 text-sm">
//           নিজস্ব প্রতিবেদক, ঢাকা | প্রকাশিত: আজ
//         </p>
//       </div>

//       {/* News Body */}
//       <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
//         {/* Intro */}
//         <p>
//           বন্ধু মহলের আড্ডায় হঠাৎ করেই নেমে এসেছে শোকের ছায়া ও চরম উত্তেজনা!
//           দীর্ঘদিনের দুই অবিচ্ছেদ্য বন্ধু নিলয় এবং অরিত্রর মধ্যে বর্তমানে বিরাজ
//           করছে শীতল যুদ্ধ। একটি 'দালাল' অপবাদকে কেন্দ্র করে এই দুই বন্ধুর
//           সম্পর্ক এখন রীতিমতো খাদের কিনারে এসে দাঁড়িয়েছে।
//         </p>

//         {/* Image 1 */}
//         <figure className="my-6">
//           <div className="overflow-hidden rounded-lg shadow-sm">
//             <Image
//               src={image1}
//               alt="অতীতের সুদিন"
//               layout="responsive"
//               width={800}
//               height={450}
//               className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <figcaption className="text-center text-sm text-gray-500 mt-2">
//             ছবি: অতীতের সুদিন (নিলয় ও অরিত্রর হাসিখুশি মুহূর্ত)
//           </figcaption>
//         </figure>

//         {/* Section 1 */}
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             যেভাবে ঘটনার সূত্রপাত:
//           </h3>
//           <p>
//             গোপন সূত্র মারফত জানা যায়, এই ঐতিহাসিক 'গ্যাঞ্জাম'-এর সূত্রপাত হয়
//             একটি চাঞ্চল্যকর মন্তব্য থেকে। অভিযুক্ত নিলয় সম্প্রতি অরিত্রর অন্য
//             এক বন্ধুকে উদ্দেশ্য করে অত্যন্ত সুকৌশলে 'দালাল' আখ্যা দিয়েছেন। এই
//             'দালাল' উপাধিটি নিছকই আড্ডার ফান নাকি এর পেছনে কোনো গভীর ষড়যন্ত্র
//             রয়েছে, তা নিয়ে এখনো বন্ধু মহলে ধোঁয়াশা কাটেনি। তবে মন্তব্যটি
//             তৃতীয় পক্ষের মাধ্যমে বাতাসে ভাসতে ভাসতে সোজা গিয়ে পৌঁছায় অরিত্রর
//             কানে।
//           </p>
//         </div>

//         {/* Image 2 */}
//         <figure className="my-6">
//           <div className="overflow-hidden rounded-lg shadow-sm">
//             <Image
//               src={image2}
//               alt="অভিযোগ ও উস্কানি"
//               layout="responsive"
//               width={800}
//               height={450}
//               className="object-cover w-full h-auto"
//             />
//           </div>
//           <figcaption className="text-center text-sm text-gray-500 mt-2">
//             ছবি: অভিযোগ ও উস্কানি (নিলয়ের সেই চাঞ্চল্যকর মন্তব্য)
//           </figcaption>
//         </figure>

//         {/* Section 2 */}
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             অরিত্রর হৃদয়বিদারক প্রতিক্রিয়া:
//           </h3>
//           <p>
//             নিজের প্রিয় বন্ধুকে নিয়ে এমন 'মানহানিকর' মন্তব্য কিছুতেই মেনে নিতে
//             পারেননি অরিত্র। বিশ্বস্ত সূত্রে জানা গেছে, ঘটনা শোনার পর থেকেই তিনি
//             তীব্র মনঃকষ্টে ভুগছেন এবং তার অভিমান এখন আকাশ ছুঁয়েছে। অরিত্রর
//             ঘনিষ্ঠ এক সূত্র (নাম প্রকাশে অনিচ্ছুক) আমাদের জানিয়েছেন,{" "}
//             <span className="italic">
//               "অরিত্র ভাই ঘটনার পর থেকে গভীরভাবে মর্মাহত। তিনি নিলয়ের কাছ থেকে
//               এমন প্রকাশ্য আঘাত আশা করেননি। তার সেন্টিমেন্টে চরমভাবে আঘাত
//               লেগেছে।"
//             </span>
//           </p>
//         </div>

//         {/* Image 3 */}
//         <figure className="my-6">
//           <div className="overflow-hidden rounded-lg shadow-sm">
//             <Image
//               src={image3}
//               alt="অরিত্রর মন খারাপ"
//               layout="responsive"
//               width={800}
//               height={450}
//               className="object-cover w-full h-auto"
//             />
//           </div>
//           <figcaption className="text-center text-sm text-gray-500 mt-2">
//             ছবি: অরিত্রর মন খারাপ ও তীব্র অভিমান
//           </figcaption>
//         </figure>

//         {/* Section 3 */}
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             বর্তমান পরিস্থিতি ও সমাধানের চেষ্টা:
//           </h3>
//           <p>
//             বর্তমানে দুই বন্ধুর মধ্যে পরিস্থিতি থমথমে। বন্ধু মহলের অন্যান্য
//             সদস্যরাও এখন দুই ভাগে বিভক্ত হয়ে পড়ার শঙ্কায় আছেন। তবে পরিস্থিতি
//             যেন আর হাতের বাইরে না যায়, সেজন্য মিউচুয়াল বন্ধুরা মিলে একটি জরুরি
//             'চা-চক্র' বা টং-বৈঠকের ডাক দেওয়ার প্রস্তুতি নিচ্ছেন।
//           </p>
//         </div>

//         {/* Image 4 */}
//         <figure className="my-6">
//           <div className="overflow-hidden rounded-lg shadow-sm">
//             <Image
//               src={image4}
//               alt="চায়ের টংয়ে গ্যাঞ্জাম"
//               layout="responsive"
//               width={800}
//               height={450}
//               className="object-cover w-full h-auto"
//             />
//           </div>
//           <figcaption className="text-center text-sm text-gray-500 mt-2">
//             ছবি: চায়ের টংয়ে গ্যাঞ্জাম ও সালিশি বৈঠক
//           </figcaption>
//         </figure>

//         {/* Conclusion */}
//         <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-red-500 mt-8">
//           <p className="font-semibold text-gray-800">
//             এখন দেখার বিষয়, এই 'দালাল' বিতর্কের অবসান ঘটিয়ে নিলয় ও অরিত্র কি
//             আবারও বন্ধুত্বের পুরনো ট্র্যাকে ফিরে আসতে পারবেন, নাকি এই
//             গ্যাঞ্জামের জল গড়াবে আরও বহুদূর! সর্বশেষ আপডেটের জন্য আমাদের সাথেই
//             থাকুন।
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenjamPage;
