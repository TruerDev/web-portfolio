import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Scanline } from '@/components/effects/Scanline'
import { GridBg } from '@/components/effects/GridBg'
import { FloatingOrbs } from '@/components/effects/FloatingOrbs'
import { CustomCursor } from '@/components/effects/CustomCursor'

const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })))
const Experience = lazy(() => import('@/components/sections/Experience').then(m => ({ default: m.Experience })))
const Stats = lazy(() => import('@/components/sections/Stats').then(m => ({ default: m.Stats })))
const Projects = lazy(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })))
const Skills = lazy(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })))
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('@/components/layout/Footer').then(m => ({ default: m.Footer })))

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Scanline />
      <GridBg />
      <FloatingOrbs />
      <CustomCursor />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="relative z-[1]">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Experience />
            <Stats />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}
