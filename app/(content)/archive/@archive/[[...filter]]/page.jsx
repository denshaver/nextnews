import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error(`Invalid year: ${year}`);
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredArchiveNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  return (
    <>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
