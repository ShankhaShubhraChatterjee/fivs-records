import ClientCard from "./_components/customer/client_card/page";
import InfoCard from "./_components/customer/profile_card/page";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-start font-sans inset-0 h-full w-full light:bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-dark">
      <div className="flex justify-center items-center flex-col mt-18">
        <h1 className="sm:text-2xl md:text-2xl font-bold mb-4">Welcome To FIVS Records.</h1>
        <div className="">
          <Tabs defaultValue="profile" className="w-90 lg:w-150">
            <TabsList className="w-full">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="client">Client List</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <InfoCard />
            </TabsContent>
            <TabsContent value="client">
              <ClientCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
