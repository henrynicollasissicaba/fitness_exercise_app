"use client";

import React, { useState } from "react";
import { muscles } from "../data";
import { useExercises } from "../hooks/useExercises";
import Button from "./buttons/Button";

const CategoryGroup = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");
  const { fetchExercises } = useExercises();

  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="mb-6">
        <h2
          className="text-2xl mb-3 font-bold text-primary-700 bg-primary-100 w-fit px-4 py-2 rounded-md border-2 
        border-primary-700"
        >
          Grupos Musculares
        </h2>

        <div className="flex flex-wrap gap-2">
          {muscles.map((muscle) => (
            <label
              key={muscle}
              className={`relative flex items-center border-2 px-3 py-1.5 rounded-4xl cursor-pointer gap-1.5
                ${
                  selectedMuscle === muscle
                    ? "border-primary-700 bg-primary-100 text-primary-700"
                    : "border-gray-600"
                }`}
            >
              <input
                type="radio"
                name="muscles"
                value={muscle}
                checked={selectedMuscle === muscle}
                onChange={(e) => setSelectedMuscle(e.target.value)}
                className="accent-primary-700"
              />
              {muscle}
            </label>
          ))}
        </div>
      </div>

      <Button
        onClick={() => fetchExercises(selectedMuscle)}
        disabled={!selectedMuscle}
        className="mt-4 w-40 md:w-56 ml-auto text-lg"
      >
        Buscar
      </Button>
    </div>
  );
};

export default CategoryGroup;
