import { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors flex flex-col">
      <Header />
      <main className="px-6 py-10">{children}</main>
      <Footer />
    </div>
  )
}
