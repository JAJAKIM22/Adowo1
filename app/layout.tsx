import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ADOWO - Healing Minds, Empowering Lives, Sustaining Futures",
  description:
    "ADOWO is a youth-led community-based organization in Nyamira County committed to transforming lives through psychosocial support, youth and women empowerment, gender equality, human rights advocacy, climate resilience, and sustainable community development.",
  keywords: "NGO, youth empowerment, mental health, climate action, gender equality, Nyamira County, Kenya",
  authors: [{ name: "ADOWO" }],
  openGraph: {
    title: "ADOWO - Healing Minds, Empowering Lives, Sustaining Futures",
    description: "Youth-led organization transforming lives through psychosocial support and community development",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
