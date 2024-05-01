

import Banner from '../Banner/Banner';
import PlanetCards from '../PlanetCards/PlanetCards';
// Importa el componente Loader

function Home() {
    
    return (
        <>
            <Banner/>
            <PlanetCards/>
             {/* Muestra el loader solo cuando isLoading es verdadero */}
        </>
    );
}

export default Home;
