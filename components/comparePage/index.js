import React from "react";
import Head from "./head";
import SoftwareCard from "./softwareCard";

const SalesSoftwarePage = ({
  firstCompany,
  secondCompany,
  firstWebsite,
  secondWebsite,
  firstCompanyDescription,
  secondCompanyDescription,
}) => {
  const b2bSoftwareData = [
    {
      companyName: "Zoominfo",
      companyDescription: "description-1",
      thirdpartyReviewCount: "11",
    },
    {
      companyName: "Lusha",
      companyDescription: "description-2",
      thirdpartyReviewCount: "22",
    },
    {
      companyName: "Apollo",
      companyDescription: "description-3",
      thirdpartyReviewCount: "33",
    },
    {
      companyName: "Leadzilla",
      companyDescription: "description-4",
      thirdpartyReviewCount: "22",
    },
    {
      companyName: "Uplead",
      companyDescription: "description-5",
      thirdpartyReviewCount: "33",
    },
    {
      companyName: "Cognism",
      companyDescription: "description-5",
      thirdpartyReviewCount: "33",
    },
  ];

  return (
    <>
      <Head firstCompany={firstCompany} secondCompany={secondCompany} />
      <div className="grid grid-cols-2 gap-4 py-20 px-20">
        <SoftwareCard
          companyName={firstCompany}
          companyDescription={firstCompanyDescription}
          website={firstWebsite}
        />
        <SoftwareCard
          companyName={secondCompany}
          companyDescription={secondCompanyDescription}
          website={secondWebsite}
        />
      </div>
    </>
  );
};

export default SalesSoftwarePage;
