import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Redesign",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      description: "Complete redesign of an e-commerce platform with improved UX and 40% increase in conversions."
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      description: "Modern corporate website with custom CMS integration and responsive design."
    },
    {
      title: "Travel Booking Platform",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
      description: "Full-stack travel booking application with real-time availability and secure payment processing."
    },
    {
      title: "Restaurant Ordering System",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000",
      description: "Cross-platform mobile application for restaurant ordering with admin dashboard and analytics."
    }
  ]

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-balance">
            Our <span className="spotify-gradient">Portfolio</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="spotify-tag mb-3">{project.category}</div>
                <h3 className="text-xl md:text-2xl font-bold text-balance">{project.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground text-balance">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-primary/40 text-primary hover:bg-primary/10">
            <Link href="/contact">
              Discuss Your Project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}