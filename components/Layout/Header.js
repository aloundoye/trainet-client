import Link from "next/link";

function Header() {
  return (
    <header>
      <nav></nav>
      <nav>
        <Link href="/">
          <img src="/images/logo-trainet.png" alt="Logo Trainet" />
        </Link>
        <ul>
          <li>
            <Link href="/">ACCUEIL</Link>
          </li>
          <li>
            <Link href="/a-propos">A PROPOS</Link>
          </li>
          <li>
            <Link href="/formations">FORMATIONS</Link>
          </li>
          <li>
            <Link href="/forums">FORUMS</Link>
          </li>
          <li>
            <Link href="/formateurs">FORMATEURS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
