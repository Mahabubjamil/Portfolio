import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter, Montserrat } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mahabub Jamil Showvik - Business Analyst & Strategist",
  description:
    "Business Analyst with expertise in ERP, HRM, AI-driven projects, and digital transformation. Helping organizations unlock efficiency through data, strategy, and human-centered solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
