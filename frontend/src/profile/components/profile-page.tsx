import MoreInfoCard from "@/nft-details/components/more-infor-card";
import { CustomEmpty } from "@/shared/components/ui/empty";
import Tabs from "@/shared/components/ui/tabs";
import ActivityTable from "./activity-table";

const user = {
  displayName: "0x3883978909",
  //   username: "cryptokemi.eth",
  profileImage: "",
  //   "https://api.dicebear.com/9.x/adventurer/svg?seed=CryptoKemi",

  portfolioValue: "0.0045 ETH",
  usdValue: "$345.6",
  nftPercentage: "0%",
};
const nftProfileStats = {
  totalItems: 3,
  totalValue: "12.5 ETH",
};

const nftProfileItems = [
  {
    id: 1,
    imgUrl:
      "https://i2c.seadn.io/admin-uploads/006ce7959e43ec52c40227e1607edf/10006ce7959e43ec52c40227e1607edf.png?h=300&w=600",
    amount: 4.2,
    name: "Cosmic Panther",
    currency: "ETH",
  },
  {
    id: 2,
    imgUrl:
      "https://i2.seadn.io/collection/the-warplets-farcaster/image_type_hero_desktop/9f2c62ddb025c2c41c378a641f34c8/d39f2c62ddb025c2c41c378a641f34c8.png?h=300&w=600",
    amount: 3.1,
    name: "Dreamwalker",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
  {
    id: 3,
    imgUrl:
      "https://i2c.seadn.io/collection/cambria-islands/image_type_logo/c9ebabf3f0f01ef1c67139ff226053/67c9ebabf3f0f01ef1c67139ff226053.png?h=300&w=600",
    amount: 5.2,
    name: "Neon Mirage",
    currency: "ETH",
  },
];
const profileTabs = [
  {
    label: "NFTs",
    content: (
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <span>{nftProfileStats.totalItems} items</span>
          <span className="font-semibold lg:text-lg text-sm">
            ({nftProfileStats.totalValue})
          </span>
        </div>
        {nftProfileItems.length > 0 ? (
          <div className="flex flex-wrap gap-3 basis-1/3 ">
            {nftProfileItems.map((item) => (
              <div
                key={item.id}
                className="flex-none basis-full md:basis-[calc(50%-0.5rem)] lg:basis-[calc(16.666%-0.75rem)] lg:min-w-[200px] lg:max-w-60"
              >
                <MoreInfoCard
                  imgUrl={item.imgUrl}
                  amount={item.amount}
                  name={item.name}
                  currency={item.currency}
                />
              </div>
            ))}
          </div>
        ) : (
          <CustomEmpty
            title="You have no NFTs available"
            buttonText="Buy now"
            description="Start now to create or buy your NFT"
            variant="default"
          />
        )}
      </div>
    ),
  },
  {
    label: "Activity",
    content: (
      <div className="flex flex-col">
        <ActivityTable />
      </div>
    ),
  },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col flex-1 bg-bg-app min-w-0">
      <div className="flex relative h-[300px] border border-border-1 shrink-0 min-w-0">
        <img
          alt="cover"
          src={user.profileImage || "/imgplaceholder.png"}
          onError={(e) => (e.currentTarget.src = "/imgplaceholder.png")}
          className=" w-full h-full object-cover backdrop-blur-xs"
        />

        <div className="absolute md:left-10 left-5 top-[30%] gap-4 flex flex-col items-center">
          <img
            alt="profile"
            src={user.profileImage || "/imgplaceholder.png"}
            onError={(e) => (e.currentTarget.src = "/imgplaceholder.png")}
            className="w-24 h-24 rounded-full object-fill shadow-lg"
          />
        </div>

        <div className="flex absolute justify-between items-center min-w-0 bottom-5 left-5 right-5 md:left-10 md:right-10  ">
          <span className="font-semibold text-[14px] md:text-3xl leading-5">
            {user.displayName}
          </span>
          <div className="flex md:gap-8 gap-4 ">
            <div className="text-right">
              <p className="text-xs text-text-secondary">Portfolio Value</p>
              <p className="text-xs md:text-lg font-semibold text-text-primary">
                {user.portfolioValue}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-text-secondary">USD Value</p>
              <p className="text-xs md:text-lg font-semibold text-text-primary">
                {user.usdValue}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-text-secondary">NFTs</p>
              <p className="text-xs md:text-lg font-semibold text-text-primary">
                {user.nftPercentage}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-y-auto md:px-5 md:py-5 min-w-0 py-2 px-4">
        <Tabs tabs={profileTabs} variant="profile" />
      </div>
    </div>
  );
}
