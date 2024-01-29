import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 row-1">
            <ul>
              <i
                className="bi bi-facebook icon"
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="bi bi-whatsapp icon"
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="bi bi-instagram icon"
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  marginRight: "10px",
                }}
              ></i>
              <p>&copy; Copyright 2024</p>
            </ul>
            <br />
            <p className="madeby">Made by Taylor</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
