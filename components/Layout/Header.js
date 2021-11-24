import Link from "next/link";
import Image from "next/image";
import Container from "../UI/Container";
import DropDown from "../UI/DropDown";

function Header() {
  // Formateurs DropDown items
  const formateursItems = [
    {
      key: 1,
      name: "Organismes de formations",
      href: "/formateurs/organismes-formations",
    },
    {
      key: 2,
      name: "Formateurs independants",
      href: "/formateurs/formateurs-independants",
    },
  ];

  return (
    <header>
      {/* Second nav */}
      <nav className="bg-red-500 text-white">
        <Container>
          <h1>Second nav</h1>
        </Container>
      </nav>

      {/* First Nav */}
      <nav>
        <Container>
          <div className="flex my-5 justify-between">
            <Link href="/" className="order-first" passHref>
              <Image
                src="/images/logo-trainet.png"
                alt="Logo Trainet"
                width={193}
                height={50}
              />
            </Link>
            <ul className="flex self-center text-gray-600 text-lg">
              <li className="mr-10">
                <Link href="/">ACCUEIL</Link>
              </li>
              <li className="mr-10">
                <Link href="/a-propos">A PROPOS</Link>
              </li>
              <li className="mr-10">
                <Link href="/formations">FORMATIONS</Link>
              </li>
              <li className="mr-10">
                <Link href="/forums">FORUMS</Link>
              </li>
              <li className="mr-10">
                <DropDown
                  items={formateursItems}
                  name="FORMATEURS"
                  href="/formateurs"
                />
              </li>
              <li className="mr-10">
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
