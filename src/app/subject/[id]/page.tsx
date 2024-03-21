"use client"
import { SubjectMock } from "@/components/mock/SubjectMock";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  response: z.string().nonempty(),
});

export default function Page({ params }: { params: { id: string } }) {
  const subjectId = parseInt(params.id, 10);
  const subject = SubjectMock.find(subject => subject.id === subjectId);

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div>
      {subject ? (
        <div>
          <div>
            <div className="mx-auto prose prose-sm p-6 grid gap-6">
              <div>
                <h1 className="text-3xl font-bold">{subject.title}</h1>
                <p className="text-lg dark:text-gray-400">{subject.description}</p>
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
   <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Your Response</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="response" className="text-right">
                      Responses
                  </Label>
                  <Textarea
                    id="response"
                    className="col-span-3"
                    {...register('response')}
                  />
                </div>
              {errors.response && <span className="text-red-500">{errors.response.message}</span>}
              </div>
              <DialogFooter>
                <Button type="submit">Submit Response</Button>
              </DialogFooter>
          </form>
      </DialogContent>
    </Dialog>
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
