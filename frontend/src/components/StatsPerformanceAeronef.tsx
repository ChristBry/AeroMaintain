import { HugeiconsIcon } from '@hugeicons/react';
import { TimeScheduleIcon, TimeQuarter02Icon, FuelStationIcon, DateTimeIcon, Airplane01Icon } from '@hugeicons/core-free-icons';

const StatsPerformanceAeronef = (props: {
    immat: string,
    modele: string,
    date_maintenance: string,
    moyenne_carburant: number,
    aeroport_base: string,
    cycle_vol: number,
    heures_vol: number,
}) => {
    return (
        <div className='stats-item-performance-aeronef flex items-center justify-around gap-4 rounded-lg hover:scale-105 transition-all duration-300'>
            <div className='stats-item-header flex items-center justify-start gap-4'>
                <HugeiconsIcon icon={Airplane01Icon} size={28} className='icon-aeronef' />
                <div className='stats-item-info flex flex-col gap-2'>
                    <h4 className='text-[14px] font-semibold'>{props.immat}</h4>
                    <h4 className='text-[14px] font-semibold'>{props.modele}</h4>
                </div>
            </div>
            <div className='stats-item-details flex items-center justify-around gap-2'>
                <HugeiconsIcon icon={TimeScheduleIcon} size={16} />
                <h5 className='text-[14px]'>Cycle de vol :</h5>
                <p className='text-[14px] font-semibold'>{props.cycle_vol}</p>
            </div>
            <div className='stats-item-details flex items-center justify-around gap-2'>
                <HugeiconsIcon icon={TimeQuarter02Icon} size={16} />
                <h5 className='text-[14px]'>Heures de vol :</h5>
                <p className='text-[14px] font-semibold'>{props.heures_vol}</p>
            </div>
            <div className='stats-item-details flex items-center justify-around gap-2'>
                <HugeiconsIcon icon={FuelStationIcon} size={16} />
                <h5 className='text-[14px]'>Efficacité carburant :</h5>
                <p className='text-[14px] font-semibold'>{props.moyenne_carburant} L/km</p>
            </div>
            <div className='stats-item-details flex items-center justify-around gap-2'>
                <HugeiconsIcon icon={DateTimeIcon} size={16} />
                <h5 className='text-[14px]'>Dernière maintenance :</h5>
                <p className='text-[14px] font-semibold'>{props.date_maintenance}</p>
            </div>
        </div>
    )
}

export default StatsPerformanceAeronef