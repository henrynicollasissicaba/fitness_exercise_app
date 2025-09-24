"use client";

import React, { useState } from "react";
import { items } from "../data";
import CategoryItem from "./CategoryItem";

const CategoryGroup = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");
  const [selectedEquipment, setSelectedEquipment] = useState<string>("");

  const handleSubmit = () => {
    console.log("Muscular:", selectedMuscle);
    console.log("Equipamento:", selectedEquipment);
  };

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
          {items[0].data.map((muscle) => (
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
                onChange={() => setSelectedMuscle(muscle)}
                className="accent-primary-700"
              />
              {muscle}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2
          className="text-2xl mb-3 font-bold text-primary-700 bg-primary-100 w-fit px-4 py-2 rounded-md border-2 
        border-primary-700"
        >
          Equipamentos
        </h2>

        <div className="flex flex-wrap gap-2">
          {items[1].data.map((equipment) => (
            <label
              key={equipment}
              className={`relative flex items-center border-2 px-3 py-1.5 rounded-4xl cursor-pointer gap-1.5
                ${
                  selectedEquipment === equipment
                    ? "border-primary-700 bg-primary-100 text-primary-700"
                    : "border-gray-600"
                }`}
            >
              <input
                type="radio"
                name="equipments"
                value={equipment}
                checked={selectedEquipment === equipment}
                onChange={() => setSelectedEquipment(equipment)}
                className="accent-primary-700"
              />
              {equipment}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!(selectedMuscle && selectedEquipment)}
        className="mt-4 px-4 py-2 bg-primary-700 text-white rounded-md cursor-pointer w-40 md:w-56 ml-auto
            hover:bg-primary-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed
            disabled:pointer-events-none text-lg"
      >
        Buscar
      </button>
    </div>
  );
};

export default CategoryGroup;
