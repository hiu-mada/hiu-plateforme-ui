import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata ={
    title : "Sign Up HIU Madagascar",
    description: "HUI Platform",
}

const sign_up_layout = ({
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

sign_up_layout;