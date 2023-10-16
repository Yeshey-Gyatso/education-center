import Image from 'next/image'
import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'

export default function Home() {
  return (
    <div>
      <C1/>
      <C2/>
      <C3/>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   this is the main page
    // </main>
  )
}
