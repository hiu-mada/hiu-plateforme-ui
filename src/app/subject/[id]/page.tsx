"use client"
import { SubjectMock } from "@/components/mock/SubjectMock";
import { log } from "console";
import Link from "next/link";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const subjectId = parseInt(params.id, 10);
  const subject = SubjectMock.find(subject => subject.id === subjectId);
  const [answer, setAnswer] = useState("");

  const clearInput = () => {
    setAnswer("");
  };

  const handleAdd = () => {
    console.log("result");
    
  }
  return (
    <div>
      {subject ? (
        <div className="p-20">
          <div
            className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 "
          >
            <textarea
              id="OrderNotes"
              className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm dark:bg-gray-800 dark:text-white p-5"
              rows={25}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer..."
            ></textarea>

            <div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-gray-800">
              <button
                type="button"
                className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
                onClick={clearInput}
              >
                Clear
              </button>
              <Link
                className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                href={`/subject/`}
                onClick={handleAdd}
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Subject not found</p>
      )
      }
    </div >
  );
}
