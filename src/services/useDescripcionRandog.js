import { useState } from "react";

export function useDescripcionRandog() {
    const FRASES_GRACIOSAS = [
        "Tiene cara de que come tacos sin pedir permiso.",
        "Parece que entendió todos tus problemas y te juzgó un poco.",
        "Este lomito claramente lidera una banda callejera.",
        "Este perrito los viernes sale temprano de la chamba y gana más que tú",
        "Perfecto para abrazos, no tanto para seguir instrucciones.",
        "Podría ser alcalde de tu colonia y nadie se quejaría.",
        "Tiene energía de lunes por la mañana con cuerpo de viernes por la noche.",
        "Pues yo si le veo parecido a tí.",
        "Este perrito conoce tus secretos y tiene ganas de contarlos.",
        "Si el chisme tuviera cara, sería este peligroso.",
        "Este perrito quiere saber: ¿por que le das croquetas de las baratas?."
    ]

    const [descripcion, setDescripcion] = useState(() => {
        const indice = Math.floor(Math.random() * FRASES_GRACIOSAS.length);
        return FRASES_GRACIOSAS[indice];
    })

    const nuevaDescripcion = () => {
        const indice = Math.floor(Math.random() * FRASES_GRACIOSAS.length);
        setDescripcion(FRASES_GRACIOSAS[indice]);
    };

    console.log(descripcion)
    return {descripcion, nuevaDescripcion}
}