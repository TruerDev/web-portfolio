import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Stats } from '@/components/sections/Stats'
import { Contact } from '@/components/sections/Contact'
import { CustomCursor } from '@/components/effects/CustomCursor'
import { FloatingOrbs } from '@/components/effects/FloatingOrbs'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a12] text-slate-100">
      <CustomCursor />
      <FloatingOrbs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Stats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
