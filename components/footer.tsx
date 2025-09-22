import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ]

  const programs = [
    "Psychosocial Support",
    "Youth Empowerment",
    "Gender Equality",
    "Human Rights",
    "Climate Action",
    "Community Development",
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/adowo-logo.png" alt="ADOWO Logo" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-xl font-bold">ADOWO</h3>
                  <p className="text-sm text-background/70">Youth Led Organization</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
                Healing Minds, Empowering Lives, Sustaining Futures. A youth-led community-based organization committed
                to transforming lives through comprehensive support and empowerment programs.
              </p>
              <div className="text-sm text-background/60">
                <p>📍 Kenya</p>
                <p>📞 +254734719921</p>
                <p>📧 adowocbo@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2">
                {programs.map((program) => (
                  <li key={program} className="text-background/70 text-sm">
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-background/60 mb-4 md:mb-0">
                <span>© 2025 ADOWO. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/60">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>for our community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
