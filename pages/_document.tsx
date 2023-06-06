import { DocumentProps, Head, Html, Main, NextScript } from "next/document"

import { cn } from "@/lib/utils"

export default function Document(props: DocumentProps) {
  return (
    <Html>
      <Head></Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
