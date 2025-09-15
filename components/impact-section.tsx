import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ImpactSection() {
  const achievements = [
    "Survivors of trauma and GBV supported through counselling and reintegration",
    "Youth and women trained in vocational and livelihood skills for self-reliance",
    "Establishment of safe spaces and youth support hubs for adolescents",
    "Promotion of climate-smart agriculture and green entrepreneurship",
    "Stronger community networks for mental health, protection, and resilience",
  ]

  const sdgs = [
    { number: 3, title: "Good Health & Wellbeing" },
    { number: 4, title: "Quality Education" },
    { number: 5, title: "Gender Equality" },
    { number: 8, title: "Decent Work & Economic Growth" },
    { number: 10, title: "Reduced Inequalities" },
    { number: 13, title: "Climate Action" },
    { number: 16, title: "Peace, Justice & Strong Institutions" },
  ]

  return (
    <section id="impact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Through our dedicated efforts, we have made significant strides in transforming lives and building
              stronger, more resilient communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">What We Have Achieved</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">SDG Contributions</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our work directly contributes to achieving the United Nations Sustainable Development Goals:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {sdgs.map((sdg) => (
                    <Badge key={sdg.number} variant="secondary" className="p-2 justify-start text-xs">
                      <span className="font-bold mr-2">SDG {sdg.number}:</span>
                      <span className="text-pretty">{sdg.title}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Join us in our mission to heal minds, empower lives, and sustain futures. Together, we can create lasting
              change in our communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
