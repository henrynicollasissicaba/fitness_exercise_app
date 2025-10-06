"use client";

import { navItems } from "../data";
import { useEffect, useState } from "react";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        className="absolute w-[32rem] max-w-[90%] top-18 left-1/2 transform -translate-x-1/2 bg-stone-100 z-50 
                md:hidden rounded-md"
      >
        {isOpen && (
          <ul className="rounded p-4 flex flex-col gap-2 shadow w-full">
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between focus-within:text-secondary-300 text-shadow-primary-800
                                    hover:text-secondary-300 cursor-pointer outline-0 transition-colors font-medium"
                >
                  <a href={item.link} className="p-1 transition-colors w-full">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </>
  );
}
