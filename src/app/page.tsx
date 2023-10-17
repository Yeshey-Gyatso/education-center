import Image from 'next/image'

import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'

export default function Home() {
  return (
    <div>
       <main className="flex min-h-screen flex-col items-center justify-between ">
      this is the main page
      <p>this is next</p>
    </main>
      <C1/>
      <C2/>
      <C3/>
    </div>
   
  )
}
