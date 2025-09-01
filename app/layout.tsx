import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter, Montserrat, Philosopher } from "next/font/google"
import "./globals.css"


const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});



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
    <html lang="en" className={`${poppins.variable} ${philosopher.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
