import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Users, Shield, Scale, Leaf, Building } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: Brain,
      title: "Psychosocial Support & Mental Health",
      description:
        "Individual and group counselling, trauma healing circles, safe spaces for survivors, case management and structured referrals, peer support clubs for adolescents and youth.",
      image: "/mental-health-counseling-support-group.jpg",
    },
    {
      icon: Users,
      title: "Youth & Women Empowerment",
      description:
        "Vocational training in garment making, poultry farming, agribusiness. Life skills and mentorship for adolescents, return-to-school support for young mothers.",
      image: "/women-empowerment-vocational-training-kenya.jpg",
    },
    {
      icon: Shield,
      title: "Gender Equality & GBV Prevention",
      description:
        "Community awareness campaigns against GBV, early marriages, and exploitation. Nyumba Kumi dialogues to challenge harmful norms and advocacy for women's rights.",
      image: "/gender-equality-community-awareness-campaign.jpg",
    },
    {
      icon: Scale,
      title: "Human Rights & Social Justice",
      description:
        "Promoting youth and women's participation in governance, strengthening access to justice for survivors, advocacy for inclusive policies at county and national level.",
      image: "/human-rights-advocacy-justice-community.jpg",
    },
    {
      icon: Leaf,
      title: "Climate Change & Environmental Conservation",
      description:
        "Tree planting, agroforestry, clean energy initiatives. Youth-led climate clubs in schools, training in climate-smart agriculture and water conservation.",
      image: "/climate-action-tree-planting-environmental-conserv.jpg",
    },
    {
      icon: Building,
      title: "Community Resilience & Development",
      description:
        "Strengthening family and community structures for child protection, building resilience through economic empowerment, disaster preparedness and response systems.",
      image: "/community-development-resilience-building.jpg",
    },
  ]

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Our Programs & Strategic Areas</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              We focus on six core strategic areas that address the most pressing challenges facing our community, from
              mental health support to climate action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <program.icon className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-balance">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
