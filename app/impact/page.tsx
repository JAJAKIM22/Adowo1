import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Impact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measuring the positive change we've created in our communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Youth Empowered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Women Supported</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Community Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Partner Organizations</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Community Engagement</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our programs have reached thousands of community members across Nyamira County, creating lasting
                positive change through education, empowerment, and sustainable development initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mental health awareness campaigns reaching 1,000+ individuals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Climate action initiatives involving 300+ participants</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Gender equality workshops for 250+ community members</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-14%20at%2019.14.29-zcxBRoqVUGfMvWIXKWkXq2xKPFviCt.jpeg"
                alt="ADOWO International Day of Peace event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-14%20at%2019.14.33%20%282%29-ugSYL2VL8R4yVVtMaEjYcQ42mtgvtV.jpeg"
                alt="ADOWO community outreach program"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Educational Impact</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Through our educational programs and community workshops, we've enhanced knowledge and skills across
                various areas including mental health, environmental conservation, and human rights advocacy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Educational workshops conducted in 20+ schools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Leadership training for 150+ young people</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Vocational skills training for 100+ individuals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
