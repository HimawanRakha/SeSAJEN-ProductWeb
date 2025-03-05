import { CircleUser } from "lucide-react";
import { Star } from "lucide-react";
export default function review() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-30 pb-32">
      <div className="relative max-w-4xl w-full">
        <h1 className="text-6xl font-extrabold text-center">"SUPER SUPER BIG INNOVATION AND AWESOME PRODUCT"</h1>

        <div className="absolute -bottom-14 w-full flex justify-between items-center mt-16">
          <div className="flex items-center gap-4">
            <CircleUser size={32} />
            <h1 className="text-xl font-medium">himawanrkh***@gmail.com</h1>
          </div>

          <div className="flex items-center gap-2">
            <Star size={32} fill="#FFD700" />
            <Star size={32} fill="#FFD700" />
            <Star size={32} fill="#FFD700" />
            <Star size={32} fill="#FFD700" />
            <Star size={32} fill="#FFD700" />
          </div>
        </div>
      </div>
    </div>
  );
}
