import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

const Layout = ({children} : {children:ReactNode}) => {
    return (
    <>
      <NextTopLoader color="#000" showSpinner={false}/>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
