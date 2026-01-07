import { useState } from "react"; // Hook React ( Stock une valeur qui change )
import "./Carroussel.scss";

function Carroussel({ pictures }) { // Prop Pictures ( Tableau qui contient les images )
    const [currentIndex, setCurrentIndex] = useState(0); // currentIndex = image actuel & setCurrentIndex = fonction pour changer l'index

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Revenir à 0 quand on dépasse la dernière image
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => // Si on est à la première image on revient à la dernière sinon on recule d'une image
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carroussel">
            {pictures.length > 1 && (
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button> // Chevron Gauche + Bouton Précédent
            )}

            <img
                src={pictures[currentIndex]} // Affiche l'image correspondant à l'index
                alt={`Slide ${currentIndex + 1}`}
                className="carroussel-image"
            />

            {pictures.length > 1 && (
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button> // Chevron droit + Bouton Suivant
            )}

            {pictures.length > 1 && ( // Si plus d'une image on affiche le compteur
                <div className="image-counter">
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}
        </div> 
    );
};

export default Carroussel