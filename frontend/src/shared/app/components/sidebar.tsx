import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router";
import HomeLogo from "@/shared/assets/logo.svg?react";
import Legend from "@/shared/assets/legend.svg?react";
import { sideBarMenu } from "@/shared/lib/data";
export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const location = useLocation();
  return (
    <>
      <div className="hidden fixed  group lg:flex z-9999 h-screen flex-col border-r border-border-1 bg-bg-primary px-2 py-4 w-[52px] hover:w-[225px] transition-[width] duration-300 ease-out-quint overflow-hidden">
        <Link
          className="hidden items-center gap-3 mb-6 group-hover:flex transition-opacity duration-300 ease-out-quint border-b border-border-1 lg:border-b-0"
          to={"/"}
          replace
        >
          <HomeLogo />
        </Link>

        <Link
          className="flex items-center mb-6 opacity-100 group-hover:hidden transition-opacity duration-300 ease-out-quint"
          to={"/"}
          replace
        >
          <Legend className="w-full h-10 text-text-primary" />
        </Link>

        <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
          {sideBarMenu.map((item) => {
            const urlIsActive = location.pathname === item.url;

            return (
              <Link
                to={item.url}
                key={item.url}
                className={cn(
                  "group relative cursor-pointer no-underline disabled:pointer-events-none disabled:opacity-40 border-border-2 border-0 flex w-full items-center gap-2 rounded-sm bg-transparent p-2 text-text-secondary transition-all duration-300 ease-out-quint hover:bg-bg-additional-2 hover:text-text-primary h-9",
                  urlIsActive ? "bg-bg-additional-2 text-text-white" : ""
                )}
              >
                <div className="flex items-center justify-center shrink-0 transition-all duration-300 ease-out-quint text-text-primary size-5">
                  {item.icon}
                </div>

                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out-quint whitespace-nowrap text-text-primary">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="fixed inset-0 ease-out-quint data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fade-out-0 animate-out pointer-events-none z-[-1] bg-transparent transition-colors duration-300 ease-out-quint group-hover:bg-[rgb(0,0,0,40%)]"></div>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-9999 bg-black/40 backdrop-blur-sm transition-[flex-basis] duration-300 ease-out-quint",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      >
        <div
          className={cn(
            "absolute group top-0 left-0 h-full w-full max-w-full bg-bg-primary border-r border-border-1  flex flex-col transition-transform duration-300 ",
            isOpen ? "translate-x-0" : "-translate-x-full "
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-border-1 py-8 px-6">
            <Link to={"/"} replace>
              <HomeLogo className="w-24" />
            </Link>
            <div
              className="h-10 w-10 rounded-full border border-border-1 items-center justify-center flex cursor-pointer"
              onClick={onClose}
            >
              <X />
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground px-4 py-6">
            {sideBarMenu.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                className={cn(
                  "cursor-pointer no-underline disabled:pointer-events-none disabled:opacity-40 border-border-2 border-0 flex w-full flex-nowrap items-center gap-5 rounded-md bg-transparent p-2 text-text-secondary transition-colors duration-200 ease-out-quint hover:bg-bg-additional-1 hover:text-text-primary h-18 "
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center border border-border-1 rounded-sm text-text-primary size-5">
                  {item.icon}
                </div>
                <span className="leading-normal text-md text-text-primary whitespace-nowrap font-inherit ">
                  {item.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
