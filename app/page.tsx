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
      <div className="aspect-video w-full md:h-[28.6rem] overflow-hidden bg-black/5 ">
        <Image
          src={heroImage}
          alt="hero image"
          className="top-0 w-full md:h-[48rem] h-[27rem] object-cover -z-10 absolute "
        />
        <h1 className="text-center mt-20 lg:text-[5.6rem] md:text-6xl text-4xl font-medium z-10 text-white px-4 ">
          A life less frenzied.
        </h1>
      </div>
      <About />
      <Service/>
      <CarouselSlider slider={slider}/>
    </main>
  );
}
