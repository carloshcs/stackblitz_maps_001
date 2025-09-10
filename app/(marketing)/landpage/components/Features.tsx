import { Database, GitBranch, Eye, Zap } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Notion Integration",
    description: "Seamlessly connect to your Notion workspace. Access all your databases and pages instantly."
  },
  {
    icon: GitBranch,
    title: "Auto Mind Maps",
    description: "Automatically generate interactive mind maps from your Notion content and relationships."
  },
  {
    icon: Eye,
    title: "Visual Insights",
    description: "Discover hidden connections and patterns in your knowledge with visual exploration."
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Stay updated with live synchronization between your Notion workspace and mind maps."
  }
]

export default function Features() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center space-y-6 mb-20">
        <h2 className="text-4xl md:text-5xl font-medium max-w-3xl mx-auto">
          Visualize your Notion workspace
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Transform your structured data into meaningful visual representations 
          that help you think better and work smarter.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="space-y-6 text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto border border-border/30">
              <feature.icon className="w-8 h-8 text-foreground" />
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-lg">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}