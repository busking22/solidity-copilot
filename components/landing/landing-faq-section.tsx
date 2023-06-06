import { forwardRef } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TypographyH4 } from "@/components/ui/typography"

interface FAQType {
  question: string
  answer: string
}

const LandingFAQSection = forwardRef<HTMLDivElement>((_, ref) => {
  const faqs: FAQType[] = []

  return (
    <section ref={ref}>
      <div className="container my-40 flex max-w-4xl flex-col items-center gap-6">
        <TypographyH4>faq.faq</TypographyH4>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
})

LandingFAQSection.displayName = "LandingFAQSection"

export default LandingFAQSection
