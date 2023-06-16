'use client'
import { EtherProvider } from './EtherProvider'
import { Footer } from './Footer'
import { Header } from './Header'

export default function Home() {
  return (
    <EtherProvider>
      <main className="flex flex-col items-center justify-between relative">
        <Header />
        <Footer />
      </main>
    </EtherProvider>
  )
}
