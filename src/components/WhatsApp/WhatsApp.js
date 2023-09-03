import React from "react";
import imgWhatsApp from "@/images/resources/whatsapp.webp";
import { Image } from "react-bootstrap";


const WhatsApp = () => {
  return (
    <section>
      <a target="_blank" rel="noreferrer" href="https://wa.me/71114182?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio">
        <Image className="btn-whatsapp" src={imgWhatsApp.src} width="64" height="64" alt="Cotiza con nosotros"/>
      </a>
    </section>
  );
};

export default WhatsApp;
