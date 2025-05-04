"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function ProcessTimelineSection() {
  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business goals, target audience, and project requirements to create a tailored solution.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create stunning visuals and intuitive user interfaces that align perfectly with your brand identity.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our developers build your website using cutting-edge technology and industry best practices for optimal performance.",
    },
    {
      number: "04",
      title: "Launch",
      description: "We carefully deploy your website and provide ongoing support to ensure everything runs smoothly post-launch.",
    }
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection delay={0.1} duration={0.6} className="text-center space-y-4 mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-balance">
            Our <span className="spotify-gradient">Process</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            How we transform your vision into a successful digital reality through our proven approach.
          </p>
        </FadeInSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {process.map((step, index) => (
            <FadeInSection 
              key={index}
              delay={0.2 + index * 0.15}
              duration={0.6}
              direction="up"
              className="spotify-card p-6 md:p-8 border-border/40 hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-primary/20">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-balance">{step.description}</p>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection delay={0.8} duration={0.5} direction="up" className="mt-12 text-center">
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}