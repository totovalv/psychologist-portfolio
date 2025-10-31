// src/lib/utils.ts
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional classnames + resolve Tailwind conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
