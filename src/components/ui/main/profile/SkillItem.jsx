import PropTypes from 'prop-types'
import style from './SkillItem.module.css'
function SkillItem({image, alt}) {
   
  return (
    <img className={style.image} src={image} alt={alt}/>
  )

  
}

SkillItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }

export default SkillItem;