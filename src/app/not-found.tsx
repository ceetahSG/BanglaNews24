import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-red-100/70" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full border-[24px] border-red-50" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-700">
              Bangla News 24
            </p>
            <p className="mt-8 text-7xl font-black leading-none text-red-700 sm:text-9xl">
              404
            </p>
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-red-700" />
            <h1 className="mt-6 text-2xl font-bold text-base-content sm:text-3xl">
              পাতাটি খুঁজে পাওয়া যায়নি
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base leading-8 text-base-content/70 sm:text-lg">
              আপনি যে সংবাদটি খুঁজছেন, সেটি সরানো হয়েছে অথবা ঠিকানাটি পরিবর্তন
              হয়ে গেছে। সর্বশেষ খবর দেখতে আমাদের হোমপেজে ফিরে যান।
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="btn border-red-700 bg-red-700 text-white hover:border-red-800 hover:bg-red-800"
              >
                হোমপেজে ফিরুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
