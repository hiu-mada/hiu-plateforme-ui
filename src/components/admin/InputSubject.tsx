"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Textarea } from "../ui/textarea"

const schema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  maxscore: z.number().int(),
});

const InputSubject = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">New Subject</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Subject</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                {...register('name')}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                {...register('description')}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="maxscore" className="text-right">
                Max Score
              </Label>
              <Input
                id="maxscore"
                className="col-span-3"
                type="number"
                {...register('maxscore')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Subject</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default InputSubject;
