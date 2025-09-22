import React from "react";
import "./Contact.css";
import TituloRectangulo from "../../assets/ImgContact/Rectangle-6-1.webp";
import Logo from "../../assets/ImgContact/LogoRemasterizado_TMM-1.webp";
import TituloLogo from "../../assets/ImgContact/IsotipoTMM.webp";
import Telefono from "../../assets/ImgContact/telefono.webp";
import Ubicacion from "../../assets/ImgContact/ubicacion.webp";
import Correo from "../../assets/ImgContact/correo.webp";

function Contact() {
    return (
        <div className="contact">
            <div className="logo-container">
                <img className="logoImg" src={Logo} alt="Logo Toma mi mano" />
                <img className="titulo" src={TituloLogo} alt="Texto Toma mi mano" />
            </div>
            <div className="contacto">
                <img className="recuadroImg" src={TituloRectangulo} alt="Recuadro" />
                <div className="contactoTitulo">
                    <h1>Contacto</h1>
                </div>
            </div>
            <div className="trabajemos">
                <div className="tituloTrabajemosJuntos">
                    <h2>Trabajemos juntos</h2>
                    <div className="textoTrabajemos">
                        <p>
                            Si estás interesado en establecer alianzas educativas,  realizar una donación,
                            ser voluntario o colaborar de cualquier manera, no dudes en ponerte en contacto
                            con nosotros. Estamos aquí para ayudar y trabajar juntos en nuevas oportunidades.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.029653070154!2d-98.97290295959084!3d19.36786866590634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e32def83fd41%3A0x686e64ddf9af6c34!2sToma%20Mi%20Mano%2C%20IAP.!5e0!3m2!1ses-419!2smx!4v1746068889101!5m2!1ses-419!2smx"
                    width="300"
                    height="225"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
                        <div className="datosContacto">
                <div className="contactoItem">
                    <img className="telefono" src={Telefono} alt="Telefono" />
                    <div className="numeroTelefono">
                        <h1>(+52) 55 7469 3181</h1>
                    </div>
                </div>

                <div className="contactoItem">
                    <img className="ubicacion" src={Ubicacion} alt="Ubicación" />
                    <div className="textoUbicacion">
                        <h1>
                            Calle 13 Mzn 117 lote 4 Colonia Valle de <br />
                            los Reyes. La Paz, Estado de México
                        </h1>
                    </div>
                </div>

                <div className="contactoItem">
                    <img className="correo" src={Correo} alt="Correo electrónico" />
                    <div className="textoCorreo">
                        <h1>tomamimano.2017@hotmail.com</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
export { Contact };