import { cn } from "@/shared/lib/utils";
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: number;
  variant?: "default" | "profile";
}

export default function Tabs({
  tabs,
  defaultActive = 0,
  variant = "default",
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="flex flex-col w-full py-1 overflow-hidden">
      <div
        className={cn(
          "flex gap-6",
          variant === "profile" ? "" : "border-b border-border"
        )}
      >
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          const textClass =
            variant === "profile"
              ? isActive
                ? "text-primary"
                : "text-text-primary hover:text-primary"
              : isActive
              ? "text-text-primary"
              : "text-text-secondary hover:text-text-primary";

          return (
            <button
              key={tab.label}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative pb-2 font-medium transition-colors cursor-pointer leading-normal text-sm font-inherit",
                textClass
              )}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-xs" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col overflow-y-auto mt-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
