import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Handshake, DollarSign, Megaphone } from "lucide-react"

export function GetInvolvedSection() {
  const ways = [
    {
      icon: Heart,
      title: "Volunteer",
      description:
        "Join as a peer mentor, trainer, or counselor. Share your skills and make a direct impact in our community programs.",
      action: "Become a Volunteer",
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description:
        "Work with us to expand our impact. We welcome partnerships with organizations, institutions, and businesses.",
      action: "Explore Partnership",
    },
    {
      icon: DollarSign,
      title: "Donate",
      description:
        "Support safe spaces, counselling services, and climate action projects. Every contribution makes a difference.",
      action: "Make a Donation",
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description:
        "Be a voice for gender equality, mental health, and climate justice. Help us spread awareness and drive change.",
      action: "Join Our Advocacy",
    },
  ]

  return (
    <section id="get-involved" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Get Involved</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              There are many ways you can support our mission and help us create positive change in our community.
              Choose the way that best fits your passion and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((way, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <way.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{way.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    {way.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Mission?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you have 5 minutes or 5 hours, there's a way for you to contribute to our cause. Every action, no
              matter how small, creates ripples of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Us Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
