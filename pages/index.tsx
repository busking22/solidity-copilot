import React from "react"

import LandingFeaturesSection from "@/components/landing/landing-features-section"
import LandingHeader from "@/components/landing/landing-header"
import LandingHeroSection from "@/components/landing/landing-hero-section"
import LandingVideoDemoSection from "@/components/landing/landing-video-section"

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <LandingHeader />
      <LandingHeroSection />
      <LandingVideoDemoSection />
      <LandingFeaturesSection />
    </div>
  )
}

export default Index
