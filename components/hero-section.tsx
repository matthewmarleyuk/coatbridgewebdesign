"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function HeroSection() {
  // Avatar data for trust indicators
  const avatars = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", alt: "User avatar 1" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", alt: "User avatar 2" },
    { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", alt: "User avatar 3" },
    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120", alt: "User avatar 4" },
    { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", alt: "User avatar 5" }
  ]

  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <FadeInSection delay={0.2} duration={0.7} direction="up" className="space-y-6">
            <h1 className="spotify-tag text-xs font-medium">
              Coatbridge Web Design
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-balance leading-tight">
              Supercharge Your <span className="spotify-gradient">Digital Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed text-balance">
              We craft stunning websites with cutting-edge technology to elevate your brand and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full px-6">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto rounded-full px-6 border-primary/40 text-primary hover:bg-primary/10 hover:text-white">
                <Link href="/contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators Section */}
            <div className="pt-8 mt-2">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div 
                      key={index} 
                      className="h-10 w-10 rounded-full border-2 border-background overflow-hidden"
                    >
                      <img 
                        src={avatar.src} 
                        alt={avatar.alt}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    100+
                  </div>
                </div>
                <p className="ml-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Trusted by 100's of companies</span> across Scotland
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.4} duration={0.7} direction="up" className="relative lg:ml-auto mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border border-border/40">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                alt="Web designer working on a project"
                width={600}
                height={400}
                className="object-cover aspect-video w-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block">
              <div className="spotify-card p-4">
                <p className="font-medium text-muted-foreground">Projects Completed</p>
                <p className="text-3xl font-bold text-primary">200+</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:block">
              <div className="spotify-card p-4">
                <p className="font-medium text-muted-foreground">Client Satisfaction</p>
                <p className="text-3xl font-bold text-primary">98%</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}