"use client"
import Landing from '@/components/Landing';
import ListComponent from '@/components/ListComponent';
import { Boxes } from '@/components/ui/background-boxes';
import { cn } from '@/lib/utils';
import { university } from '@/lib/listUniversity';
import { partner } from '@/lib/ListPartner';
const HomePage = () => {
  return (
  <>
  <section>
    <div className="h-100 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
     <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

     <Boxes/>
      <div className={cn("md:text-4xl text-xl text-white relative z-20")}>
      <Landing/>
      </div>
    </div>
  </section>
  <section className="mt-5">
    <ListComponent list = {university} name={{name : "university"}}/>
    <ListComponent list = {partner} name={{name : "Partner"}}/>
  </section>
  </>
  );
 }

export default HomePage;
