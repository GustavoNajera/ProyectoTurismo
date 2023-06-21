import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { social, navItems, logoMobile, icons } = headerData;

const MobileMenu = () => {
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <div
      className={`mobile-nav__wrapper  animated fadeInLeft${
        menuStatus ? " expanded" : ""
      }`}
    >
      <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <Image src={logoMobile.src} width={155} alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>


        <ul className="mobile-nav__contact list-unstyled">
          {icons.map(({ id, icon, content, subHref }) => (            
            <li key={id}>
              <i className={(icon=="icon-phone-call")?"fa fa-phone-alt":"fa fa-envelope"}></i>
              <a href={`${subHref}:${content}`}>{content}</a>
            </li>
          ))}
        </ul>
        

        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index} target="_blank" rel="noreferrer" className={`fab ${icon}`}> Instagram</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
