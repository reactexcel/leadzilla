import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ComparePage from "../../components/comparePage";
import { companyData } from "../../data/comaprePageData";

// const companyData = [
//   {
//     id: "lusha-vs-apollo",
//     firstCompany: "Lusha",
//     secondCompany: "Apollo",
//     firstWebsite: "lusha.com",
//     secondWebsite: "apollo.io",
//     firstCompanyDescription: "Lusha description",
//     secondCompanyDescription: "Apollo description",
//     firstCompanyPara1: "Lusha para1",
//     secondCompanyPara1: "Apollo para1",
//     firstCompanyPara2: "Lusha para2",
//     secondCompanyPara2: "Apollo para2",
//   },
//   {
//     id: "hunter-vs-snovio",
//     firstCompany: "Hunter",
//     secondCompany: "Sonvio",
//     firstWebsite: "hunter.io",
//     secondWebsite: "snov.io",
//     firstCompanyDescription: "Hunter description",
//     secondCompanyDescription: "Sonvio description",
//     firstCompanyPara1: "Hunter para1",
//     secondCompanyPara1: "Sonvio para1",
//     firstCompanyPara2: "Hunter para2",
//     secondCompanyPara2: "Sonvio para2",
//   },
// ];

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
        firstCompanyPara1={companyData.firstCompanyPara1}
        secondCompanyPara1={companyData.secondCompanyPara1}
        firstCompanyPara2={companyData.firstCompanyPara2}
        secondCompanyPara2={companyData.secondCompanyPara2}
      />

      <Footer />
    </>
  );
}
