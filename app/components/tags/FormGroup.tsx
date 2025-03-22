import { ComponentProps } from "./Section";

export default function FormGroup({ children, className }: ComponentProps){
    return(
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    )
}