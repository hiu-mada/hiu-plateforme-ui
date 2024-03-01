"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-card"

interface ListProps {
  name : string,
  url: string,
}
interface NameProps {
  name: string,
}
const ListComponent = ({list, name} : {list : ListProps[], name : NameProps}) => {
  return (
       <div className="my-5 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <div className="flex justify-center items-center sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold">
      <h1 className="text-blue-500">{name.name}</h1>
    </div>
      <InfiniteMovingCards
        items={list}
        direction="right"
        speed="fast"
      />
      </div>
    )
}

export default ListComponent
