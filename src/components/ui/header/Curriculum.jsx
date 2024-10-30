import { Link } from 'react-router-dom'
import style from './Curriculum.module.css'
import { PropTypes } from "prop-types";

export default function Curriculum({url , nombre}) {

  Curriculum.propTypes = {
    url: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,

  }
  
  return (

    <div>
     
      <Link className={style.linkCV} target="_blanck" to={url} >
        {nombre}
      </Link>
    </div>
   
  )




}







