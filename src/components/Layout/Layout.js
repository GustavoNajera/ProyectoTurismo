import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader/Preloader";
import { useRootContext } from "@/context/context";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";
import SiteFooter from "../SiteFooter/SiteFooter";
import WhatsApp from "@/components/WhatsApp/WhatsApp";

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} || sanjoseairportshuttle</title>
      </Head>
      <Preloader loading={loading} />
      <main style={{ opacity: loading ? 0 : 1 }} className="page-wrapper">
        <Header pageTitle={pageTitle} />
        {children}
        <SiteFooter />
        <WhatsApp/>
      </main>
      {menuStatus && <MobileMenu />}
      <Search />
    </>
  );
};

export default Layout;
