import React from "react";
import Head from "./head";
import SoftwareCard from "./softwareCard";

const SalesSoftwarePage = () => {
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
      <Head />
      <div className="grid grid-cols-3 gap-4 py-20 px-20">
        {b2bSoftwareData.map((data, index) => {
          return (
            <SoftwareCard
              key={index}
              companyName={data.companyName}
              companyDescription={data.companyDescription}
              thirdpartyReviewCount={data.thirdpartyReviewCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default SalesSoftwarePage;
