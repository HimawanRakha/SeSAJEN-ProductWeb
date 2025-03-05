import { Button } from "../ui/button";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image src="/bg-hero.webp" fill className="object-cover" alt="background" />

      {/* Logo and Navigation Section */}
      <div className="absolute top-0 left-0 w-full px-6 pt-2 flex items-center">
        <div className="flex items-center w-1/3">
          <Image src="/logo 1.png" width={80} height={80} alt="logo" />
          <h1 className="font-light text-4xl">SeSAJEN</h1>
        </div>

        <div className="flex gap-8 justify-center w-1/3">
          <Button className="text-lg shadow-lg rounded-full p-5 px-8 font-semibold bg-[#C5BAB0] text-black hover:text-white">Product</Button>
          <Button className="text-lg shadow-lg rounded-full p-5 px-8 font-semibold bg-[#34333A]">Contact</Button>
        </div>

        <div className="w-1/3"></div>
      </div>

      {/* Product Info */}
      <div className="absolute top-[30%] left-[4%]">
        <h1 className="font-extrabold text-5xl">SeSAJEN : </h1>
        <h1 className="font-extrabold text-3xl">BodyScrub Natural Exfolian</h1>
        <p className="mt-3 text-lg">250 ml</p>
        <h1 className="font-extrabold text-6xl mt-4">Rp.22.000</h1>
      </div>

      {/* Product Carousel */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Carousel className="w-[500px]">
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/image 1.png" width={500} height={500} alt="product" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/image 1.png" width={500} height={500} alt="product" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-[#34333A] text-white" />
          <CarouselNext className="right-2 bg-[#34333A] text-white" />
        </Carousel>
      </div>

      {/* Product Title */}
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 whitespace-nowrap ">
        <h1 className="font-bold text-4xl text-center whitespace-nowrap">SEMERU SCRUB ASLI JAWA EKSFOLIASI NATURAL</h1>
      </div>

      {/* Buy Now Button */}
      <div className="absolute bottom-[5%] right-[5%]">
        <Button className="text-3xl shadow-lg rounded-2xl p-10 font-semibold bg-[#34333A]">
          <div className="pr-2">
            <ShoppingBag size={156} style={{ width: "42px", height: "42px" }} />
          </div>
          Buy Now
        </Button>
      </div>

      {/* Ingredients */}
      <div className="absolute bottom-[10%] left-[7%]">
        <h1 className="font-extrabold text-2xl">Ingredients : </h1>
        <p className="text-lg">Vulcanic Sand, Honey, Coconut Oil, Essenstial Oil</p>
      </div>
    </div>
  );
}
