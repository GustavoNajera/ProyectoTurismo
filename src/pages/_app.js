import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/tevily-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "react-datepicker/dist/react-datepicker.css";

// extra css
import "@/styles/globals.css";
import "@/styles/tevily.css";
import "@/styles/tevily-responsive.css";
import "@/styles/personal-style.css";
import "@/styles/whatsAppStyle.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
