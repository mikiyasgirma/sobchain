import Image from "next/image";
interface FlashCardProps {
  title: string;
 }

const FlashCard:React.FC<FlashCardProps> = ({title}) => {
  return (
    <div className="bg-[#CD007A] w-[300px] h-[38px] mr-10 flex items-center space-x-4">
      <Image
        src="/assets/mask-group.png"
        alt="Mask Group"
        width={38}
        height={38}
      />
      <div className="text-sm">{title}</div>
    </div>
  );
};
export default FlashCard;
