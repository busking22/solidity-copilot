import React, { forwardRef } from "react"
import Image from "next/image"
import audit_img from "@/assets/audit.png"
import gas_img from "@/assets/gas.png"
import test_img from "@/assets/testcode.png"

import {
  TypographyH2,
  TypographyH4,
  TypographyList,
  TypographyMuted,
} from "@/components/ui/typography"

interface FeatureType {
  title: string
  description_list: string[]
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
    },
    {
      title: "Gas Fee Checking",
      description_list: [
        "Checks gas fees with one click",
        "Streamlines the process of checking gas consumption",
        "Optimizes gas usage and efficiency in smart contracts",
      ],
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
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="space-y-4 md:grid-cols-2">
              <TypographyH4 className="text-center">
                {feature.title}
              </TypographyH4>
              <TypographyList>
                {feature.description_list?.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </TypographyList>
            </div>
          ))}
        </div>
        <Image src={test_img} alt="test" className="mt-12" />
        {features.slice(2, 3).map((feature, index) => (
          <div key={index} className="space-y-4 md:grid-cols-2">
            <TypographyH4 className="text-center">{feature.title}</TypographyH4>
            <TypographyList>
              {feature.description_list?.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </TypographyList>
          </div>
        ))}
        <Image src={gas_img} alt="gas" className="mt-12" />
        {features.slice(3, 4).map((feature, index) => (
          <div key={index} className="space-y-4 md:grid-cols-2">
            <TypographyH4 className="text-center">{feature.title}</TypographyH4>
            <TypographyList>
              {feature.description_list?.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </TypographyList>
          </div>
        ))}
      </div>
    </section>
  )
})

LandingFeaturesSection.displayName = "LandingFeaturesSection"

export default LandingFeaturesSection
