"use client"

import { useExercises } from "../hooks/useExercises"
import SwiperExercises from "./SwiperExercises"


const SearchedExercises = () => {
  const { exercises, resultsRef } = useExercises()

  return (
    <section id="results" className="w-full max-w-6xl mx-auto p-4 mt-6" ref={resultsRef}>
        <h1 className="text-center text-3xl text-blue-700 font-bold">Resultado da busca</h1>
        {exercises.length > 0 ? <SwiperExercises /> : 
        <p className="text-center text-white bg-blue-600 w-max mx-auto py-2 px-6 rounded-xl mt-2">Nenhum exercício encontrado</p>}
    </section>
  )
}

export default SearchedExercises