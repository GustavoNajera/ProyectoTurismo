import logo from "@/images/resources/logo-1.png";
import logoMobile from "@/images/resources/logo-blanco.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: []
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: []
  },
  {
    id: 4,
    name: "About",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-instagram", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "71114182",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "sanjoseairportshuttlecr@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logoMobile
};

export default headerData;
