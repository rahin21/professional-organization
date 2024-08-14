import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";
import { faqs } from "@/constants/faqData";

function FAQ() {
  return (
    <div className="container relative grid md:grid-cols-3 grid-cols-1 gap-2 mt-36">
      <h1 className="text-5xl font-semibold col-span-1">FAQs</h1>

      <Accordion
        type="single"
        collapsible
        className="md:col-span-2 w-full text-xl"
      >
        {faqs.map((faq,i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}

        <Link href="/contact">
          <Button className="capitalize my-10 md:px-20 px-16 py-8 md:w-fit w-full">
            book a consult
          </Button>
        </Link>
      </Accordion>
    </div>
  );
}

export default FAQ;
