import Link from "next/link";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const articleSlug = params.slug;
  const article = await getNewsItem(articleSlug);

  if (!article) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${article.slug}/image`}>
          <img src={`/images/news/${article.image}`} alt={article.title} />
        </Link>
        <h2>{article.title}</h2>
        <time datetime={article.date}>{article.date}</time>
      </header>
      <p>{article.content}</p>
    </article>
  );
}
