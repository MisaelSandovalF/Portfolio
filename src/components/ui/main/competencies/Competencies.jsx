import * as competencies from "../../../../index.js";
import CompetenciesItem from "./CompetenciesItem.jsx";
import style from './Competencies.module.css'
function Competencies() {
  return (
    <div  className={style.competenciesContainer}>
       <h3>Mis competencias</h3>
    
        <CompetenciesItem image={competencies.responsive} title={'Totalmente responsivo'} text={'Una página web responsiva mejora la experiencia del usuario al permitir el acceso desde cualquier dispositivo, asegurando una visualización correcta y cómoda. Esto aumenta la satisfacción y fidelidad del usuario. '}/>
     
     
        <CompetenciesItem image={competencies.performance} title={'Rendimiento'} text={'Crear una página web de alta calidad asegura que los usuarios reciban contenido bien diseñado, rápido y confiable. Una web de calidad mejora la experiencia del usuario al ofrecer un rendimiento óptimo, navegación intuitiva y un diseño atractivo.'}/>
      
   
        <CompetenciesItem image={competencies.metodologias} title={'Metodologias'} text={'Aplicar metodologías en el desarrollo web mejora la experiencia del cliente al ofrecer resultados más rápidos y de alta calidad. Estas metodologías aseguran una entrega más eficiente y efectiva, aumentando así la satisfacción y confianza del cliente en los proyectos.'}/>
  

    
        <CompetenciesItem image={competencies.design} title={'Diseño'} text={'Un buen diseño web enriquece la interacción del usuario al hacer el sitio más intuitivo y atractivo. Esto facilita la navegación y el compromiso, aumentando la satisfacción con el contenido.'}/>

        <CompetenciesItem image={competencies.buenasPracticas} title={'Buenas practicas'} text={'Implementar buenas prácticas en el desarrollo web asegura que el sitio sea más seguro y eficiente. Esto optimiza el rendimiento y la estabilidad, ofreciendo a los usuarios una experiencia más confiable y satisfactoria..'}/>
     
    </div>
  );
}

export default Competencies;
