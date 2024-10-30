import ImageProfile from "../../ui/main/profile/ImageProfile";
import img from "../../../resources/images/yo.webp";
import InfoProfile from "../../ui/main/profile/InfoProfile";
import SkillsProfile from "../../ui/main/profile/SkillsProfile";
import style from './Main.module.css'
import Competencies from "../../ui/main/competencies/Competencies";
import Portfolio from "../../ui/main/portfolio/Portfolio";
import AboutMe from "../../ui/main/about me/AboutMe";

export default function Main() {

  return (
    <>
    
     {/* <h1>Programador Web</h1> */}
    <div id="inicio" className={style.imageProfile}>
   
        <div className={style.imageProfile__sectionProfile}>
        <ImageProfile image={img}/>
       
        </div>
        <div className={style.imageProfile__sectionInfo}>
        <InfoProfile/>
        </div>
        <div className={style.imageProfile__sectionSkills}>
        <div className={style.wrapper}>
        <SkillsProfile/>
        </div>
       
        </div>
    </div>

      
      <AboutMe/>
    
   
    <Competencies/>
   
    <Portfolio/>
    </>
  )
}
