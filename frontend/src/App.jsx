import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import ProjectGallary from './pages/ProjectGallary'
import AwardGallary from './pages/AwardGallaries'
import CourseGallary from './pages/CourseGallary'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='w-full h-full bg-[#02021a]'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallary />} />
        <Route path="/certificates" element={<AwardGallary />} />
        <Route path="/courses" element={<CourseGallary />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App