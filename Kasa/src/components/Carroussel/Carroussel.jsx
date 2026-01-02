import { useState } from "react";
import "./Carroussel.scss";

function Carroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1 ) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
};

return (
    <div className="carroussel">
        {pictures.length > 1 && (
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
        )}

        <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carroussel-image"
        />

        {pictures.length > 1 && (
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        )}

        <div className="image-counter">
            {currentIndex + 1}/{pictures.length}
        </div>
    </div>
    );
};

export default Carroussel