import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

const HomeLayout = ({children} : {children:ReactNode}) => {
    return (
    <>
      <NextTopLoader color="#000" showSpinner={false}/>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}

export default HomeLayout;
