import { CustomEmpty } from "@/shared/components/ui/empty";
import Tabs from "@/shared/components/ui/tabs";

const user = {
  displayName: "0x3883978909",
  //   username: "cryptokemi.eth",
  profileImage: "",
  //   "https://api.dicebear.com/9.x/adventurer/svg?seed=CryptoKemi",

  portfolioValue: "0.0045 ETH",
  usdValue: "$345.6",
  nftPercentage: "0%",
};
const profileTabs = [
  {
    label: "NFTs",
    content: (
      <div>
        <CustomEmpty
          title="You have no NFTs available"
          buttonText="Buy now"
          description="Start now to create or buy your NFT"
          variant="default"
        />
      </div>
    ),
  },
  {
    label: "Activity",
    content: (
      <div>
        <CustomEmpty
          title="You have no Activity available"
          buttonText="Buy now"
          description="Start now to create or buy your NFT"
          variant="default"
        />
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
          <span className="font-semibold text-[16px] md:text-3xl leading-5">
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
