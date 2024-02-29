import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata ={
    title : "HIU Madagascar",
    description: "Sign up for HUI Platform",
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

export default sign_up_layout;