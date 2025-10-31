import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { CircleUser, Menu, SearchIcon } from "lucide-react";
import { useState } from "react";
import HomeLogo from "@/shared/assets/logo.svg?react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-10 flex h-sm-top-nav py-3 lg:h-lg-top-nav transition-colors duration-200 ease-out-quint border-b border-border-1 bg-bg-primary">
        <div className="mx-auto w-full px-4 lg:px-6 flex items-center justify-between">
          <div className="lg:hidden flex gap-2 items-center h-10">
            <Menu
              size={24}
              className="cursor-pointer"
              onClick={onToggleSidebar}
            />
            <HomeLogo className="w-20" />
          </div>
          <div
            tabIndex={0}
            className="lg:inline-flex hidden items-center whitespace-nowrap placeholder:text-text-secondary hover:bg-bg-secondary-transparent-hover border border-border-1 h-10 gap-1.5 text-sm px-3 pl-3 w-full cursor-text rounded-md bg-white pr-2 backdrop-blur-lg lg:min-w-[120px] lg:max-w-[360px] dark:bg-bg-primary-transparent transition-[background-color,box-shadow] duration-150 ease-out"
            onClick={() => setOpenSearch(true)}
          >
            <SearchIcon className="size-4 shrink-0 opacity-50" />
            <input
              type="text"
              placeholder="Search "
              className="md:text-sm w-full border-0 bg-transparent outline-hidden [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pointer-events-none text-sm text-text-primary placeholder:text-text-primary"
              readOnly
            />
          </div>

          <div className="flex gap-5 items-center">
            <div className="flex lg:hidden cursor-pointer">
              <SearchIcon
                className="size-6 shrink-0 opacity-50"
                onClick={() => setOpenSearch(true)}
              />
            </div>
            <div className="flex gap-3 items-center">
              <Button>Connect Wallet</Button>
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-6 data-[orientation=vertical]:w-px  bg-border-1 hidden lg:flex"
              />
              <div>
                <Button
                  variant="outline"
                  className="
              hidden lg:flex"
                >
                  <CircleUser />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Search Legend" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Home</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
