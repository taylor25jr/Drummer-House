import React from "react";
import "./WindowForm.css";
import { useForm } from "../../hooks/useForm";
import { Loader } from "../Loader";
import { SuccessMessage } from "../Success";
import { CommentsIcon } from "../../components/Svg/CommentsIcon";
import PropTypes from "prop-types";

const intialForm = {
  name: "",
  option: "",
  cellphone: "",
  comments: "",
};

const validation = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Este campo no puede quedar vacio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Este campo solo acepta letras y espacios en blanco";
  }
  if (!form.option) {
    errors.option = "Debes selccionar el servicio a adquirir";
  }
  if (!form.cellphone) {
    errors.cellphone = "Debes de escribir tu numero de telefono";
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo comentarios es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo comentarios solo acepta 255 caracteres";
  }
  return errors;
};

export const WindowForm = ({ formShow }) => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(intialForm, validation);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form className="container__form__form" onSubmit={handleSubmit}>
          <h1 className="container__form__title">
            {formShow
              ? "Formulario de contacto Nacionales"
              : "Formulario de contacto Internacionales"}
          </h1>
          <label  htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            onChange={handleChange}
            value={form.name}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="errorAlert">{errors.name}</p>}
          <br />
          <h3 className="titleLabel">Selecciona tu mejor opción</h3>
          <label htmlFor="clase" className="radioLabel">
            <input
              type="radio"
              name="option"
              id="clase"
              onChange={handleChange}
              value="Clase"
              onBlur={handleBlur}
              required
            />{" "}
            Clase
          </label>
          <br />
          <label htmlFor="claseMensual" className="radioLabel">
            <input
              type="radio"
              name="option"
              id="claseMensual"
              onChange={handleChange}
              value="Clase Mensual"
              onBlur={handleBlur}
              required
            />{" "}
            Clase Mensual
          </label>
          <br />
          <label htmlFor="claseMensual2" className="radioLabel">
            <input
              type="radio"
              name="option"
              id="claseMensual2"
              onChange={handleChange}
              value="Clase Mensual X2"
              onBlur={handleBlur}
              required
            />{" "}
            Clase Mensual x2
          </label>
          <br />
          {errors.option && <p className="errorAlert">{errors.option}</p>}
          <br />
          <label  htmlFor="cellphone">Teléfono</label>
          <input
            type="number"
            name="cellphone"
            placeholder="Escribe tu numero de telefono"
            onChange={handleChange}
            value={form.cellphone}
            onBlur={handleBlur}
            required
          />
          {errors.cellphone && <p className="errorAlert">{errors.cellphone}</p>}
          <br />
          <label  htmlFor="comments">Comentarios</label>
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Escribe algun comentario"
            value={form.comments}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          ></textarea>
          {errors.comments && <p className="errorAlert">{errors.comments}</p>}
          <button type="submit" className="submitButton">
            Enviar
            <CommentsIcon/>
          </button>
          {response && <SuccessMessage />}
        </form>
      )}
    </>
  );
};

WindowForm.propTypes = {
  formShow: PropTypes.bool,
};
