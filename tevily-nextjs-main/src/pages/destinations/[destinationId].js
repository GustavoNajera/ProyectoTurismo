import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import destinationsOne from "@/data/destinationsOne";
import { useRouter } from 'next/router';


const DestinationsDetails = () => {
  const destinationDetail = getDestinationDetail();
  if(!destinationDetail)
    return pageGettingData();
  return pageDetail(destinationDetail);
};


const getDestinationDetail = () =>{
  const router = useRouter();
  const destinationId = Number(router.query.destinationId);
  return destinationsOne.find(d => d.id === destinationId);
};


const pageGettingData = () => (
  <> 
      <Layout pageTitle="Destinations Details">
        <PageHeader title="Destinations Details" page="Destinations Details" />
        <p style={{margin: "50px"}}>Getting data, please wait...</p>
      </Layout>
    </>
);

const pageDetail = (destinationDetail) => (
  <> 
    <Layout pageTitle={destinationDetail.title}>
      <PageHeader title="Destinations Details" page={destinationDetail.title} />
      <DestinationsDetailsPage destinationDetail={destinationDetail}/>
    </Layout>
  </>
);


export default DestinationsDetails;