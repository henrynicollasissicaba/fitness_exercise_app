import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50">
      <div className="px-2 flex justify-between md:justify-around items-center py-1 relative">
        <Image
          className="size-12"
          src="/assets/logo.svg"
          alt="logo"
          width={1}
          height={1}
        />
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
