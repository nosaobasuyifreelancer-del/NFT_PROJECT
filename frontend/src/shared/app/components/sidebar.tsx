import { cn } from "@/shared/lib/utils";
import { HomeIcon, X } from "lucide-react";
import { Link } from "react-router";
import HomeLogo from "@/shared/assets/logo.svg?react";

const sideBarMenu = [
  {
    title: "Home",
    url: "/home",
  },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className="hidden  group absolute lg:flex z-50 h-full flex-col border-r border-border-1 bg-bg-primary px-2 py-4 w-[52px] hover:w-[225px] transition-[width] duration-300 ease-out-quint overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <HomeLogo />
        </div>

        <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
          {sideBarMenu.map((item) => {
            const pathToMatch = item?.url
              ? item?.url.split("/")?.at(-1)
              : undefined;
            const urlIsActive =
              !!pathToMatch && location.pathname.includes(pathToMatch);
            return (
              <Link
                to={item.url}
                key={item.url}
                className={cn(
                  "cursor-pointer no-underline disabled:pointer-events-none disabled:opacity-40 border-border-2 border-0 flex w-full flex-nowrap items-center gap-2 rounded-md bg-transparent p-2 text-text-secondary transition-colors duration-200 ease-out-quint hover:bg-bg-additional-2 hover:text-text-primary h-9",
                  urlIsActive ? "bg-bg-additional-2 text-text-white" : ""
                )}
              >
                <HomeIcon className="h-5 w-5 shrink-0 text-current" />
                <span className="leading-normal text-md text-text-primary whitespace-nowrap font-inherit opacity-0 transition-opacity group-hover:opacity-100">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-999 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out-quint",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      >
        <div
          className={cn(
            "absolute group top-0 left-0 h-full w-full max-w-full bg-bg-primary border-r border-border-1 px-4 py-6 flex flex-col transition-transform duration-300 ease-out-quint",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <HomeLogo className="w-24" />
            <X className="cursor-pointer" onClick={onClose} />
          </div>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            {sideBarMenu.map((item) => {
              const pathToMatch = item?.url
                ? item?.url.split("/")?.at(-1)
                : undefined;
              const urlIsActive =
                !!pathToMatch && location.pathname.includes(pathToMatch);
              return (
                <Link
                  to={item.url}
                  key={item.url}
                  className={cn(
                    "cursor-pointer no-underline disabled:pointer-events-none disabled:opacity-40 border-border-2 border-0 flex w-full flex-nowrap items-center gap-2 rounded-md bg-transparent p-2 text-text-secondary transition-colors duration-200 ease-out-quint hover:bg-bg-additional-2 hover:text-text-primary h-9",
                    urlIsActive ? "bg-bg-additional-2 text-text-white" : ""
                  )}
                >
                  <HomeIcon className="h-5 w-5 shrink-0 text-current" />
                  <span className="leading-normal text-md text-text-primary whitespace-nowrap font-inherit opacity-0 transition-opacity group-hover:opacity-100">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
