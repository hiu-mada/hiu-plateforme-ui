import { SubjectMock } from "@/components/mock/SubjectMock";

export default function Page({ params }: { params: { id: string } }) {
  const subjectId = parseInt(params.id, 10);
  const subject = SubjectMock.find(subject => subject.id === subjectId);

  return (
    <div>
      {subject ? (
        <>
          <h1>{subject.title}</h1>
          <p>Description: {subject.description}</p>
          <p>Max Score: {subject.max_score}</p>
        </>
      ) : (
        <p>Subject not found</p>
      )}
    </div>
  );
}
