import Phone from "../components/icons/contact/Phone.astro";
import Map from "../components/icons/contact/Map.astro";


const contact = [
    {
        text: "Calle AstroFisio, 4",
        url: "https://www.google.com/maps/place/#",
        target: "_blank",
        icon: Map
    },
    {
        text: "555-1234567",
        url: "tel:555-1234567",
        target: "_self",
        icon: Phone
    },
];

export default contact;