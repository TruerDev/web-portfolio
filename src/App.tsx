import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Stats } from '@/components/sections/Stats'
import { Contact } from '@/components/sections/Contact'
import { Scanline } from '@/components/effects/Scanline'
import { GridBg } from '@/components/effects/GridBg'
import { FloatingOrbs } from '@/components/effects/FloatingOrbs'
import { CustomCursor } from '@/components/effects/CustomCursor'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Scanline />
      <GridBg />
      <FloatingOrbs />
      <CustomCursor />

      <div className="relative z-[1]">
        <Navbar />
        <main>
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
    </div>
  )
}
