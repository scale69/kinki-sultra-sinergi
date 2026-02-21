
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Partners />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
