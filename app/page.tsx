'use client'
import { EtherProvider } from './EtherProvider'
import { Footer } from './Footer'
import { Header } from './Header'
import { TransactionProvider } from './TransactionContext'

export default function Home() {
  return (
    <EtherProvider>
      <TransactionProvider>
        <main className="flex flex-col items-center justify-between relative">
          <Header />
          <Footer />
        </main>
      </TransactionProvider>
    </EtherProvider>
  )
}
