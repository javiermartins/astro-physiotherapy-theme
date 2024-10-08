import Facebook from "../components/icons/social-media/Facebook.astro";
import GitHub from "../components/icons/social-media/GitHub.astro";
import Instagram from "../components/icons/social-media/Instagram.astro";
import type { SocialMedia } from "../types/socialMedia";

const socialMedia: SocialMedia[] = [
    {
        "href": "#",
        "target": "_blank",
        "icon": Instagram
    },
    {
        "href": "#",
        "target": "_blank",
        "icon": Facebook
    },
    {
        "href": "https://github.com/javiermartins",
        "target": "_blank",
        "icon": GitHub
    }
];

export default socialMedia;