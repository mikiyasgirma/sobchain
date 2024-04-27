import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import FlashCard from "./components/FlashCard";

export default function Home() {
  return (
    <main className="bg-[#131732] ">
      <section className="bg-hero px-4 py-6 text-white">
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
            Only here at Sobchain! We&apos;re not just a meme coin; we&apos;re a
            movement. We blend humor, blockchain technology, and a sprinkle of
            tears to create the most joyously innovative currency in the digital
            realm.
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="border-gradient mb-6"></div>
        <Image
          src="/assets/image-1.jpg"
          alt="Image One"
          height={360}
          width={430}
        />
        <div className="font-bold text-2xl text-white px-4 py-6">
          Who Are We?
        </div>
        <div className="text-white px-4">
          We are a community of meme lovers, tech geeks, and blockchain
          enthusiasts who believe that every sob has a silver lining. Born from
          the viral waves of the internet&apos;s funniest corners, Sobchain aims
          to bring a little light-heartedness to the sometimes-serious world of
          crypto.
        </div>
      </section>
      <section className=" py-6">
        <div className="flex justify-end">
          <div className="border-gradient-right mb-6"></div>
        </div>
        <Image
          src="/assets/image-2.jpg"
          alt="Image One"
          height={360}
          width={430}
        />
        <div className="font-bold text-2xl text-white px-4 py-6">
          What Do We Do?
        </div>
        <div className="text-white px-4">
          With Sobchain, every transaction is a reason to smile. Our platform
          allows you to earn coins by sharing memes. The sadder the meme, the
          bigger the sob value. But here’s the twist—rewards are earned from the
          smiles you spread! The more your memes make others laugh, the more
          rewards you reap.
        </div>
      </section>
      <section className="bg-pattern h-screen flex flex-col items-center justify-center space-y-6">
        <div className="font-bold text-3xl text-white text-center">
          Our Philosophy: "Cry, Laugh, Earn"
        </div>
        <div>
          <Image
            src="/assets/image-3.jpg"
            alt="Image thre"
            width={381}
            height={463}
          />
          <div className="bg-[#041061] text-[18px] text-white w-[381px] h-[144px] text-center flex flex-col items-center justify-center">
            <div className="">1. Cry 😭</div>
            <div className="font-bold text-[18px]">
              Share your tear-jerking memes or those moments of laughable
              despair.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
