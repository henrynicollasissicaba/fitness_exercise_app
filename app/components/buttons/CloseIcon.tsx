import Image from "next/image";

export default function CloseIcon() {
  return (
    <Image
      src="/assets/close.svg"
      alt="menu icon"
      width={1}
      height={1}
      className="size-8"
    />
  );
}
