import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ComparePage from "../../components/comparePage";

const companyData = [
  {
    id: "lusha-vs-apollo",
    firstCompany: "Lusha",
    secondCompany: "Apollo",
    firstWebsite: "lusha.com",
    secondWebsite: "apollo.io",
    firstCompanyDescription: "1-test description",
    secondCompanyDescription: "2-test description",
  },
  {
    id: "hunter-vs-snovio",
    firstCompany: "Hunter",
    secondCompany: "Sonvio",
    firstWebsite: "hunter.io",
    secondWebsite: "snov.io",
    firstCompanyDescription: "test description",
    secondCompanyDescription: "2-test description",
  },
];

// pages/compare/[id].js
// Generates `/compare/lusha-vs-apollo` and `/compare/zoominfo-vs-cognism`
export async function getStaticPaths() {
  const paths = companyData.map((companyData) => ({
    params: { id: companyData.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  let id = parseInt(params.id);
  //console.log(companyData[id]);

  const actualCompanyData = companyData.filter(
    (companyData) => companyData.id === params.id
  );

  //console.log(actualCompanyData);

  return {
    // Passed to the page component as props
    props: { companyData: actualCompanyData[0] },
  };
}

export default function SoftwareComparision({ companyData }) {
  //console.log("data is", companyData);
  return (
    <>
      <Navbar />
      <ComparePage
        firstCompany={companyData.firstCompany}
        secondCompany={companyData.secondCompany}
        firstWebsite={companyData.firstWebsite}
        secondWebsite={companyData.secondWebsite}
        firstCompanyDescription={companyData.firstCompanyDescription}
        secondCompanyDescription={companyData.secondCompanyDescription}
      />

      <Footer />
    </>
  );
}
