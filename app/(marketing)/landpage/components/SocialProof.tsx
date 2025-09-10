import { Users } from "lucide-react"

export default function SocialProof() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <div className="bg-muted/30 rounded-2xl border border-border/50 p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border/50">
              <Users className="w-5 h-5" />
            </div>
            <span className="font-medium text-lg">+999 users</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-border"></div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border/50">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xs">★</span>
                ))}
              </div>
            </div>
            <span className="font-medium text-lg">4.9/5 rating</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-border"></div>
          <div className="text-muted-foreground">
            <span className="font-medium text-lg">Trusted by teams worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}