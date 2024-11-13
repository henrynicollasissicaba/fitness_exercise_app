"use client";

import Image from "next/image";
import HeroImg from "/public/hero-img.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col min-h-dvh w-full max-w-6xl mx-auto"
    >
      <div className="flex justify-center sm:justify-between items-center flex-wrap p-3 mt-10 lg:mt-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-blue-500 font-medium">Be Fitness</h1>
          <h3 className="text-3xl text-blue-950 font-bold">
            Exercite, Sue e Repita.
          </h3>
          <p className="text-blue-950 w-72">
            Tenha acesso à diversos exercícios feitos para você!
          </p>
          <p className="font-bold text-blue-500">
            +1300 exercícios disponíveis!
          </p>
          <Button
            className="w-full md:w-64 mt-4"
            onClick={() => (window.location.href = "#exercises")}
          >
            Explorar Exercícios
          </Button>
        </div>
        <Image src={HeroImg} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
