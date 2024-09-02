import Phone from "../components/icons/contact/Phone.astro";
import Map from "../components/icons/contact/Map.astro";
import clinicData from "../data/clinicData";
import type { Contact } from "../types/contact";


const contact: Contact[] = [
    {
        text: clinicData.UBICATION.text,
        url: clinicData.UBICATION.url,
        target: "_blank",
        icon: Map
    },
    {
        text: clinicData.PHONE,
        url: `tel:${clinicData.PHONE}`,
        target: "_self",
        icon: Phone
    },
];

export default contact;