import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monster Team - CrossFit TCB',
  description: 'Monster Team - Equipe de CrossFit TCB com atletas Team, Master e Elite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  )
}