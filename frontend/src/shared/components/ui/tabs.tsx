import { cn } from "@/shared/lib/utils";
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: number;
}

export default function Tabs({ tabs, defaultActive = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="flex flex-col w-full py-1">
      <div className="flex gap-6 border-b border-border">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative pb-2 font-medium transition-colors cursor-pointer leading-normal text-sm font-inherit",
              activeIndex === index
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary "
            )}
          >
            {tab.label}
            {activeIndex === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-xs" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
}
