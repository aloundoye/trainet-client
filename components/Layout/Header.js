import Link from "next/link";
import Image from "next/image";
import Container from "../UI/Container";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [isShown, setIsShown] = useState(false);

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
                <Link href="/formateurs">FORMATEURS</Link>
              </li>
              <li className="mr-10">
                <Link href="/blog">BLOG</Link>
              </li>
              <li className="mr-10">
                <Link href="/contact">CONTACT</Link>
              </li>
              <li>
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div>
                    <Menu.Button className="inline-flex">
                      OPTIONS
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5 mt-2"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  {isShown && (
                    <Transition
                      show={isShown}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Edit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Duplicate
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Archive
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Move
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Add to favorites
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Delete
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  )}
                </Menu>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
