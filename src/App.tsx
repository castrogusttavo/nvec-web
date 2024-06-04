import { Benefits } from './pages/Benefits/Benefits'
import { Faq } from './pages/Faq/Faq'
import { Features } from './pages/Features/Features'
import { Footer } from './pages/Footer'
import { Hero } from './pages/Hero/Hero'
import { Introduction } from './pages/Introduction/Introduction'
import { Tools } from './pages/Tools/Tools'

export function App() {
  return (
    <div className="min-w-[320px] overflow-hidden">
      <Hero />
      <Introduction />
      <Features />
      <Tools />
      <Benefits />
      <Faq />
      <Footer />
      <div className="sm:flex md:flex lg:flex xl:flex"></div>
    </div>
  )
}
