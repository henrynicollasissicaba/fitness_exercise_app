import { ComponentProps } from "./Section";

export default function Container({ children, className }: ComponentProps){
    return(
        <div className={`border p-4 rounded-lg mx-4 ${className}`}>
            {children}
        </div>
    )
}