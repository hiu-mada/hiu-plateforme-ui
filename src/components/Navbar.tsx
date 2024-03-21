"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Mode-toggle";
import { useState } from "react";
import { users } from "./mock/UsersMock";
import styles from "../styles/Navbar.module.css"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons"


interface linkProps {
  name: string;
  href: string;
}
interface User {
  id: number;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  university: {
    name: string;
    description: string;
  };
  subject: {
    title: string;
    description: string;
    max_score: number;
  };
  team: {
    name: string;
    slogan: string;
  };
}

interface SiteHeaderProps {
  user?: User;
}
const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "List Participant", href: "/participantlist" },
  { name: "Subject", href: "/subject" },
];

const userHasAdminRole = () => {
  return true;
};

export const NavBar = () => {
  const pathName = usePathname();
  const isAdmin = userHasAdminRole();
  const user = users[0];
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-0 flex">

      <nav className="px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link className="flex items-center" href="/home">
            <span className="self-center text-xl font-semibold whitespace-nowrap">Hack-IO</span>
          </Link>
          <div className="md:hidden lg;hidden ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MenuIcon className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup >
                  {links.map((link, idx) => (
                    <div key={idx}>
                      {pathName === link.href ? (
                        <DropdownMenuItem>
                          <Link
                            href={link.href}
                            className="underline"
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <Link className="font-normal text-sm-5 hover:bg-gray-50" href={link.href}>
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </div>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden w-full md:block md:w-auto ml-4" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathName === link.href ? (
                    <li>
                      <Link
                        href={link.href}
                        className="block underline py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0  dark:text-white"
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
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-2">
          {/* <ModeToggle className="h-5 w-5 text-gray-300 cursor-pointer" /> */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="relative size-8 rounded-full"
                >
                  <Avatar className="size-8">
                    <AvatarImage
                      src={user.profile_picture}
                      alt={user.user_name ?? ""}
                    />
                    <AvatarFallback>{user.user_name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.user_name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {
                    isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin">
                          <DashboardIcon
                            className="mr-2 size-4"
                            aria-hidden="true"
                          />
                          Dashboard
                          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    )
                  }

                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <GearIcon className="mr-2 size-4" aria-hidden="true" />
                      Profile
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/signout">
                    <ExitIcon className="mr-2 size-4" aria-hidden="true" />
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm">
              <Link href="/login">
                Sign In
                <span className="sr-only">Sign In</span>
              </Link>
            </Button>
          )}
        </nav>
      </div>

    </div>
  );
};


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
