import HeaderPage from '../components/headerPage'
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, ArrowDown01Icon, Delete02Icon, Search01Icon, FilterIcon, Edit04Icon, UserCheck01Icon, UserMultiple03Icon, UserRemove01Icon } from '@hugeicons/core-free-icons';

const Mecaniciens = () => {
    return (
        <div>
            <HeaderPage title="Mécaniciens & Équipes" />

            {/* Menu des Mécaniciens */}
            <div className='mecaniciens-menu'>

                {/* Statistiques des Mécaniciens */}
                <div className='mecaniciens-stats flex items-center justify-between gap-30'>
                    <div className='stats-item-mecaniciens w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-20'>
                            <h3 className='stats-item-title text-[14px]'>Total Mécaniciens</h3>
                            <HugeiconsIcon icon={UserMultiple03Icon} size={20} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[30px] font-semibold'>40</h4>
                            <button className='add-mecanicien-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                                <HugeiconsIcon icon={Add01Icon} size={20} />
                                <p className='transition-all duration-300'>Ajouter un mécanicien</p>
                            </button>
                        </div>
                    </div>
                    <div className='stats-item-mecaniciens w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Disponibles</h3>
                            <HugeiconsIcon icon={UserCheck01Icon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>35</h4>
                    </div>
                    <div className='stats-item-mecaniciens w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>En congé / Indisponibles</h3>
                            <HugeiconsIcon icon={UserRemove01Icon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>5</h4>
                    </div>
                </div>

                {/* Graphique et Équipes de maintenance */}
                <div className="graph-part flex gap-2">
                    <div className="graph-container h-80 w-2/3 rounded-lg hover:scale-105 transition-all duration-300">
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
                            <tbody className='table-body-team'>
                                <tr className='cursor-pointer'>
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
                                <tr className='cursor-pointer'>
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
                                <tr className='cursor-pointer'>
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
                            <button className='plus-team-btn flex items-center justify-end gap-2 rounded-sm text-[11px] font-semibold hover:scale-105 transition-all duration-300'>
                                <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
                                <p>Voir plus</p>
                            </button>
                        </table>
                    </div>
                </div>

                {/* Filtre mécaniciens */}
                <div className="aeronefs-header">
                    <div className='aeronefs-filter flex items-center justify-between gap-8'>
                       <h4 className="text-[22px] font-semibold">Liste des mécaniciens</h4>
                        <div className="flex items-center gap-8">
                            <button className='flex items-center gap-2 hover:scale-105 transition-all duration-300'>
                                <HugeiconsIcon icon={Search01Icon} size={20} className="icon-header" />
                                <input type="text" placeholder="Rechercher..." className="input-search-operation rounded-sm text-[14px]" />
                            </button>
                            <button className='hover:scale-105 transition-all duration-300'>
                                <HugeiconsIcon icon={FilterIcon} size={20} className="icon-header" />
                            </button>
                            <div className='flex items-center justify-end'>
                                <button className='list-add-team-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                                    <HugeiconsIcon icon={Add01Icon} size={20} />
                                    <p className='transition-all duration-300'>Ajouter un mécanicien</p>
                                </button>
                            </div>
                            <div className='flex items-center justify-end'>
                                <button className='list-add-aeronef-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                                    <HugeiconsIcon icon={Add01Icon} size={20} />
                                    <p className='transition-all duration-300'>Créer une équipe</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des Mécaniciens */}
                <div className="list-mecaniciens rounded-lg"> 
                    <table className='w-full table-fixed'>
                        <thead className='table-header-mecaniciens'>
                            <tr>
                                <th className='text-left text-[14px] w-1/6'>Nom</th>
                                <th className='text-left text-[14px] w-1/6'>Prénom</th>
                                <th className='text-left text-[14px] w-1/6'>Rôle</th>
                                <th className='text-left text-[14px] w-1/6'>Équipe</th>
                                <th className='text-left text-[14px] w-1/6'>Statut</th>
                                <th className='text-left text-[14px] w-1/6'></th>
                            </tr>
                        </thead>
                        <tbody className='table-body-mecaniciens'>
                            <tr className='cursor-pointer'>
                                <td className='text-[14px]'>Dupont</td>
                                <td className='text-[14px]'>Jean</td>
                                <td className='text-[14px]'>Chef d'équipe</td>
                                <td className='text-[14px]'>Équipe Alpha</td>
                                <td className='text-[14px]'><p className="mecanicien-status disponible text-center rounded-sm text-white">Disponible</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className='cursor-pointer'>
                                <td className='text-[14px]'>Martin</td>
                                <td className='text-[14px]'>Sophie</td>
                                <td className='text-[14px]'>Mécanicien Senior</td>
                                <td className='text-[14px]'>Équipe Beta</td>
                                <td className='text-[14px]'><p className="mecanicien-status disponible text-center rounded-sm text-white">Disponible</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className='cursor-pointer'>
                                <td className='text-[14px]'>Lefevre</td>
                                <td className='text-[14px]'>Pierre</td>
                                <td className='text-[14px]'>Mécanicien Junior</td>
                                <td className='text-[14px]'>Équipe Gamma</td>
                                <td className='text-[14px]'><p className="mecanicien-status conges text-center rounded-sm text-white">En Congé</p></td>
                                <td className='actions flex items-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
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