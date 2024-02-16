'use client'
import { ThemeProvider, useTheme } from "next-themes"

export default function Providers( {children}: {children: any} ) {
    return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
}