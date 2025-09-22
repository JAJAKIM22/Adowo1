import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-[url('/youth-community-empowerment-kenya-nature.jpg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 text-primary">
              <Heart className="h-8 w-8" />
              <Users className="h-8 w-8" />
              <Leaf className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            <span className="text-primary">Healing Minds,</span>
            <br />
            <span className="text-foreground">Empowering Lives,</span>
            <br />
            <span className="text-accent-foreground">Sustaining Futures</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            ADOWO is a youth-led community-based organization in Kenya committed to transforming lives through
            psychosocial support, youth and women empowerment, gender equality, human rights advocacy, climate
            resilience, and sustainable community development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-involved">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Founding Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Core Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-muted-foreground">SDG Goals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
