/**
 * Resolve an asset by filename from src/assets/ at build time.
 * Returns the public URL or null if the file is not present.
 *
 * Usage:
 *   const url = getAsset("red.png");
 *   <img src={url ?? ""} ... />
 *
 * When the user uploads a new image into src/assets/, Vite picks it up
 * on the next reload and getAsset() will resolve it automatically.
 */
const modules = import.meta.glob("/src/assets/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const getAsset = (filename: string): string | null => {
  const key = `/src/assets/${filename}`;
  return modules[key] ?? null;
};
