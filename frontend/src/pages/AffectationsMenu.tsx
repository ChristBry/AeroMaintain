import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon, Task01Icon, TaskDone02Icon, TaskRemove02Icon } from '@hugeicons/core-free-icons';

const AffectationsMenu = () => {
    return (
        <div>
            <HeaderPage title="Affectations" />
            <div className="affectations-menu">
                <div className='affectations-container flex items-center justify-around gap-30'>
                    <div className='stats-item-task w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombres de tâches</h3>
                            <HugeiconsIcon icon={Task01Icon} size={28} />
                        </div>
                        <div className='stats-item-value flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>120</h4>
                        </div>
                    </div>
                    <div className='stats-item-task w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches assignées</h3>
                            <HugeiconsIcon icon={TaskDone02Icon} size={28} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>90</h4>
                    </div>
                    <div className='stats-item-task w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Tâches non assignées</h3>
                            <HugeiconsIcon icon={TaskRemove02Icon} size={28} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>30</h4>
                    </div>
                </div>
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
                        <button className='assignation-btn flex items-center justify-end gap-2 rounded-sm text-[14px] font-semibold transition-all duration-300'>
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                            <p>Assigner</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className="list-assignments rounded-lg">
                    <div className='list-mecaniciens-header flex justify-between items-center'>
                        <h3 className='text-[17px] font-semibold'>Tâches et Incidents Actuels</h3>
                    </div>
                    <table className='table-assignments w-full table-fixed'>
                        <thead className='table-header-mecaniciens'>
                            <tr>
                                <th className='text-left w-[6%]'>Ordre</th>
                                <th className='text-left w-[15%]'>Description</th>
                                <th className='text-left w-[6%]'>Avion</th>
                                <th className='text-left w-[6%]'>Statut</th>
                                <th className='text-left w-[8%]'>Assigné à</th>
                                <th className='text-left w-[8%]'>Date d'échéance</th>
                                <th className='text-left w-[8%]'></th>
                            </tr>
                        </thead>
                        <tbody className='table-body-assignments'>
                            <tr>
                                <td className='text-[14px]'>AF001</td>
                                <td className='text-[14px]'>Réparation moteur</td>
                                <td className='text-[14px]'>TR-ABZ</td>
                                <td className='text-[14px]'>En cours</td>
                                <td className='text-[14px]'>Équipe Alpha</td>
                                <td className='mecanicien-status text-[14px]'>06-08-2025</td>
                                <td className='actions'>
                                    <button className='assign-btn rounded-lg text-[13px]'>Assigner</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-[14px]'>AF002</td>
                                <td className='text-[14px]'>Réparation du circuit hydrolique</td>
                                <td className='text-[14px]'>TR-LJT</td>
                                <td className='text-[14px]'>En cours</td>
                                <td className='text-[14px]'>Équipe Gamma</td>
                                <td className='mecanicien-status text-[14px]'>26-07-2025</td>
                                <td className='actions'>
                                    <button className='assign-btn rounded-lg text-[13px]'>Assigner</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-[14px]'>AF003</td>
                                <td className='text-[14px]'>Réparation hublot cabine</td>
                                <td className='text-[14px]'>TR-LBT</td>
                                <td className='text-[14px]'>Planifié</td>
                                <td className='text-[14px]'>Dupont Jean</td>
                                <td className='mecanicien-status text-[14px]'>18-07-2025</td>
                                <td className='actions'>
                                    <button className='assign-btn rounded-lg text-[13px]'>Assigner</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default AffectationsMenu