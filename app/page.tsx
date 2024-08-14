import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "/public/home/heroImage.png";
import About from "@/components/home/about/about";
import Service from "@/components/home/service/service";
import CarouselSlider from "@/components/carouselSlider";
import { slider } from "@/constants/sliderData";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-white/60 from-10% via-black/5 to-70% to-black/5 w-full lg:h-[50rem] h-full bg-cover bg-center absolute top-0 flex flex-col items-center justify-center">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-20"
        />
      </div>
        <h1 className="text-center mt-20 lg:text-[5.6rem] md:text-6xl text-4xl font-medium z-10 text-white px-4 mb-[25rem]">
          A life less frenzied.
        </h1>
      <About />
      <Service/>
      <CarouselSlider slider={slider}/>
    </main>
  );
}
