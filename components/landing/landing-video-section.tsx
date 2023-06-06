import { forwardRef } from "react"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

import { TypographyH4 } from "../ui/typography"

const LandingVideoDemoSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="container mx-auto my-40 flex max-w-7xl flex-col items-center gap-6 text-center">
        <TypographyH4>Video Demo</TypographyH4>
        <AspectRatio ratio={16 / 9}>
          <div className="h-full w-full">
            <iframe
              src={process.env.NEXT_PUBLIC_SITE_URL + "/video/demo.mp4"}
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </AspectRatio>
      </div>
    </section>
  )
})

LandingVideoDemoSection.displayName = "LandingVideoDemoSection"

export default LandingVideoDemoSection
