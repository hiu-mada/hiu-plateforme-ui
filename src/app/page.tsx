import { ModeToggle } from "@/components/Mode-toggle";
import HomePage from "./home/page";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/home");
}
