import Image from "next/image";
import CategoryGroup from "@/app/components/CategoryGroup";

const CategorySection = () => {
  return (
    <section
      id="exercises"
      className="w-full max-w-6xl mx-auto p-3 relative pt-20"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-2xl md:text-4xl text-primary-700 font-bold z-10">
          Busque exercícios com base no que deseja trabalhar
        </h2>
        <p className="text-primary-950 text-base md:text-2xl text-center max-w-lg">
          Selecione um grupo muscular para a busca de exercícios
        </p>
      </div>

      <CategoryGroup />

      <Image
        src="/assets/background-img.svg"
        alt="background image"
        width={1}
        height={1}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none
        min-w-[950px] h-[750px] opacity-10 mt-24 -z-10"
      />
    </section>
  );
};

export default CategorySection;
