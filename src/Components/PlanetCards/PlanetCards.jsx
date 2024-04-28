import { useState, useEffect } from 'react';
import './PlanetCards.css';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import fondo from '../assets/NGC-604.jpg';
import carina from '../assets/Carina Nebula.jpg';
import galaxy from '../assets/galaxy-m84.jpg';
import stars from  '../assets/stars.jpg';
import bubble from '../assets/bubbe.jpg';
import orion from '../assets/orion.jpg';
import leo from '../assets/leo.jpg';
import stellar from '../assets/stellar.jpg';
import Loader from '../Loader/Loder'; // Importa el componente Loader

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 9999;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: aliceblue;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

function PlanetCards() {
  const [isLoading, setIsLoading] = useState(true); // Estado local para controlar la visibilidad del loader

  useEffect(() => {
      // Simula una carga asincrónica
      const timer = setTimeout(() => {
          setIsLoading(false); // Cambia el estado del loader a falso después de un tiempo de espera (simulando que la carga ha finalizado)
      }, 6000);

      // Limpia el temporizador al desmontar el componente
      return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar el componente


  const [selectedImage, setSelectedImage] = useState(null);

  const images = [fondo, carina, galaxy, stars, bubble, orion, leo, stellar];
  const cardInfo = [
    { title: 'Region NGC 604', description: 'Star-forming region NGC 604' },
    { title: 'Carina Nebula', description: '“Cosmic Cliffs” in Carina Nebula' },
    { title: 'M81 Galaxy', description: 'Spiral galaxy known as Messier 81, or M81' },
    { title: 'A Star-Formation', description: 'Located around 10 million light-years away in the constellation of Canes Venatici' },
    { title: 'Star a Giant Bubble', description: 'Enormous bubble being blown into space by a super-hot, massive star' },
    { title: 'Orion Nebula', description: 'Orion nebula, an intense star-forming region of gas and dust' },
    { title: 'Leo', description: 'A runaway star, called CW Leo, plowing through the depths of space and piling up interstellar material' },
    { title: 'Stellar shrapnel', description: 'Several thousand years ago, a star some 160,000 light-years away from us exploded, scattering stellar shrapnel across the sky' }
  ];

  const openImage = (index) => {
    setSelectedImage({ src: images[index], title: cardInfo[index].title, description: cardInfo[index].description });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
    {isLoading && <Loader />}
      <Fade bottom cascade>
        <CardContainer>
          {images.map((image, index) => (
            <Card key={index}>
              <CardImg src={image} alt={`Planet ${index + 1}`} onClick={() => openImage(index)} />
              <CardContent>
                <CardTitle>{cardInfo[index].title}</CardTitle>
                <CardDescription>{cardInfo[index].description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Fade>

      {selectedImage && (
        <>
          <Overlay onClick={closeImage} />
          <ModalContainer>
            <CloseButton onClick={closeImage}>×</CloseButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            <h2>{selectedImage.title}</h2>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default PlanetCards;
