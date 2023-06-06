import "@/styles/globals.css"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import { ThemeProvider } from "@/components/theme-provider"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {<Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default App
