import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { CiLocationArrow1 } from "react-icons/ci";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white "
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue " />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20  z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="rounded-full group px-4 py-[6px] text-sm font-[500] flex justify-center relative bg-black items-center cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-pink-500 to-violet-500 rounded-full blur opacity-75 -z-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <span className="text-sm">🎉</span>
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-px mx-2 h-4"
            />
            <span className="flex justify-center items-center gap-2 font-[400] tracking-wide text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-yellow-500 to-pink-500">
              Introducing Portfolio
              <span className="rotate-[42deg] group-hover:rotate-0 transition-all ">
                <CiLocationArrow1 className="rotate-10 group-hover:rotate-0 font-black text-md text-neutral-500" />
              </span>
            </span>
          </div>
          <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80 text-xs mt-20">
            Dynamic Web Magic with Next.JS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl "
            words="Transforming Concepts into seamless User Experiences."
          />
          <p className="text-center mb-4 tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Aman Kushwaha, a Next.js developer based in India
          </p>
          <Link href={"#work"}>
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
