import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { FilterIcon, Search01Icon, UserAdd01Icon, Add01Icon, UserGroup03Icon, AiPhone01Icon, Delete02Icon, Mail01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

const prestaires = () => {
    return (
        <div>
            <HeaderPage title="Prestataires" />

            {/* Suivi des opérations */}
            <div className="operations-menu w-full">

                {/* Statistiques d'opérations */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Nombre de prestaires</h3>
                            <HugeiconsIcon icon={UserGroup03Icon} size={20} className='icon-total' />
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
                            <h3 className='stats-item-title text-[14px]'>Prestataire régulier</h3>
                            <HugeiconsIcon icon={UserGroup03Icon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Prestataire ponctuel</h3>
                            <HugeiconsIcon icon={UserGroup03Icon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                </div>

                {/* Filtre Prestataires*/}
                <div className="aeronefs-header">
                    <div className='aeronefs-filter flex items-center justify-between gap-8'>
                        <div>
                            <h4 className="text-2xl font-semibold">Liste des Prestataires</h4>
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
                                    <HugeiconsIcon icon={UserAdd01Icon} size={20} />
                                    <p className='transition-all duration-300'>Ajouter un prestataire</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des opérations */}
                <table className='table-mecaniciens w-full table-fixed'>
                    <thead className='table-header-mecaniciens'>
                        <tr>
                            <th className='text-left text-[14px] w-[12%]'>Prestataire</th>
                            <th className='text-left text-[14px] w-[15%]'>Type de Service</th>
                            <th className='text-left text-[14px] w-[12%]'>Localisation</th>
                            <th className='text-left text-[14px] w-[15%]'>Contact Principal</th>
                            <th className='text-left text-[14px] w-[20%]'>Coordonnées</th>
                            <th className='text-center text-[14px] w-[10%]'>Statut</th>
                            <th className='text-center text-[14px] w-[14%]'></th>
                        </tr>
                    </thead>
                    <tbody className='table-body-mecaniciens'>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AeroMoteurs Solutions</td>
                            <td className='text-[14px]'>Maintenance Moteur</td>
                            <td className='text-[14px]'>Douala, Cameroun (DXA)</td>
                            <td className='text-[14px]'>M. Jean Dupont (Directeur)</td>
                            <td className='text-[14px]'>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={AiPhone01Icon} size={14} className="text-gray-500" />
                                    <p>+237 656 40 56 71</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={Mail01Icon} size={14} className="text-gray-500" />
                                    <p>contact@aeromoteurs.com</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <p className="statut-prestataire ponctuel text-center rounded-sm text-white bg-green-600 py-1 px-2">Ponctuel</p>
                            </td>
                            <td className='actions flex items-center gap-6'>
                                <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>Global Avionics Systems</td>
                            <td className='text-[14px]'>Avionique & Systèmes</td>
                            <td className='text-[14px]'>Paris, France</td>
                            <td className='text-[14px]'>Mme. Sophie Martin (Chef de Projet)</td>
                            <td className='text-[14px]'>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={AiPhone01Icon} size={14} className="text-gray-500" />
                                    <p>+33 1 10 53 472</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={Mail01Icon} size={14} className="text-gray-500" />
                                    <p>info@globalavionics.fr</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <p className="statut-prestataire regulier text-center rounded-sm">Régulier</p>
                            </td>
                            <td className='actions flex items-center gap-6'>
                                <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AirTraining Academy</td>
                            <td className='text-[14px]'>Formation & Certifications</td>
                            <td className='text-[14px]'>Abidjan, Côte d'Ivoire</td>
                            <td className='text-[14px]'>M. Philippe Traoré (Directeur Pédagogique)</td>
                            <td className='text-[14px]'>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={AiPhone01Icon} size={14} className="text-gray-500" />
                                    <p>+225 07 89 23 913</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={Mail01Icon} size={14} className="text-gray-500" />
                                    <p>contact@airtraining.ci</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <p className="statut-prestataire ponctuel text-center rounded-sm text-white bg-yellow-500 py-1 px-2">Ponctuel</p>
                            </td>
                            <td className='actions flex items-center gap-6'>
                                <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                        <tr className="cursor-pointer">
                            <td className='text-[14px]'>AeroPaint Services</td>
                            <td className='text-[14px]'>Peinture & Finition Aéronefs</td>
                            <td className='text-[14px]'>Casablanca, Maroc</td>
                            <td className='text-[14px]'>Mme. Fatima Zahra (Responsable Commerciale)</td>
                            <td className='text-[14px]'>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={AiPhone01Icon} size={14} className="text-gray-500" />
                                    <p>+212 5 78 09 204</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon icon={Mail01Icon} size={14} className="text-gray-500" />
                                    <p>sales@aeropaint.ma</p>
                                </div>
                            </td>
                            <td className='text-[14px]'>
                                <p className="statut-prestataire regulier text-center rounded-sm text-white bg-gray-500 py-1 px-2">Régulier</p>
                            </td>
                            <td className='actions flex items-center gap-6'>
                                <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default prestaires