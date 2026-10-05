import Image from "next/image";
import Link from "next/link";

type ArticleBlock =
  | {
      type: "image";
      url: string;
      width: number;
      height: number;
      caption: string | null;
      altText: string;
      copyrightHolder: string | null;
    }
  | {
      type: "text";
      text: string;
    };

interface ArticleData {
  id: string;
  title: string;
  description?: {
    blocks?: Array<{
      type: "text";
      model?: {
        blocks?: Array<{
          type: "paragraph";
          model?: { text?: string };
        }>;
      };
    }>;
  };
  firstPublished: string;
  lastPublished: string;
  byline?: Array<{ name: string; role?: string }>;
  topics?: Array<{ id: string; name: string }>;
  tags?: string[];
  imageUrl: string;
  body?: ArticleBlock[];
  link: string;
}

function getSummary(article: ArticleData) {
  return article.description?.blocks
    ?.flatMap((block) => block.model?.blocks ?? [])
    .map((block) => block.model?.text)
    .filter((text): text is string => Boolean(text))
    .join("\n");
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(dateString));
}

const NewsArticlePage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  if (!res.ok) {
    throw new Error("Article could not be loaded.");
  }

  const data: { data: ArticleData } = await res.json();
  const article = data.data;
  const summary = getSummary(article);

  return (
    <main className="w-full bg-base-200 px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-base-100 shadow-sm">
        <div className="p-4 sm:p-8 lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-red-700">
            {article.topics?.slice(0, 3).map((topic) => (
              <span key={topic.id} className="rounded-full bg-red-50 px-3 py-1">
                {topic.name}
              </span>
            ))}
          </div>

          <h1 className="break-words text-2xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 border-y border-base-300 py-4 text-sm text-base-content/65">
            {article.byline?.map((author) => (
              <p key={`${author.name}-${author.role ?? ""}`}>
                <span className="font-semibold text-base-content">
                  {author.name}
                </span>
                {author.role && ` · ${author.role}`}
              </p>
            ))}
            <p className="mt-1">
              প্রকাশিত: {formatDate(article.firstPublished)}
            </p>
            {article.lastPublished !== article.firstPublished && (
              <p>সর্বশেষ আপডেট: {formatDate(article.lastPublished)}</p>
            )}
          </div>

          <figure className="mt-8">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1200}
              height={675}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </figure>

          {summary && (
            <p className="mt-8 border-l-4 border-red-700 pl-3 text-lg font-semibold leading-relaxed text-base-content/80 sm:pl-4 sm:text-xl">
              {summary}
            </p>
          )}

          <div className="mt-8 space-y-7 text-base leading-[1.9] text-base-content/85 sm:text-lg sm:leading-[2]">
            {article.body?.map((block, index) =>
              block.type === "text" ? (
                <p key={`text-${index}`} className="whitespace-pre-line">
                  {block.text}
                </p>
              ) : (
                <figure key={`image-${index}`} className="my-8">
                  <Image
                    src={block.url}
                    alt={block.altText}
                    width={block.width}
                    height={block.height}
                    className="h-auto w-full rounded-xl"
                  />
                  {(block.caption || block.copyrightHolder) && (
                    <figcaption className="mt-2 text-sm leading-relaxed text-base-content/60">
                      {block.caption}
                      {block.copyrightHolder && ` (${block.copyrightHolder})`}
                    </figcaption>
                  )}
                </figure>
              ),
            )}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-base-300 pt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-base-200 px-3 py-1 text-sm text-base-content/70"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <Link
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-sm font-semibold text-red-700 underline underline-offset-4"
          >
            মূল প্রতিবেদন বিবিসি বাংলায় পড়ুন
          </Link>
        </div>
      </article>
    </main>
  );
};

export default NewsArticlePage;
