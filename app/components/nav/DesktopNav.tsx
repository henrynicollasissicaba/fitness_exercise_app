import { navItems } from "@/app/data/index";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex md:gap-4">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={`text-primary-800 hover:text-secondary-300 font-medium transition-colors`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
