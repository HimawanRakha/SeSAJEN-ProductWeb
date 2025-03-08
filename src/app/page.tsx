import React from "react";
import Hero from "@/components/hero/hero";
import Plus from "@/components/plus/Plus";
import Review from "@/components/review/review";
import ReviewChild from "@/components/reviewchild/reviewchild";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="bg-[#FFF9FA] overflow-hidden">
      <Hero />
      <Plus />
      <Review />
      <ReviewChild />
      <Contact />
      <Footer />
    </div>
  );
}
