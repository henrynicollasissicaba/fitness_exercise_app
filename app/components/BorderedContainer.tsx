import React from "react";
import { twMerge } from "tailwind-merge";

export default function BorderedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "border-2 border-primary-950 p-2 rounded shadow-sm bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
