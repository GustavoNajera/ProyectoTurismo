import React from "react";
import imgWhatsApp from "@/images/resources/whatsapp.webp";


const WhatsApp = () => {
  return (
    <section>
      <a target="_blank" href="https://wa.me/71114182?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio">
        <img class="btn-whatsapp" src={imgWhatsApp.src} width="64" height="64" alt="Cotiza con nosotros"/>
      </a>
    </section>
  );
};

export default WhatsApp;
