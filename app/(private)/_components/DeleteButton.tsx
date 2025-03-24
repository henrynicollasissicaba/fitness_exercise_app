"use client"

import { ReactNode } from "react";
import { Trash } from "lucide-react";

interface DeleteButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => Promise<void>
}

export default function DeleteButton({ children, className, onClick }: DeleteButtonProps){
    return(
        <button 
            onClick={onClick}
            className={`inline-flex items-center mt-5 gap-2 bg-red-200 text-red-600 px-4 py-2 rounded-md cursor-pointer
            hover:bg-red-600 hover:text-white transition-colors ${className}`}
        >
            <Trash className="size-5" />
            {children}
        </button>
    )
}