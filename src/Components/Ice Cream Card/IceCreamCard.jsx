import { useState } from 'react';
import './IceCreamCard.css';

export default function IceCreamCard({ id, currentFlavor,setCurrentFlavor, flavor, image, hoverColor }) {

    const [fullFlavor, setFullFlavor] = useState(15);
    const [isHovered, setIsHovered] = useState(false);

    const handleFlavorChange = () => {
        setCurrentFlavor(id);
    }

    const handleFlavorDetails = () => {
        if (fullFlavor === 15) {
            setFullFlavor(flavor.length);
        } else {
            setFullFlavor(15);
        }
    }

    return (
        <div 
            className={`ice-cream-card`}
            onClick={handleFlavorChange}
            style={{
                background: isHovered || currentFlavor === id ? hoverColor : ""
            }}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <img src={image} alt={flavor} className={`ice-cream-card__image`} />
            <h2 className="ice-cream-card__title">{flavor.slice(0, fullFlavor)} <br /> <span className='ice-cream-card__title-readMore' onClick={handleFlavorDetails}>Read {fullFlavor === 15 ? "More" : "Less"}</span></h2>
        </div>
    );
}