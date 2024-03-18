import React, { useState } from "react";
import { helpHttp } from "../Helper/helpHttp";

export const useForm = (initialForm, validations) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validations(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/luisdavidferrerconde@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
          setForm(initialForm);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
