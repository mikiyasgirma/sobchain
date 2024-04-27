import Image from "next/image";
import Marquee from "react-fast-marquee";
import FlashCard from "./components/FlashCard";
import SimpleSlider from "./components/Swiper";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white">
      <div className="absolute z-[-1] w-full h-[1579px] top-0 md:top-0 max-w-full bg-gradient-to-b to-[#131732] from-transparent" ></div>
      <Image
        className="absolute z-[-2] w-full h-[1579px] top-0 md:top-0 max-w-full"
        alt='sobchain mountain'
        src='/assets/digital-art-beautiful-mountains-1.jpg'
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={1300}
        height={1579}
      />
      <section className="py-6 md:py-40">
        <div className="flex flex-col z-20 justify-center items-center md:space-y-16 py-10 space-y-6">
          <Image
            src="/assets/mask-group.png"
            alt="Mask Grout png"
            height={266}
            width={266}
          />
          <div className="border-text md:w-[881px] pb-10 md:pb-16 text-2xl md:text-5xl text-center">
            Where Tears are Coins, and Your Smiles, the Reward.
          </div>
        </div>
        <div className="py-10 md:py-98">
          <Marquee speed={50}>
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
          </Marquee>
        </div>
        <div className="py-10 md:py-56 space-y-6 md:space-y-24  flex flex-col items-center">
          <div className="border-text md:text-5xl text-3xl text-center">
            Welcome to Sobchain!
          </div>
          <p className="text-center w-2/3 md:text-3xl">
            Where else can tears turn into treasure and smiles into rewards?
            Only here at Sobchain! We&apos;re not just a meme coin; we&apos;re a
            movement. We blend humor, blockchain technology, and a sprinkle of
            tears to create the most joyously innovative currency in the digital
            realm.
          </p>
        </div>
      </section>
      <section className="py-6 md:pb-52">
        <div className="md:ml-80 h-3 w-[364px] md:w-[600px] mb-6 bg-gradient-to-r from-[#cd007a] to-[#131732] "></div>
        <div className="flex flex-col md:flex-row md:space-x-32">
          <Image
            className="md:ml-80"
            src="/assets/image-1.jpg"
            alt="Image One"
            width={575}
            height={495}
          />
          <div className="md:w-1/2">
            <div className="font-bold md:text-4xl text-2xl px-4 py-6">
              Who Are We?
            </div>
            <div className="px-4 md:text-[20px] leading-loose md:pr-52">
              We are a community of meme lovers, tech geeks, and blockchain
              enthusiasts who believe that every sob has a silver lining. Born from
              the viral waves of the internet&apos;s funniest corners, Sobchain aims
              to bring a little light-heartedness to the sometimes-serious world of
              crypto.
            </div>
          </div>
        </div>
      </section>
      <section className=" py-6">
        <div className="flex justify-end">
          <div className="md:mr-52 h-3 w-[364px] md:w-[600px] bg-gradient-to-l from-[#cd007a] to-[#131732] mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:space-x-32">
          <Image
            className="md:pr-52 md:ml-52"
            src="/assets/image-2.jpg"
            alt="Image One"
            width={575}
            height={495}
          />
          <div className="md:w-1/2">
            <div className="font-bold md:text-4xl text-2xl md:pl-52 px-4 py-6">
              What Do We Do?
            </div>
            <div className="md:pl-52 md:text-[20px] leading-loose px-4">
              With Sobchain, every transaction is a reason to smile. Our platform
              allows you to earn coins by sharing memes. The sadder the meme, the
              bigger the sob value. But here’s the twist—rewards are earned from the
              smiles you spread! The more your memes make others laugh, the more
              rewards you reap.
            </div>
          </div>
        </div>
      </section>
      <div className="font-bold text-3xl md:pt-52 md:pb-10 text-white text-center">
        Our Philosophy: &quot;Cry, Laugh, Earn&quot;
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
        {/* <Image
          className="relative z-[-2] w-full h-[1163px] max-w-full"
          alt='sobchain mountain'
          src='/assets/pattern-background.png'
          sizes="300px"
          fill
          style={{
            objectFit: 'contain',
          }}
        /> */}
        <section className="flex flex-col justify-end space-y-6 py-12">
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
              <div className="">2. Laugh 😂</div>
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
      </div>
      <section id="buytoken" className="px-4 md:pt-52 flex flex-col items-center justify-center space-y-4 py-12">
        <div className="text-white text-3xl">Buy Tokens</div>
        <button className="w-[382px] md:w-[706px] md:h-[90px] text-[18px] font-medium rounded-[30px] h-[69px] border-4 border-[#CD007A] bg-[#42455b] ">
          1478 9632 8521 7856
        </button>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-11">
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
      </div>
      <section className="px-4 md:px-52 md:pt-52 py-12 text-white space-y-6">
        <div className="font-bold text-3xl text-center">FAQ</div>
        <div className="text-[18px] font-semibold">
          How do I start creating memes with Sobchain&apos;s template?
        </div>
        <div className="text-[18px]">
          Simply join our Telegram channel, and you&apos;ll find the meme
          template pinned at the top of the chat. Download the template directly
          to your device to start creating your memes.
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
        <div className="text-[18px] font-semibold">
          What tools do I need to edit the meme template from the Telegram channel?
        </div>
        <div className="text-[18px]">
          You can use any graphic editing software that supports image layers, such as Photoshop, GIMP, or even mobile apps like PicsArt. These tools will allow you to add text, change images, and customize the template to your liking.
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
        <div className="text-[18px] font-semibold">
          Are there specific rules for meme content shared on the platform?
        </div>
        <div className="text-[18px]">
          Yes, while we encourage creativity, we also emphasize respect and positivity. It&apos;s important to avoid memes that promote hate, violence, or discrimination. Our goal is to keep the atmosphere fun and friendly to ensure our community remains welcoming for everyone. Please create and share with kindness in mind!
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
        <div className="text-[18px] font-semibold">
          Let&apos;s address the elephant in the room:
        </div>
        <div className="text-[18px]">
          Our liquidity pool might be on the smaller side, despite us pouring everything we&apos;ve got into it. If you love what Sobchain is building, consider contributing to the pool. We&apos;ve burned our LP tokens, so rest assured, there&apos;s no risk of us pulling out. Your support helps us grow and secure a fun, stable future for all!
        </div>
        <div className="w-full h-[2px] bg-white opacity-50"></div>
      </section>
      <section className="px-4 md:px-52 space-y-4 md:pt-52 flex flex-col md:space-y-8 items-center">
        <div className="font-bold text-center text-3xl md:text-5xl">Join Now!</div>
        <div className="text-[18px] font-light text-center md:w-1/2 leading-loose ">
          Dive headfirst into the whimsical world of Sobchain and let the
          laughter ring out! With Sobchain, every meme is a golden opportunity
          and every chuckle is a chance to shine. Remember, with Sobchain in
          your digital wallet, every day is an adventure filled with joy and
          rewards just waiting to happen.
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-12">
        <div className="flex space-x-4">
          <Link href="https://t.me/+p7ABBoEAQXowYTU8">
            <Image
              src="/assets/Vector.png"
              alt="Telegram"
              width={85}
              height={85}
            />
          </Link>
          <Link href="">
            <Image src="/assets/owl.png" alt="Owl" width={79} height={79} />
          </Link>
          <Link href="https://twitter.com/sobchain">
            <Image src="/assets/x.png" alt="x" width={79} height={79} />
          </Link>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="w-full h-1 bg-[#ffffff] opacity-50"></div>
        <div className="text-center py-4">Sobchain 2024</div>
      </section>
    </main>
  );
}
