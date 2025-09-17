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

  const paymentMethod = {
    title: "Lipa na M-Pesa (Paybill)",
    details: [
      { label: "Business Number", value: "247247" },
      { label: "Account Number", value: "0520180169092" },
    ],
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl p-8 rounded-2xl">
        <DialogHeader className="space-y-4 text-center">
          <DialogTitle className="text-3xl font-bold text-primary">
            Support ADOWO's Mission
          </DialogTitle>
          <DialogDescription className="text-lg leading-relaxed text-muted-foreground">
            Your donation helps us continue our work in healing minds,
            empowering lives, and sustaining futures.
          </DialogDescription>
        </DialogHeader>

        <Card className="shadow-md border border-muted/30 rounded-2xl mt-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {paymentMethod.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {paymentMethod.details.map((detail, index) => (
              <div key={index} className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {detail.label}
                </label>
                <div className="flex items-center gap-3">
                  <code className="flex-1 bg-muted px-4 py-2.5 rounded-lg text-sm font-mono border">
                    {detail.value}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(detail.value, `${index}`)}
                    className="h-9 w-9 rounded-full hover:bg-primary/10"
                  >
                    {copiedField === `${index}` ? (
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

        <div className="mt-8 text-center p-4 bg-muted/50 rounded-lg border">
          <p className="text-muted-foreground">
            For questions about donations or to arrange alternative payment
            methods, please contact us at{" "}
            <strong className="text-primary">adowocbo@gmail.com</strong> or
            call <strong className="text-primary">+254111240215</strong>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
