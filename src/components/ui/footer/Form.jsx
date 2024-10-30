import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Form.module.css";
import stylePixel from "../main/about me/Pixel.module.css";
import Pixel from "../main/about me/Pixel";
function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q0tz29l", "template_f9szjem", form.current, {
        publicKey: "HF02YO1fbSOzo7KT1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className={style.wrapper}>
        <h3 className={style.title}>CONTACTO</h3>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="user_name" required />
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" />
          <input type="submit" value="Send" required />
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
