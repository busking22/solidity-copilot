import "@/styles/globals.css"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { useRouter } from "next/router"

import { ThemeProvider } from "@/components/theme-provider"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default App
