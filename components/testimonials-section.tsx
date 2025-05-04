"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alan Kennedy",
      role: "Knowledge Partnership",
      content: "Matthew redesigned our website with exceptional knowledge and skill. His expertise in development design and hosting services was first-class. He brought our vision to life and provided professional guidance throughout the project. We're delighted with the finished product.",
      avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Kevin Callaghan",
      role: "Japanese Knotweed Scotland",
      content: "Matthew's web design and SEO services have been fantastic from start to finish. He listens attentively, embraces new ideas, and implements them skillfully. His collaborative approach made the process smooth and enjoyable. The results speak volumes - leads are flowing in consistently.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Barry Nicholls",
      role: "The Function Rooms",
      content: "Working with Matthew was an absolute pleasure from day one. He went above and beyond our expectations, delivering a website that exceeded our requirements. His attention to detail and dedication has truly been a game-changer for our business. Highly recommended to anyone.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection delay={0.1} duration={0.6} className="text-center space-y-4 mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-balance">
            What Our <span className="spotify-gradient">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            Don't just take our word for it. Here's what our clients have to say about working with Coatbridge Web Design.
          </p>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeInSection 
              key={index}
              delay={0.2 + index * 0.15}
              duration={0.6}
              direction="up"
            >
              <Card className="spotify-card h-full border-border/40 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground italic text-balance">{`"${testimonial.content}"`}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    {testimonial.role === "Knowledge Partnership" ? (
                      <div className="h-12 w-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-1">
                        <img
                          src="/Images/MI (24).png"
                          alt="Knowledge Partnership logo"
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    ) : testimonial.role === "Japanese Knotweed Scotland" ? (
                      <div className="h-12 w-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-1">
                        <img
                          src="/Images/MI (25).png"
                          alt="Japanese Knotweed Scotland logo"
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    ) : testimonial.role === "The Function Rooms" ? (
                      <div className="h-12 w-12 rounded-full border border-primary/30 bg-white flex items-center justify-center p-1">
                        <img
                          src="/Images/MI (26).png"
                          alt="The Function Rooms logo"
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    ) : (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover border border-primary/30"
                      />
                    )}
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-balance">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground text-balance">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection delay={0.6} duration={0.5} direction="up" className="mt-12 text-center">
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
            <Link href="/contact">
              Get Your Own Success Story
            </Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}