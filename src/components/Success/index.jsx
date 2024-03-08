import React from "react";
import Swal from "sweetalert2";
import "./Success.css";

export const SuccessMessage = ({handleClose}) => {

  const handleButtonClick = () => {
    handleClose();
  };

  Swal.fire({
    icon: "success",
    title: "Enviado correctamente!",
    background: "#1E1E1E",
    color: "#FAFAFA",
    customClass: {
      title: "mi-titulo-clase", 
    },
    didRender: () => {
      const buttonElement = document.querySelector('.swal2-confirm');
      buttonElement.addEventListener('click', handleButtonClick);
    },
  });
};
