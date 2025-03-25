import { ReactNode } from "react";

export function CheckboxContainer({ children }: { children: ReactNode }){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
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