import { Plus } from "lucide-react";
export default function TagProductRight() {
  return (
    <div className="flex">
      <div className="rounded-full w-10 h-10 bg-white flex justify-center items-center shadow-lg">
        <Plus className="text-[#DAD5D6] flex justify-center items-center" />
      </div>
      <div className="h-10 w-55 rounded-full bg-white  flex justify-center items-center shadow-lg">
        <h1 className="font-semibold text-xl flex justify-center items-center">Nature Enlightens</h1>
      </div>
    </div>
  );
}
