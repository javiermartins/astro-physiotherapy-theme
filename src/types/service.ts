import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Service {
  title: string;
  text: string;
  icon: AstroComponentFactory;
}
