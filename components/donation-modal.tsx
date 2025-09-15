"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

export function DonationModal() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const paymentMethods = [
    {
      title: "M-Pesa (Kenya)",
      details: [
        { label: "Paybill Number", value: "123456" },
        { label: "Account Number", value: "ADOWO2024" },
        { label: "Business Name", value: "ADOWO Organization" },
      ],
    },
    {
      title: "Bank Transfer",
      details: [
        { label: "Bank Name", value: "Kenya Commercial Bank" },
        { label: "Account Name", value: "ADOWO Organization" },
        { label: "Account Number", value: "1234567890" },
        { label: "Branch Code", value: "001" },
      ],
    },
    {
      title: "International Donations",
      details: [
        { label: "SWIFT Code", value: "KCBLKENX" },
        { label: "Account Number", value: "1234567890" },
        { label: "Bank Address", value: "Nairobi, Kenya" },
      ],
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-8">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl font-bold text-primary">Support ADOWO's Mission</DialogTitle>
          <DialogDescription className="text-lg leading-relaxed">
            Your donation helps us continue our work in healing minds, empowering lives, and sustaining futures.
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {method.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {detail.label}
                    </label>
                    <div className="flex items-center gap-3">
                      <code className="flex-1 bg-muted px-3 py-2 rounded-md text-sm font-mono border">
                        {detail.value}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(detail.value, `${index}-${detailIndex}`)}
                        className="h-9 w-9 p-0 hover:bg-primary/10"
                      >
                        {copiedField === `${index}-${detailIndex}` ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
          <h3 className="text-xl font-bold mb-4 text-primary">How Your Donation Makes an Impact:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">$10</span>
                <span className="text-muted-foreground">Provides mental health counseling session for one person</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">$25</span>
                <span className="text-muted-foreground">
                  Supports educational materials for youth empowerment program
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">$50</span>
                <span className="text-muted-foreground">Funds climate action workshop for 20 community members</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">$100</span>
                <span className="text-muted-foreground">Sponsors vocational training for one individual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">$250</span>
                <span className="text-muted-foreground">Supports community development project for one month</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Any Amount</span>
                <span className="text-muted-foreground">Every contribution helps us reach more people in need</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center p-4 bg-muted/50 rounded-lg border">
          <p className="text-muted-foreground">
            For questions about donations or to arrange alternative payment methods, please contact us at{" "}
            <strong className="text-primary">donations@adowo.org</strong> or call{" "}
            <strong className="text-primary">+254 712 345 678</strong>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
