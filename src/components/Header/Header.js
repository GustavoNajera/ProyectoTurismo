import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { icons, navItems, social, logo } = headerData;
const firstSocial = social[0];

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu } = useRootContext();

  return (
    <header
      className={`main-header${
        pageTitle === "Home Two" ? " main-header-two" : ""
      } clearfix`}
    >
      <div className="main-header__top">
        <Container>
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                {icons.map(({ id, icon, content, subHref }) => (
                  <li key={id}>
                    <div className="icon">
                      <span className={icon}></span>
                    </div>
                    <div className="text">
                      <a href={`${subHref}:${content}`}>{content}</a>
                    </div>
                  </li>
                ))}

                <li key={3}>
                    <div className="icon">
                      <span className={`fab ${firstSocial.icon}`}></span>
                    </div>
                    <div className="text">
                      <a target="_blank" rel="noreferrer" href={firstSocial.link}> {firstSocial.content}</a>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <nav
        className={
          scrollTop
            ? `stricky-header stricked-menu main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } stricky-fixed slideInDown animated clearfix`
            : `main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } slideIn animated clearfix`
        }
      >
        <div
          className={
            scrollTop
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }
        >
          <Container className="clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <Link href="/">
                    <a>
                      <Image
                        src={logo.src}
                        alt=""
                        className="logo-menu"
                      />
                    </a>
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <span
                    onClick={() => toggleMenu()}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </span>
                  <ul className="main-menu__list">
                    {navItems.map((navItem) => (
                      <NavItem key={navItem.id} navItem={navItem} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Header;
