import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
