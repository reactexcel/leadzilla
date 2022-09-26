import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const companyData = [
  {
    id: "lusha-vs-apollo",
    firstCompany: "Lusha",
    secondCompany: "Apollo",
    firstCompanyDescription: "1-test description",
    secondCompanyDescription: "2-test description",
  },
  {
    id: "hunter-vs-snovio",
    firstCompany: "Hunter",
    secondCompany: "Sonvio",
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
      <Head>
        <title>
          {companyData.firstCompany} vs {companyData.secondCompany}{" "}
        </title>

        <meta
          name="description"
          content={`compare ${companyData.firstCompany} and ${companyData.secondCompany}`}
        />
      </Head>
      <h1>Comparision</h1>
      <h1>-----------------</h1>
      <h1>page url is {companyData.id}</h1>
      <h1>
        {companyData.firstCompany} vs {companyData.secondCompany}
      </h1>
      <h1>{companyData.firstCompanyDescription}</h1>
      <h1>{companyData.secondCompanyDescription}</h1>

      {/* {companyData.map((companyData) => {
        <h1>{companyData.companyA + companyData.companyB}</h1>;
      })} */}
    </>
  );
}
