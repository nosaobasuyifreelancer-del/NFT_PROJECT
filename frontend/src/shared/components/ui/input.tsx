import { cn } from "@/shared/lib/utils";
import * as React from "react";

interface InputComponentProps extends React.ComponentProps<"input"> {
  variant?: "search" | "default";
  inputSize?: "sm" | "md" | "lg";
  withIcon?: "left" | "right";
  icon?: React.ReactNode;
}

function Input({
  className,
  type,
  variant = "default",
  inputSize = "sm",
  withIcon,
  icon,
  ...props
}: InputComponentProps) {
  const sizeClass =
    inputSize === "sm"
      ? "h-10 text-sm max-w-[360px]"
      : inputSize === "md"
      ? "h-14 text-base"
      : "h-20 text-2xl";

  return (
    <div className="w-full relative flex items-center">
      {withIcon === "left" && (
        <div
          className={cn(
            "absolute left-3 top-3 items-center pointer-events-none text-text-secondary size-4 shrink-0 opacity-50 z-100",
            variant === "search" ? "lg:flex hidden " : "flex"
          )}
        >
          {icon}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "inline-flex  items-center whitespace-nowrap hover:bg-bg-secondary-transparent-hover border border-border-1 gap-1.5 px-3 pl-3 w-full rounded-md  pr-2 backdrop-blur-lg dark:bg-bg-primary-transparent transition-[background-color,box-shadow] duration-150 ease-out outline-hidden text-text-primary placeholder:text-text-primary ",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          sizeClass,
          variant === "search" && inputSize == "sm"
            ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer"
            : "cursor-text:",
          withIcon === "left"
            ? "pl-10 pr-3"
            : withIcon === "right"
            ? "pl-3 pr-17"
            : "px-3",
          className
        )}
        {...props}
      />

      {withIcon === "right" && (
        <div
          className={cn(
            "absolute right-10 items-center pointer-events-none text-text-secondary size-4 shrink-0 opacity-50",
            variant === "search" ? "lg:flex hidden " : "flex"
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
}

export { Input };
