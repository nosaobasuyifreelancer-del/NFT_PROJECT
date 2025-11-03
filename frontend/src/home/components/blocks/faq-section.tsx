import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { faqs } from "@/shared/lib/data";
import SectionTitle from "./section-title";

export default function FAQSection() {
  return (
    <div className="flex flex-col gap-4 lg:p-6 min-h-0 min-w-0 shrink-0">
      <SectionTitle
        title="FAQs"
        subTitle=" Everything you need to know about our NFT collections and platform."
      />

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-base ">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
