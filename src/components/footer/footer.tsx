import Image from "next/image";
export default function () {
  return (
    <div>
      <div className="bg-[#34333A] w-full h-55 flex justify-center rounded-t-4xl">
        <div>
          <h1 className="text-3xl font-bold text-center text-white mt-6">Semeru Scrub Asli Jawa Ekfoliasi Natural </h1>
          <h1 className="text-xl font-semibold text-center text-white ">"Kulit segar, produk anyar, harga wajar"</h1>
        </div>
        <div className="absolute left-[7%] mt-10 z-100">
          <div className="flex justify-center items-center bg-[#FFF9FA] rounded-full w-40 h-40">
            <Image src="/logo 1.png" width={160} height={160} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
