import Image from "next/image";
import Link from "next/link";

export default function ArrowBackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 py-1 px-4 bg-primary-700 text-white rounded w-max 
        hover:bg-primary-600 transition-colors mb-5 ml-auto"
    >
      <Image
        src="/assets/arrow-back.svg"
        alt="arrow back"
        width={4}
        height={4}
        className="w-4 h-4"
      />
      Voltar
    </Link>
  );
}
