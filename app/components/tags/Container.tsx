import { ComponentProps } from "./Section";

export default function Container({ children, className }: ComponentProps){
    return(
        <div className={`mx-4 pb-10 ${className}`}>
            {children}
        </div>
    )
}