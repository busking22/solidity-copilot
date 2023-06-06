import { forwardRef } from "react"
import dynamic from "next/dynamic"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

import { TypographyH4 } from "../ui/typography"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const LandingVideoDemoSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="container mx-auto my-40 flex max-w-7xl flex-col items-center gap-6 text-center">
        <TypographyH4>header.video_demo</TypographyH4>
        <AspectRatio ratio={16 / 9}>
          <ReactPlayer width="100%" height="100%" controls muted />
        </AspectRatio>
      </div>
    </section>
  )
})

LandingVideoDemoSection.displayName = "LandingVideoDemoSection"

export default LandingVideoDemoSection
