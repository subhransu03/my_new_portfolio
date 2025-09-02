"use client";

import memojimage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  const email = "subh03ransu@gmail.com";

  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Background and Hero Orbits */}
      <div className="absolute inset-0 [mask-image: linear-gradient(to_bottom,black_70%,transparent_30%">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Hero Orbits */}
        <HeroOrbit
          size={620}
          rotation={-14}
          shouldOrbit
          orbitDuration="15s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="size-8 text-emerald-300/30" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={0}
          shouldOrbit
          orbitDuration="17s"
          shouldSpin
          spinDuration="10s"
        >
          <div className="size-8 rounded-lg text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-14}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="10s"
        >
          <div className="size-8 rounded-full text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-34}
          shouldOrbit
          orbitDuration="22s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="24s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="25s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={45}
          shouldOrbit
          orbitDuration="26s"
          shouldSpin
          spinDuration="12s"
        >
          <StarIcon className="size-10 text-emerald-300/50" /> {/* Faded star */}
        </HeroOrbit>

        <HeroOrbit
          size={700}
          rotation={-60}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="14s"
        >
          <StarIcon className="size-16 text-emerald-300" /> {/* Normal star */}
        </HeroOrbit>

        <HeroOrbit
          size={750}
          rotation={30}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="16s"
        >
          <StarIcon className="size-12 text-emerald-300/40" /> {/* Faded star */}
        </HeroOrbit>

        {/* Additional Stars */}
        <HeroOrbit
          size={800}
          rotation={-90}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="18s"
        >
          <StarIcon className="size-14 text-emerald-300/60" /> {/* Faded star */}
        </HeroOrbit>

        <HeroOrbit
          size={600}
          rotation={75}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="12s"
        >
          <StarIcon className="size-10 text-emerald-300" /> {/* Normal star */}
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={-45}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="14s"
        >
          <StarIcon className="size-12 text-emerald-300/40" /> {/* Faded star */}
        </HeroOrbit>
      </div>

      {/* Content Section */}
      <div className="container relative z-20">
        <div className="flex flex-col items-center">
          <Image src={memojimage} className="size-[100px]" alt="Memoji" />
          <div className="bg-gray-950 border border-gray-800 inline-flex items-center gap-4 rounded-lg px-4 py-2">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for work</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Hii I am Subhransu
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              A passionate software developer.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 items-center">
            {/* Explore My Projects */}
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 h-12 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span className="font-semibold">Explore my projects</span>
              <ArrowDown className="size-4" />
            </button>

            {/* Download My Resume */}
            <button
              onClick={() => window.open('/Subhransu_Software_Developer_Resume.pdf')}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 h-12 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span className="font-semibold">Download my resume</span>
              <ArrowDown className="size-4" />
            </button>

            {/* Let's Connect */}
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>🫱🏻‍🫲🏻</span>
              <span className="font-semibold">Let&apos;s connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;