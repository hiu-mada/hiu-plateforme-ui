
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Mode-toggle";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Voting", href: "/voting" },
  { name: "List Participant", href: "/participantlist" },
  { name: "Subject", href: "/subject" },
];

const userHasAdminRole = () => {
  return true;
};

export const NavBar = () => {
  const pathName = usePathname();
  const isAdmin = userHasAdminRole();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          {/*<Image src={Logo} alt="logo netflix" priority />*/}
          <h1 className="font-bold text-xl">Hack-IO</h1>
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden ">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="font-semibold underline text-sm-5 "
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="font-normal text-sm-5" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
          {isAdmin && (
            <div>
              <li>
                <Link className="font-normal text-sm-5" href="/admin">
                  Dashboard
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <ModeToggle className="h-5 w-5 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};
