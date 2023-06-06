import React from "react"
import Link from "next/link"

import { Button, ButtonProps } from "../ui/button"

const CtaButton = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <Button className={className} variant={variant} {...props}>
      <Link href="https://tally.so/r/3XrBbL" target="_blank">
        Get Early Access
      </Link>
    </Button>
  )
}

export default CtaButton
