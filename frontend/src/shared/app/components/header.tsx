import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/components/ui/command";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex h-sm-top-nav py-3 lg:h-lg-top-nav transition-colors duration-200 ease-out-quint border-b border-border-1 bg-bg-primary">
      <div className="mx-auto w-full max-w-[calc(theme(screens.4xl)+48px)] px-4 lg:px-6 flex items-center justify-between">
        <div
          tabIndex={0}
          className="inline-flex items-center whitespace-nowrap placeholder:text-text-secondary hover:bg-bg-secondary-transparent-hover border border-border-1-transparent h-10 gap-1.5 text-sm px-3 pl-3 w-full cursor-text rounded-md bg-white pr-2 backdrop-blur-lg lg:min-w-[120px] lg:max-w-[360px] dark:bg-bg-primary-transparent transition-[background-color,box-shadow] duration-150 ease-out"
          onFocus={() => setOpenSearch(true)}
        >
          <SearchIcon className="size-4 shrink-0 opacity-50" />
          <input
            type="text"
            placeholder="Search AppName"
            className="md:text-sm w-full border-0 bg-transparent outline-hidden [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pointer-events-none text-sm text-text-primary placeholder:text-text-primary"
            readOnly
          />
        </div>

        <div className="flex items-center shrink-0 gap-1">
          {/* add right-side icons or profile menu */}
        </div>

        {/* 🪄 Command dialog appears when triggered */}
        <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
          <CommandInput placeholder="Type a command or search..." />
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
