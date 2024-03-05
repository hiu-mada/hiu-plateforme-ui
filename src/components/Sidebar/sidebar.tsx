"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r border-gray-200 dark:border-gray-950">
      <nav className="flex-1 overflow-y-auto py-2">
        <div className="grid gap-2">
          {/* <Link
            className={`flex h-10 items-center justify-start px-4 rounded-r-xl text-sm font-medium ${pathname === "/admin" ? "bg-gray-100/50" : ""
              } transition-colors hover:bg-gray-100 dark:hover:bg-gray-800`}
            href="/admin"
          >
            <HomeIcon className="mr-4 h-4 w-4" />
            Dashboard
          </Link> */}
          <Link
            className={`flex h-10 items-center justify-start px-4 rounded-r-xl text-sm font-medium ${pathname === "/admin/subject" ? "bg-gray-100/50" : ""
              } transition-colors hover:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800`}
            href="/admin/subject"
          >
            <UserIcon className="mr-4 h-4 w-4" />
            Subject
          </Link>
          <Link
            className={`flex h-10 items-center justify-start px-4 rounded-r-xl text-sm font-medium ${pathname === "/admin/response" ? "bg-gray-100/50" : ""
              } transition-colors hover:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800`}
            href="/admin/response"
          >
            <ReplyIcon className="mr-4 h-4 w-4" />
            Response
          </Link>
          <Link
            className={`flex h-10 items-center justify-start px-4 rounded-r-xl text-sm font-medium ${pathname === "/admin/vote" ? "bg-gray-100/50" : ""
              } transition-colors hover:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800`}
            href="/admin/vote"
          >
            <VoteIcon className="mr-4 h-4 w-4" />
            Vote
          </Link>
          <Link
            className={`flex h-10 items-center justify-start px-4 rounded-r-xl text-sm font-medium ${pathname === "/" ? "bg-gray-100/50" : ""
              } transition-colors hover:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800`}
            href="#"
          >
            <LogOutIcon className="mr-4 h-4 w-4" />
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}
function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function ReplyIcon(props: any) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function VoteIcon(props: any) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}
