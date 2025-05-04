"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/animations/fade-in-section"
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess(false)
    
    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: "mmarley@live.com",
        from_name: formState.name,
        from_email: formState.email,
        from_phone: formState.phone || "Not provided",
        subject: "New Contact Form Submission from Website",
        message: formState.message
      }
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      
      setSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
    } catch (err) {
      console.error("Error sending email:", err)
      setError("There was an error sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection delay={0.1} duration={0.6} className="text-center space-y-4 mb-14 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-balance">
            Get <span className="spotify-gradient">In Touch</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FadeInSection delay={0.2} duration={0.7} direction="left">
            <Card className="spotify-card p-6 md:p-8 border-border/40">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-balance">Email</h3>
                    <p className="text-sm md:text-base text-muted-foreground">info@coatbridgewebdesign.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-balance">Phone</h3>
                    <p className="text-sm md:text-base text-muted-foreground">07478707581</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-balance">Address</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-balance">Atrium Business Centre, North Caldeen Rd, Coatbridge ML5 4EF</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </FadeInSection>
          
          <FadeInSection delay={0.3} duration={0.7} direction="right" className="lg:col-span-2">
            <Card className="spotify-card p-6 md:p-8 border-border/40">
              {success ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setSuccess(false)} 
                    className="bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-2xl text-red-500">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm md:text-base font-medium text-balance">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-card border-border/60 focus:border-primary rounded-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm md:text-base font-medium text-balance">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-card border-border/60 focus:border-primary rounded-2xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm md:text-base font-medium text-balance">
                      Phone Number (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="bg-card border-border/60 focus:border-primary rounded-2xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm md:text-base font-medium text-balance">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and requirements"
                      rows={5}
                      required
                      className="bg-card border-border/60 focus:border-primary resize-none rounded-2xl"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full px-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}