"use client";
import { Input } from "../ui/input";
import PhoneInput from "./phonenumberimput";
import { FormEvent } from "react";
import { Button } from "../ui/button";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center mb-8">
      <div className="flex justify-center items-center border w-[70%] shadow-lg rounded-2xl p-[2px] bg-gradient-to-r from-[#C5BAB0] to-[#34333A]">
        <div className="container p-8 bg-white rounded-2xl">
          <div className="mb-8 r">
            <h1 className="text-5xl font-bold">Contact Our Team</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-full">
                <label htmlFor="fname" className="block mb-2">
                  First Name <span className="text-red-700">*</span>
                </label>
                <Input type="text" id="fname" name="fname" placeholder="First name" className="w-full h-[60px] rounded-2xl shadow-inner p-4 bg-white focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="w-full">
                <label htmlFor="lname" className="block mb-2">
                  Last Name <span className="text-red-700">*</span>
                </label>
                <Input type="text" id="lname" name="lname" placeholder="Last name" className="w-full h-[60px] rounded-2xl shadow-inner p-4 bg-white focus:ring-2 focus:ring-blue-500" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email <span className="text-red-700">*</span>
              </label>
              <Input type="email" id="email" name="email" placeholder="Email" className="w-full h-[60px] rounded-2xl shadow-inner p-4 bg-white focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-6">
              <PhoneInput />
            </div>
            <div className="w-full mb-6">
              <label htmlFor="message" className="block mb-2">
                Message <span className="text-red-700">*</span>
              </label>
              <Input type="text" id="message" name="message" placeholder="Your message" className="w-full h-[100px] rounded-2xl shadow-inner p-4 bg-white focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="text-center mt-4">
              <Button type="submit" className="bg-gradient-to-r from-[#C5BAB0] to-[#34333A] text-white text-xl font-bold py-6 px-9 rounded-full shadow-lg hover:scale-105 transition-transform">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
