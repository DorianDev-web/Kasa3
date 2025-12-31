import { useState } from "react";
import './Accordion.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button className="accordion__header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className="accordion__icon">
          ❯
        </span>
      </button>

      {isOpen && (
        <div className="accordion__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;