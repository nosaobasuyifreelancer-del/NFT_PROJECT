import { CircleUser, PanelLeft, SearchIcon } from "lucide-react";
import { useState } from "react";
import HomeLogo from "@/shared/assets/logo.svg?react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import SearchModal from "@/shared/components/search-modal";
import { Input } from "@/shared/components/ui/input";
import ConnectWallet from "@/home/components/modals/connect-wallet-modal";
import { Link } from "react-router";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [openModal, setOpenModal] = useState<"search" | "wallet" | null>();
  return (
    <div className=" header sticky top-0 z-999 shrink-0 flex h-[68px] py-3  transition-colors duration-200 ease-out-quint border-b border-border-1 bg-bg-primary">
      <div className="w-full px-4 lg:px-6 flex items-center justify-between">
        <div className="lg:hidden flex gap-2 items-center h-10">
          <PanelLeft
            size={24}
            className="cursor-pointer shrink-0 opacity-50"
            onClick={onToggleSidebar}
          />
          <HomeLogo className="w-20 -mb-1" />
        </div>

        <Input
          placeholder="Search"
          variant="search"
          onClick={() => setOpenModal("search")}
          icon={<SearchIcon />}
          withIcon="left"
          className="lg:inline hidden"
        />

        <div className="flex gap-5 items-center">
          <div className="flex lg:hidden cursor-pointer">
            <SearchIcon
              className="size-6 shrink-0 opacity-50"
              onClick={() => setOpenModal("search")}
            />
          </div>
          <div className="flex gap-3 items-center">
            <Button
              className="lg:hidden "
              onClick={() => setOpenModal("wallet")}
            >
              Connect
            </Button>
            <Button
              onClick={() => setOpenModal("wallet")}
              variant="outline"
              className="hidden lg:inline"
            >
              Connect Wallet
            </Button>
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-6 data-[orientation=vertical]:w-px  bg-border-1 hidden lg:flex"
            />
            <div className="hidden lg:flex">
              <Link to={"/profile"}>
                <Button
                  variant="outline"
                  className="
               [&_svg:not([class*='size-'])]:size-5 "
                >
                  <CircleUser />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {openModal === "search" && (
        <SearchModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === "wallet" && (
        <ConnectWallet onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
