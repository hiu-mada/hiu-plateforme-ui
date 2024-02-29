import { Button } from "@/components/ui/button";
import SignInForm from "../pages/page";
import SignUpForm from "../pages/log_in";


export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-xs">
        <SignInForm />
        <div className="mt-4">
          <SignUpForm />
        </div>
      </div>
    </div>
      </>
  )
}