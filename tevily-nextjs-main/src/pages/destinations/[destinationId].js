import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import destinationsOne from "@/data/destinationsOne";

const DestinationsDetails = ({destinationDetail}) => {
  return (
    <>
      <Layout pageTitle={destinationDetail.title}>
        <PageHeader title="Destinations Details" page={destinationDetail.title} />
        <DestinationsDetailsPage destinationDetail={destinationDetail}/>
      </Layout>
    </>
  );
};

export default DestinationsDetails;


export async function getServerSideProps({ params }) {
  
  var destinationId = Number(params.destinationId);
  var destinationDetail = destinationsOne.find(d => d.id === destinationId);
  
  return {
    props: {
      destinationDetail
    }
  }
}