import { forwardRef } from "react"
import dynamic from "next/dynamic"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

// import ReactPlayer from "react-player"

import { TypographyH4 } from "../ui/typography"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const LandingVideoDemoSection = forwardRef<HTMLDivElement>((_, ref) => {
  //   console.log(process.env.NEXT_PUBLIC_SITE_URL)
  return (
    <section ref={ref}>
      <div className="container mx-auto my-40 flex max-w-7xl flex-col items-center gap-6 text-center">
        <TypographyH4>header.video_demo</TypographyH4>
        <AspectRatio ratio={16 / 9}>
          <div className="h-full w-full">
            <iframe
              src={process.env.NEXT_PUBLIC_SITE_URL + "/video/demo.mp4"}
              width="100%"
              height="100%"
            ></iframe>
            {/* <ReactPlayer
              src={process.env.NEXT_PUBLIC_SITE_URL + "/video/demo.mp4"}
              //   src="https://youtu.be/OfKhJU_NQcs"
              width="100%"
              height="100%"
              controls
              playing
              muted
            /> */}
          </div>
        </AspectRatio>
      </div>
    </section>
  )
})

LandingVideoDemoSection.displayName = "LandingVideoDemoSection"

export default LandingVideoDemoSection
