import style from './Pixel.module.css'
import * as pixel from "../../../../index.js";
function Pixel() {
  return (
    
      <div className={style.wrapper}>
        <img
        className={style.containerPixel__pixelImg}
        src={pixel.pixelTwo}
        alt="pixel"
      />
      <img
        className={style.containerPixel__pixelImg}
        src={pixel.pixelOne}
        alt="pixel"
      />
      {/* <p className={style.containerPixel__texto}>DESARROLLADOR WEB</p> */}
      </div>
 
  );
}

export default Pixel;
