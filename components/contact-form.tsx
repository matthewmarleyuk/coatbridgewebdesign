"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

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
    
    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: "mmarley@live.com",
        from_name: formState.name,
        from_email: formState.email,
        from_phone: formState.phone,
        subject: formState.subject,
        message: formState.message
      }
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
      }, 5000)
    } catch (err) {
      console.error("Error sending email:", err)
      setError("There was an error sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
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
                Full Name <span className="text-primary">*</span>
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
                Email <span className="text-primary">*</span>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm md:text-base font-medium text-balance">
                Phone Number
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
              <label htmlFor="subject" className="text-sm md:text-base font-medium text-balance">
                Subject <span className="text-primary">*</span>
              </label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Website Design Inquiry"
                required
                className="bg-card border-border/60 focus:border-primary rounded-2xl"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm md:text-base font-medium text-balance">
              Message <span className="text-primary">*</span>
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
    </>
  )
}