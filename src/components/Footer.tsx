import Image from "next/image";
import Link from "next/link";
import Logo from "@/assetes/logo.webp";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-red-900/20 bg-red-950 text-red-50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={Logo}
              alt="Bangla News 24 logo"
              width={48}
              height={48}
              className="rounded-full bg-white p-1"
            />
            <span className="text-xl font-bold">Bangla News 24</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-red-100/75">
            দেশ-বিদেশের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ বিশ্লেষণ এবং নির্ভরযোগ্য
            তথ্য একসঙ্গে পৌঁছে দিতে Bangla News 24-এর এই আয়োজন।
          </p>
        </div>

        <div>
          <h2 className="border-l-2 border-red-400 pl-3 font-bold">
            গুরুত্বপূর্ণ লিংক
          </h2>
          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-red-100/75">
            <Link href="/" className="transition hover:text-white">
              হোম
            </Link>
            <Link href="/signin" className="transition hover:text-white">
              সাইন ইন
            </Link>
            <Link href="/signup" className="transition hover:text-white">
              সাইন আপ
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="border-l-2 border-red-400 pl-3 font-bold">
            আমাদের সম্পর্কে
          </h2>
          <p className="mt-4 text-sm leading-7 text-red-100/75">
            দ্রুত, সহজ এবং পাঠকবান্ধবভাবে বাংলা সংবাদ উপস্থাপন করাই আমাদের
            লক্ষ্য।
          </p>
          <a
            href="https://www.bbc.com/bengali"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-red-300 underline underline-offset-4 transition hover:text-white"
          >
            BBC বাংলা
          </a>
        </div>
      </div>

      <div className="border-t border-red-900/40 bg-red-950/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-red-100/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>সত্যনিষ্ঠ সংবাদ, প্রতিদিন।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
