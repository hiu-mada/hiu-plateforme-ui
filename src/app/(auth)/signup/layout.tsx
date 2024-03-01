import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata ={
    title : "Hack-IU",
    description: "Sign up for HUI Platform",
}

const Layout = ({
    children,
}:{
    children:React.ReactNode
}) => {
    return (
        <>
        <NextTopLoader color="#000" showSpinner={false}/>
        {children}
        </>
    );
};

export default Layout;