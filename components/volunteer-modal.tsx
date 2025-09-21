"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function VolunteerModal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    availability: "",
    skills: "",
    experience: "",
    motivation: "",
    programs: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build the email body
    const subject = `Volunteer Application - ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Age: ${formData.age}
Location: ${formData.location}
Availability: ${formData.availability}
Programs of Interest: ${formData.programs.join(", ")}
Skills: ${formData.skills}
Experience: ${formData.experience}
Motivation: ${formData.motivation}
  `.trim();

    // Encode into mailto
    const mailtoLink = `mailto:adowocbo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect to Gmail/mail client
    window.location.href = mailtoLink;
  };

  const handleProgramChange = (program: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      programs: checked
        ? [...prev.programs, program]
        : prev.programs.filter((p) => p !== program),
    }));
  };

  const programs = [
    "Psychosocial Support",
    "Youth Empowerment",
    "Gender Equality",
    "Climate Action",
    "Community Development",
    "Educational Programs",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-transparent">
          Apply to Volunteer
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-8">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl font-bold text-primary">
            Join Our Volunteer Team
          </DialogTitle>
          <DialogDescription className="text-lg leading-relaxed">
            Thank you for your interest in volunteering with ADOWO. Please fill
            out this application form to get started.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age Range</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, age: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-35">26-35</SelectItem>
                      <SelectItem value="36-45">36-45</SelectItem>
                      <SelectItem value="46-55">46-55</SelectItem>
                      <SelectItem value="56+">56+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location/County *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="e.g., Nyamira County"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Volunteer Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="availability">Availability *</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, availability: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="both">
                      Both weekdays and weekends
                    </SelectItem>
                    <SelectItem value="flexible">Flexible schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Programs of Interest (select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {programs.map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <Checkbox
                        id={program}
                        checked={formData.programs.includes(program)}
                        onCheckedChange={(checked) =>
                          handleProgramChange(program, checked as boolean)
                        }
                      />
                      <Label htmlFor={program} className="text-sm font-normal">
                        {program}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills and Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Skills and Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="skills">Skills and Qualifications</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, skills: e.target.value }))
                  }
                  placeholder="Please describe your relevant skills, qualifications, or expertise..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">
                  Previous Volunteer Experience
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      experience: e.target.value,
                    }))
                  }
                  placeholder="Tell us about any previous volunteer work or community involvement..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">
                  Why do you want to volunteer with ADOWO? *
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      motivation: e.target.value,
                    }))
                  }
                  placeholder="Share your motivation for joining our team..."
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
            <DialogTrigger asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogTrigger>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Submit Application
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            After submitting your application, our team will review it and
            contact you within 5-7 business days. For questions, contact us at{" "}
            <strong className="text-primary">adowocbo@gmail.com</strong>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
