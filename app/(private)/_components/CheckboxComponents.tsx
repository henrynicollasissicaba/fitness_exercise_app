import { ReactNode } from "react";

export function CheckboxContainer({ children }: { children: ReactNode }){
    return(
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

export function CheckboxWrapper({ children }: { children: ReactNode }){
    return(
        <div className="flex items-center gap-2">
            {children}
        </div>
    )
}