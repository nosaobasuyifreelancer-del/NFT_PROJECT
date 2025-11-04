import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import Traits from "@/shared/assets/traits.svg?react";
import Blockchain from "@/shared/assets/blockchain.svg?react";
import MoreInfo from "@/shared/assets/moreInfo.svg?react";
import About from "@/shared/assets/about.svg?react";
import TraitsCard from "./traits-card";
import { truncateMiddle } from "@/shared/lib/utils";
import { CustomTooltip } from "@/shared/components/ui/tooltip";
import { MoveUpRight } from "lucide-react";

const traitsCardItems = [
  { title: "Background", variant: "Mint" },
  { title: "Body", variant: "Turtleneck Green" },
  { title: "Face", variant: "Cross Eyed" },
  { title: "Head", variant: "Beanie Gray" },
  { title: "Skin", variant: "Normal" },
];
const blockchainItems = [
  {
    title: "Contract Address",
    details: "0X4T47384546789098707X098636384830095ERC11555Polygon",
    link: "https://polygonscan.com/address/0x4T123456789098707X0986ABCDEF00095ERC11555Polygon",
  },
  {
    title: "Token ID",
    details: "07X098634783743840095",
    link: "https://polygonscan.com/address/0x4T123456789098707X0986ABCDEF00095ERC11555Polygon",
  },
  { title: "Token Standard", details: "ERC11555" },
  { title: "Chain", details: "Polygon" },
];
const nftDetailItems = [
  {
    title: "Traits",
    icon: <Traits />,
    content: (
      <div className="flex flex-wrap gap-3 basis-1/3">
        {traitsCardItems.map((traits, i) => (
          <div
            key={i}
            className="flex-none basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
          >
            <TraitsCard header={traits.title} variant={traits.variant} />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "About",
    icon: <About />,
    content: (
      <div className="flex flex-col text-text-primary">
        <span className="leading-normal text-sm font-medium  mb-1">About</span>
        <span className="leading-normal text-sm w-fit whitespace-pre-wrap select-text font-mono">
          10,000 NFTs and Cute faces on the Friendly Panda Blockchain is a
          collection on the Polygon network. Our goal is to create an inclusive
          Friendship group that brings together the various Metaverses. We are
          committed to creating an environment that invites all communities in
          the Metaverse. Besides providing you a great PFP, Friendly Panda
          offers you private IRL and Metaverse. Want to hide in the bamboo
          forest?
        </span>
      </div>
    ),
  },
  {
    title: "Blockchain details",
    icon: <Blockchain />,
    content: (
      <div className="flex flex-col gap-2">
        {blockchainItems.map((item, i) => (
          <div
            className="flex justify-between gap-4 leading-normal text-sm text-text-secondary"
            key={i}
          >
            <span>{item.title}</span>
            <CustomTooltip
              trigger={
                item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-right max-w-[200px] truncate underline cursor-pointer hover:text-text-primary flex items-center"
                  >
                    {truncateMiddle(item.details, 6, 6)}
                    <MoveUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-right max-w-[200px] truncate">
                    {truncateMiddle(item.details, 6, 6)}
                  </span>
                )
              }
              content={item.details}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "More from this collection",
    icon: <MoreInfo />,
  },
];

export default function NFTDetails() {
  return (
    <Accordion type="multiple" className="w-full gap-2 flex flex-col">
      {nftDetailItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="border border-border-1 rounded-sm px-4 last:border-b"
        >
          <AccordionTrigger className="text-base hover:no-underline hover:text-text-primary  data-[state=open]:text-text-primary group">
            <div className="flex items-center gap-4">
              <div className=" h-8 w-8 rounded-sm border border-border-1 flex items-center justify-center ">
                <div className="h-6 w-6 border border-border-1 rounded-sm flex items-center justify-center group-hover:text-text-primary group-data-[state=open]:text-text-primary text-text-secondary">
                  {item.icon}
                </div>
              </div>
              {item.title}
            </div>
          </AccordionTrigger>

          <AccordionContent className="text-sm text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
