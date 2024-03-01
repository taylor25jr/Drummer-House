import React, { useEffect, useState } from "react";
import "./UpArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Link
        to="#"
        className={isVisible ? "appear" : "disappear"}
        title="Volver arriba"
      >
        <span className="fa-stack">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="fa-stack-1x fa-inverse"
          />
        </span>
      </Link>
    </>
  );
};
