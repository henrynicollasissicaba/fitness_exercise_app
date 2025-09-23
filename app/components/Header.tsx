import Image from "next/image";
import { navItems } from "../data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50">
      <div className="px-2 flex justify-between md:justify-around items-center">
        <Image src="/logo.svg" alt="logo" width={55} height={55} />
        <nav className="flex items-center gap-3 text-primary-800 font-medium">
          {navItems.map(({ id, label, link }) => (
            <div key={id} className="group relative w-max text-lg">
              <Link href={link}>{label}</Link>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary-800 group-hover:w-full"></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
