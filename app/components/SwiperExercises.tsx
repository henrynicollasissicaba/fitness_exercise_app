"use client";

import { useExercises } from "../hooks/useExercises";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Link from "next/link";

const SwiperExercises = () => {
  const { exercises } = useExercises();

  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        550: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        820: {
          slidesPerView: 3,
          grid: {
            rows: 3,
            fill: "row",
          },
        },
      }}
      spaceBetween={10}
      pagination={{
        clickable: true,
        type: "fraction",
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      {exercises.map((exercise, index) => (
        <SwiperSlide key={index}>
          <div 
          className="flex flex-col gap-5 p-2 capitalize h-[33rem] 
          mt-4 border-2 border-y-blue-700 rounded
          border-x-slate-200 relative shadow-lg">
            <img
              src={exercise.gifUrl}
              alt="GIF do exercício"
              className="w-full h-[20rem] border-2 rounded border-slate-200"
            />
            <div className="flex flex-col-reverse">
              <h3 className="font-bold text-lg text-black">
                {exercise.name}
              </h3>
              <div className="flex gap-2 items-center flex-wrap pb-2">
                <p className="py-1 px-4 rounded-3xl bg-blue-700 text-white text-sm">
                  {exercise.bodyPart}
                </p>
                <p className="bg-blue-700 py-1 px-4 rounded-3xl text-white text-sm">
                  {exercise.target}
                </p>
              </div>
            </div>
            <Link 
              href={`/exercise/${exercise.id}`} 
              className="mt-auto text-center bg-blue-700 py-2 text-white rounded hover:bg-blue-500
              transition-colors"
            >
              Mais informações
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperExercises;
