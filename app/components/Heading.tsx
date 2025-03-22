import { ReactNode } from "react";

export default function Heading({ children, className }: { children: ReactNode, className?: string }){
    return(
        <h1 className={`text-2xl md:text-3xl font-bold text-center ${className}`}>
            {children}
        </h1>
    )
}