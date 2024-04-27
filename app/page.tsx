import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import FlashCard from "./components/FlashCard";
import SimpleSlider from "./components/Swiper";

export default function Home() {
  return (
    <main className="bg-[#131732] text-white">
      <section className="bg-hero px-4 py-6 ">
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
      <section className="bg-pattern flex flex-col items-center h-screen justify-end space-y-6 py-12">
        <div className="font-bold text-3xl text-white text-center">
          Our Philosophy: &quot;Cry, Laugh, Earn&quot;
        </div>
        <div>
          <Image
            src="/assets/image-3.jpg"
            alt="Image thre"
            width={381}
            height={463}
          />
          <div className="bg-[#041061] rounded-b-3xl text-[18px] text-white w-[381px] h-[144px] text-center flex flex-col items-center justify-center">
            <div className="">1. Cry 😭</div>
            <div className="font-bold text-[18px]">
              Share your tear-jerking memes or those moments of laughable
              despair.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center  justify-end space-y-6 py-12">
        <div>
          <Image
            src="/assets/image-4.png"
            alt="Image four"
            width={381}
            height={463}
          />
          <div className="bg-[#041061] rounded-b-3xl text-[18px] text-white w-[381px] h-[144px] text-center flex flex-col items-center justify-center">
            <div className="">2. Lough 😂</div>
            <div className="font-bold text-[18px]">
              Engage with a community that loves to laugh as much as you do.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center  justify-end space-y-6 py-12">
        <div>
          <Image
            src="/assets/image-5.jpg"
            alt="Image five"
            width={381}
            height={463}
          />
          <div className="bg-[#041061] rounded-b-3xl text-[18px] text-white w-[381px] h-[144px] text-center flex flex-col items-center justify-center">
            <div className="">3. Earn 💵</div>
            <div className="font-bold text-[18px]">
              Collect Sobcoins as you post and interact. The funnier you are,
              the richer you become!
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 flex flex-col items-center justify-center space-y-4 py-12">
        <div className="text-white text-3xl">Buy Tokens</div>
        <button className="w-[382px] text-[18px] font-medium rounded-[30px] h-[69px] border-4 border-[#CD007A] bg-slate-400 ">
          1478 9632 8521 7856
        </button>
      </section>
      <section className="px-4 py-12">
        <div className="bg-[#041061] rounded-[30px] text-white w-[390px] h-[397px] flex flex-col items-center justify-center space-y-4 px-4">
          <Image src="/assets/20.png" alt="icon" height={89} width={89} />
          <div className="font-medium text-2xl">
            Chill With Locked Liquidity
          </div>
          <div className="font-medium text-[18px] text-center">
            Relax, we&apos;ve locked the liquidity! This means you can trade
            memes in total chill mode, knowing everything&apos;s secure. Just
            lean back, share laughs, and let the good times roll.
          </div>
        </div>
      </section>
      <section className="px-4 ">
        <div className="bg-[#041061] rounded-[30px] text-white w-[390px] h-[397px] flex flex-col items-center justify-center space-y-4 px-4">
          <Image src="/assets/21.png" alt="icon" height={89} width={89} />
          <div className="font-medium text-2xl">Tax? What Tax?</div>
          <div className="font-medium text-[18px] text-center">
            Enjoy a completely tax-free experience on Sobchain! No hidden fees,
            no surprises—just you, your memes, and uninterrupted fun. Share,
            laugh, and connect without a worry.
          </div>
        </div>
      </section>
      <section className="px-4 py-12 text-white space-y-6">
        <div className="font-bold text-3xl text-center">FAQ</div>
        <div className="text-[18px] font-semibold">
          1. How do I start creating memes with Sobchain&apos;s template?
        </div>
        <div className="text-[18px]">
          Simply join our Telegram channel, and you'll find the meme template
          pinned at the top of the chat. Download the template directly to your
          device to start creating your memes.
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
        <div className="text-[18px] font-semibold">
          1. How do I start creating memes with Sobchain&apos;s template?
        </div>
        <div className="text-[18px]">
          Simply join our Telegram channel, and you'll find the meme template
          pinned at the top of the chat. Download the template directly to your
          device to start creating your memes.
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
        <div className="text-[18px] font-semibold">
          1. How do I start creating memes with Sobchain&apos;s template?
        </div>
        <div className="text-[18px]">
          Simply join our Telegram channel, and you'll find the meme template
          pinned at the top of the chat. Download the template directly to your
          device to start creating your memes.
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
      </section>
      <section className="px-4 space-y-4">
        <div className="font-bold text-3xl">Join Now!</div>
        <div className="text-[18px] font-light">
          Dive headfirst into the whimsical world of Sobchain and let the
          laughter ring out! With Sobchain, every meme is a golden opportunity
          and every chuckle is a chance to shine. Remember, with Sobchain in
          your digital wallet, every day is an adventure filled with joy and
          rewards just waiting to happen.
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-12">
        <div className="flex space-x-4">
          <Image
            src="/assets/Vector.png"
            alt="Telegram"
            width={85}
            height={85}
          />
          <Image src="/assets/owl.png" alt="Owl" width={79} height={79} />
          <Image src="/assets/x.png" alt="x" width={79} height={79} />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="w-full h-1 bg-[#ffffff] opacity-50"></div>
        <div className="text-center py-4">Sohba 2024</div>
      </section>
    </main>
  );
}
