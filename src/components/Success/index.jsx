import React from 'react';
import Swal from 'sweetalert2'
import "./Success.css"

export const SuccessMessage = () => {
Swal.fire({
  icon: "success",
  title: "Felicidades!",
  text: "Enviado Correctamente!",
  background:"#1E1E1E",
  color:"#FAFAFA",
  customClass: {
    title: 'mi-titulo-clase', // Agrega tu clase CSS para el título
    content: 'mi-contenido-clase', // Agrega tu clase CSS para el contenido
  },
});
};
