import InfoCard from "./_components/info_card/page";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center font-sans inset-0 h-full w-full light:bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-dark">
    <div className="flex justify-center items-center flex-col">
      <h1 className="sm:text-2xl md:text-2xl font-bold mb-4">Welcome To FIVS Records.</h1>
      <InfoCard />
    </div>
    </div>
  );
}
