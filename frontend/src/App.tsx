import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DashbordPage from './pages/DashbordPage'
import Mecaniciens from './pages/Mecaniciens'
import AffectationsMenu from './pages/AffectationsMenu'
import Aeronefs from './pages/Aeronefs'
import PerformancesAeronefs from './pages/PerformancesAeronefs'
import Incidents from './pages/Incidents'
import Operations from './pages/Operations'
import SuiviOperations from './pages/SuiviOperations'
import { ThemeProvider } from './components/ThemeContext';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/home' element={<HomePage />}>
            <Route path='' element={<DashbordPage />}></Route>
            <Route path='/home/aeronefs' element={<Aeronefs />}></Route>
            <Route path='/home/mecaniciens' element={<Mecaniciens />}></Route>
            <Route path='/home/affectations' element={<AffectationsMenu />}></Route>
            <Route path='/home/performances' element={<PerformancesAeronefs />}></Route>
            <Route path='/home/incidents' element={<Incidents />}></Route>
            <Route path='/home/operations' element={<Operations />}></Route>
            <Route path='/home/suivi_operations' element={<SuiviOperations />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
