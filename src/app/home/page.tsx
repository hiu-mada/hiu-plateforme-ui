"use client"
import Landing from '@/components/Landing';
import { Boxes } from '@/components/ui/background-boxes';
import { cn } from '@/lib/utils';

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
  </>
  );
 }

export default HomePage;
