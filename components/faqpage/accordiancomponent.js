import React, { useState } from "react";
import AccordianLayout from "./accordianLayout";
import { Fade } from "react-reveal";

const AccordianComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accrodianData = [
    {
      ques: "What is Leadzilla?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "What is Leadzilla community?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "How do I become a community member?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "What information does Lusha collect and use from Leadzilla’s community members?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "Will my contacts know Leadzilla received their information from me?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "Can I pick and choose the business contacts I want to share?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "Performance Tracking and Benchmarking",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "Who can participate in Leadzilla’s community?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
    {
      ques: "How do I cancel my membership?",
      ans: "Leadzilla is a simple, self-service SaaS product that offers accurate data enrichment for B2B companies to enable them to successfully connect with their prospects. Leadzilla’s modern, state-of-the-art algorithm delivers the most relevant B2B contact and company information with up to 90% accuracy.",
    },
  ];
  return (
    <div className="w-10/12 mx-auto my-16">
      <div className="flex gap-16">
        <Fade top>
        <div className="w-1/4 text-base">
          <div className="font-extrabold border-b-2 border-black">
            <span className="ml-1">What is Leadzilla?</span>
          </div>
          <div
            className="ml-2 py-6 text-base font-semibold"
            style={{ opacity: "70%" }}
          >
            <div>What is Leadzilla community?</div>
            <div className="py-5">How do I become a community member?</div>
            <div>
              What information does Lusha collect and use from Leadzilla’s
              community members?
            </div>
            <div className="py-5">
              Will my contacts know Leadzilla received their information from
              me?
            </div>
            <div>
              Can I pick and choose the business contacts I want to share?
            </div>
            <div className="py-5">Performance Tracking and Benchmarking</div>
            <div>Who can participate in Leadzilla’s community?</div>
            <div className="py-5">How do I cancel my membership?</div>
          </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className="w-3/4">
          <div>
            <div className="flex flex-col justify-center items-center">
              {accrodianData.map((val, index) => {
                return (
                  <AccordianLayout
                    key={index}
                    title={val.ques}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    answer={val.ans}
                  />
                );
              })}
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default AccordianComponent;
