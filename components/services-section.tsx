"use client"

import { 
  Paintbrush, Code, ShoppingCart, 
  Layers, Wrench, Smartphone
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function ServicesSection() {
  const services = [
    {
      icon: <Paintbrush className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that elevate your brand and engage your audience."
    },
    {
      icon: <Code className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "Web Development",
      description: "Custom-built websites and applications with clean code and modern frameworks."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores with seamless checkout experiences and inventory management."
    },
    {
      icon: <Layers className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "Landing Page Design",
      description: "Conversion-optimized landing pages that drive results for your marketing campaigns."
    },
    {
      icon: <Wrench className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates, security patches, and technical support."
    },
    {
      icon: <Smartphone className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />,
      title: "Web & Mobile Apps",
      description: "Custom applications that solve business problems and provide innovative services across platforms."
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection delay={0.1} duration={0.6} className="text-center space-y-4 mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-balance">
            Why Choose <br />
            <span className="spotify-gradient">Coatbridge Web Design?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            We offer a comprehensive range of web design and development services to help your business thrive online.
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeInSection 
              key={index} 
              delay={0.1 + index * 0.1} 
              duration={0.6} 
              direction="up"
            >
              <Card className="bg-primary border-border/40 hover:border-white/20 transition-all duration-300 rounded-2xl h-full">
                <CardHeader>
                  <div className="mb-3">{service.icon}</div>
                  <CardTitle className="text-balance text-primary-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-balance text-primary-foreground/80">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection delay={0.6} duration={0.6} direction="up" className="mt-12 text-center">
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}