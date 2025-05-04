"use client"

import { ReactNode, useRef, useEffect, useState } from "react"
import { motion, useAnimation, Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

type FadeInSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  threshold?: number
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1
}: FadeInSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold
  })

  // Calculate variants based on direction
  const getVariants = () => {
    let initial: Variant = { opacity: 0 }
    
    if (direction === "up") {
      initial.y = distance
    } else if (direction === "down") {
      initial.y = -distance
    } else if (direction === "left") {
      initial.x = distance
    } else if (direction === "right") {
      initial.x = -distance
    }
    
    return {
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: { 
          duration: duration, 
          delay: delay,
          ease: "easeOut"
        } 
      },
      hidden: initial
    }
  }
  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const variants = getVariants()

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}