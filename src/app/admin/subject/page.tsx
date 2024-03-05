"use client"
import InputSubject from "@/components/admin/InputSubject"
import { SubjectMock } from "@/components/mock/SubjectMock"
import Link from "next/link"

export default function Subject() {
  const data = SubjectMock;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen">
        <header className="border-b">
          <nav className="container flex items-center justify-between h-14 px-4 mx-auto sm:px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Subjects</span>
            </Link>
            <div
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-gray-800"
            >
              <InputSubject />
            </div>
          </nav>
        </header>
        <main className="flex-1 py-4">
          <div className="container mx-auto grid gap-4 px-4 sm:gap-8 sm:px-6">
            <h1 className="font-semibold text-2xl">All Subjects</h1>
            <div className="grid gap-4">
              {
                data.map(item => {
                  return (
                    <div className="flex items-center p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" key={item.id}>
                      <div className="flex-1">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          className="px-3 py-1 bg-gray-900 text-gray-50 rounded-md text-sm font-medium hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                          href={`/admin/subject/${item.id}`}
                        >
                          Show details
                        </Link>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
