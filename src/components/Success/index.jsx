import React from 'react';
import "./Success.css"

export const SuccessMessage = () => {
  return (
    <div className="success-message">
      <span role="img" aria-label="success-emoji">✅</span>
      <p>¡Se han enviado los datos correctamente!</p>
    </div>
  );
};
