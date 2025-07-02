import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

export default function FilteredArchiveNewsPage({ params }) {
  const newsYear = params.year;
  const filteredNews = getNewsForYear(newsYear);
  return <NewsList news={filteredNews} />;
}
