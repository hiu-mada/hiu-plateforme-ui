"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Mode-toggle";
import { useState } from "react";
import { users } from "./mock/UsersMock";
import styles from "../styles/Navbar.module.css"
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
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const pathName = usePathname();
  const isAdmin = userHasAdminRole();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-0 flex">
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
        {users.map((user, index) => (
          <li key={index} className={styles.list}>
            <Link href="/profile">
              <div className={styles.profileImage}>
                {profileImage ? (
                  <Image src={profileImage} alt="" width={100} height={100} />
                ) : (
                  <Image src={user.profile_picture} alt="" width={100} height={100} />
                )}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
