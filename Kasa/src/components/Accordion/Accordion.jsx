import { useState } from "react";
import './Accordion.scss';

// - title -> le titre de l'accordéon
// - content -> le texte à afficher quand l'accordéon est ouvert
function Accordion({ title, content }) {
  // Déclaration d'un state appelé isOpen
  // isOpen = état actuel (true ou false)
  // setIsOpen = fonction pour modifier cet état
  // false = l'accordéon est fermé par défaut
  const [isOpen, setIsOpen] = useState(false)

  // Fonction appelée quand on clique sur l'accordéon
  // Elle inverse simplement l'état (ouvert ↔ fermé)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    // div principale de l'accordéon
    // Si isOpen est true -> on ajoute la classe "open"
    // Sinon -> aucune classe supplémentaire
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      {/* Bouton cliquable qui ouvre / ferme l'accordéon onClick
      déclenche la fonction toggleAccordion */}
      <button className="accordion-header" onClick={toggleAccordion}>
        {/* Titre de l'accordéon */}
        <h3>{title}</h3>
        {/* Icone animée en CSS */}
        <span className={`accordion-icon ${isOpen ? "rotate" : ""}`}>
          ❯
        </span>
      </button>

      {/* 
      - la classe "open" est ajoutée ou retirée selon l'état
      - c'est indispensable pour permettre l'animation CSS
      */}
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

// Export du composant pour l'utiliser ailleurs
export default Accordion;