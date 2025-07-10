import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
  const articleSlug = params.slug;
  const article = DUMMY_NEWS.find((news) => news.slug === articleSlug);

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
