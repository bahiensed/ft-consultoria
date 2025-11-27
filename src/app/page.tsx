//@/app/page.tsx
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
//import Stats from '@/components/stats'
//import LogoCloud from '@/components/logo-cloud'
import Team from '@/components/team'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
