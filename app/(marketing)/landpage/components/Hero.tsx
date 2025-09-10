import { Button } from "./ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="px-6 pt-8 pb-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight">
            Transform your Notion
            <br />
            <span className="text-muted-foreground">into visual mind maps.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Automatically map and link your Notion databases and pages with Mappink, 
            seamlessly generating interactive mind maps to help you visualize and 
            quick access your data.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button size="lg" className="flex items-center gap-3 px-10 py-4 rounded-xl">
            Get Mappink free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="lg" className="flex items-center gap-3 px-10 py-4 rounded-xl border border-border/50 hover:border-border">
            <PlayCircle className="w-5 h-5" />
            Watch demo
          </Button>
        </div>
      </div>
    </section>
  )
}