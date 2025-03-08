import { Plus } from "lucide-react";
export default function TagProductLeft({ text }: { text: string }) {
  return (
    <div className="flex">
      <div className="h-10 w-55 rounded-full bg-white  flex justify-center items-center shadow-lg">
        <h1 className="font-semibold text-xl flex justify-center items-center">{text}</h1>
      </div>
      <div className="rounded-full w-10 h-10 bg-white flex justify-center items-center shadow-lg">
        <Plus className="text-[#DAD5D6] flex justify-center items-center" />
      </div>
    </div>
  );
}
