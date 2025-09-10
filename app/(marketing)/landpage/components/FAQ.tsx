import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const faqs = [
  {
    question: "How does Mappink connect to my Notion workspace?",
    answer: "Mappink uses Notion's official API to securely connect to your workspace. You'll authorize the connection through Notion's OAuth system, and we only access the databases and pages you grant permission to view."
  },
  {
    question: "Can I customize the appearance of my mind maps?",
    answer: "Yes! Mappink offers various customization options including node colors, connection styles, layout algorithms, and export formats. You can also filter which content appears in your mind maps based on your preferences."
  },
  {
    question: "Is my Notion data secure with Mappink?",
    answer: "Absolutely. We follow industry-standard security practices, use encrypted connections, and never store your Notion content permanently. Mind maps are generated in real-time from your Notion data and cached temporarily for performance."
  },
  {
    question: "What types of Notion content work best with mind maps?",
    answer: "Mappink works great with databases, linked pages, project hierarchies, and knowledge bases. Content with relationships, tags, and cross-references creates the most meaningful visual connections in your mind maps."
  }
]

export default function FAQ() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Mappink
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}