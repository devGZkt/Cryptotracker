import './App.css'
import CurrentPrice from './pages/CurrentPrice'
import CalculatePrice from './pages/CalculatePrice'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculate-price' element={<CalculatePrice />} />
          <Route path='/current-price' element={<CurrentPrice />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
