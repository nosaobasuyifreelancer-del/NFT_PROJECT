import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-dvw relative">
      <Sidebar />
      <div className="flex flex-col relative min-h-0 w-full min-w-0 ml-[52px]">
        <Header />
        <div className="min-h-0 w-full min-w-0 max-w-[calc(theme(screens.4xl)+48px)] p-4 lg:p-6 flex flex-1">
          {props.children}
        </div>
      </div>
    </div>
  );
}
