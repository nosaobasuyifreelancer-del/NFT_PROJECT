import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { faqs } from "@/shared/lib/data";

export default function FAQSection() {
  return (
    <div className="flex flex-col gap-4 p-6 min-h-0 min-w-0">
      <div className="flex flex-col lg:gap-1">
        <span className="font-medium leading-tight text-xl">
          Frequently Asked Questions
        </span>
        <span className="leading-normal text-sm text-text-secondary">
          Everything you need to know about our NFT collections and platform.
        </span>
      </div>

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
