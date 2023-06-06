import { forwardRef } from "react"
import { TypeAnimation } from "react-type-animation"

import { TypographyH1, TypographyH4 } from "../ui/typography"
import CtaButton from "./cta-btn"

const LandingHeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="container flex min-h-[88vh] max-w-5xl flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-row gap-2">
          <TypographyH1 className="bg-gradient-to-r from-indigo-300 via-sky-500 to-indigo-300 bg-clip-text text-transparent">
            HERO TITLE
          </TypographyH1>
          <TypeAnimation
            sequence={[
              `t("hero.title-typing1")`,
              2000,
              `t("hero.title-typing2")`,
              2000,
              `t("hero.title-typing3")`,
              2000,
              `t("hero.title-typing4")`,
            ]}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight text-indigo-300 lg:text-5xl"
          />
        </div>
        <TypographyH4 className="whitespace-pre-line">
          `qkwejfkqwfej`
        </TypographyH4>
        <CtaButton />
      </div>
    </section>
  )
})

LandingHeroSection.displayName = "LandingHeroSection"

export default LandingHeroSection
