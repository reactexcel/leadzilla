import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const softwareCard = ({ companyName, companyDescription, website }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 flex flex-col items-center h-96 w-90 py-5 px-5 border-solid border-2 border-black	">
      <Link
        href={`https://${website}`}
        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 "
      >
        {companyName}
      </Link>

      <h1>{companyDescription}</h1>
    </div>
  );
};

export default softwareCard;
