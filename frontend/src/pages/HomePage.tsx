import { Link, Outlet } from 'react-router-dom'
import '../styles/StyleAdmin.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { GridViewIcon, Airplane02Icon, Alert02Icon, ToolsIcon, Chart03Icon, Target02Icon, PassportValidIcon, UserGroupIcon, OfficeIcon, Blockchain06Icon, LoginSquare02Icon, UserCircleIcon } from '@hugeicons/core-free-icons';

const HomePage = () => {

  return (
    <div className="admin-layout row flex">

      {/* Barre de Navigation Latérale */}
      <nav className="sidebar border-r-1 w-70">
        {/* Logo et Nom de l'Application */}
        <div className="logo-section border-b-2 border-gray-100">
          <img src="../src/assets/images/LogoAero.png" alt="AéroMaintain Logo" className="app-logo w-35 cursor-pointer" />
          <p className="app-name text-[10px] capitalize">Gestion de la flotte aérienne</p>
        </div>

        {/* Menu de Navigation */}
        <ul className="nav-menu">
          {/* Section Vue d'ensemble */}
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title text-[15px] text-gray-500 uppercase">Vue d'ensemble</h3>
            <Link to="/home" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
              <HugeiconsIcon icon={GridViewIcon} size={20} className='home-icon' /> Tableau de bord
            </Link>
          </li>

          {/* Section Gestion des aéronefs */}
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title text-[15px] text-gray-500 uppercase">Gestion des Aéronefs</h3>
            <ul className="submenu">
              <li>
                <Link to="/home/aeronefs" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Airplane02Icon} size={20} className='home-icon' /> Aéronefs
                </Link>
              </li>
              <li>
                <Link to="/home/performances" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Chart03Icon} size={20} className='home-icon' /> Performances
                </Link>
              </li>
              <li>
                <Link to="/home/incidents" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Alert02Icon} size={20} className='home-icon' /> Incidents
                </Link>
              </li>
            </ul>
          </li>

          {/* Section Gestion des vols
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title section-title text-[15px] text-gray-500 uppercase">Gestion des Vols</h3>
            <ul className="submenu">
              <li>
                <Link to="/vols" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={20} className='home-icon' /> Vols
                </Link>
              </li>
              <li>
                <Link to="/vols/planning" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Calendar03Icon} size={20} className='home-icon' /> Planning
                </Link>
              </li>
            </ul>
          </li>
          */}

          {/* Section Gestion de la Maintenance */}
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title text-[15px] text-gray-500 uppercase">Gestion de la Maintenance</h3>
            <ul className="submenu">
              <li>
                <Link to="/home/operations" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={ToolsIcon} size={20} className='home-icon' /> Opérations
                </Link>
              </li>
              <li>
                <Link to="/home/suivi_operations" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Target02Icon} size={20} className='home-icon' /> Suivi des tâches
                </Link>
              </li>
            </ul>
          </li>

          {/* Section Gestion du Personnel */}
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title text-[15px] text-gray-500 uppercase">Gestion du Personnel</h3>
            <ul className="submenu">
              <li>
                <Link to="/home/mecaniciens" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={UserGroupIcon} size={20} className='home-icon' /> Mécaniciens & Équipes
                </Link>
              </li>
              <li>
                <Link to="/home/affectations" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={PassportValidIcon} size={20} className='home-icon' /> Affectations
                </Link>
              </li>
            </ul>
          </li>

          {/* Section Gestion des Stocks */}
          <li className="nav-item border-b-2 border-gray-300">
            <h3 className="section-title text-[15px] text-gray-500 uppercase">Gestion des Stocks</h3>
            <ul className="submenu">
              <li>
                <Link to="/stocks/pieces" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={Blockchain06Icon} size={20} className='home-icon' /> Pièces & Équipements
                </Link>
              </li>
              <li>
                <Link to="/prestataires" className="nav-link flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
                  <HugeiconsIcon icon={OfficeIcon} size={20} className='home-icon' /> Prestataires
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Bouton de Déconnexion */}
        <div className="logout-section">
          <button className="logout-button flex items-center text-[16px] rounded-lg w-60 transition-all duration-300">
            <HugeiconsIcon icon={LoginSquare02Icon} size={20} className='home-icon' /> Déconnexion
          </button>
        </div>

        {/*User Profile Section*/}
        <div className="user-profile w-70 fixed bottom-0 cursor-pointer flex items-center justify-around border-t-1 border-r-1">
          <div className='flex items-center gap-4'>
            <h4 className='text-[18px] font-bold rounded-lg'>TB</h4>
            <div>
              <p className="user-name text-[17px] font-semibold">tbryan</p>
              <p className="user-email text-[12px]">tchajipchrist23@gmail.com</p>
            </div>
          </div>
          <HugeiconsIcon icon={UserCircleIcon} size={30} />
        </div>
      </nav>

      {/* Contenu principal de l'application */}
      <main className="main-content">
        <Outlet /> {/* C'est ici que le contenu des routes enfants sera rendu */}
      </main>
    </div>
  )
}

export default HomePage