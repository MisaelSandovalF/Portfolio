import style from './AboutMe.module.css'
import Pixel from './Pixel'
import stylePixel from "../about me/Pixel.module.css";
function AboutMe() {
  return (
  
    <div id="sobre-mi" className={style.textContainer}>
      <div  className={style.textContainer__wrapper}>
      <h2>Sobre mí..</h2>
      <p>Me encanta el mar. Es algo tan complejo que me causa curiosidad descubrir todos los misterios que guarda. Creo que por eso me gusta programar, ya que soy curioso y me atraen las cosas complejas. Además, como todo programador, soy apasionado de los videojuegos, especialmente aquellos que exigen mayor concentración, disciplina y enfoque. Esto es solo una pequeña parte de mí, pero espero que con esto puedas conocerme un poco más. :D</p> 
      </div>



   
<div className={stylePixel.containerPixelFooter}>
<Pixel />
</div>
      
   
     
    </div>
  )
}

export default AboutMe