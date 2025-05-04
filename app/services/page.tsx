import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Paintbrush, Code, ShoppingCart, 
  Layers, Wrench, Smartphone, 
  CheckCircle2, ArrowRight, Phone,
  Share2, LineChart, MousePointer
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Services - Coatbridge Web Design',
  description: 'Explore our comprehensive web design and development services tailored to meet your business needs.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Paintbrush className="h-12 w-12 text-primary" />,
      title: "Web Design",
      description: "Our web design service focuses on creating beautiful, user-friendly websites that align with your brand identity and business goals. We combine aesthetics with functionality to deliver websites that not only look great but also provide an exceptional user experience.",
      features: [
        "Custom visual design tailored to your brand",
        "Responsive layouts that work on all devices",
        "User experience (UX) optimization",
        "Accessibility compliance",
        "Brand consistency across all pages"
      ]
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Web Development",
      description: "We transform designs into fully functional websites using the latest web technologies and best practices. Our development process ensures your website is not only visually appealing but also technically sound, secure, and optimized for performance.",
      features: [
        "Clean, semantic HTML5/CSS3 coding",
        "JavaScript frameworks (React, Next.js)",
        "Backend integration and API development",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "E-Commerce Solutions",
      description: "Turn your website into a powerful sales channel with our e-commerce solutions. We create online stores that are easy to manage, secure, and designed to convert visitors into customers, helping you sell products or services online effectively.",
      features: [
        "Custom e-commerce website development",
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Order processing and fulfillment systems",
        "Customer account management"
      ]
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Landing Page Design",
      description: "Maximize your marketing campaigns with high-converting landing pages. We design and develop landing pages that are focused on specific goals, whether it's generating leads, promoting a product, or driving sign-ups for an event.",
      features: [
        "Conversion-optimized layouts",
        "A/B testing setup and analysis",
        "Clear call-to-action elements",
        "Fast loading times for better performance",
        "Integration with marketing tools and analytics"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our comprehensive maintenance services. We handle updates, security patches, backups, and technical support, allowing you to focus on your business while we ensure your website remains secure and up-to-date.",
      features: [
        "Regular software and plugin updates",
        "Security monitoring and maintenance",
        "Content updates and management",
        "Performance optimization",
        "Technical support and troubleshooting"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Web & Mobile Apps",
      description: "Extend your digital presence with custom web and mobile applications. We develop user-friendly applications that solve specific business problems, improve processes, or provide innovative services to your customers across multiple platforms.",
      features: [
        "Progressive Web Apps (PWAs)",
        "Native and hybrid mobile applications",
        "Cross-platform compatibility",
        "API integration and development",
        "User authentication and data security"
      ]
    }
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business goals, target audience, and project requirements."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy for your web project."
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create stunning visuals and intuitive user interfaces tailored to your brand."
    },
    {
      number: "04",
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and responsive code."
    },
    {
      number: "05",
      title: "Testing",
      description: "We thoroughly test all functionality, performance, and compatibility across devices."
    },
    {
      number: "06",
      title: "Launch",
      description: "We carefully deploy your website and ensure everything runs smoothly post-launch."
    }
  ]

  const benefits = [
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Increased Online Visibility",
      description: "Get discovered by more potential customers with a professionally designed website optimized for search engines."
    },
    {
      icon: <MousePointer className="h-10 w-10 text-primary" />,
      title: "Higher Conversion Rates",
      description: "Convert more visitors into customers with strategic design elements and clear calls-to-action."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Optimization",
      description: "Reach users on any device with responsive design that adapts to smartphones, tablets, and desktops."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Performance Insights",
      description: "Make data-driven decisions with detailed analytics and reporting on your website's performance."
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-14 md:mb-16 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-balance">
                Our <span className="spotify-gradient">Services</span>
              </h1>
              <p className="text-muted-foreground md:text-lg text-balance">
                Comprehensive digital solutions tailored to elevate your brand and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="spotify-card border-border/40 h-full group overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground text-balance">
                      {service.description}
                    </CardDescription>
                    <div className="pt-4">
                      <Link href="/contact" className="group/link inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Details Section */}
        <section className="py-16 md:py-24 bg-muted/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} id={service.title.toLowerCase().replace(/ /g, '-')} className="mb-20 last:mb-0">
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-balance">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-6 text-balance">
                        {service.description}
                      </p>
                      <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
                        <Link href="/contact">
                          Request a Quote
                        </Link>
                      </Button>
                    </div>
                    <div className="bg-card rounded-2xl border border-border/40 p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-5">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Our <span className="spotify-gradient">Process</span>
              </h2>
              <p className="text-muted-foreground text-balance">
                How we turn your ideas into beautiful, functional websites that deliver results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="spotify-card p-6 md:p-8 border-border/40 relative">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-primary/20">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-balance">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Benefits of Our <span className="spotify-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground text-balance">
                Discover how our digital solutions can transform your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="spotify-card p-6 md:p-8 border-border/40">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-balance">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center spotify-card p-10 md:p-16 border-border/40">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Ready to <span className="spotify-gradient">Get Started?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-balance">
                Contact us today to discuss your project requirements and receive a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
                  <Link href="/contact">
                    Request a Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-primary/40 text-primary hover:bg-primary/10 hover:text-white">
                  <Link href="tel:07478707581" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Us Now</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}