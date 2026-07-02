import { generateOGImage } from "@/lib/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return generateOGImage();
}
