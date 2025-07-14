import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DashbordPage from './pages/DashbordPage'
import Mecaniciens from './pages/Mecaniciens'
import AffectationsMenu from './pages/AffectationsMenu'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/home' element={<HomePage />}>
          <Route path='' element={<DashbordPage />}></Route>
          <Route path='/home/mecaniciens' element={<Mecaniciens />}></Route>
          <Route path='/home/affectations' element={<AffectationsMenu />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
