import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import CardRoutineMaintenance from "../components/CardRoutineMaintenance";
import { Add01Icon, Calendar02Icon, LayoutTable01Icon, TableIcon, FilterIcon, Search01Icon, WorkIcon, WorkHistoryIcon, WorkUpdateIcon, WorkAlertIcon, StopCircleIcon } from '@hugeicons/core-free-icons';

const MaintenanceDueList = () => {
    return (
        <div>
            <HeaderPage title="Maintenance programmées" />

            {/* Suivi des opérations */}
            <div className="operations-menu">

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
                            <h3 className='stats-item-title text-[14px]'>Tâches en cours</h3>
                            <HugeiconsIcon icon={WorkHistoryIcon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches terminées</h3>
                            <HugeiconsIcon icon={WorkUpdateIcon} size={20} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches en attente</h3>
                            <HugeiconsIcon icon={WorkAlertIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>0</h4>
                    </div>
                </div>


                {/* Filtre Opérations */}
                <div className="operations-header">
                    <h4 className="text-2xl font-semibold">Liste de maintenance prévue</h4>
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
                            <th className='text-left text-[14px] w-[5%]'>Aéronefs</th>
                            <th className='text-left text-[14px] w-[10%]'>ATA / Code / Type</th>
                            <th className='text-left text-[14px] w-[17%]'>Description</th>
                            <th className='text-left text-[14px] w-[7%]'>Dernière ops</th>
                            <th className='text-left text-[14px] w-[4%]'>Intervals</th>
                            <th className='text-left text-[14px] w-[8%]'>Prochaine ops</th>
                            <th className='text-left text-[14px] w-[4%]'>Rappel</th>
                            <th className='text-left text-[14px] w-[5%]'>Priorité</th>

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
                                        <p className='text-[12px]'>Heures estimées</p>
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
                                    <p><span>M: </span>6</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>18-10-2025</td>
                            <td className='text-[14px]'><span>D: </span>-23</td>
                            <td className='text-[14px]'><p className="priorite-operation haute text-center rounded-sm text-white">Haute</p></td>
                        </tr>
                        <tr>
                            <td className='text-[14px] '>TR-LJT</td>
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
                                    <p>Révision commande principale de navigation</p>
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
                                        <p className='text-[12px]'>200</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p className=''>15-05-2025</p>
                                </div>
                                <div>
                                    <p className=''><span className="">H: </span>1500</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1200</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p><span>M: </span>3</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>20-08-2025</td>
                            <td className='text-[14px]'><span>D: </span>-90</td>
                            <td className='text-[14px]'><p className="priorite-operation moyenne text-center rounded-sm text-white">Moyenne</p></td>
                        </tr>
                        <tr>
                            <td className='text-[14px] '>TR-XYZ</td>
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
                                    <p>Révision système hydraulique</p>
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
                                    <p className=''><span className="">H: </span>1800</p>
                                </div>
                                <div>
                                    <p className=''><span>L: </span>1400</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <div>
                                    <p><span>M: </span>4</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>10-11-2025</td>
                            <td className='text-[14px]'><span>D: </span>-60</td>
                            <td className='text-[14px]'><p className="priorite-operation basse text-center rounded-sm text-white">Basse</p></td>
                        </tr>
                    </tbody>
                </table>

                {/* Liste des taches sous forme de cartes */}
                <div className="hidden incidents-list flex justify-between gap-4">
                    <div className="incidents-critique rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Haute</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardRoutineMaintenance id_task="1" description="Révision moteur" aeronef="TR-ABX" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="10-08-2025" />
                            <CardRoutineMaintenance id_task="2" description="Révision commande principale de navigation" aeronef="TR-LJT" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="20-08-2025" />
                            <CardRoutineMaintenance id_task="3" description="Révision système hydraulique" aeronef="TR-XYZ" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="10-11-2025" />
                        </div>
                    </div>
                    <div className="incidents-moyenne rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={16} className="" />Moyenne</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardRoutineMaintenance id_task="4" description="Révision moteur" aeronef="TR-XYZ" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="15-09-2025" />
                            <CardRoutineMaintenance id_task="5" description="Révision commande principale de navigation" aeronef="TR-ABW" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="20-08-2025" />
                        </div>
                    </div>
                    <div className="incidents-mineur rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Basse</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardRoutineMaintenance id_task="6" description="Révision moteur" aeronef="TR-ABW" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="15-09-2025" />
                            <CardRoutineMaintenance id_task="7" description="Révision commande principale de navigation" aeronef="TR-XYZ" ATA="26 0008" Code="AIRFRAME" Type="INSPECTION" prochaine_ops="20-08-2025" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintenanceDueList