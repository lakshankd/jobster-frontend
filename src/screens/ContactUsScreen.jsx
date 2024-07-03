import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import ContactForm from "../components/contact-us/ContactForm";
import GetInTouchSection from "../components/contact-us/GetInTouchSection";

const ContactUsScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"Contact Us"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <ContactForm />
      <GetInTouchSection />
    </>
  );
};

export default ContactUsScreen;
