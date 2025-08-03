import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon, DateTimeIcon, AirplaneTakeOff01Icon, Delete02Icon, Location05Icon, TimeScheduleIcon } from '@hugeicons/core-free-icons';


const CardAeronef = (props: { 
    immat: string, 
    constructeur: string,
    modele: string, 
    statut: string, 
    date_maintenance: string, 
    aeroport_base: string, 
    cycle_vol: number
 }) => {
    // Détermination de la classe CSS pour le statut
    const statutClass = (statut: string) => {
        switch (statut) {
            case 'En service':
                return 'service';
            case 'En maintenance':
                return 'maintenance';
            case 'Hors service':
                return 'hors-service';
            default:
                return '';
        }
    };
    return (
        <div className='card-aeronef w-full rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transition-all duration-300'>
            <Link to={`/aeronefs/${props.immat}`} className='card-link flex flex-col gap-4'>
                <div className="card-header flex items-center justify-between gap-4">
                    <h3 className='text-[16px] font-semibold'>{props.immat}</h3>
                    <p className={`statut-aeronef ${statutClass(props.statut)} rounded-lg text-[12px] font-semibold`}>{props.statut}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={16} />
                    <h3>{props.constructeur} {props.modele}</h3>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={DateTimeIcon} size={16} />
                    <p className='text-[14px]'>Dernière maintenance :</p>
                    <p>{props.date_maintenance}</p>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={Location05Icon} size={16} />
                    <p className='text-[14px]'>Emplacement :</p>
                    <p>{props.aeroport_base}</p>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={TimeScheduleIcon} size={16} />
                    <p className='text-[14px]'>Cycle de vol :</p>
                    <p>{props.cycle_vol}</p>
                </div>
                <div className="list-buttons flex items-center justify-around gap-4">
                    <button className='btn-edit-aeronef flex items-center gap-1 text-[14px] rounded-lg hover:scale-105 transition-all duration-300'> <HugeiconsIcon icon={ArrowDown01Icon} size={18} /> Actions</button>
                    <button className='btn-delete-aeronef flex items-center gap-2 text-[14px] rounded-lg hover:scale-105 transition-all duration-300'> <HugeiconsIcon icon={Delete02Icon} size={18} /> Supprimer</button>
                </div>
            </Link>
        </div>
    )
}

export default CardAeronef