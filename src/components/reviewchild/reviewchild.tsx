import { CircleUser } from "lucide-react";
import { Star } from "lucide-react";
export default function reviewchild() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex gap-[20px] flex-wrap flex-row justify-start w-[333px] h-[176px] rounded-lg border-1 border-black p-5 ">
        <div className="grow">
          <div className="flex items-center gap-4">
            <CircleUser size={24} />
            <h1 className="text-sm font-medium">himawanrkh***@gmail.com</h1>
          </div>
        </div>
        <div className="w-full ">
          <h1> “This product is very safe and very effective and can provide real changes”</h1>
        </div>
        <div className="w-full self-start">
          <div className="flex items-center gap-2 justify-end">
            <Star size={24} fill="#FFD700" />
            <Star size={24} fill="#FFD700" />
            <Star size={24} fill="#FFD700" />
            <Star size={24} fill="#FFD700" />
            <Star size={24} fill="#FFD700" />
          </div>
        </div>
      </div>
    </div>
  );
}
