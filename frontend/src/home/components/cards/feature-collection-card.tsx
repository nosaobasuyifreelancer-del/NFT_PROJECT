// import { Card, CardContent } from "@/shared/components/ui/card";
// import { CustomTooltip } from "@/shared/components/ui/tooltip";
import React from "react";

interface featureColProps {
  imgUrl?: string;
  title?: string;
  subTitle?: string;
  maxTitleLength?: number;
  onClick?: () => void;
}
export const FeatureCollectionCard: React.FC<featureColProps> = ({
  imgUrl,
  // title = "",
  // subTitle,
  // maxTitleLength = 0,
  // onClick,
}) => {
  // const truncateText = (text: string, maxLength: number) => {
  //   if (text.length > maxLength) {
  //     return {
  //       truncate: text?.substring(0, maxLength) + "...",
  //       isTruncate: true,
  //     };
  //   }
  //   return {
  //     truncate: text,
  //     isTruncate: false,
  //   };
  // };

  // const titleResult = truncateText(title, maxTitleLength);
  return (
    <div className="min-w-0 shrink-0 mr-3 basis-[calc(100%-76px)] pl-0 transition-opacity duration-200 will-change-opacity md:mr-4 md:basis-[calc(100%-70px)] lg:basis-[300px] group opacity-100 is-snapped is-in-view">
      <div className="flex flex-col dark relative aspect-3/2 justify-end rounded-lg p-3 duration-200 ease-out-circ perspective-[0] translate-z-0 backface-hidden group-hover:-translate-y-0.5 group-hover:scale-[1.01] group-active:scale-[1.005] shadow-xs group-hover:shadow-xs before:absolute before:pointer-events-none before:inset-0 before:inset-shadow-border before:z-inset-border before:rounded-inherit absolute:inset-shadow-border">
        <div className="absolute inset-0 z-[-1] scale-[0.995] overflow-hidden rounded-lg">
          <div
            className="relative size-full"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 z-[-1] rounded-lg bg-linear-to-b from-transparent to-bg-app"></div>
        <div className="border-border-2 border-0 p-0 flex w-full items-center gap-3">
          <span className="leading-normal font-medium text-text-primary text-sm">
            Cambria Islands
          </span>
        </div>
        <div className="flex items-center">
          <span className="leading-normal text-sm text-text-secondary">
            Floor Price:&nbsp;
          </span>
          <span className="leading-tight font-mono uppercase text-sm font-medium text-text-secondary">
            <div className="items-center inline-flex gap-1 truncate cursor-pointer">
              <div className="max-w-full truncate break-all flex items-center">
                <span className="font-mono text-text-primary">0.0006</span>
                <span className="text-text-secondary font-mono">ETH</span>
              </div>
            </div>
          </span>
          <span className="leading-normal text-sm pl-2">
            <span className="font-mono text-success-1 cursor-pointer">
              +69.1%
            </span>
          </span>
        </div>
      </div>
    </div>
    // <Card className="rounded-sm border-0 min-h-0 min-w-0" onClick={onClick}>
    //   <CardContent
    //     className="relative flex items-end max-h-[200px] md:h-[200px] h-[188px] rounded-sm min-w-0 min-h-0 p-0"
    //     style={{
    //       backgroundImage: `url(${imgUrl})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg-app" />
    //     <div className="flex flex-col justify-end h-full z-500 min-w-0 flex-1 p-2">
    //       <CustomTooltip
    //         trigger={
    //           <p className="font-normal text-white text-base leading-6  truncate sm:text-xs md:text-sm">
    //             {titleResult.truncate}
    //           </p>
    //         }
    //         content={title}
    //       />

    //       <p className="leading-normal text-sm text-text-secondary">
    //         {subTitle}
    //       </p>
    //     </div>
    //   </CardContent>
    // </Card>
  );
};
