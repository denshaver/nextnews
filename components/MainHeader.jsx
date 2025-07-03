import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <HeaderLink href="/news">News</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/archive">Archive</HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
