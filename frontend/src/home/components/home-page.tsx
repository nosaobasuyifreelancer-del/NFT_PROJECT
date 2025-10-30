import { Button } from "@/shared/components/ui/button";
import HomeContent1 from "./home-content-1";

export default function HomePage() {
  return (
    <div className="w-full lg:flex-row flex flex-col">
      <div className="flex flex-1 flex-col lg:max-w-[70%] max-w-full">
        <div className="flex justify-between relative z-10 lg:h-17 w-full items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-hidden">
          <Button>All</Button>
        </div>
        <div className="flex flex-col gap-6 pb-6 flex-1 ">
          <HomeContent1 />
        </div>
      </div>
      <div className="overflow-hidden transition-opacity duration-500 ease-out-quint sticky z-1 flex">
        <div className="flex flex-col scrollbar-hidden overflow-auto ">
          <div className="flex justify-between h-17 shrink-0 items-center gap-2 px-2">
            <Button>NFTs</Button>
          </div>
          <div className="h-full overflow-y-hidden">
            <div className="flex flex-col w-full min-w-0 h-full overflow-y-hidden">
              <div className="pb-2 inline-flex min-w-full overflow-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden h-6 min-h-6 gap-2 bg-transparent">
                <span className="flex items-center shrink-0 overflow-hidden first:pl-2 last:pr-2 justify-start text-text-secondary font-mono uppercase text-xs w-[100px] grow">
                  COLLECTION
                </span>
                <span className="flex items-center shrink-0 grow-0 overflow-hidden first:pl-2 last:pr-2 text-text-secondary font-mono uppercase text-xs w-[125px] justify-end whitespace-nowrap">
                  FLOOR
                </span>
              </div>
              <div className="w-full flex-1 overflow-x-auto scrollbar-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
