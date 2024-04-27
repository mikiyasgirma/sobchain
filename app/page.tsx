import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import FlashCard from "./components/FlashCard";

export default function Home() {
  return (
    <main className="">
      <section className="bg-hero h-screen px-4 py-6 text-white">
        <nav className="w-full flex justify-between">
          <div className="text-[25px]">SobChain</div>
          <HiOutlineMenuAlt4 size={36} color="#ffffff" />
        </nav>
        <div className="flex flex-col justify-center items-center py-10 space-y-6">
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
        <div className="py-10">
          <Marquee speed={35}>
            <FlashCard />
          </Marquee>
        </div>
        <div className="py-10 space-y-6">
          <div className="border-text text-3xl text-center">
            Welcome to Sobchain!
          </div>
          <div className="text-center">
            Where else can tears turn into treasure and smiles into rewards?
            Only here at Sobchain! We’re not just a meme coin; we're a movement.
            We blend humor, blockchain technology, and a sprinkle of tears to
            create the most joyously innovative currency in the digital realm.
          </div>
        </div>
      </section>
    </main>
  );
}
