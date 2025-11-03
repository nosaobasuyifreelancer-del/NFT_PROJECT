import { useState, type ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useLocalStorage } from "@uidotdev/usehooks";
import { localStorageKeys } from "@/shared/lib/localStorageKeys";
import { collectionSlides } from "@/shared/lib/data";

export default function RootLayout(props: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen relative">
      <AppImageOverlay />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col relative min-h-0 w-full min-w-0 lg:ml-[52px] ml-0 overflow-x-hidden">
        <Header onToggleSidebar={() => setIsSidebarOpen(true)} />
        <div className="mx-auto flex min-h-0 w-full min-w-0 px-4 lg:px-0">
          {props.children}
        </div>
      </div>
    </div>
  );
}

function AppImageOverlay() {
  const [imageSrc] = useLocalStorage(
    localStorageKeys.collectionCarouselSelectedImageSrc,
    ""
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1000] hidden h-screen w-screen -rotate-180 scale-125 opacity-[0.05] blur-[50px] dark:block">
      <div className="fixed inset-0 h-screen w-screen object-fill z-[-6]">
        <div className="relative size-full">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute size-full inset-0 text-transparent object-cover object-center"
            data-nimg="fill"
            src={imageSrc || collectionSlides[0].image}
          />
        </div>
      </div>
    </div>
  );
}
