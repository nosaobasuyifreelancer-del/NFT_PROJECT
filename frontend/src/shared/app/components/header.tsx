import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { Menu, SearchIcon } from "lucide-react";
import { useState } from "react";
import HomeLogo from "@/shared/assets/logo.svg?react";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="sticky top-0 z-10 flex h-sm-top-nav py-3 lg:h-lg-top-nav transition-colors duration-200 ease-out-quint border-b border-border-1 bg-bg-primary">
      <div className="mx-auto w-full max-w-[calc(theme(screens.4xl)+48px)] px-4 lg:px-6 flex items-center justify-between">
        <div className="lg:hidden flex gap-2 items-center">
          <Menu
            size={24}
            className="cursor-pointer"
            onClick={onToggleSidebar}
          />
          <HomeLogo className="w-24" />
        </div>
        <div
          tabIndex={0}
          className="lg:inline-flex hidden items-center whitespace-nowrap placeholder:text-text-secondary hover:bg-bg-secondary-transparent-hover border border-border-1 h-10 gap-1.5 text-sm px-3 pl-3 w-full cursor-text rounded-md bg-white pr-2 backdrop-blur-lg lg:min-w-[120px] lg:max-w-[360px] dark:bg-bg-primary-transparent transition-[background-color,box-shadow] duration-150 ease-out"
          onFocus={() => setOpenSearch(true)}
        >
          <SearchIcon className="size-4 shrink-0 opacity-50" />
          <input
            type="text"
            placeholder="Search "
            className="md:text-sm w-full border-0 bg-transparent outline-hidden [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pointer-events-none text-sm text-text-primary placeholder:text-text-primary"
            readOnly
          />
        </div>
        <div className="flex lg:hidden cursor-pointer">
          <SearchIcon
            className="size-6 shrink-0 opacity-50"
            onClick={() => setOpenSearch(true)}
          />
        </div>

        <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Home</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  );
}
