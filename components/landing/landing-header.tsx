import { Button } from "../ui/button"
import CtaButton from "./cta-btn"
import LogoWithLetter from "./logo-with-letter"

interface NavItem {
  title: string
  onClick?: () => void
  disabled?: boolean
}

const LandingHeader = () => {
  const items: NavItem[] = []

  return (
    <header className="top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-20 max-w-5xl items-center">
        <div className="flex grow-[2] flex-row items-center justify-start">
          <LogoWithLetter className="h-12" />
        </div>
        <div className="flex grow-[3] flex-row items-center justify-center">
          <nav className="hidden gap-4 md:flex">
            {items.map((item, index) => (
              <Button
                key={index}
                className="text-md"
                variant="link"
                onClick={item.onClick}
              >
                {item.title}
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex grow-[2] flex-row items-center justify-end space-x-2">
          <CtaButton />
        </div>
      </div>
    </header>
  )
}

export default LandingHeader
