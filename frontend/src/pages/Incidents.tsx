import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, Alert02Icon, Delete02Icon, StopCircleIcon, FilterIcon, ArrowDown01Icon, Search01Icon, InformationCircleIcon, LayoutTable01Icon, TableIcon, SecurityCheckIcon, SecurityIcon } from '@hugeicons/core-free-icons';
import CardIncidents from "../components/CardIncidents";

const Incidents = () => {
    return (
        <div>
            <HeaderPage title="Gestion des incidents" />

            {/* Menu des Incidents */}
            <div className="incident-menu">
                <div className='incident-stats grid grid-cols-4 justify-between gap-8'>
                    <div className='stats-item-incident w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Nombre d'incidents</h3>
                            <HugeiconsIcon icon={Alert02Icon} size={20} className='text-orange-500' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>85</h4>
                            <button className='add-incident-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={18} />
                                <p className='transition-all duration-300'>Ajouter un incident</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-incident w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Incident résolus</h3>
                            <HugeiconsIcon icon={SecurityCheckIcon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>60</h4>
                    </div>
                    <div className='stats-item-incident w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Incident critique</h3>
                            <HugeiconsIcon icon={SecurityIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>15</h4>
                    </div>
                    <div className='stats-item-incident w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Taux de résolution</h3>
                            <HugeiconsIcon icon={InformationCircleIcon} size={20} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[28px] font-semibold'>80%</h4>
                    </div>
                </div>

                {/* Filtre Aéronefs */}
                <div className="aeronefs-header">
                    <h4 className="text-2xl font-semibold">Liste des incidents</h4>
                    <div className='aeronefs-filter flex items-center justify-between gap-8'>
                        <div>
                            <div className='aeronefs-vue flex items-center justify-around gap-10'>
                                <button className="button-vue rounded-sm transition-all duration-300 hover:scale-105 transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={LayoutTable01Icon} size={18} />Kanban</p>
                                </button>
                                <button className="button-vue active rounded-sm transition-all duration-300 hover:scale-105 transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={TableIcon} size={18} />Liste</p>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <button className='flex items-center gap-2 hover:scale-105 transition-all duration-300'>
                                <HugeiconsIcon icon={Search01Icon} size={20} className="icon-header" />
                                <input type="text" placeholder="Rechercher..." className="input-search-operation rounded-sm text-[14px]" />
                            </button>
                            <button className='hover:scale-105 transition-all duration-300'>
                                <HugeiconsIcon icon={FilterIcon} size={20} className="icon-header" />
                            </button>
                            <div className='flex items-center justify-end'>
                                <button className='list-add-aeronef-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                                    <HugeiconsIcon icon={Add01Icon} size={20} />
                                    <p className='transition-all duration-300'>Ajouter incident</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des Incidents */}
                <div className="list-incidents rounded-lg">
                    <table className='table-incidents w-full table-fixed'>
                        <thead className='table-header-incidents'>
                            <tr>
                                <th className='text-left text-[14px] w-[4%]'>Aéronefs</th>
                                <th className='text-left text-[14px] w-[6%]'>Date / heure</th>
                                <th className='text-left text-[14px] w-[12%]'>Description</th>
                                <th className='text-left text-[14px] w-[6%]'>Reporter</th>
                                <th className='text-center text-[14px] w-[4%]'>Statut</th>
                                <th className='text-left text-[14px] w-[6%]'></th>
                            </tr>
                        </thead>
                        <tbody className='table-body-incidents'>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>TR-ABW</td>
                                <td className='text-[14px]'>20-07-2025 18:12</td>
                                <td className='text-[14px]'>Fuite d'huile du moteur droit pendant les vols</td>
                                <td className='text-[14px]'>Jean Dupont</td>
                                <td className='text-[14px]'><p className="incident-status critique text-center rounded-sm text-white">Critique</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>TR-XYZ</td>
                                <td className='text-[14px]'>21-07-2025 10:30</td>
                                <td className='text-[14px]'>Problème de train d'atterrissage avant</td>
                                <td className='text-[14px]'>Enzo Roques</td>
                                <td className='text-[14px]'><p className="incident-status moyenne text-center rounded-sm text-white">Moyenne</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>TR-DEF</td>
                                <td className='text-[14px]'>22-07-2025 15:45</td>
                                <td className='text-[14px]'>Problème de communication radio</td>
                                <td className='text-[14px]'>Anthony Rosso</td>
                                <td className='text-[14px]'><p className="incident-status mineur text-center rounded-sm text-white">Mineur</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Liste des incidents sous forme de cartes */}
                <div className="hidden incidents-list flex justify-between gap-4">
                    <div className="incidents-critique rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Critique</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardIncidents incident_id="1" description="Fuite d'huile du moteur droit pendant les vols" aeronefs="TR-ABW" reporter="Jean Dupont" date="20-07-2025 18:12" />
                            <CardIncidents incident_id="2" description="Problème de train d'atterrissage avant" aeronefs="TR-XYZ" reporter="Enzo Roques" date="21-07-2025 10:30" />
                            <CardIncidents incident_id="3" description="Problème de communication radio" aeronefs="TR-DEF" reporter="Anthony Rosso" date="22-07-2025 15:45" />
                        </div>
                    </div>
                    <div className="incidents-moyenne rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={16} className="" />Moyenne</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardIncidents incident_id="4" description="Réparation du train d'atterrissage" aeronefs="TR-XYZ" reporter="Enzo Roques" date="23-07-2025 09:00" />
                            <CardIncidents incident_id="5" description="Remplacement du moteur gauche" aeronefs="TR-ABW" reporter="Jean Dupont" date="24-07-2025 11:30" />
                        </div>
                    </div>
                    <div className="incidents-mineur rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Mineur</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardIncidents incident_id="6" description="Incident critique nécessitant une inspection complète" aeronefs="TR-DEF" reporter="Anthony Rosso" date="25-07-2025 14:00" />
                            <CardIncidents incident_id="7" description="Problème majeur de structure" aeronefs="TR-XYZ" reporter="Enzo Roques" date="26-07-2025 16:30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incidents