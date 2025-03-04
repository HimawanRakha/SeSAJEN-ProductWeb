import { Button } from "../ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export default function hero() {
  return (
    <div className="row overflow-hidden">
      <Image src="/bg-hero.webp" width={80} height={80} alt="" className="h-full w-full -z-0 absolute" />
      <div className="absolute pl-6 pt-2">
        <div className="row flex items-center  ">
          <Image src="/logo 1.png" width={80} height={80} alt="" />
          <h1 className="font-light text-4xl">SeSAJEN</h1>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-center w-screen">
        <Button className="mt-8 text-lg shadow-lg rounded-full p-5 px-8 font-semibold bg-[#C5BAB0] text-black">Product</Button>
        <Button className="mt-8 text-lg shadow-lg rounded-full p-5 px-8 font-semibold bg-[#34333A]">Contact</Button>
      </div>
      <div className="flex justify-center mt-12">
        <h1 className="font-bold text-4xl">SEMERU SCRUB ASLI JAWA EKSFOLIASI NATURAL</h1>
      </div>
      <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <Carousel className="flex justify-center items-center ">
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/image 1.png" width={500} height={500} alt="" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/image 1.png" width={500} height={500} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-35 bg-[#34333A] text-white" />
          <CarouselNext className="right-35 bg-[#34333A] text-white" />
        </Carousel>
      </div>
    </div>
  );
}
