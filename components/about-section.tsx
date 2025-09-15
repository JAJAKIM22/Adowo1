import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Shield, Lightbulb, Handshake } from "lucide-react"

export function AboutSection() {
  const values = [
    { icon: Users, title: "Inclusivity & Social Justice", description: "Creating equal opportunities for all" },
    { icon: Heart, title: "Youth Leadership", description: "Empowering young voices and participation" },
    { icon: Shield, title: "Integrity & Accountability", description: "Transparent and ethical practices" },
    { icon: Lightbulb, title: "Innovation & Resilience", description: "Creative solutions for lasting change" },
    { icon: Handshake, title: "Partnerships & Collaboration", description: "Building strong community networks" },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              ADOWO was officially registered on 24th September under the Nyamira County Social Services office with 50
              founding members. We are a youth-led movement dedicated to building a society where young people, women,
              and the marginalized can thrive free from trauma, abuse, and inequality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To help adolescents, women, and marginalized groups live comfortable and fulfilling lives, free from
                  abuse, trauma, and psychological torture.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To enhance holistic wellbeing and empowerment through psychosocial support, gender justice, climate
                  resilience, skills development, rights protection, and community transformation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Values</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
