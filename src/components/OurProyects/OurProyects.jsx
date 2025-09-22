import React from "react";
import "./OurProyects.css";
import HoverClickImage from "./HoverClickImage.jsx";
import * as Assets from "./assetsOurProyects.js";
import { Carousel } from "../OurProyects/Carousel.jsx";

function OurProyects() {
  const images = [Assets.ImgCarrusel, Assets.ImgExample, Assets.ImgExample2];


  return (
    <div className="ourProyects">
      <header className="ourProyects-header">
      </header>
      <main>
      <h1 className="tituloConvocatorias">
          Convocatorias Abiertas
        </h1>
        <Carousel images={images} />

        <img className="img__Rectangle-img" src={Assets.Rectangle}></img>

        <div className="ourProyects__Title">
          <h1>
            Nuestros Proyectos
          </h1>
        </div>
        <div className="textProyect">
          <p>
            Con cada uno de nuestros proyectos aspiramos
            a crear cambios tangibles que transformen las
            realidades de las personas con discapacidad y
            garanticen sus derechos lingüísticos y culturales.
          </p>
        </div>

        <div className="containerImgProyects">

          <div className="cursoLengua">
            <HoverClickImage defaultImage={Assets.CursoLengua} hoverImage={Assets.CursoLenguaOn} altText="Cursos de Lengua" />
          </div>
          <div className="donacionAuxiliar">
            <HoverClickImage defaultImage={Assets.Donacion} hoverImage={Assets.DonacionOn} altText="Donacion de auxiliares auditivos" />
          </div>
          <div className="alfabetizacion">
            <HoverClickImage defaultImage={Assets.Alfabetizacion} hoverImage={Assets.AlfabetizacionOn} altText="Alfabetizacion" />
          </div>
          <div className="habilidadesPracticas">
            <HoverClickImage defaultImage={Assets.Habilidades} hoverImage={Assets.HabilidadesOn} altText="Alfabetizacion" />
          </div>
        </div>

      </main>
    </div>
  );
}

export default OurProyects;
