import Image from "next/image";

export default function MenuIcon() {
  return (
    <Image
      src="/assets/menu.svg"
      alt="menu icon"
      width={1}
      height={1}
      className="size-10"
    />
  );
}
