import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import CardOperations from "../components/CardOperations";
import { Add01Icon, Calendar02Icon, LayoutTable01Icon, TableIcon, StopCircleIcon, FilterIcon, Search01Icon, WorkIcon, WorkHistoryIcon, WorkUpdateIcon, WorkAlertIcon, Delete02Icon } from '@hugeicons/core-free-icons';

const Operations = () => {
    return (
        <div className="h-[100vh]">
            <HeaderPage title="Opérations de Maintenance" />

            {/* Menu Opérations de maintenance */}
            <div className="operations-menu">

                {/* Statistiques d'opérations */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombre d'opérations</h3>
                            <HugeiconsIcon icon={WorkIcon} size={20} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>6</h4>
                            <button className='add-aeronef-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={18} />
                                <p className='transition-all duration-300'>Planifier</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Opérations en cours</h3>
                            <HugeiconsIcon icon={WorkHistoryIcon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Opérations terminées</h3>
                            <HugeiconsIcon icon={WorkUpdateIcon} size={20} className='icon-total' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Opérations en attente</h3>
                            <HugeiconsIcon icon={WorkAlertIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>0</h4>
                    </div>
                </div>

                {/* Filtre Opérations */}
                <div className="operations-header">
                    <h4 className="text-2xl font-semibold">Opérations de maintenance</h4>
                    <div className='operations-filter flex items-center justify-between gap-8'>
                        <div>
                            <div className='operations-vue flex items-center justify-around gap-10'>
                                <button className="button-vue rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={Calendar02Icon} size={18} />Chronologie</p>
                                </button>
                                <button className="button-vue rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={LayoutTable01Icon} size={18} />Kanban</p>
                                </button>
                                <button className="button-vue active rounded-sm transition-all duration-300">
                                    <p className="text-[14px] flex items-center gap-2"><HugeiconsIcon icon={TableIcon} size={18} /> Tous les opérations</p>
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
                                <p className='transition-all duration-300'>Planifier</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Liste des opérations */}
                <div className="hidden list-incidents rounded-lg">
                    <table className='table-operations w-full table-fixed'>
                        <thead className='table-header-mecaniciens'>
                            <tr>
                                <th className='text-left text-[14px] w-[5%]'>N° Ordre</th>
                                <th className='text-left text-[14px] w-[5%]'>Aéronefs</th>
                                <th className='text-left text-[14px] w-[12%]'>Nom de l'opération</th>
                                <th className='text-left text-[14px] w-[6%]'>Date début</th>
                                <th className='text-left text-[14px] w-[5%]'>Date fin</th>
                                <th className='text-left text-[14px] w-[6%]'>Responsable</th>
                                <th className='text-left text-[14px] w-[5%]'>Priorité</th>
                                <th className='text-left text-[14px] w-[5%]'>Progression</th>
                                <th className='text-left text-[14px] w-[6%]'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='table-body-operations'>
                            <tr className="cursor-pointer">
                                <td className='text-[14px] '>001</td>
                                <td className='text-[14px] '>TR-ABX</td>
                                <td className='text-[14px] '>Réparation moteur</td>
                                <td className='text-[14px] '>18/07/2025</td>
                                <td className='text-[14px] '>24/07/2025</td>
                                <td className='text-[14px] '>Equipe 1</td>
                                <td className='text-[14px]'><p className="priorite-operation haute text-center rounded-sm text-white">Haute</p></td>
                                <td className='progress-bar text-[14px]'>
                                    <div className="bg-progress relative w-full rounded-full h-6 overflow-hidden">
                                        <span className="absolute w-full text-center text-[14px] font-semibold">
                                            {`${0}%`}
                                        </span>
                                        <div
                                            className="bar h-6"
                                            style={{ width: "0%" }}
                                        >

                                        </div>
                                    </div>
                                </td>
                                <td className='text-[14px]'><p className="operation-status planifier flex items-center justify-center gap-1 rounded-2xl text-white"><HugeiconsIcon icon={StopCircleIcon} size={8} />Planifié</p></td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>002</td>
                                <td className='text-[14px]'>TR-ABY</td>
                                <td className='text-[14px]'>Réparation circuit hydraulique</td>
                                <td className='text-[14px]'>20/07/2025</td>
                                <td className='text-[14px]'>26/07/2025</td>
                                <td className='text-[14px]'>Equipe 2</td>
                                <td className='text-[14px]'><p className="priorite-operation moyenne text-center rounded-sm text-white">Moyenne</p></td>
                                <td className='progress-bar text-[14px]'>
                                    <div className="bg-progress relative w-full rounded-full h-6 overflow-hidden">
                                        <span className="absolute w-full text-center text-[14px] font-semibold">
                                            {`${50}%`}
                                        </span>
                                        <div
                                            className="bar h-6"
                                            style={{ width: "50%" }}
                                        >

                                        </div>
                                    </div>
                                </td>
                                <td className='text-[14px]'><p className="operation-status en-cours flex items-center justify-center gap-1 rounded-2xl text-white"><HugeiconsIcon icon={StopCircleIcon} size={8} /> En cours</p></td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px] '>003</td>
                                <td className='text-[14px] '>TR-ABZ</td>
                                <td className='text-[14px] '>Réparation hublot cabine</td>
                                <td className='text-[14px] '>22/07/2025</td>
                                <td className='text-[14px] '>28/07/2025</td>
                                <td className='text-[14px] '>Equipe 3</td>
                                <td className='text-[14px]'><p className="priorite-operation basse text-center rounded-sm text-white">Basse</p></td>
                                <td className='progress-bar text-[14px]'>
                                    <div className="bg-progress relative w-full rounded-full h-6 overflow-hidden">
                                        <span className="absolute w-full text-center text-[14px] font-semibold">
                                            {`${75}%`}
                                        </span>
                                        <div
                                            className="bar h-6"
                                            style={{ width: "75%" }}
                                        >

                                        </div>
                                    </div>
                                </td>
                                <td className='text-[14px]'><p className="operation-status en-attente flex items-center justify-center gap-1 rounded-2xl text-white"><HugeiconsIcon icon={StopCircleIcon} size={8} /> En attente</p></td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px] '>004</td>
                                <td className='text-[14px] '>TR-LJT</td>
                                <td className='text-[14px] '>Réparation train d'atterrissage</td>
                                <td className='text-[14px] '>24/07/2025</td>
                                <td className='text-[14px] '>30/07/2025</td>
                                <td className='text-[14px] '>Equipe 4</td>
                                <td className='text-[14px]'><p className="priorite-operation haute text-center rounded-sm text-white">Haute</p></td>
                                <td className='progress-bar text-[14px]'>
                                    <div className="bg-progress relative w-full rounded-full h-6 overflow-hidden">
                                        <span className="absolute w-full text-center text-[14px] font-semibold">
                                            {`${100}%`}
                                        </span>
                                        <div
                                            className="bar h-6"
                                            style={{ width: "100%" }}
                                        >

                                        </div>
                                    </div>
                                </td>
                                <td className='text-[14px]'><p className="operation-status terminer flex items-center justify-center gap-1 rounded-2xl text-white"><HugeiconsIcon icon={StopCircleIcon} size={8} />Terminé</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Liste des opérations en carte */}
                <div className="incidents-list flex justify-between gap-4">
                    <div className="operations-planifier rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Planifié</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardOperations id_ops="1" nom="Réparation moteur" aeronef="TR-ABX" constructeur="Constructeur A" date_debut="18/07/2025" date_fin="24/07/2025" responsable="Equipe 1" priorite="Haute" />
                            <CardOperations id_ops="2" nom="Réparation circuit hydraulique" aeronef="TR-ABY" constructeur="Constructeur B" date_debut="20/07/2025" date_fin="26/07/2025" responsable="Equipe 2" priorite="Moyenne" />
                        </div>
                    </div>
                    <div className="incidents-moyenne rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-30 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />En cours</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardOperations id_ops="3" nom="Réparation hublot cabine" aeronef="TR-ABZ" constructeur="Constructeur C" date_debut="22/07/2025" date_fin="28/07/2025" responsable="Equipe 3" priorite="Basse" />
                            <CardOperations id_ops="4" nom="Réparation train d'atterrissage" aeronef="TR-LJT" constructeur="Constructeur D" date_debut="24/07/2025" date_fin="30/07/2025" responsable="Equipe 4" priorite="Haute" />
                        </div>
                    </div>
                    <div className="operations-enattente rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />En pause</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardOperations id_ops="5" nom="Réparation avionique" aeronef="TR-XYZ" constructeur="Constructeur E" date_debut="25/07/2025" date_fin="31/07/2025" responsable="Equipe 5" priorite="Moyenne" />
                            <CardOperations id_ops="6" nom="Réparation système de navigation" aeronef="TR-DEF" constructeur="Constructeur F" date_debut="26/07/2025" date_fin="01/08/2025" responsable="Equipe 6" priorite="Basse" />
                        </div>
                    </div>
                    <div className="incidents-mineur rounded-lg flex flex-col gap-4">
                        <h2 className='rounded-lg w-25 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Terminé</h2>
                        <div className='aeronefs-cards flex flex-col gap-10'>
                            <CardOperations id_ops="7" nom="Réparation peinture" aeronef="TR-GHI" constructeur="Constructeur G" date_debut="27/07/2025" date_fin="02/08/2025" responsable="Equipe 7" priorite="Basse" />
                            <CardOperations id_ops="8" nom="Réparation système électrique" aeronef="TR-JKL" constructeur="Constructeur H" date_debut="28/07/2025" date_fin="03/08/2025" responsable="Equipe 8" priorite="Moyenne" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operations