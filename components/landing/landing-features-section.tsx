import React, { forwardRef } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import audit_img from "@/assets/audit.png"
import gas_img from "@/assets/gas.png"
import test_img from "@/assets/test.png"

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
  image?: string
}

const LandingFeaturesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const features: FeatureType[] = [
    {
      title: "Smart Contract Auditing",
      description_list: [
        "Auditing in 1 minute",
        "One-click auditing process",
        "Identifies security issues and provides solutions",
      ],
    },
    {
      title: "Code Refactoring",
      description_list: [
        "Automatic code refactoring with GPT4",
        "Simple visualization to easily review changes to code",
        "Provides comments and logic for changes ",
      ],
    },
    {
      title: "Test Code Generation",
      description_list: [
        "Automatically generates test codes",
        "Eliminates the need for manually checking functions",
        "Ensures proper organized structure for files ",
      ],
      image: process.env.NEXT_PUBLIC_SITE_URL + "/image/testcode.png",
    },
    {
      title: "Gas Fee Checking",
      description_list: [
        "Checks gas fees with one click",
        "Streamlines the process of checking gas consumption",
        "Optimizes gas usage and efficiency in smart contracts",
      ],
      image: process.env.NEXT_PUBLIC_SITE_URL + "/image/gas.png",
    },
  ]

  return (
    <section ref={ref}>
      <div className="container my-40 flex max-w-5xl flex-col items-center gap-6">
        <TypographyH4>Features</TypographyH4>
        <div className="flex flex-col items-center gap-2 text-center">
          <TypographyH2>
            Streamlined code audit and refactoring solution
          </TypographyH2>
          <TypographyMuted className="text-center text-lg">
            Take your smart contract development to the next level with our
            powerful tool that offers one-click auditing, refactoring, test code
            generation, and gas fee optimization.
          </TypographyMuted>
        </div>
        <div>
          <Image src={audit_img} alt="audit" className="mt-12" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-24 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-8 md:grid-cols-2 md:space-x-8 md:space-y-0"
            >
              {/* {feature.image && (
                <div className="flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                </div>
              )} */}
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
