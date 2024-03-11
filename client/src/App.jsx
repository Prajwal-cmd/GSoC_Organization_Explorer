import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router , Routes ,Route  } from 'react-router-dom'
import Loader from './components/Loader'
import Update from './Pages/Update'

const Home = lazy(()=>import ('./Pages/Home'))
const Details = lazy(()=>import ('./Pages/Details'))

const App = () => {
  return (
    <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/update' element={<Update />} />
        <Route path="*" element={<div>not Found</div>} />
      </Routes>
      </Suspense> 
    </Router>
  )
}

export default App