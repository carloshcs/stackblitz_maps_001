import { Button } from "./ui/button"

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center px-6 pt-8 pb-12">
      <div className="flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">M</span>
          </div>
          <span className="font-medium">Mappink</span>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 -ml-8">
          <div className="hidden md:flex items-center bg-muted/50 rounded-xl p-1 border border-border/50">
            <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background transition-all">Product</a>
            <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background transition-all">Examples</a>
            <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background transition-all">Integrations</a>
            <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background transition-all">Pricing</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button>
            Get Mappink free
          </Button>
        </div>
      </div>
    </nav>
  )
}