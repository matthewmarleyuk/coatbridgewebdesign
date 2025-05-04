"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { CodeMergeIcon } from "@/components/ui/code-merge-icon"
import { FadeInSection } from "@/components/animations/fade-in-section"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-card py-16 md:py-20 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <FadeInSection delay={0.1} duration={0.5} direction="up" className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <CodeMergeIcon className="h-6 w-6 md:h-7 md:w-7 text-primary fill-current" />
              <span className="font-bold text-lg md:text-xl">Coatbridge <span className="text-primary">Web</span> Design</span>
            </Link>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Crafting digital experiences that elevate your brand with modern web design solutions.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.2} duration={0.5} direction="up">
            <h3 className="font-semibold text-base md:text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web-design" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#e-commerce-solutions" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services#landing-page-design" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services#website-maintenance" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </FadeInSection>
          
          <FadeInSection delay={0.3} duration={0.5} direction="up">
            <h3 className="font-semibold text-base md:text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </FadeInSection>
          
          <FadeInSection delay={0.4} duration={0.5} direction="up">
            <h3 className="font-semibold text-base md:text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base text-muted-foreground">info@coatbridgewebdesign.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base text-muted-foreground">07478707581</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-sm md:text-base text-muted-foreground">Atrium Business Centre, North Caldeen Rd, Coatbridge ML5 4EF</span>
              </li>
            </ul>
          </FadeInSection>
        </div>
        
        <FadeInSection delay={0.5} duration={0.5} direction="up" className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-border/40 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {currentYear} Coatbridge Web Design. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs md:text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </footer>
  )
}