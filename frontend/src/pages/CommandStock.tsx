import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { FilterIcon, Delete02Icon, Search01Icon, ArrowDown01Icon, SafeDelivery01Icon, PackageRemoveIcon, PackageProcessIcon, ReceiptDollarIcon, Add01Icon } from '@hugeicons/core-free-icons';

const CommandStock = () => {
    return (
        <div>
            <HeaderPage title="Bon de commandes" />

            {/* Menu de stock */}
            <div className="aeronefs-menu">

                {/* Stock Information */}
                <div className="aeronefs-stats flex items-center justify-between gap-8">
                    <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between gap-10'>
                            <h3 className='stats-item-title text-[14px]'>Valeur Totale des Commandes</h3>
                            <HugeiconsIcon icon={ReceiptDollarIcon} size={20} className='icon-total' />
                        </div>
                        <div className='stats-item-value-total flex items-center justify-between'>
                            <h4 className='text-[25px] font-semibold'>13 M FCFA</h4>
                        </div>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Commandes Livrées</h3>
                            <HugeiconsIcon icon={SafeDelivery01Icon} size={20} className='text-green-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Commandes en Cours</h3>
                            <HugeiconsIcon icon={PackageProcessIcon} size={20} className='text-orange-300' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
                    </div>
                    <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
                        <div className='stats-item-header flex items-center justify-between'>
                            <h3 className='stats-item-title text-[14px]'>Commandes Annulées</h3>
                            <HugeiconsIcon icon={PackageRemoveIcon} size={20} className='text-red-500' />
                        </div>
                        <h4 className='stats-item-value-total text-[30px] font-semibold'>0</h4>
                    </div>
                </div>

                {/* Filtre Stock */}
                <div className="aeronefs-header">
                    <div className='aeronefs-filter flex items-center justify-between gap-8'>
                        <div>
                            <h4 className="text-2xl font-semibold">Liste des commandes</h4>
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
                                    <p className='transition-all duration-300'>Ajouter une commande</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des aéronefs */}
                <div className="list-incidents rounded-lg">
                    <table className='table-incidents w-full table-fixed'>
                        <thead className='table-header-incidents'>
                            <tr>
                                <th className='text-left text-[14px] w-[14%]'>N° Commande</th>
                                <th className='text-left text-[14px] w-[12%]'>Fournisseur</th>
                                <th className='text-left w-[12%] text-[14px]'>Demandeur</th>
                                <th className='text-left w-[14%] text-[14px]'>Coût Estimé</th>
                                <th className='text-left w-[14%] text-[14px]'>Date Commande</th>
                                <th className='text-center w-[10%] text-[14px]'>Statut</th>
                                <th className='text-center w-[15%] text-[14px]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='table-body-incidents'>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>C-202407001</td>
                                <td className='text-[14px]'>AeroParts Solutions</td>
                                <td className='text-[14px]'>Service Maintenance A</td>
                                <td className='text-[14px]'>12 500 000 FCFA</td>
                                <td className='text-[14px]'>2024-07-15</td>
                                <td className='text-[14px]'>
                                    <p className="statut-command livrer text-center rounded-sm text-white bg-green-500 py-1 px-2">Livrée</p> {/* Statut */}
                                </td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>C-202407002</td>
                                <td className='text-[14px]'>Global Avionics Inc.</td>
                                <td className='text-[14px]'>Département Ingénierie</td>
                                <td className='text-[14px]'>8 200 000 FCFA</td>
                                <td className='text-[14px]'>2024-07-20</td>
                                <td className='text-[14px]'>
                                    <p className="statut-command en-cours text-center rounded-sm text-white bg-orange-400 py-1 px-2">En Attente</p>
                                </td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>C-202407003</td>
                                <td className='text-[14px]'>Aircraft Spares Ltd.</td>
                                <td className='text-[14px]'>Atelier de Réparation</td>
                                <td className='text-[14px]'>5 300 000 FCFA</td>
                                <td className='text-[14px]'>2024-07-25</td>
                                <td className='text-[14px]'>
                                    <p className="statut-command en-cours text-center rounded-sm text-white bg-blue-500 py-1 px-2">En attente</p>
                                </td>
                                <td className='actions flex items-center justify-center gap-6'>
                                    <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                                    <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer">
                                <td className='text-[14px]'>C-202407004</td>
                                <td className='text-[14px]'>Maintenance Tools Co.</td>
                                <td className='text-[14px]'>Service Achat</td>
                                <td className='text-[14px]'>750 000 FCFA</td>
                                <td className='text-[14px]'>2024-07-28</td>
                                <td className='text-[14px]'>
                                    <p className="statut-command annuler text-center rounded-sm text-white bg-red-600 py-1 px-2">Annulée</p>
                                </td>
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

export default CommandStock