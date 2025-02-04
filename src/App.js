import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Bloggrid from './pages/Bloggrid'
import Comingsoon from './pages/Comingsoon'
import Faq from './pages/Faq'
import Error404 from './pages/Error404'
import Home02 from './pages/Home02'
import Home03 from './pages/Home03'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Bloggrid' element={<Bloggrid />} />
        <Route path='/Comingsoon' element={<Comingsoon />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path='/Home02' element={<Home02 />} />
        <Route path='/Home03' element={<Home03 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App