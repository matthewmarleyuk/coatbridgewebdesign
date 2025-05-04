import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, Award, Clock, Heart, Zap, 
  LightbulbIcon, Code, Rocket, 
  CheckCircle2, Phone, BarChart,
  Fingerprint, Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: 'About Us - Coatbridge Web Design',
  description: 'Learn about our team, our values, and our mission to create exceptional web experiences.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Passion",
      description: "We're passionate about creating digital experiences that make a difference for our clients."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and design approaches."
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: "Quality",
      description: "We never compromise on quality, ensuring every pixel is perfect before delivery."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients, ensuring their vision is central to everything we create."
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

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 text-balance">
                  We are <span className="spotify-gradient">Coatbridge Web Design</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 text-balance">
                  Building digital experiences that captivate, engage, and convert since 2010. We blend creativity with technical expertise to create websites that stand out.
                </p>
                <Button size="lg" asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                    alt="Coatbridge Web Design team collaborating"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 hidden md:block">
                  <div className="spotify-card p-4">
                    <p className="font-medium text-muted-foreground">Years of Excellence</p>
                    <p className="text-3xl font-bold text-primary">14+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-muted/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Our <span className="spotify-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground text-balance">
                How we evolved from a small studio to a leading web design agency in Coatbridge.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              <div className="relative spotify-card p-6 md:p-8 border-border/40">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">2010: The Beginning</h3>
                <p className="text-muted-foreground text-balance">
                  Coatbridge Web Design was founded by Matthew Marley with a simple mission: to provide local businesses with affordable, high-quality websites. Starting with just two clients in the first month, the foundation was laid for something special.
                </p>
              </div>
              
              <div className="relative spotify-card p-6 md:p-8 border-border/40">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">2013: Growth & Expansion</h3>
                <p className="text-muted-foreground text-balance">
                  As our reputation for quality design and excellent service spread, our team expanded to include dedicated developers, designers, and digital marketers. We moved to our current office space and broadened our service offerings.
                </p>
              </div>
              
              <div className="relative spotify-card p-6 md:p-8 border-border/40">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">2017: Digital Innovation</h3>
                <p className="text-muted-foreground text-balance">
                  We embraced new technologies and design methodologies, setting industry standards in the region. Our focus on responsive design and user experience helped our clients achieve remarkable growth during the digital shift.
                </p>
              </div>
              
              <div className="relative spotify-card p-6 md:p-8 border-border/40">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Today: Leading the Way</h3>
                <p className="text-muted-foreground text-balance">
                  Today, Coatbridge Web Design is recognized as a leading web design agency serving clients across Scotland and beyond. With a team of 15+ dedicated professionals, we continue to push boundaries and deliver exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section - Bento Grid Layout */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Our Mission & <span className="spotify-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-balance">
                The principles that guide our work and define our approach to web design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Mission Card - Spans 2 columns */}
              <div className="md:col-span-2 spotify-card p-6 md:p-8 border-border/40 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <LightbulbIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-balance flex-1">
                  To empower businesses in Coatbridge and beyond with websites that not only look stunning but drive real results. We combine creativity, technology, and strategy to create digital experiences that transform visitors into customers.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="spotify-tag">User-Focused</span>
                  <span className="spotify-tag">Conversion-Driven</span>
                  <span className="spotify-tag">Creative Solutions</span>
                </div>
              </div>
              
              {/* Vision Card - Spans 1 column, same height as Mission */}
              <div className="spotify-card p-6 md:p-8 border-border/40 bg-primary/5 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-balance flex-1">
                  To be the most trusted web design partner for businesses of all sizes, known for exceptional quality, innovation, and results-driven approach.
                </p>
                <div className="flex items-center gap-2 mt-6">
                  <BarChart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">85% client retention rate</span>
                </div>
              </div>
              
              {/* Passion Value - Spans 1 column */}
              <div className="spotify-card p-6 md:p-8 border-border/40 flex flex-col items-start">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground text-balance">
                  We're passionate about creating digital experiences that make a difference for our clients and their customers.
                </p>
              </div>
              
              {/* Innovation Value - Spans 1 column */}
              <div className="spotify-card p-6 md:p-8 border-border/40 flex flex-col items-start bg-gradient-to-br from-primary/5 to-background">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-balance">
                  We stay ahead of the curve with the latest technologies and forward-thinking design approaches.
                </p>
              </div>
              
              {/* Feature Highlight - Spans 1 column */}
              <div className="spotify-card p-6 md:p-8 border-primary/30 flex flex-col justify-center items-center text-center bg-primary/10 h-full">
                <Fingerprint className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Uniquely Yours</h3>
                <p className="text-muted-foreground text-balance">
                  Every website we create is as unique as your business
                </p>
              </div>
              
              {/* Quality Value - Spans 1 column, row height matches Innovation */}
              <div className="md:row-span-1 spotify-card p-6 md:p-8 border-border/40 flex flex-col items-start">
                <div className="bg-primary/10 p-4 rounded-2xl mb-4">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground text-balance">
                  We never compromise on quality, ensuring every pixel is perfect before delivery.
                </p>
              </div>
              
              {/* Collaboration Value - Spans 2 columns */}
              <div className="md:col-span-2 spotify-card p-6 md:p-8 border-border/40 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-primary/10 p-5 rounded-full shrink-0">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-muted-foreground text-balance">
                    We work closely with our clients, ensuring their vision is central to everything we create. Our collaborative approach means your input is valued at every stage of the process.
                  </p>
                </div>
              </div>
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

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-muted/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="spotify-card p-6 text-center border-border/40">
                  <div className="flex justify-center mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                
                <div className="spotify-card p-6 text-center border-border/40">
                  <div className="flex justify-center mb-3">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">350+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                
                <div className="spotify-card p-6 text-center border-border/40">
                  <div className="flex justify-center mb-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Industry Awards</p>
                </div>
                
                <div className="spotify-card p-6 text-center border-border/40">
                  <div className="flex justify-center mb-3">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">14+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center spotify-card p-10 md:p-16 border-border/40">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-balance">
                Ready to <span className="spotify-gradient">Transform</span> Your Web Presence?
              </h2>
              <p className="text-muted-foreground mb-8 text-balance">
                Let's discuss how we can help your business grow with a website that converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black hover:text-white font-medium">
                  <Link href="/contact">
                    Start Your Project
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-primary/40 text-primary hover:bg-primary/10 hover:text-white">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Contact Us Now</span>
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