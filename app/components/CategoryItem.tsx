"use client";

import { useExercises } from "@/app/hooks/useExercises";

const CategoryItem = ({
  id,
  categoryItem,
}: {
  id: number;
  categoryItem: string;
}) => {
  const { fetchExercises } = useExercises();

  return (
    <li
      key={id}
      className="hover:text-primary-700 transition-colors cursor-pointer"
      onClick={() => fetchExercises(categoryItem)}
    >
      <p className="flex items-center">
        <span
          className="font-bold text-primary-950 rounded-full bg-primary-400 p-4
            flex justify-center items-center w-6 h-6 mr-1 border-2 border-primary-950"
        >
          {id}
        </span>
        {categoryItem}
      </p>
    </li>
  );
};

export default CategoryItem;
