import { useState, type ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function RootLayout(props: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen w-screen relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col relative min-h-0 w-full min-w-0 lg:ml-[52px] ml-0 overflow-x-hidden">
        <Header onToggleSidebar={() => setIsSidebarOpen(true)} />
        <div className="mx-auto min-h-0 w-full min-w-0 px-4 lg:px-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}
