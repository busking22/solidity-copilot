import { forwardRef } from "react"
import { TypeAnimation } from "react-type-animation"

import { TypographyH1, TypographyH4 } from "../ui/typography"
import CtaButton from "./cta-btn"

const LandingHeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="container flex min-h-[88vh] max-w-7xl flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col gap-2 md:flex-row">
          <TypographyH1 className="bg-gradient-to-r from-indigo-300 via-sky-500 to-indigo-300 bg-clip-text text-transparent">
            Smart Contract Auditing
          </TypographyH1>
          <TypeAnimation
            sequence={[
              "",
              2000,
              " in 1 minute",
              2000,
              " in 1 minute",
              2000,
              " in 1 minute",
            ]}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight text-indigo-300 lg:text-5xl"
          />
        </div>
        <TypographyH4 className="whitespace-pre-line">
          {`Audit your smart contract and dapp in one click with the power of GPT4
          on VSCode. Identify security issues and immediately refactor your code
          to make a secure, reliable, and accessbile dapp.`}
        </TypographyH4>
        <CtaButton />
      </div>
    </section>
  )
})

LandingHeroSection.displayName = "LandingHeroSection"

export default LandingHeroSection
