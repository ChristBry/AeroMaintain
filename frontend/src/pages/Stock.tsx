import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { FilterIcon, Delete02Icon, Search01Icon, ArrowDown01Icon, SafeDelivery01Icon, PackageRemoveIcon, PackageProcessIcon, ReceiptDollarIcon, PackageReceiveIcon, PackageSentIcon, SafeDeliveryIcon } from '@hugeicons/core-free-icons';
import { Link } from "react-router-dom";

const Stock = () => {
    return (
        <div>
            <HeaderPage title="Pièces & Équipements" />

            {/* Menu de stock */}
            <div className="aeronefs-menu">

                {/* Stock Information */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Valeur du stock de Pièces</h3>
                            <HugeiconsIcon icon={ReceiptDollarIcon} size={20} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[25px] font-semibold'>53.5 M FCFA</h4>

                        </div>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Pièces en Attente</h3>
                            <HugeiconsIcon icon={SafeDelivery01Icon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Articles à Stock Faible</h3>
                            <HugeiconsIcon icon={PackageProcessIcon} size={20} className='text-orange-300' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Articles à Stock Critique</h3>
                            <HugeiconsIcon icon={PackageRemoveIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>0</h4>
                    </div>
                </div>

                {/* Filtre Stock */}
                <div className="aeronefs-header">
                    <div className='aeronefs-filter flex items-center justify-between gap-8'>
                        <div>
                            <h4 className="text-2xl font-semibold">Inventaire des pièces</h4>
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
                                    <HugeiconsIcon icon={PackageReceiveIcon} size={20} />
                                    <p className='transition-all duration-300'>Ajouter une pièce</p>
                                </button>
                                <button className='list-add-aeronef-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                                    <HugeiconsIcon icon={PackageSentIcon} size={20} />
                                    <p className='transition-all duration-300'>Enregistrer une sortie</p>
                                </button>
                                <Link to='/home/commandstock' className='list-add-aeronef-btn flex items-center gap-2 rounded-sm text-[14px] font-semibold hover:scale-105 transition-all duration-300'>
                                    <HugeiconsIcon icon={SafeDeliveryIcon} size={20} />
                                    <p className='transition-all duration-300'>Voir les commandes</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des aéronefs */}
                <div className="list-incidents rounded-lg">
                    <table className='table-incidents w-full table-fixed'>
                        <thead className='table-header-incidents'>
                            <tr>
                                <th className='text-left text-[14px] w-[8%]'>Référence</th>
                                <th className='text-left text-[14px] w-[15%]'>Désignation</th>
                                <th className='text-left text-[14px] w-[10%]'>Catégorie</th>
                                <th className='text-left text-[14px] w-[8%]'>Quantité</th>
                                <th className='text-left text-[14px] w-[10%]'>Localisation</th>
                                <th className='text-center text-[14px] w-[12%]'>Statut</th>
                                <th className='text-center text-[12px] w-[12%]'>Dernière Modification</th>
                                <th className='text-center text-[14px] w-[15%]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='table-body-incidents'>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>P-00123</td>
                                <td className='text-[14px]'>Filtre à huile (GE90)</td> 
                                <td className='text-[14px]'>Consommable Moteur</td>  
                                <td className='text-[14px]'>25</td>                    
                                <td className='text-[14px]'>Mag. A, Allée 3</td>
                                <td className='text-[14px]'><p className="statut-aeronef service text-center rounded-sm text-white bg-green-500 py-1 px-2">En Stock</p></td>
                                <td className='text-[14px] text-center'>2024-07-28 10:30</td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>P-00456</td>
                                <td className='text-[14px]'>Boulon de fixation (A320)</td>
                                <td className='text-[14px]'>Quincaillerie Structure</td>
                                <td className='text-[14px]'>7</td>
                                <td className='text-[14px]'>Mag. B, Rayon 2</td>
                                <td className='text-[14px]'><p className="statut-aeronef maintenance text-center rounded-sm text-white bg-orange-400 py-1 px-2">Stock Faible</p></td> {/* Statut Stock */}
                                <td className='text-[14px] text-center'>2024-07-29 14:15</td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>P-00789</td>
                                <td className='text-[14px]'>Capteur de pression (CFM56)</td>
                                <td className='text-[14px]'>Avionique</td>
                                <td className='text-[14px]'>1</td>
                                <td className='text-[14px]'>Mag. C, Casier 1</td>
                                <td className='text-[14px]'><p className="statut-aeronef critical text-center rounded-sm text-white bg-red-600 py-1 px-2">Stock Critique</p></td> {/* Statut Stock */}
                                <td className='text-[14px] text-center'>2024-07-30 09:00</td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>P-01011</td>
                                <td className='text-[14px]'>Roue de train d'atterrissage (B737)</td>
                                <td className='text-[14px]'>Train d'Atterrissage</td>
                                <td className='text-[14px]'>0 (5 en commande)</td>
                                <td className='text-[14px]'>En transit (Fournisseur)</td>
                                <td className='text-[14px]'><p className="statut-aeronef pending text-center rounded-sm text-white bg-yellow-500 py-1 px-2">En Attente</p></td> {/* Statut Stock */}
                                <td className='text-[14px] text-center'>2024-07-25 18:00</td>
                                <td className='actions flex items-center justify-center gap-6'>
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

export default Stock