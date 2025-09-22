import React from "react";
import "./Banner.css";
import ImgChild from "../../assets/ImgBanner/ImgChildHD.webp";
import ImgEstado from "../../assets/ImgBanner/logo-1.webp";
import ImgAvalados from "../../assets/ImgBanner/h2-_section-title-2-sec-.webp"
import ImgJunta from "../../assets/ImgBanner/CARTAS-TMM-1.webp"

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner__left">
          <div className="banner__text">
            <h1>
              TRANSFORMANDO<br />
              VIDAS CON<br />
              EDUCACIÓN<br />
              INCLUSIVA
            </h1>
          </div>
          <div className="banner__buttons">
            <a href="/proyectos" className="proyect__button">PROYECTOS</a>
            <a href="/diccionario" className="dictionary__button">Diccionario</a>
          </div>
        </div><h1></h1>

        <div className="img__child">
          <img className="img__child-img" src={ImgChild} alt="Niño mostrando lenguaje de señas" />
        </div>
      </div>
      <div>
        {/*texto*/}
        <div className="img__avalados">
          <img className="img__avalados-img" src={ImgAvalados} alt="Avalados por" />
        </div>

        <div className="img__estado">
          <img className="img__estado-img" src={ImgEstado} alt="Logotipo Estado de Mexico" />
        </div>

        <div className="img__junta">
          <img className="img__junta-img" src={ImgJunta} alt="Logotipo de la Junta de Asistencia Privada del Estado de Mexico" />
        </div>
      </div>
    </>
  );
}

export { Banner };