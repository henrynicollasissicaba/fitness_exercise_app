"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-dvh w-full max-w-6xl mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-center sm:justify-between items-center flex-wrap p-3 gap-6 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-primary-600 font-medium">Be Fitness</h1>
          <h2 className="text-3xl text-primary-950 font-bold">
            Exercite, Sue e Repita.
          </h2>
          <p className="text-primary-950 w-72">
            Tenha acesso à diversos exercícios feitos para você!
          </p>
          <p className="font-bold text-primary-700">
            +600 exercícios disponíveis!
          </p>
          <Button
            className="w-full md:w-64 mt-4"
            onClick={() => (window.location.href = "#exercises")}
          >
            Explorar Exercícios
          </Button>
        </div>
        <Image
          src="/assets/hero-img.svg"
          width={550}
          height={550}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
