import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { TimeScheduleIcon, TimeQuarter02Icon, DateTimeIcon, FuelStationIcon } from '@hugeicons/core-free-icons';
import StatsPerformanceAeronef from "../components/StatsPerformanceAeronef";
import { Link } from "react-router-dom";

const PerformancesAeronefs = () => {
    return (
        <div>
            <HeaderPage title="Performance Globale de la flotte " />

            {/* Menu des Performances des Aéronefs */}
            <div className="performances-menu">
                <div className='performances-stats grid grid-cols-4 justify-between gap-4'>
                    <div className='stats-item-performance w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-20'>
                            <h3 className='stats-item-title text-[14px]'>Taux de Disponibilité Global</h3>
                            <HugeiconsIcon icon={TimeScheduleIcon} size={30} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[28px] font-semibold'>92%</h4>
                            
                        </div>
                    </div>
                    <div className='stats-item-performance w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Total heures de vol</h3>
                            <HugeiconsIcon icon={TimeQuarter02Icon} size={24} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>12,500 hrs</h4>
                    </div>
                    <div className='stats-item-performance w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Efficacité carburant moyenne</h3>
                            <HugeiconsIcon icon={FuelStationIcon} size={24} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>0.85 L/km</h4>
                    </div>
                    <div className='stats-item-performance w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Evènements de maintenance</h3>
                            <HugeiconsIcon icon={DateTimeIcon} size={24} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>100</h4>
                    </div>
                </div>

                {/* Fin des Stats des Performances */}
                <div className="graph-performances-aeronef">
                    <h3 className='text-[14px] font-semibold'>Tendances de Performances</h3>
                    <div className='graph-placeholder h-64 rounded-lg flex items-center justify-center'>
                        <p className='text-gray-500'>Graphique des performances à venir...</p>
                    </div>
                </div>
                {/* Fin du Graphique des Performances */}

                <div className="stats-performance-aeronef">
                    <h3 className="text-[14px] font-semibold">Performance par avion</h3>
                    <div className='flex flex-col gap-3'>
                        <Link to="/">
                            <StatsPerformanceAeronef 
                                immat="F-GABC" 
                                modele="Boeing 737" 
                                date_maintenance="2023-10-01" 
                                moyenne_carburant={0.75} 
                                aeroport_base="CDG" 
                                cycle_vol={1500} 
                                heures_vol={3000} 
                            />
                        </Link>
                        <Link to="/">
                            <StatsPerformanceAeronef 
                                immat="F-GDEF" 
                                modele="Airbus A320" 
                                date_maintenance="2023-09-15" 
                                moyenne_carburant={0.80} 
                                aeroport_base="ORY" 
                                cycle_vol={1200} 
                                heures_vol={2500} 
                            />
                        </Link>
                        <Link to="/">
                            <StatsPerformanceAeronef 
                                immat="F-GHIJ" 
                                modele="Embraer E190" 
                                date_maintenance="2023-08-20" 
                                moyenne_carburant={0.70} 
                                aeroport_base="LYS" 
                                cycle_vol={1000} 
                                heures_vol={2000} 
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerformancesAeronefs