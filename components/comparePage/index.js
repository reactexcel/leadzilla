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
  firstCompanyPara1,
  secondCompanyPara1,
  firstCompanyPara2,
  secondCompanyPara2,
}) => {
  return (
    <>
      <Head firstCompany={firstCompany} secondCompany={secondCompany} />
      <div className="grid grid-cols-2 gap-4 py-20 px-20">
        <SoftwareCard
          companyName={firstCompany}
          companyDescription={firstCompanyDescription}
          website={firstWebsite}
          para1={firstCompanyPara1}
          para2={firstCompanyPara2}
        />
        <SoftwareCard
          companyName={secondCompany}
          companyDescription={secondCompanyDescription}
          website={secondWebsite}
          para1={secondCompanyPara1}
          para2={secondCompanyPara2}
        />
      </div>
    </>
  );
};

export default SalesSoftwarePage;
