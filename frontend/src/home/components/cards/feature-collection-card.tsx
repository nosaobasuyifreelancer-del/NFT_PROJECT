import { Card, CardContent } from "@/shared/components/ui/card";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
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
  title = "",
  subTitle,
  maxTitleLength = 0,
  onClick,
}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return {
        truncate: text?.substring(0, maxLength) + "...",
        isTruncate: true,
      };
    }
    return {
      truncate: text,
      isTruncate: false,
    };
  };

  const titleResult = truncateText(title, maxTitleLength);
  return (
    <div>
      <Card className="rounded-sm" onClick={onClick}>
        <CardContent
          className="flex relative  aspect-video min-h-0 lg:max-h-[200px] max-h-[190px] overflow-x-hidden rounded-sm  items-center justify-center p-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg-app" />
          <div className="flex flex-col justify-end h-full z-500 min-w-0 flex-1 p-2">
            <CustomTooltip
              trigger={
                <p className="font-normal text-white text-base leading-6  truncate sm:text-xs md:text-sm">
                  {titleResult.truncate}
                </p>
              }
              content={title}
            />

            <p className="font-normal text-white leading-6 mt-1 opacity-80 text-xs">
              {subTitle}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
