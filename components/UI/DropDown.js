import { Fragment, useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    //Composant headlessUI pour creer un menu dropdown
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div>
        <Menu.Button className="inline-flex font-normal uppercased">
          {props.name}
          <ChevronDownIcon className=" h-5 w-5 mt-2" aria-hidden="true" />
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
              {/* iteration des elements du dropdown */}
              {props.items.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <MyLink
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => {
                        setIsShown(false);
                      }}
                    >
                      {item.name}
                    </MyLink>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
}
