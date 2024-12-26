
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import ScrollToTop from './pages/scrollTop'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }


  return (
    <>
      <AuthProvide>
        <ScrollToTop/>
        <Navbar />
        <main className='min-h-screen max-w-screen-2xl w-full mx-auto pt-6 font-primary'>
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>

    </>
  )
}

export default App
