import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, Calendar02Icon, LayoutTable01Icon, TableIcon, FilterIcon, Search01Icon, WorkIcon, WorkHistoryIcon, WorkUpdateIcon, WorkAlertIcon, Delete02Icon } from '@hugeicons/core-free-icons';

const SuiviOperations = () => {
  return (
    <div>
        <HeaderPage title="Suivi des tâches" />

        {/* Suivi des opérations */}
        <div className="operations-menu">
                {/* Statistiques d'opérations */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombre total de tâches</h3>
                            <HugeiconsIcon icon={WorkIcon} size={24} className='icon-total' />
                        </div>
                        <div className='stats-item-value flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>6</h4>
                            <button className='add-aeronef-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={18} />
                                <p className='transition-all duration-300'>Ajouter</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches en cours</h3>
                            <HugeiconsIcon icon={WorkHistoryIcon} size={24} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches terminées</h3>
                            <HugeiconsIcon icon={WorkUpdateIcon} size={24} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>2</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches en attente</h3>
                            <HugeiconsIcon icon={WorkAlertIcon} size={24} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>0</h4>
                    </div>
                </div>
                {/* Filtre Opérations */}
                <div className="operations-header">
                    <h4 className="text-2xl font-semibold">Liste des Tâches</h4>
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
                <table className='table-operations table-fixed'>
                    <thead className='table-header-mecaniciens'>
                        <tr>
                            <th className='text-left w-[14%] border-b-1'>Nom de la tache</th>
                            <th className='text-left w-[5%] border-b-1'>Etat d'avancement</th>
                            <th className='text-left w-[6%] border-b-1'>Responsable</th>
                            <th className='text-left w-[10%] border-b-1'>Date limite</th>
                            <th className='text-left w-[5%] border-b-1'>Priorité</th>
                            <th className='text-left w-[5%] border-b-1'>Opération</th>
                            <th className='text-left w-[3%] border-b-1'></th>
                        </tr>
                    </thead>
                    <tbody className='table-body-operations'>
                        <tr className="cursor-pointer">
                            <td className='text-[14px] border-b-1'>Réparation moteur TR-ABX</td>
                            <td className='text-[14px] border-b-1'>En attente</td>
                            <td className='text-[14px] border-b-1'>Equipe 1</td>
                            <td className='text-[14px] border-b-1'>18/07/2025 - 24/07/2025</td>
                            <td className='incident-status text-[14px] border-b-1'>Haute</td>
                            <td className='incident-status text-[14px] border-b-1'>0.0%</td>
                            <td className='actions border-b-1'>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px] border-b-1'>Réparation moteur TR-ABX</td>
                            <td className='text-[14px] border-b-1'>En attente</td>
                            <td className='text-[14px] border-b-1'>Equipe 1</td>
                            <td className='text-[14px] border-b-1'>18/07/2025 - 24/07/2025</td>
                            <td className='incident-status text-[14px] border-b-1'>Haute</td>
                            <td className='incident-status text-[14px] border-b-1'>0.0%</td>
                            <td className='actions border-b-1'>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px] border-b-1'>Réparation moteur TR-ABX</td>
                            <td className='text-[14px] border-b-1'>En attente</td>
                            <td className='text-[14px] border-b-1'>Equipe 1</td>
                            <td className='text-[14px] border-b-1'>18/07/2025 - 24/07/2025</td>
                            <td className='incident-status text-[14px] border-b-1'>Haute</td>
                            <td className='incident-status text-[14px] border-b-1'>0.0%</td>
                            <td className='actions border-b-1'>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default SuiviOperations