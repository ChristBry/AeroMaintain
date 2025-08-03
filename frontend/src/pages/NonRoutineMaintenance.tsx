import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import CardNonRoutineMaintenance from "../components/CardNonRoutineMaintenance";
import { Add01Icon, Calendar02Icon, LayoutTable01Icon, TableIcon, FilterIcon, Search01Icon, WorkIcon, WorkHistoryIcon, StopCircleIcon, WorkAlertIcon } from '@hugeicons/core-free-icons';

const NonRoutineMaintenance = () => {
    return (
        <div>
            <HeaderPage title="Maintenance non programmées" />

            {/* Suivi des opérations */}
            <div className="operations-menu w-full">

                {/* Statistiques d'opérations */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombre total de tâches</h3>
                            <HugeiconsIcon icon={WorkIcon} size={20} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>6</h4>
                            <button className='add-aeronef-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={18} />
                                <p className='transition-all duration-300'>Ajouter</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches terminées</h3>
                            <HugeiconsIcon icon={WorkHistoryIcon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches non terminées</h3>
                            <HugeiconsIcon icon={WorkAlertIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                </div>

                {/* Filtre Opérations */}
                <div className="operations-header">
                    <h4 className="text-2xl font-semibold">Liste de maintenance imprévue</h4>
                    <div className='operations-filter flex items-center justify-between gap-8'>
                        <div>
                            <div className='operations-vue flex items-center justify-around gap-10'>
                                <button className="button-vue rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={Calendar02Icon} size={18} />Par opération</p>
                                </button>
                                <button className="button-vue rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={LayoutTable01Icon} size={18} />Kanban</p>
                                </button>
                                <button className="button-vue active rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={TableIcon} size={18} />Toutes les tâches</p>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <button className='flex items-center gap-2 transition-all duration-300'>
                                <HugeiconsIcon icon={Search01Icon} size={20} className="icon-header" />
                                <input type="text" placeholder="Rechercher..." className="input-search-operation rounded-sm text-[14px]" />
                            </button>
                            <button className='transition-all duration-300'>
                                <HugeiconsIcon icon={FilterIcon} size={20} className="icon-header" />
                            </button>
                            <button className='list-add-operation-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={20} />
                                <p className='transition-all duration-300'>Ajouter</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Liste des opérations */}
                <table className='table-mecaniciens w-full table-fixed'>
                    <thead className='table-header-mecaniciens'>
                        <tr>
                            <th className='text-left text-[14px] w-[3%]'>Aéronefs</th>
                            <th className='text-left text-[14px] w-[6%]'>ATA / Code / Type</th>
                            <th className='text-left text-[14px] w-[10%]'>Description</th>
                            <th className='text-left text-[14px] w-[4%]'>Signalée</th>
                            <th className='text-left text-[14px] w-[4%]'>Résolue</th>
                            <th className='text-left text-[14px] w-[4%]'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='table-body-operations'>
                        <tr className="cursor-pointer">
                            <td className='text-[14px] '>TR-ABX</td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>26 0008</p>
                                </div>
                                <div>
                                    <p>AIRFRAME</p>
                                </div>
                                <div>
                                    <p>INSPECTION</p>
                                </div>
                            </td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>Révision moteur</p>
                                </div>
                                <div className="info-task flex items-center gap-3">
                                    <div>
                                        <p className='text-[12px]'>Ordre de travail</p>
                                        <p className='text-[12px]'>AFJ-001</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Date limite</p>
                                        <p className='text-[12px]'>10-08-2025</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Heures de travail</p>
                                        <p className='text-[12px]'>230</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>30-04-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>2104</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1537</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>03-05-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>2134</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1545</p>
                                </div>
                            </td>
                            <td className='text-[14px]'><p className="priorite-operation haute text-center rounded-sm text-white">Open</p></td>
                        </tr>
                        <tr>
                            <td className='text-[14px] '>TR-ABC</td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>26 0008</p>
                                </div>
                                <div>
                                    <p>AIRFRAME</p>
                                </div>
                                <div>
                                    <p>INSPECTION</p>
                                </div>
                            </td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>Révision système électrique</p>
                                </div>
                                <div className="info-task flex items-center gap-3">
                                    <div>
                                        <p className='text-[12px]'>Ordre de travail</p>
                                        <p className='text-[12px]'>-</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Date limite</p>
                                        <p className='text-[12px]'>-</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Heures estimées</p>
                                        <p className='text-[12px]'>30</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>15-05-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>1900</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1300</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>15-05-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>1900</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1300</p>
                                </div>
                            </td>
                            <td className='text-[14px]'><p className="priorite-operation haute text-center rounded-sm text-white">Open</p></td>
                        </tr>
                        <tr>
                            <td className='text-[14px] '>TR-ABD</td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>26 0008</p>
                                </div>
                                <div>
                                    <p>AIRFRAME</p>
                                </div>
                                <div>
                                    <p>INSPECTION</p>
                                </div>
                            </td>
                            <td className='text-[14px] '>
                                <div>
                                    <p>Révision hydraulique</p>
                                </div>
                                <div className="info-task flex items-center gap-3">
                                    <div>
                                        <p className='text-[12px]'>Ordre de travail</p>
                                        <p className='text-[12px]'>AFJ-002</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Date limite</p>
                                        <p className='text-[12px]'>15-09-2025</p>
                                    </div>
                                    <div>
                                        <p className='text-[12px]'>Heures estimées</p>
                                        <p className='text-[12px]'>150</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>01-06-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>2000</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1400</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>01-06-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>2000</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1400</p>
                                </div>
                            </td>
                            <td className='text-[14px]'><p className="priorite-operation basse text-center rounded-sm">Closed</p></td>
                        </tr>
                    </tbody>
                </table>

                {/* Liste des incidents sous forme de cartes */}
                <div className="hidden incidents-list flex justify-between gap-4">
                    <div className="incidents-critique rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Open</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardNonRoutineMaintenance id_task="1" description="Réparation du train d'atterrissage" aeronef="TR-XYZ" ATA="32-00" Code="32-001" Type="Inspection" />
                            <CardNonRoutineMaintenance id_task="2" description="Remplacement du moteur gauche" aeronef="TR-ABW" ATA="71-00" Code="71-002" Type="Maintenance" />
                        </div>
                    </div>
                    <div className="incidents-mineur rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Closed</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardNonRoutineMaintenance id_task="3" description="Incident critique nécessitant une inspection complète" aeronef="TR-DEF" ATA="27-00" Code="27-003" Type="Inspection" />
                            <CardNonRoutineMaintenance id_task="4" description="Problème majeur de structure" aeronef="TR-XYZ" ATA="53-00" Code="53-004" Type="Maintenance" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonRoutineMaintenance