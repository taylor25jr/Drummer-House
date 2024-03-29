import React from "react";
import "./Form.css";
import { useForm } from "../../hooks/useForm";
import { Loader } from "../../components/Loader";
import { SocialFooter } from "../../components/SocialFooter";
import { SuccessMessage } from "../../components/Success";
import { CommentsIcon } from "../../components/Svg/CommentsIcon";

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
      <div className="container__form">
        <form className="container__form__form" onSubmit={handleSubmit}>
          {loading ? (
            <Loader />
          ) : response ? (
            <SuccessMessage />
          ) : (
            <>
              <h1 className="container__form__title">Escribeme</h1>
              <label htmlFor="name">Nombre</label>
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
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Escribe tu email"
                onChange={handleChange}
                value={form.email}
                onBlur={handleBlur}
                required
              />
              {errors.email && <p className="errorAlert">{errors.email}</p>}
              <br />
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                name="subject"
                placeholder="Escribe tu asunto a tratar"
                onChange={handleChange}
                value={form.subject}
                onBlur={handleBlur}
                required
              />
              {errors.subject && <p className="errorAlert">{errors.subject}</p>}
              <br />
              <label htmlFor="comments">Comentarios</label>
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
              {errors.comments && (
                <p className="errorAlert">{errors.comments}</p>
              )}
              <button type="submit" className="submitButton">
                Enviar
                <CommentsIcon />
              </button>
            </>
          )}
        </form>
        <SocialFooter />
      </div>
    </>
  );
};
