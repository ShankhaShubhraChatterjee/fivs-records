import Image from "next/image";
import Background from '@/../public/background.jpg';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Image src={Background} alt="Background image"></Image>
    </div>
  );
}
