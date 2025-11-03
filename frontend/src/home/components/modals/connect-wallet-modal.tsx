import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import HomeLogo from "@/shared/assets/logo.svg?react";
import { walletTypes } from "@/shared/lib/data";
import { Separator } from "@/shared/components/ui/separator";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ConnectWallet({ onClose }: { onClose: () => void }) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        variant="md"
        className="lg:pt-12 lg:px-6 lg:pb-6 pb-4 pt-8 px-4  overflow-hidden"
      >
        <div className="flex items-center justify-center lg:mb-6 lg:h-24 mb-4">
          <HomeLogo />
        </div>
        <span className="font-medium text-2xl mb-8 text-center leading-tight">
          Connect with Legend
        </span>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col text-center">
            <ul className="*:first:rounded-t-xl *:last:rounded-b-xl **:data-[id=Item]:border-0 **:data-[id=Item]:overflow-hidden border border-border-2 *:not-last:border-b! *:not-last:border-b-border-2 overflow-hidden rounded-xl bg-bg-primary">
              {walletTypes.map((wallet, i) => (
                <div
                  key={i}
                  className="disabled:pointer-events-none disabled:opacity-40 flex w-full items-center gap-3 border border-border-2 p-4 cursor-pointer hover:bg-bg-additional-1 active:bg-bg-additional-2 focus-visible:outline-none text-white"
                >
                  {wallet.icon}
                  <span className="leading-normal text-sm font-medium text-text-primary w-full truncate text-start">
                    {wallet.name}
                  </span>
                </div>
              ))}
            </ul>
            <div className="flex justify-center items-center relative my-2 h-8 flex-row gap-3">
              <Separator className="bg-white opacity-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-auto flex-1" />
              <span className="leading-normal text-xs text-text-secondary px-1">
                or continue with email
              </span>
              <Separator className="bg-white opacity-10 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-auto flex-1" />
            </div>
            <div>
              <Input
                inputSize="md"
                placeholder="Continue with email"
                withIcon="right"
                icon={
                  <Button>
                    <ArrowRight />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
