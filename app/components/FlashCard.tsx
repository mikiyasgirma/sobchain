import Image from "next/image";

const FlashCard = () => {
  return (
    <div className="bg-[#CD007A] w-[221px] h-[38px] mr-10 flex items-center space-x-4">
      <Image
        src="/assets/mask-group.png"
        alt="Mask Group"
        width={38}
        height={38}
      />
      <div className="text-sm">Laughably Lovable</div>
    </div>
  );
};
export default FlashCard;
