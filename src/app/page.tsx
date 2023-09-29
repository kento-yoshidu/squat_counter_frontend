import Image from 'next/image'

import Header from '@/components/Header'

export default function Home() {
  return (
    <main style={{ height: "100vh", border: "1px solid red" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>自重スクワットカウンター</h1>
        <Header />
      </div>
    </main>
  )
}
