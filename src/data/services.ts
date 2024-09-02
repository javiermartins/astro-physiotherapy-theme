import Exercise from "../components/icons/services/Exercise.astro";
import Reshabilitation from "../components/icons/services/Rehabilitation.astro";
import Shield from "../components/icons/services/Shield.astro";
import Massage from "../components/icons/services/Massage.astro";
import type { Service } from "../types/service";


const services: Service[] = [
    {
        title: "Rehabilitación Postoperatoria",
        text: "Ofrecemos programas específicos para ayudar a los pacientes a recuperarse de cirugías, mejorando su movilidad y reduciendo el dolor.",
        icon: Reshabilitation
    },
    {
        title: "Terapia Manual",
        text: "Nuestros fisioterapeutas utilizan técnicas manuales para aliviar el dolor y mejorar la función muscular y articular.",
        icon: Massage
    },
    {
        title: "Ejercicios Personalizados",
        text: "Creamos rutinas de ejercicios adaptadas a las necesidades individuales de cada paciente, para potenciar su recuperación.",
        icon: Exercise
    },
    {
        title: "Prevención de Lesiones",
        text: "Ofrecemos asesoramiento y programas de prevención para evitar lesiones y mejorar el rendimiento físico.",
        icon: Shield
    }
];

export default services;