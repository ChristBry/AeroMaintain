import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { AirplaneTakeOff01Icon } from '@hugeicons/core-free-icons';

const CardNonRoutineMaintenance = (props: {
    id_task: string,
    description: string,
    aeronef: string,
    ATA: string,
    Code: string,
    Type: string,
}) => {
    return (
        <div className='card-aeronef w-full rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transition-all duration-300'>
            <Link to={`/nonroutinemaintenance/${props.id_task}`} className='card-link flex flex-col gap-4'>
                <div className="card-header flex items-center justify-start gap-4">
                    <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={16} />
                    <h3 className='text-[16px] font-semibold'>{props.aeronef}</h3>
                </div>
                <div>
                    <h3 className='text-[15px] font-semibold'>{props.description}</h3>
                </div>
                <div className='card-details flex flex-col gap-2'>
                    <p className='text-[14px]'>ATA: {props.ATA}</p>
                    <p className='text-[14px]'>Code: {props.Code}</p>
                    <p className='text-[14px]'>Type: {props.Type}</p>
                </div>
                
            </Link>
        </div>
    )
}

export default CardNonRoutineMaintenance