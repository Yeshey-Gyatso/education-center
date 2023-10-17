import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'

export default function Home() {
  return (
    <div>
      <Parallax pages={1} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      </Parallax>
      <C1/>
      <C2/>
      <C3/>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   this is the main page
    // </main>
  )
}
