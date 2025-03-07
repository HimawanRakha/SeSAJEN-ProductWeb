import { ShoppingCart } from "lucide-react";

export default function ChartIcon({ itemCount }: { itemCount: number }) {
  return (
    <div className="absolute top-12 right-20 z-100">
      {/* Badge jumlah item */}
      <div className="absolute -right-2 -top-2">
        <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
          <h1 className="text-lg font-bold">{itemCount}</h1>
        </div>
      </div>

      {/* Icon Keranjang */}
      <div className="w-15 h-15 rounded-full flex justify-center items-center bg-[#34333A] shadow-lg">
        <ShoppingCart size={25} color="white" strokeWidth={3} />
      </div>
    </div>
  );
}
