import Image from "next/image"
import { bodyParts, equipments, muscles } from "../data"
import CategoryGroup from "./CategoryGroup"

const CategorySection = () => {
  const categories = [
    {
      title: "Partes do Corpo",
      items: bodyParts
    },
    {
      title: "Equipamentos",
      items: equipments
    },
    {
      title: "Músculos",
      items: muscles
    }
  ]

  return (
    <section id="exercises" className="w-full max-w-6xl mx-auto p-3 relative pt-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-3xl text-primary-700 font-bold z-10">
          Busque exercícios por categorias
        </h1>
        <p className="text-primary-950 text-lg text-center max-w-lg">
          Clique em um item de uma determinada categoria para realizar a busca de exercícios
        </p>
      </div>

      <div className="flex justify-between mt-10 z-20 flex-wrap gap-10">
        {categories.map(({ title, items }, index) => (
          <CategoryGroup key={index} heading={title} headingNumber={index + 1} items={items}/>
        ))}
      </div>
      <Image
        src="/background-img.svg" 
        alt="background image"
        width={1}
        height={1}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none
        min-w-[950px] h-[750px] opacity-10 mt-24"
        />
    </section>
  )
}

export default CategorySection