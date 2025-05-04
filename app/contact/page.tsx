import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us - Coatbridge Web Design',
  description: 'Get in touch with our web design team for a free consultation and quote.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12 md:mb-16 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-balance">
                Contact <span className="spotify-gradient">Coatbridge Web Design</span>
              </h1>
              <p className="text-muted-foreground md:text-lg text-balance">
                Have a project in mind or want to learn more about our services? We're here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              <div className="lg:col-span-2 space-y-8">
                <div className="spotify-card p-6 md:p-8 border-border/40">
                  <h2 className="text-xl font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Our Address</h3>
                      <p className="text-muted-foreground">Atrium Business Centre, North Caldeen Rd, Coatbridge ML5 4EF</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Email Us</h3>
                      <p className="text-muted-foreground">info@coatbridgewebdesign.com</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Call Us</h3>
                      <p className="text-muted-foreground">07478707581</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="spotify-card p-6 md:p-8 border-border/40">
                  <h2 className="text-xl font-bold mb-6">Connect With Us</h2>
                  <p className="text-muted-foreground mb-4">
                    Follow us on social media to stay updated with our latest projects and web design trends.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors p-2 border border-border/40 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors p-2 border border-border/40 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors p-2 border border-border/40 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors p-2 border border-border/40 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="spotify-card p-6 md:p-8 border-border/40">
                  <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-20 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-balance">
                Our <span className="spotify-gradient">Location</span>
              </h2>
              <div className="spotify-card border border-border/40 overflow-hidden h-[400px] md:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.913142876644!2d-3.9913799234347633!3d55.86551447309841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815af8b5a5087%3A0x3d1f92acd98eeef4!2sAtrium%20Business%20Centre%2C%20North%20Caldeen%20Rd%2C%20Coatbridge%20ML5%204EF!5e0!3m2!1sen!2suk!4v1684253288100!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-6 text-balance">
                Ready to <span className="spotify-gradient">Start Your Project?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-balance">
                Contact us today for a free consultation and quote. We'll help bring your vision to life.
              </p>
              <div className="inline-flex items-center justify-center gap-2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-xl font-medium">07478707581</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}