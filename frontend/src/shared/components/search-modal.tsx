import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { sideBarMenu } from "../lib/data";
import { cn } from "../lib/utils";
import { CustomTooltip } from "./ui/tooltip";
import { Button } from "./ui/button";

export default function SearchModal({ onClose }: { onClose: () => void }) {
  return (
    <Dialog open onOpenChange={onClose}>
      {/* <CommandInput placeholder="Search Legend" /> */}
      <DialogContent
        variant="lg"
        className="w-full p-0 gap-0 overflow-hidden"
        // showCloseButton={false}
      >
        <Input
          variant="search"
          inputSize="lg"
          className="border-t-0 border-x-0 rounded-none"
          placeholder="Search Legend"
        />
        <div className="flex w-full flex-1">
          <div className="border-r border-border-1 p-3 lg:shrink-0 lg:w-48 hidden lg:flex">
            {sideBarMenu.map((item, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    "group relative cursor-pointer no-underline disabled:pointer-events-none disabled:opacity-40 border-border-2 border-0 flex w-full items-center gap-2 rounded-sm  p-2 text-text-secondary transition-all duration-300 ease-out-quint hover:bg-bg-additional-2 hover:text-text-primary h-9 bg-bg-additional-2 text-text-white"
                  )}
                >
                  <div className="flex items-center justify-center shrink-0 transition-all duration-300 ease-out-quint text-text-primary size-5">
                    {item.icon}
                  </div>
                  <span className="transition-all duration-300 ease-out-quint whitespace-nowrap text-text-primary">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col h-full w-full flex-1">
            <div className="flex gap-2 px-4 border-border-1 border-b py-3">
              {" "}
              <CustomTooltip trigger={<Button>All</Button>} content="All" />
            </div>
            <div></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
