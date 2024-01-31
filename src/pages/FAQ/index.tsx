import React from "react";
import AccordionFAQ from "@components/FAQs/AccordionFAQ";
import TopBanner from "@components/TopBanner";
import Heading from "@components/Common/Heading";
import Paragraph from "@components/Common/Paragraph";
import Navbar from "@components/Navbar";
import Footer from "@components/UserFooter";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <TopBanner />
        <div className="text-center">
          <Heading heading="Frequently Asked Questions." />
          <Paragraph paragraph="We’re on a mission to deliver engaging, curated courses at a reasonable price." />
        </div>
        <AccordionFAQ />
      </div>
      <Footer showDownloadApp={false} />
    </>
  );
};

export default FAQ;
