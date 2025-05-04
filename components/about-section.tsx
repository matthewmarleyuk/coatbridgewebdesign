"use client"

import { Users, Award, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function AboutSection() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
      value: "5+",
      label: "Team Members"
    },
    {
      icon: <Award className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
      value: "200+",
      label: "Projects Completed"
    },
    {
      icon: <Clock className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: <Globe className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
      value: "20+",
      label: "Countries Served"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <FadeInSection delay={0.2} duration={0.7} direction="left" className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="overflow-hidden rounded-2xl border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=500"
                    alt="Team working together"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&q=80&w=500"
                    alt="Office space"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 mt-10">
                <div className="overflow-hidden rounded-2xl border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
                    alt="Team meeting"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500"
                    alt="Collaborative work"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.3} duration={0.7} direction="right" className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter lg:text-4xl mb-6 text-balance">
              About <span className="spotify-gradient">Coatbridge Web Design</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-balance">
              Founded in 2010, Coatbridge Web Design has grown from a small studio to a full-service web design agency with a team of passionate designers, developers, and digital strategists.
            </p>
            <p className="text-muted-foreground mb-6 text-balance">
              We believe that great design goes beyond aesthetics. It's about creating intuitive experiences that solve problems and drive results for your business.
            </p>
            <p className="text-muted-foreground mb-6 text-balance">
              Our approach combines creativity with data-driven insights to deliver websites that not only look beautiful but also perform exceptionally well.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <FadeInSection key={index} delay={0.4 + index * 0.1} duration={0.5} direction="up" className="text-center spotify-card p-4 border-border/40">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground text-balance">{stat.label}</p>
                </FadeInSection>
              ))}
            </div>
            
            <FadeInSection delay={0.8} duration={0.5} className="mt-8 text-center lg:text-left">
              <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
                <Link href="/contact">
                  Work With Us
                </Link>
              </Button>
            </FadeInSection>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}