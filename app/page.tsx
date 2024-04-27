import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Home() {
  return (
    <main className="">
      <section className="bg-hero h-screen px-4 py-6 text-white">
        <nav className="w-full flex justify-between">
          <div className="text-[25px]">SobChain</div>
          <HiOutlineMenuAlt4 size={36} color="#ffffff" />
        </nav>
        <div className="flex flex-col justify-center items-center py-12 space-y-6">
          <Image
            src="/assets/mask-group.png"
            alt="Mask Grout png"
            height={266}
            width={266}
          />
          <div className="border-text text-2xl text-center">
            Where Tears are Coins, and Your Smiles, the Reward.
          </div>
        </div>
      </section>
    </main>
  );
}
