import SkillItem from "./SkillItem";
import style from './SkillsProfile.module.css'
import * as skills from '../../../../index.js'


export default function SkillsProfile() {
  return (
    <div className={style.skillContainer}>
        <h3>Skills</h3>
        <div className={style.skillContainer__boxImg}>
            <div  className={style.skillContainer__boxImg__wrapper}>
            <SkillItem image={skills.html} alt={'html'}/>
            </div>
            <div className={style.skillContainer__boxImg__wrapper}>
            <SkillItem image={skills.css} alt={'css'}/>
            </div>
            <div className={style.skillContainer__boxImg__wrapper}>
            <SkillItem image={skills.js} alt={'js'}/>
            </div>
            <div className={style.skillContainer__boxImg__wrapper}>
            <SkillItem image={skills.react} alt={'react'}/>
            </div>
            <div className={style.skillContainer__boxImg__wrapper}>
            <SkillItem image={skills.tailwind} alt={'tailwind'}/>
            </div>
            
            
        </div>
    </div>
  )
}
