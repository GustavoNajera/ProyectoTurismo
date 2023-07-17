import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-instagram", link: "https://instagram.com/transportes_bcj?igshid=MzRlODBiNWFlZA==" },
];

const footerData = {
  logo,
  social,
  phone: '+506 7111-4182',
  year: new Date().getFullYear(),
  author: "San José Airport Shuttle",
  about:
    "Welcome to San José Airport Shuttle, your best travel agency",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+506 7111-4182",
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
  ]
};

export default footerData;
