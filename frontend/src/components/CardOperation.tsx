import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { DateTimeIcon, Delete02Icon, Edit04Icon, Location05Icon } from '@hugeicons/core-free-icons';


const CardOperation = (props: {
    id_ops: string,
    operation: string,
    priorite: string,
    responsable: string,
    date: string,
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
        <div className='card-aeronef w-full rounded-lg shadow-md p-4 flex flex-col'>
            <Link to={`/aeronefs/${props.id_ops}`} className='card-link flex flex-col gap-4'>
                <div className="card-header flex items-center justify-between gap-4">
                    <h3 className='text-[16px] font-semibold'>{props.operation}</h3>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={DateTimeIcon} size={16} />
                    <p className='text-[14px]'>{props.date}</p>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={Location05Icon} size={16} />
                    <p className='text-[14px]'>{props.responsable}</p>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <p className={`priorite-operation ${prioriteClass(props.priorite)} text-[14px]`}>{props.priorite}</p>
                </div>
                <div className="list-buttons flex items-center justify-around gap-4">
                    <button className='btn-edit-aeronef flex items-center gap-2 text-[14px] rounded-lg'> <HugeiconsIcon icon={Edit04Icon} size={18} /> Modifier</button>
                    <button className='btn-delete-aeronef flex items-center gap-2 text-[14px] rounded-lg'> <HugeiconsIcon icon={Delete02Icon} size={18} /> Supprimer</button>
                </div>
            </Link>
        </div>
    )
}

export default CardOperation