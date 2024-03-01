import React, { useEffect, useState } from "react";
import "./UpArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const UpArrowButton = () => {
    
  const [isVisible, setIsVisible] = useState(false);

  const handleSmoothScrollUp = () => {
    const scrollY = window.scrollY;
    console.log(scrollY);

    if (scrollY > 150 && !isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    handleSmoothScrollUp();
    window.addEventListener("scroll", handleSmoothScrollUp);
    return () => {
      window.removeEventListener("scroll", handleSmoothScrollUp);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <>
      <button
        className={isVisible ? "appear" : "disappear"}
        title="Volver arriba"
        onClick={handleScroll}
      >
        <span className="fa-stack">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="fa-stack-1x fa-inverse"
          />
        </span>
      </button>
    </>
  );
};
