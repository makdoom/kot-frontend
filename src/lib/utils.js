import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const capitalize = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace("-", " ") // Convert the string to lowercase
    .split(" ") // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join words back with spaces
}
