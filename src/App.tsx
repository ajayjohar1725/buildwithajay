import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Story from './pages/Story'
import Work from './pages/Work'
import Mindset from './pages/Mindset'
import Life from './pages/Life'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ animation: 'fadeUp 0.45s cubic-bezier(0,0,0.2,1) both' }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
      {children}
    </div>
  )
}

function AppContent() {
  const { pathname } = useLocation()

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '72px' }}>
        <PageWrapper key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/work" element={<Work />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/life" element={<Life />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}
