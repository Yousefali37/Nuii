import { useState } from 'react';
import './App.css'
import IceCreamCard from './Components/Ice Cream Card/IceCreamCard';
import data from './Mockup Data/Data.json';

function App() {
  
  const iceCreamFlavors = data;
  const [currentFlavor, setCurrentFlavor] = useState(0);

  return (
    <div
      className="ice-cream-hero"
      style={{
        background: iceCreamFlavors[currentFlavor].background
      }}
    >
      <div 
        className='ice-cream-hero-after'
        style={{
          background: iceCreamFlavors[currentFlavor].beforeBackground
        }}
        ></div>
      <div className="ice-cream-hero__content">
        <h1 
          className="ice-cream-hero__title" 
          style={{
            color: iceCreamFlavors[currentFlavor].titleColor
          }}
        >
          The Chill Cream
        </h1>
        <p 
          className="ice-cream-hero__subtitle"
          style={{
            color: iceCreamFlavors[currentFlavor].subTitleColor
          }}
        >
          You Should Try New Taste
        </p>
        <p 
          className="ice-cream-hero__description"
          style={{
            color: iceCreamFlavors[currentFlavor].captionColor
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod, quia, quae,
          voluptatum quibusdam voluptates...
        </p>
        <div className="ice-cream-hero__cards">
          {
            iceCreamFlavors.map((flavor) => (
              <IceCreamCard
                key={flavor.id}
                id={flavor.id}
                currentFlavor={currentFlavor}
                setCurrentFlavor={setCurrentFlavor}
                flavor={flavor.flavor}
                image={flavor.image}
                hoverColor={flavor.hoverColor}
              />
            ))
          }
        </div>
      </div>
      <div 
        className="ice-cream-hero__slider"
        style={{
          background: iceCreamFlavors[currentFlavor].beforeBackground,
          boxShadow: `0px 2px 5px 5px ${iceCreamFlavors[currentFlavor].beforeBackground}`
        }}
      >
        <img src={iceCreamFlavors[currentFlavor].image} alt={iceCreamFlavors[currentFlavor].flavor} className='ice-cream-hero__slider-img' />
        <div className='shape-1'></div>
        <div className='shape-2'></div>
      </div>
    </div>
  )
}

export default App
