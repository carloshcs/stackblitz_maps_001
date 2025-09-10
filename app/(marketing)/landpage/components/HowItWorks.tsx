import { LogIn, Link, Zap } from "lucide-react"

const steps = [
  {
    icon: LogIn,
    title: "Log in to Mappink",
    description: "Create your account and access the dashboard"
  },
  {
    icon: Link,
    title: "Connect your Notion app", 
    description: "Securely link your Notion workspace"
  },
  {
    icon: Zap,
    title: "Create and use your mind map",
    description: "Generate interactive visualizations instantly"
  }
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-20">
        {/* How it works steps */}
        <div className="text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium max-w-3xl mx-auto">
              Create your Notion mind map in few seconds
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="space-y-6 relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto border border-border/30">
                  <step.icon className="w-8 h-8 text-foreground" />
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="font-medium text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-8 text-muted-foreground text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mind map demo */}
        <div className="flex justify-center">
          <div className="bg-muted/30 rounded-3xl p-12 border border-border/50 max-w-4xl w-full">
            <div className="aspect-video bg-background rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden shadow-sm">
              {/* Mind Map Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground text-sm font-medium">Project</span>
                  </div>
                  
                  {/* Connected Nodes */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-foreground rounded-full flex items-center justify-center shadow-md">
                    <span className="text-background text-xs">Tasks</span>
                  </div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-muted-foreground rounded-full flex items-center justify-center shadow-md">
                    <span className="text-background text-xs">Notes</span>
                  </div>
                  <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-foreground rounded-full flex items-center justify-center shadow-md">
                    <span className="text-background text-xs">Ideas</span>
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-muted-foreground rounded-full flex items-center justify-center shadow-md">
                    <span className="text-background text-xs">Team</span>
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" />
                    <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" />
                    <line x1="50%" y1="50%" x2="33%" y2="75%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" />
                    <line x1="50%" y1="50%" x2="67%" y2="75%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}