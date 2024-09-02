import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface SocialMedia {
    href: string;
    target: string;
    icon: AstroComponentFactory;
}