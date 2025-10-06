import Image from "next/image";
import { ReactNode } from "react";

interface ExerciseInformationProps {
  children: ReactNode;
  imgUrl: string;
  label: string;
  classNameImage?: string;
  className?: string;
}

export default function ExerciseInformation({
  children,
  imgUrl,
  label,
  classNameImage,
  className,
}: ExerciseInformationProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={imgUrl}
        alt={`${label.toLowerCase()} icon`}
        width={10}
        height={10}
        className={classNameImage}
      />
      <p className={className}>
        {label}: <span className="font-bold">{children}</span>
      </p>
    </div>
  );
}
