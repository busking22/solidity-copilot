import React from "react"

import LandingFAQSection from "@/components/landing/landing-faq-section"
import LandingFeaturesSection from "@/components/landing/landing-features-section"
import LandingHeader from "@/components/landing/landing-header"
import LandingHeroSection from "@/components/landing/landing-hero-section"
import LandingVideoDemoSection from "@/components/landing/landing-video-section"

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <LandingHeader />
      {/* <div className="flex-1"> */}
      <LandingHeroSection />
      <LandingVideoDemoSection />
      <LandingFeaturesSection />
      {/* <LandingUseCaseSection ref={useCaseSectionRef} /> */}
      {/* <LandingPricingSection ref={pricingSectionRef} /> */}
      <LandingFAQSection />
      {/* <LandingFooter /> */}
      {/* </div> */}
    </div>
  )
}

export default Index
