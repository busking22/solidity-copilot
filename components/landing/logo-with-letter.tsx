import Image from "next/image"
import logo_with_letter from "@/assets/logo_w_letter.png"

import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

const LogoWithLetter = ({ className, ...props }: Props) => {
  return (
    <Image
      src={logo_with_letter}
      alt={"logo_with_letter"}
      className={cn("w-fit object-contain", className)}
      {...props}
    />
  )
}

export default LogoWithLetter
