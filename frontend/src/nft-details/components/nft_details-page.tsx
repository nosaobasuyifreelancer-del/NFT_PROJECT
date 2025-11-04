import type { INFTCardData } from "@/home/components/cards/trending-nfts-card";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import Tabs from "@/shared/components/ui/tabs";
import Tag from "@/shared/components/ui/tags";
import { useLocation } from "react-router";
import NFTDetails from "./details-accordion";

type StatItem = {
  label: string;
  value: string | number;
  unit?: string;
};

const stats: StatItem[] = [
  { label: "Top Offer", value: "0.0023", unit: "WETH" },
  { label: "Floor Price", value: "0.0019", unit: "WETH" },
  { label: "Volume Traded", value: "120.4", unit: "ETH" },
];
const tabs = [
  {
    label: "Details",
    content: <NFTDetails />,
  },
  {
    label: "Activity",
    content: <div className="text-xs">Activity content here</div>,
  },
];

export default function NFTDetailsPage() {
  const { state } = useLocation() as { state: INFTCardData | null };
  const nft = state;

  if (!nft) {
    return <div>No NFT data found.</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row min-h-0 w-full lg:overflow-hidden overflow-auto gap-5 lg:gap-0">
      <div className="flex lg:w-[45%] w-full lg:border-r border-b border-border-1 lg:justify-center bg-bg-primary  lg:px-8 flex-col relative py-4 lg:py-6 lg:max-w-[calc(1920px/2)] min-h-[300px] lg:min-h-full ">
        <div
          className="flex grow lg:items-center lg:justify-center w-full rounded-sm lg:max-h-[600px] max-h-[400px]"
          style={{
            backgroundImage: `url(${nft.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="flex flex-col bg-bg-app lg:flex-1 w-full lg:px-6 lg:py-6 gap-4 border-b lg:overflow-y-auto pb-40 lg:pb-16">
        <div className="flex gap-2 lg:text-[32px] text-[24px] items-center font-medium leading-tight min-w-0 select-text">
          <h1>{nft.title}</h1>
          <span>{`#${nft.id}`}</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full h-6 w-6"
              src={nft.imgUrl}
              alt={nft.title}
            />
            <span>{nft.title}</span>
          </div>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 data-[orientation=vertical]:w-px  bg-border-1 "
          />
          <div className="flex gap-2 items-center text-sm">
            <span className="leading-normal text-text-secondary whitespace-nowrap">
              Owned by
            </span>
            <span className="leading-normal text-sm font-medium cursor-pointer">
              {nft.subTitle}
            </span>
          </div>
        </div>
        <div className="scrollbar-hide w-full gap-2 overflow-auto flex h-[18px]">
          {nft.tags?.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
        <div
          className="
    flex flex-col gap-4 rounded-t-2xl border border-border-1 bg-bg-primary p-4 w-full
    lg:static lg:mt-2 lg:rounded-lg
    fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="lg:flex hidden group/stat-display flex-none gap-4 overflow-hidden md:gap-8 justify-between overflow-x-auto lg:overflow-hidden -mb-4 pb-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 whitespace-nowrap select-text items-start"
              >
                <span className="leading-tight font-mono uppercase text-xs text-text-secondary">
                  {stat.label}
                </span>

                <div className="items-center inline-flex gap-1 truncate cursor-pointer font-medium text-sm">
                  <span className="font-mono text-text-primary">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-text-secondary font-mono ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full bg-border-1 lg:inline hidden"
          />
          <div className="flex flex-col w-full gap-4 md:gap-6">
            <div className="flex flex-col w-full gap-2">
              <span className="leading-tight font-mono uppercase text-xs text-text-secondary">
                Buy for
              </span>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-medium leading-tight md:text-[32px] select-text whitespace-nowrap text-[20px] items-center inline-flex gap-1 truncate cursor-pointer">
                  <span className="font-mono text-text-primary">45.00</span>
                  <span className="text-current font-mono">&nbsp;ETH</span>
                </h3>
                <div className="leading-normal text-sm text-text-secondary select-text">
                  (<span className="font-mono text-text-primary">$158.4k</span>)
                </div>
                <Tag text="Ending in 6 months" />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2">
              <Button className="w-[50%] rounded-full lg:h-12">Buy now</Button>
              <Button
                className="w-[50%] rounded-full lg:h-12"
                variant="outline"
              >
                Make offer
              </Button>
            </div>
          </div>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
