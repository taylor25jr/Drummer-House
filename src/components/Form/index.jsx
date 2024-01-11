import React from "react";
import "./Form.css";
import { useForm } from "../../hooks/useForm";
import { Loader } from "../Loader";
import { SuccessMessage } from "../Success";

const intialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validation = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Este campo no puede quedar vacio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Este campo solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email es incorrecto";
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo asunto es requerido";
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo comentarios es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo comentarios solo acepta 255 caracteres";
  }
  return errors;
};

export const Form = () => {
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
        <div className="container__form">
          <h1 className="container__form__title">Formulario de contacto</h1>
          <form className="container__form__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              onChange={handleChange}
              value={form.name}
              onBlur={handleBlur}
              required
            />
            {errors.name && <p>{errors.name}</p>}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Escribe tu email"
              onChange={handleChange}
              value={form.email}
              onBlur={handleBlur}
              required
            />
            {errors.email && <p>{errors.email}</p>}
            <br />
            <input
              type="text"
              name="subject"
              placeholder="Escribe tu asunto a tratar"
              onChange={handleChange}
              value={form.subject}
              onBlur={handleBlur}
              required
            />
            {errors.subject && <p>{errors.subject}</p>}
            <br />
            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder="Escribe tus comentarios"
              value={form.comments}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            ></textarea>
            {errors.comments && <p>{errors.comments}</p>}
            <input type="submit" value="Enviar" />
          </form>
          {response && <SuccessMessage />}
        </div>
      )}
    </>
  );
};
