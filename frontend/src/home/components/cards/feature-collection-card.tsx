// import { Card, CardContent } from "@/shared/components/ui/card";
// import { CustomTooltip } from "@/shared/components/ui/tooltip";
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
  // subTitle,
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
    <Card
      className="p-0 min-h-0 min-w-0 rounded-lg border border-border-1 bg-bg-primary-transparent text-text-primary duration-200 ease-out-quint perspective-[0] translate-z-0 backface-hidden hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] shadow-xs hover:shadow-xs"
      onClick={onClick}
    >
      <CardContent
        className="relative flex items-end max-h-[200px] md:h-[200px] h-[188px] rounded-sm min-w-0 min-h-0 p-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg-app" />
        <div className="flex flex-col justify-end h-full z-500 min-w-0 flex-1 p-2">
          <CustomTooltip
            align="start"
            trigger={
              <div className="border-border-2 border-0 p-0 flex w-full items-center gap-3">
                <span className="leading-normal font-medium text-text-primary text-sm">
                  {titleResult.truncate}
                </span>
              </div>
            }
            content={title}
          />

          <div className="flex items-center">
            <span className="leading-normal text-sm text-text-secondary">
              Floor Price:&nbsp;
            </span>
            <span className="leading-tight font-mono uppercase text-sm font-medium text-text-secondary">
              <div className="items-center inline-flex gap-1 truncate cursor-pointer">
                <div className="max-w-full truncate break-all flex items-center gap-1">
                  <CustomTooltip
                    align="center"
                    trigger={
                      <span className="font-mono text-text-primary">
                        0.0006
                      </span>
                    }
                    content={"$0.0006"}
                  />

                  <span className="text-text-secondary font-mono">ETH</span>
                </div>
              </div>
            </span>
            <span className="leading-normal text-sm pl-2">
              <CustomTooltip
                align="center"
                trigger={
                  <span className="font-mono text-success-1 cursor-pointer">
                    +69.1%
                  </span>
                }
                content={"1 day price change"}
              />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
