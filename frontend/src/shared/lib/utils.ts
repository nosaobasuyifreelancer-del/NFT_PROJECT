import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function truncateMiddle(text: string, startChars = 6, endChars = 6) {
  if (text.length <= startChars + endChars + 3) return text;
  return `${text.slice(0, startChars)}...${text.slice(-endChars)}`;
}
