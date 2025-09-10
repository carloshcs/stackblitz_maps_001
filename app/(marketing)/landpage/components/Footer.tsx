export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">M</span>
              </div>
              <span className="font-medium">Mappink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your Notion workspace into visual mind maps.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors">Mind Maps</a>
              <a href="#" className="block hover:text-foreground transition-colors">Notion Sync</a>
              <a href="#" className="block hover:text-foreground transition-colors">Visual Analytics</a>
              <a href="#" className="block hover:text-foreground transition-colors">Export Tools</a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block hover:text-foreground transition-colors">Tutorials</a>
              <a href="#" className="block hover:text-foreground transition-colors">Examples</a>
              <a href="#" className="block hover:text-foreground transition-colors">Community</a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-foreground transition-colors">About</a>
              <a href="#" className="block hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="block hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mappink. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}