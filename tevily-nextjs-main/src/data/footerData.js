import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  phone: '71114182',
  year: new Date().getFullYear(),
  author: "San José Airport Shuttle",
  about:
    "Welcome to San José Airport Shuttle, your best travel travel agency",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "71114182",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "sanjoseairportshuttlecr@gmail.com",
      subHref: "mailto",
    }
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" }
  ],
  explore: [
    { id: 3, link: "tel:71114182", title: "Contact" },
  ],
};

export default footerData;
