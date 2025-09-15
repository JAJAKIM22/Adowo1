import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About ADOWO</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Healing Minds, Empowering Lives, Sustaining Futures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ADOWO (Adolescent Development and Welfare Organization) is a youth-led, community-based organization
                established in Nyamira County, Kenya. We are committed to transforming lives through comprehensive
                psychosocial support, youth and women empowerment, gender equality advocacy, human rights promotion,
                climate resilience building, and sustainable community development.
              </p>
              <p className="text-lg text-muted-foreground">
                Our organization emerged from the recognition that young people and vulnerable communities need
                dedicated support to overcome challenges and realize their full potential in creating sustainable
                futures.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-14%20at%2019.14.26-rZzraDQEjXfWImslEAaqTDqmQZ1cLb.jpeg"
                alt="ADOWO community education session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower adolescents, youth, and vulnerable communities through comprehensive support programs that
                  promote mental health, social development, and sustainable livelihoods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A society where every individual, regardless of age, gender, or background, has access to
                  opportunities for personal growth, mental wellness, and sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Compassion, integrity, inclusivity, empowerment, sustainability, and community-driven solutions guide
                  everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
