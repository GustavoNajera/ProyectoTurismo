import ContactPage from "@/components/ContactPage/ContactPage";
import Information from "@/components/Information/Information";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <PageHeader title="Contact" />
      <ContactPage />
      <Information />
    </Layout>
  );
};

export default Contact;
