
import  { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import PlanetCards from '../PlanetCards/PlanetCards';
import Loader from '../Loader/Loder' ;// Importa el componente Loader

function Home() {
    const [isLoading, setIsLoading] = useState(true); // Estado local para controlar la visibilidad del loader

    useEffect(() => {
        // Simula una carga asincrónica
        const timer = setTimeout(() => {
            setIsLoading(false); // Cambia el estado del loader a falso después de un tiempo de espera (simulando que la carga ha finalizado)
        }, 6000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <>
            <Banner/>
            <PlanetCards/>
            {isLoading && <Loader />} {/* Muestra el loader solo cuando isLoading es verdadero */}
        </>
    );
}

export default Home;
