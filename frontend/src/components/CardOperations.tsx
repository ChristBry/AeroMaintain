import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { DateTimeIcon, UserCircleIcon, AirplaneTakeOff01Icon } from '@hugeicons/core-free-icons';


const CardOperations = (props: {
    id_ops: string,
    nom: string,
    aeronef: string,
    constructeur: string,
    date_debut: string,
    date_fin: string,
    responsable: string,
    priorite: string,
}) => {
    // Détermination de la classe CSS pour le statut
    const prioriteClass = (priorite: string) => {
        switch (priorite) {
            case 'Haute':
                return 'haute';
            case 'Moyenne':
                return 'moyenne';
            case 'Basse':
                return 'basse';
            default:
                return '';
        }
    };
    return (
        <div className='card-aeronef w-full rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transition-all duration-300'>
            <Link to={`/aeronefs/${props.id_ops}`} className='card-link flex flex-col gap-4'>
                <div className="card-header flex items-center justify-start gap-4">
                    <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={16} />
                    <h3 className='text-[16px] font-semibold'>{props.aeronef}</h3>
                </div>
                <div>
                    <h3 className='text-[15px] font-semibold'>{props.nom}</h3>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={DateTimeIcon} size={16} />
                    <p className='text-[14px]'>{props.date_debut} - {props.date_fin}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <HugeiconsIcon icon={UserCircleIcon} size={18} />
                    <h3 className='text-[14px]'>{props.responsable}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <p className={`priorite-operation ${prioriteClass(props.priorite)} rounded-lg text-[12px] font-semibold`}>{props.priorite}</p>
                </div>
            </Link>
        </div>
    )
}

export default CardOperations