import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
import stylePixel from "../main/about me/Pixel.module.css";
import Pixel from "../main/about me/Pixel";
import Swal from "sweetalert2";

function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!form.current["user_name"].value) {
      newErrors.user_name = "El nombre es requerido.";
    }
    if (!form.current["user_email"].value) {
      newErrors.user_email = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(form.current["user_email"].value)) {
      newErrors.user_email = "El correo no es válido.";
    }
    if (!form.current["message"].value) {
      newErrors.message = "El mensaje es requerido.";
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm("service_q0tz29l", "template_f9szjem", form.current, {
          publicKey: "HF02YO1fbSOzo7KT1",
        })
        .then(
          () => {
            Swal.fire({
              title: "¡Enviado!",
              text: "Tu mensaje ha sido enviado correctamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al enviar el mensaje.",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          }
        );
      
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <h3 className={style.title}>CONTACTO</h3>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="user_name" required />
          {errors.user_name && <p className={style.error}>{errors.user_name}</p>}
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="user_email" required />
          {errors.user_email && <p className={style.error}>{errors.user_email}</p>}
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required />
          {errors.message && <p className={style.error}>{errors.message}</p>}
          <input type="submit" value="Send" />
        </form>
        <div className={stylePixel.containerPixel}>
          <Pixel />
        </div>
      </div>
      <div>
        <p className={style.TextDev}>Misael Sandoval Developer @2024</p>
      </div>
    </>
  );
}

export default Form;
