import { cn } from "@/shared/lib/utils";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router";
import HomeLogo from "@/shared/assets/logo.svg?react";

const sideBarMenu = [
  {
    title: "Home",
    url: "/home",
  },
];

export default function Sidebar() {
  return (
    <div className="absolute h-screen flex">
      {/* Sidebar */}
      <div className="group  z-20 flex h-full flex-col border-r border-border-1 bg-bg-primary px-2 py-4 w-[52px] hover:w-[225px] transition-[width] duration-300 ease-out-quint overflow-hidden">
        {/* App Logo */}
        <div className="flex items-center gap-3 mb-6">
          {/* <span className="bg-blue-600 rounded-full h-8 w-8 shrink-0 items-center flex justify-center">
            <LoaderPinwheel />
          </span>
          <span className="text-md font-medium text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            AppName
          </span> */}
          <HomeLogo />
        </div>

        {/* Menu */}
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
                  urlIsActive ? "bg-bg-additional-2 text-text-primary" : ""
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

      {/* Blurred overlay that appears when hovered */}
      <div className="fixed inset-0 ease-out-quint data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fade-out-0 animate-out pointer-events-none z-[-1] bg-transparent transition-colors duration-300 ease-out-quint group-hover:bg-overlay" />
    </div>
  );
}
