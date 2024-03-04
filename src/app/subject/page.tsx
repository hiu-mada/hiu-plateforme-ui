import { SubjectMock } from '@/components/mock/SubjectMock';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const data = SubjectMock;
  return (
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
                          href={`/subject/${item.id}`}
                        >
                          Show details
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>

  )
}

export default page
