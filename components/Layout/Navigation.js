import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Navigation.module.css";
import Container from "@/components/common/container";
function Navigation() {
  return (
    <Container>
      <div className={styles.nav}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo-trainet.png"
              width="212px"
              height="55px"
              alt="logo"
            />
          </a>
        </Link>
        <div className={styles.search_container}>
          <input type="text" name="search" />
          <button type="submit" className={styles.search_button}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ul>
          <li>
            <Link href="/">accueil</Link>
          </li>
          <li>
            <Link href="/formations">formations</Link>
          </li>
          <li>
            <Link href="/formateurs">formateurs</Link>
          </li>
          <li>
            <Link href="/forums">forums</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
export default Navigation;
