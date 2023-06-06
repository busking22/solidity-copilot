import { cn } from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
}
export function TypographyH1({ children, className }: Props) {
  return (
    <p
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </p>
  )
}
export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  )
}
export function TypographyH3({ children, className }: Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}
export function TypographyH4({ children, className }: Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  )
}
export function TypographyP({ children, className }: Props) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children }: Props) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  )
}

export function TypographyList({ children }: Props) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
}

export function TypographyInlineCode({ children, className }: Props) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  )
}

export function TypographyLead({ children }: Props) {
  return <p className="text-xl text-muted-foreground">{children}</p>
}

export function TypographyLarge({ children }: Props) {
  return <div className="text-lg font-semibold">{children}</div>
}

export function TypographySmall({ children, ...props }: Props) {
  return (
    <small className="text-sm font-medium leading-none" {...props}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className, ...props }: Props) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}
