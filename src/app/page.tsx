import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>  
    <h2 className="justify-center items-center m-auto">Welcome to Hackaton Inter-University of Madagascar</h2>
    <Link href="/signup"><Button>Click Here</Button></Link>
    </>
  )
}