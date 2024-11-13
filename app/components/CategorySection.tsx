import Image from "next/image"
import { bodyParts, equipments, muscles } from "../data"
import CategoryGroup from "./CategoryGroup"

const CategorySection = () => {
  const categories = [
    {
      title: "Parte do Corpo",
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
    <section id="exercises" className="w-full max-w-6xl mx-auto p-3 relative">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-3xl text-blue-700 font-bold z-10">
          Busque exercícios por categorias
        </h1>
        <p className="bg-blue-600 text-white py-2 px-6 rounded-xl">
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
        min-w-[950px] h-[750px] opacity-10 mt-8"
        />
    </section>
  )
}

export default CategorySection