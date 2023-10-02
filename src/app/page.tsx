import Header from '@/components/Header'
import Today from '@/components/Today'

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Squat Counter</h1>

        <Today />

        <h2>過去の履歴</h2>

        <Header />
      </div>
    </main>
  )
}
