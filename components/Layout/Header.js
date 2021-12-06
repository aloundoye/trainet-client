import Link from "next/link";
import Image from "next/image";
import Container from "../UI/Container";
import DropDown from "../UI/DropDown";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

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
          <ul className="flex gap-5">
            <li>
              <a href="tel:+221338242538" className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-white" />
                +221 33 824 25 38
              </a>
            </li>
            <li>
              <a href="mailto:info@trainet.net" className="flex items-center">
                <MailIcon className="h-5 w-5 text-white" />
                info@trainet.net
              </a>
            </li>
          </ul>
        </Container>
      </nav>

      {/* First Nav */}
      <nav>
        <Container>
          <div className="flex my-5 justify-between items-center	">
            <Link href="/" className="order-first" passHref>
              <Image
                src="/images/logo-trainet.png"
                alt="Logo Trainet"
                width={193}
                height={50}
              />
            </Link>
            <ul className="flex text-gray-600 text-lg font-normal uppercase">
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
