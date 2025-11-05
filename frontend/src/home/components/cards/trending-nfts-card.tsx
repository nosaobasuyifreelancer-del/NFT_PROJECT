import { Link } from "react-router";

export interface INFTCardData {
  id: number;
  imgUrl: string;
  title: string;
  description?: string;
  subTitle?: string;
  tags?: string[];
}

interface TrendingCollectionsCardProps {
  nft: INFTCardData;
}
export default function TrendingCollectionsCard({
  nft,
}: TrendingCollectionsCardProps) {
  // const { id, imgUrl, title, description, subTitle } = nft;

  return (
    <Link to={`/collection/nft_details/${nft.id}`} state={nft}>
      <div className="flex w-full gap-3 p-0 items-stretch overflow-hidden rounded-lg border border-border-1 bg-bg-primary-transparent pr-4 text-text-primary duration-200 ease-out-circ perspective-[0] translate-z-0 backface-hidden hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] shadow-xs hover:shadow-xs cursor-pointer">
        <div
          className="flex flex-col justify-center items-center size-20 shrink-0"
          style={{
            backgroundImage: `url(${nft.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col justify-center order-2 min-w-0 overflow-hidden flex-auto items-start self-stretch pr-4">
          <span className="leading-normal font-normal text-text-primary text-sm">
            {nft.title}
          </span>
          {(nft.description || nft.subTitle) && (
            <span className="leading-normal text-sm text-text-secondary flex items-center gap-2">
              {nft.description ?? nft.subTitle}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
