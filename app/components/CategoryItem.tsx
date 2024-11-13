"use client"

import { useExercises } from "../hooks/useExercises"

const CategoryItem = ({ id, categoryItem }: {
    id: number
    categoryItem: string
}) => {
  const { fetchExercises } = useExercises()

  return (
    <li 
    key={id} 
    className="hover:text-blue-700 transition-colors cursor-pointer"
    onClick={() => fetchExercises(categoryItem)}
    >
        <p className="flex items-center">
            <span className="font-bold text-blue-800 rounded-full bg-blue-200 p-4
            flex justify-center items-center w-6 h-6 mr-1"
            >
                {id} 
            </span>
            {categoryItem}
        </p>
    </li>
  )
}

export default CategoryItem