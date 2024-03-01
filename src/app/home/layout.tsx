import { ReactNode } from "react";

const HomeLayout = ({children} : {children:ReactNode}) => {
    return (
    <>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}

export default HomeLayout;
