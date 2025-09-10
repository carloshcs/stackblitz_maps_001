import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import SocialProof from "./components/SocialProof"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}