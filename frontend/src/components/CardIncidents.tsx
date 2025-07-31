import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon, UserCircleIcon, DateTimeIcon, Delete02Icon } from '@hugeicons/core-free-icons';


const CardIncidents = (props: {
    incident_id: string,
    description: string,
    aeronefs: string,
    reporter: string,
    date: string,
}) => {
    return (
        <div className='card-incident w-full rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transition-all duration-300'>
            <Link to={`/incidents/${props.incident_id}`} className='card-link flex flex-col gap-4'>
                <div className="card-header flex items-center justify-between gap-4">
                    <h3 className='text-[16px] font-semibold'>{props.aeronefs}</h3>
                </div>
                <div>
                    <h3 className='text-[15px] font-semibold'>{props.description}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <HugeiconsIcon icon={UserCircleIcon} size={18} />
                    <h3 className='text-[14px]'>{props.reporter}</h3>
                </div>
                <div className='card-details flex items-center gap-2'>
                    <HugeiconsIcon icon={DateTimeIcon} size={16} />
                    <p className='text-[14px]'>{props.date}</p>
                </div>
                <div className="list-buttons flex items-center justify-around gap-4">
                    <button className='btn-edit-incident flex items-center gap-1 text-[14px] rounded-lg hover:scale-105 transition-all duration-300'> <HugeiconsIcon icon={ArrowDown01Icon} size={18} /> Actions</button>
                    <button className='btn-delete-incident flex items-center gap-2 text-[14px] rounded-lg hover:scale-105 transition-all duration-300'> <HugeiconsIcon icon={Delete02Icon} size={18} /> Supprimer</button>
                </div>
            </Link>
        </div>
    )
}

export default CardIncidents