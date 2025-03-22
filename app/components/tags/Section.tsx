import { ReactNode } from "react"

export interface ComponentProps {
    children: ReactNode
    className?: string
}

export default function Section({ children, className }: ComponentProps){
    return(
        <section className={`max-w-6xl mx-auto ${className}`}>
            {children}
        </section>
    )
}