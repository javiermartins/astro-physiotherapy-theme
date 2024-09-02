import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Contact {
  text: string;
  url: string;
  target: string;
  icon: AstroComponentFactory;
}
