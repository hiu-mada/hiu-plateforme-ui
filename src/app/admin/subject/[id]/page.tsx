import { SubjectMock } from "@/components/mock/SubjectMock";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const subjectId = parseInt(params.id, 10);
  const subject = SubjectMock.find(subject => subject.id === subjectId);

  return (
    <div>
      {subject ? (
        <div>
          <div>
            <div className="mx-auto prose prose-sm p-6 grid gap-6">
              <div>
                <h1 className="text-3xl font-bold">{subject.title}</h1>
                <p className="text-gray-500 dark:text-gray-400">{subject.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dl className="grid grid-cols-2 gap-1">
                    <dt>Maximum Score</dt>
                    <dd>{subject.max_score}</dd>
                  </dl>
                </div>
              </div>
              <div className="pt-4">
                <Button size="sm">
                  <Link href="#">
                    Edit
                  </Link>
                </Button>
              </div>
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
