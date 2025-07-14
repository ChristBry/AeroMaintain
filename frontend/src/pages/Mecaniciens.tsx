import React from 'react'
import HeaderPage from '../components/headerPage'
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, ArrowDown01Icon, Delete02Icon, Edit04Icon, GridViewIcon, UserCheck01Icon, UserMultiple03Icon, UserRemove01Icon } from '@hugeicons/core-free-icons';

const Mecaniciens = () => {
    return (
        <div>
            <HeaderPage title="Mécaniciens & Équipes" />
            <div className='stats-part-mecaniciens'>
                <div className='stats-container flex items-center justify-around gap-30'>
                    <div className='stats-item-mecaniciens w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between gap-20'>
                            <h3 className='stats-item-title text-[14px]'>Total Mécaniciens</h3>
                            <HugeiconsIcon icon={UserMultiple03Icon} size={28} />
                        </div>
                        <div className='stats-item-value flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>40</h4>
                            <button className='add-mecanicien-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={20} />
                                <p className='transition-all duration-300'>Ajouter un mécanicien</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-mecaniciens w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Disponibles</h3>
                            <HugeiconsIcon icon={UserCheck01Icon} size={28} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>35</h4>
                    </div>
                    <div className='stats-item-mecaniciens w-65 rounded-lg'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>En congé / Indisponibles</h3>
                            <HugeiconsIcon icon={UserRemove01Icon} size={28} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value text-[30px] font-semibold'>5</h4>
                    </div>
                </div>
                <div className="graph-part flex gap-2">
                    <div className="graph-container h-80 w-2/3 rounded-lg">
                        <h3 className='text-[16px] font-semibold'>Graphique des Mécaniciens</h3>
                        <div className='graph-placeholder rounded-lg flex items-center justify-center'>
                            <p className='text-gray-500'>Graphique à venir...</p>
                        </div>
                    </div>
                    <div className="table-team w-1/3 rounded-lg">
                        <table className='team-table w-full'>
                            <thead>
                                <tr>
                                    <th className='text-left flex justify-between text-[16px] font-semibold'>
                                        Équipes de maintenance
                                        <button className='add-team-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                            <HugeiconsIcon icon={Add01Icon} size={20} />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-semibold'>Équipe Alpha</p>
                                            <div className='flex items-center gap-2'>
                                                <button className='edit-team-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Edit04Icon} size={20} />
                                                </button>
                                                <button className='delete-team-btn flex items-center gap-2 rounded-sm text-[11px] text-red-500 font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Delete02Icon} size={20} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className='team-details text-[12px]'>
                                            <span>Chef : </span>
                                            <span>Bryan Tchajip, </span>
                                            <span>Membres : </span>
                                            <span>8</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-semibold'>Équipe Beta</p>
                                            <div className='flex items-center gap-2'>
                                                <button className='edit-team-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Edit04Icon} size={20} />
                                                </button>
                                                <button className='delete-team-btn flex items-center gap-2 rounded-sm text-[11px] text-red-500 font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Delete02Icon} size={20} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className='team-details text-[12px]'>
                                            <span>Chef : </span>
                                            <span>Patrick Tchepkou, </span>
                                            <span>Membres : </span>
                                            <span>4</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-semibold'>Équipe Gamma</p>
                                            <div className='flex items-center gap-2'>
                                                <button className='edit-team-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Edit04Icon} size={20} />
                                                </button>
                                                <button className='delete-team-btn flex items-center gap-2 rounded-sm text-[11px] text-red-500 font-semibold transition-all duration-300'>
                                                    <HugeiconsIcon icon={Delete02Icon} size={20} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className='team-details text-[12px]'>
                                            <span>Chef : </span>
                                            <span>Cabrel Francis, </span>
                                            <span>Membres : </span>
                                            <span>6</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <button className='plus-team-btn flex items-center justify-end gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
                                <p>Voir plus</p>
                            </button>
                        </table>
                    </div>
                </div>
                <div className="list-mecaniciens rounded-lg">
                    <div className='list-mecaniciens-header flex justify-between items-center'>
                        <h3 className='text-[17px] font-semibold'>Liste des Mécaniciens</h3>
                        <div className='list-buttons flex items-center gap-8'>
                            <button className='list-add-mecanicien-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={20} />
                                <p className='transition-all duration-300'>Ajouter un mécanicien</p>
                            </button>
                            <button className='list-add-team-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={20} />
                                <p className='transition-all duration-300'>Créer une équipe</p>
                            </button>
                        </div>
                    </div>
                    <table className='table-mecaniciens w-full table-fixed'>
                        <thead className='table-header-mecaniciens'>
                            <tr>
                                <th className='text-left w-1/6'>Nom</th>
                                <th className='text-left w-1/6'>Prénom</th>
                                <th className='text-left w-1/6'>Rôle</th>
                                <th className='text-left w-1/6'>Équipe</th>
                                <th className='text-left w-1/6'>Statut</th>
                                <th className='text-left w-1/6'></th>
                            </tr>
                        </thead>
                        <tbody className='table-body-mecaniciens'>
                            <tr>
                                <td className='text-[14px]'>Dupont</td>
                                <td className='text-[14px]'>Jean</td>
                                <td className='text-[14px]'>Chef d'équipe</td>
                                <td className='text-[14px]'>Équipe Alpha</td>
                                <td className='mecanicien-status text-[14px]'>Disponible</td>
                                <td className='actions'>
                                    <button className='edit-btn'><HugeiconsIcon icon={Edit04Icon} size={20} /></button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-[14px]'>Martin</td>
                                <td className='text-[14px]'>Sophie</td>
                                <td className='text-[14px]'>Mécanicien Senior</td>
                                <td className='text-[14px]'>Équipe Beta</td>
                                <td className='text-[14px]'>Disponible</td>
                                <td className='actions'>
                                    <button className='edit-btn'><HugeiconsIcon icon={Edit04Icon} size={20} /></button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-[14px]'>Lefevre</td>
                                <td className='text-[14px]'>Pierre</td>
                                <td className='text-[14px]'>Mécanicien Junior</td>
                                <td className='text-[14px]'>Équipe Gamma</td>
                                <td className='text-[14px]'>En Congé</td>
                                <td className='actions'>
                                    <button className='edit-btn'><HugeiconsIcon icon={Edit04Icon} size={20} /></button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mecaniciens