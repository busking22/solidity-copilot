import React, { forwardRef } from "react"
import ReactPlayer from "react-player"

import { cn } from "@/lib/utils"
import {
  TypographyH2,
  TypographyH4,
  TypographyList,
  TypographyMuted,
} from "@/components/ui/typography"

interface FeatureType {
  title: string
  description_list: string[]
  video_url: string
}

const LandingFeaturesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const features: FeatureType[] = []
  return (
    <section ref={ref}>
      <div className="container my-40 flex max-w-7xl flex-col items-center gap-6">
        <TypographyH4>features.features</TypographyH4>
        <div className="flex flex-col items-center gap-2">
          <TypographyH2>features.title</TypographyH2>
          <TypographyMuted className="text-lg">
            features.description
          </TypographyMuted>
        </div>
        <div className="mt-24 flex flex-col space-y-24 md:space-y-36">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 space-y-8 md:grid-cols-2 md:space-x-8 md:space-y-0"
            >
              <div>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={feature.video_url}
                  loop
                  muted
                />
              </div>
              <div
                className={cn(
                  "flex flex-col items-center justify-center",
                  index % 2 == 0 && "md:-order-1"
                )}
              >
                <TypographyH4 className="text-center">
                  {feature.title}
                </TypographyH4>
                <TypographyList>
                  {feature.description_list?.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </TypographyList>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

LandingFeaturesSection.displayName = "LandingFeaturesSection"

export default LandingFeaturesSection
