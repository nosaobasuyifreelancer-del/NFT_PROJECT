import { useState, type ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function RootLayout(props: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-dvh w-dvw relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col relative min-h-0 w-full min-w-0 lg:ml-[52px] ml-0">
        <Header onToggleSidebar={() => setIsSidebarOpen(true)} />
        <div className="min-h-0 w-full min-w-0  p-4 lg:p-6 flex flex-1">
          {props.children}
        </div>
      </div>
    </div>
  );
}
