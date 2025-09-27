import Image from 'next/image'
import Header from '@/components/Header'
import WhatIsTCB from '@/components/WhatIsTCB'
import TeamGroups from '@/components/TeamGroups'
import Leaderboard from '@/components/Leaderboard'
import TestTimes from '@/components/TestTimes'
import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WhatIsTCB />
      <TeamGroups />
      <Leaderboard />
      <TestTimes />
      <Sponsors />
      <Footer />
    </main>
  )
}