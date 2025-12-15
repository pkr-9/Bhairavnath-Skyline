// import React from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactDetailsAndForm from "../components/contact/ContactDetailsAndForm";
import ContactMap from "../components/contact/ContactMap";
import FAQAccordion from "../components/ui/FAQAccordion";

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactDetailsAndForm />
      <FAQAccordion />
      <ContactMap />
    </>
  );
}
