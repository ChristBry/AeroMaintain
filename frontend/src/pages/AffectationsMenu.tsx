import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon, Task01Icon, TaskDone02Icon, TaskRemove02Icon, Search01Icon, FilterIcon, } from '@hugeicons/core-free-icons';

const AffectationsMenu = () => {
    return (
        <div>
            <HeaderPage title="Affectations" />

            {/* Menu des Incidents */}
            <div className="affectations-menu">

                <div className='affectations-stats flex items-center justify-between gap-30'>
                    <div className='stats-item-task w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombres de tâches</h3>
                            <HugeiconsIcon icon={Task01Icon} size={20} className="icon-total" />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>120</h4>
                        </div>
                    </div>
                    <div className='stats-item-task w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches assignées</h3>
                            <HugeiconsIcon icon={TaskDone02Icon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>90</h4>
                    </div>
                    <div className='stats-item-task w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches non assignées</h3>
                            <HugeiconsIcon icon={TaskRemove02Icon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>30</h4>
                    </div>
                </div>

                {/* Formulaire d'assignation de tâche */}
                <div className="assign-task-form rounded-lg">
                    <h3 className="text-[17px] font-semibold">Assigner une tâche</h3>
                    <form action="">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="text-[16px]">Sélectionner une tâche :</label>
                            <select
                                id="selectTacheMecanicien"
                                name="selectTacheMecanicien"
                                className="select-tache-mecanicien text-[15px] w-80 border rounded-lg"
                                required
                            >
                                <option value="" selected disabled>-- Choisir une tâche --</option>
                                <option value="Réparation Moteur">Réparation Moteur</option>
                                <option value="Maintenance Préventive">Maintenance Préventive</option>
                                <option value="Diagnostic Panne">Diagnostic Panne</option>
                            </select>
                        </div>
                        <h3 className="assignation">Assigner à :</h3>
                        <div className="assignation-options flex items-center gap-5">
                            <label htmlFor="" className="flex items-center gap-2">
                                <input type="checkbox"
                                    value="mecanicien"

                                />
                                Un mécanicien
                            </label>
                            <label htmlFor="" className="flex items-center gap-2">
                                <input type="checkbox"
                                    value="equipe"

                                />
                                Une équipe
                            </label>
                        </div>
                        <div className="flex flex-col gap-3">
                            <select
                                id="selectTacheMecanicien"
                                name="selectTacheMecanicien"
                                className="select-tache-mecanicien text-[15px] w-100 border rounded-lg"
                                required
                            >
                                <option value="" selected disabled>-- Sélectionner un mécanicien ou une équipe --</option>
                                <option value="Réparation Moteur">Réparation Moteur</option>
                                <option value="Maintenance Préventive">Maintenance Préventive</option>
                                <option value="Diagnostic Panne">Diagnostic Panne</option>
                            </select>
                        </div>
                        <button className='assignation-btn flex items-center justify-end gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                            <p>Assigner</p>
                        </button>
                    </form>
                </div>
            </div>

            {/* Filtre Aéronefs */}
            <div className="aeronefs-header">
                <div className='aeronefs-filter flex items-center justify-between gap-8'>
                    <h4 className="text-2xl font-semibold">Taches Actuels</h4>
                </div>
            </div>
            <div className="list-assignments rounded-lg">
                <table className='table-assignments w-full table-fixed'>
                    <thead className='table-header-mecaniciens'>
                        <tr>
                            <th className='text-left text-[14px] w-[5%]'>Ordre</th>
                            <th className='text-left text-[14px] w-[15%]'>Description</th>
                            <th className='text-left text-[14px] w-[5%]'>Avion</th>
                            <th className='text-center text-[14px] w-[6%]'>Statut</th>
                            <th className='text-left text-[14px] w-[8%]'>Assigné à</th>
                            <th className='text-left text-[14px] w-[8%]'>Date d'échéance</th>
                            <th className='text-left text-[14px] w-[8%]'></th>
                        </tr>
                    </thead>
                    <tbody className='table-body-assignments'>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AF001</td>
                            <td className='text-[14px]'>Réparation moteur</td>
                            <td className='text-[14px]'>TR-ABZ</td>
                            <td className='text-[14px]'><p className="task-status en-cours text-center rounded-sm text-white">En cours</p></td>
                            <td className='text-[14px]'>Équipe Alpha</td>
                            <td className='text-[14px]'>06-08-2025</td>
                            <td className='actions'>
                                <button className='assign-btn rounded-lg text-[13px] hover:scale-105 transition-all duration-300'>Assigner</button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AF002</td>
                            <td className='text-[14px]'>Réparation du circuit hydrolique</td>
                            <td className='text-[14px]'>TR-LJT</td>
                            <td className='text-[14px]'><p className="task-status en-cours text-center rounded-sm text-white">En cours</p></td>
                            <td className='text-[14px]'>Équipe Gamma</td>
                            <td className='mecanicien-status text-[14px]'>26-07-2025</td>
                            <td className='actions'>
                                <button className='assign-btn rounded-lg text-[13px] hover:scale-105 transition-all duration-300'>Assigner</button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AF003</td>
                            <td className='text-[14px]'>Réparation hublot cabine</td>
                            <td className='text-[14px]'>TR-LBT</td>
                            <td className='text-[14px]'><p className="task-status planifier text-center rounded-sm text-white">Planifié</p></td>
                            <td className='text-[14px]'>Dupont Jean</td>
                            <td className='mecanicien-status text-[14px]'>18-07-2025</td>
                            <td className='actions'>
                                <button className='assign-btn rounded-lg text-[13px] hover:scale-105 transition-all duration-300'>Assigner</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AffectationsMenu