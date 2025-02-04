import './App.css'
import CurrentPrice from './pages/CurrentPrice'
import CalculatePrice from './pages/CalculatePrice'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/calculate-price' element={<CalculatePrice />} />
          <Route path='/current-price' element={<CurrentPrice />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
