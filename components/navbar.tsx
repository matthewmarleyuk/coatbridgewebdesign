"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CodeMergeIcon } from "@/components/ui/code-merge-icon"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CodeMergeIcon className="h-8 w-8 md:h-9 md:w-9 text-primary fill-current" />
          <span className="font-bold text-lg md:text-xl">Coatbridge <span className="text-primary">Web</span> Design</span>
        </Link>
          
        <nav className="hidden md:flex gap-8">
          <Link href="/services" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
            Services
          </Link>
          <Link href="/about" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
            Contact
          </Link>
        </nav>
          
        <div className="hidden md:flex items-center">
          <Button size="sm" asChild className="text-sm md:text-base bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
          
        <button 
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-primary rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden w-full", 
          isMenuOpen ? "block" : "hidden"
        )} 
        id="navbar-hamburger"
      >
        <ul className="flex flex-col font-medium mt-2 rounded-2xl bg-card/95 mx-4 mb-4 border border-border/40">
          <li>
            <Link 
              href="/" 
              className="block py-3 px-4 text-foreground hover:bg-primary/10 rounded-t-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className="block py-3 px-4 text-foreground hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="block py-3 px-4 text-foreground hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="block py-3 px-4 text-foreground hover:bg-primary/10 rounded-b-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="mx-4 mb-4">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-black hover:text-white font-medium rounded-full">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}