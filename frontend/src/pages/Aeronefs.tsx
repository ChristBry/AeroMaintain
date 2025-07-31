import HeaderPage from "../components/headerPage"
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, TableIcon, LayoutTable01Icon, FilterIcon, Delete02Icon, Search01Icon, StopCircleIcon, AirplaneModeOffIcon, AirplaneModeIcon, ArrowDown01Icon, AirplaneTakeOff01Icon, Airplane02Icon } from '@hugeicons/core-free-icons';
import CardAeronef from "../components/CardAeronef";

const Aeronefs = () => {
  return (
    <div>
      <HeaderPage title="Aéronefs" />

      {/* Menu des Aéronefs */}
      <div className="aeronefs-menu">

        {/* Fleet Information */}
        <div className="aeronefs-stats flex items-center justify-between gap-8">
          <div className='stats-item-aeronefs w-65 rounded-lg hover:scale-105 transition-all duration-300'>
            <div className='stats-item-header flex items-center justify-between gap-10'>
              <h3 className='stats-item-title text-[14px]'>Nombre d'aéronefs</h3>
              <HugeiconsIcon icon={AirplaneModeIcon} size={20} className='icon-total' />
            </div>
            <div className='stats-item-value-total flex items-center justify-between'>
              <h4 className='text-[30px] font-semibold'>6</h4>
              <button className='add-aeronef-btn flex items-center gap-2 rounded-sm text-[11px] font-semibold transition-all duration-300'>
                <HugeiconsIcon icon={Add01Icon} size={20} />
                <p className='transition-all duration-300'>Ajouter un aéronef</p>
              </button>
            </div>
          </div>
          <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
            <div className='stats-item-header flex items-center justify-between'>
              <h3 className='stats-item-title text-[14px]'>En service</h3>
              <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={20} className='text-green-500' />
            </div>
            <h4 className='stats-item-value-total text-[30px] font-semibold'>4</h4>
          </div>
          <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
            <div className='stats-item-header flex items-center justify-between'>
              <h3 className='stats-item-title text-[14px]'>En maintenance</h3>
              <HugeiconsIcon icon={Airplane02Icon} size={20} className='text-orange-300' />
            </div>
            <h4 className='stats-item-value-total text-[30px] font-semibold'>2</h4>
          </div>
          <div className='stats-item-aeronefs w-60 rounded-lg hover:scale-105 transition-all duration-300'>
            <div className='stats-item-header flex items-center justify-between'>
              <h3 className='stats-item-title text-[14px]'>Hors service</h3>
              <HugeiconsIcon icon={AirplaneModeOffIcon} size={20} className='text-red-500' />
            </div>
            <h4 className='stats-item-value-total text-[30px] font-semibold'>0</h4>
          </div>
        </div>

        {/* Filtre Aéronefs */}
        <div className="aeronefs-header">
          <h4 className="text-2xl font-semibold">Informations sur la flotte</h4>
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
                  <p className='transition-all duration-300'>Ajouter un aéronef</p>
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
                <th className='text-left text-[14px] w-[5%]'>Immatriculation</th>
                <th className='text-left text-[14px] w-[4%]'>Modèle</th>
                <th className='text-left text-[14px] w-[5%]'>Dernière maintenance</th>
                <th className='text-left text-[14px] w-[4%]'>Heures de vol</th>
                <th className='text-left text-[14px] w-[4%]'>Cycle de vol</th>
                <th className='text-left text-[14px] w-[5%]'>Prochaine maintenance</th>
                <th className='text-center text-[14px] w-[6%]'>Disponibilité</th>
                <th className='text-left text-[14px] w-[6%]'></th>
              </tr>
            </thead>
            <tbody className='table-body-incidents'>
              <tr className="cursor-pointer">
                <td className='text-[14px]'>F-GABC</td>
                <td className='text-[14px]'>Airbus A320</td>
                <td className='text-[14px]'>2023-10-01</td>
                <td className='text-[14px]'>14000</td>
                <td className='text-[14px]'>1500</td>
                <td className='text-[14px]'>2023-10-01</td>
                <td className='text-[14px]'><p className="statut-aeronef service text-center rounded-sm text-white">En service</p></td>
                <td className='actions flex items-center gap-6'>
                  <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                  <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                </td>
              </tr>
              <tr className="cursor-pointer">
                <td className='text-[14px]'>F-GDEF</td>
                <td className='text-[14px]'>Boeing 737</td>
                <td className='text-[14px]'>2023-09-15</td>
                <td className='text-[14px]'>12000</td>
                <td className='text-[14px]'>1200</td>
                <td className='text-[14px]'>2023-09-15</td>
                <td className='text-[14px]'><p className="statut-aeronef service text-center rounded-sm text-white">En service</p></td>
                <td className='actions flex items-center gap-6'>
                  <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                  <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                </td>
              </tr>
              <tr className="cursor-pointer">
                <td className='text-[14px]'>F-GHIJ</td>
                <td className='text-[14px]'>Airbus A330</td>
                <td className='text-[14px]'>2023-10-05</td>
                <td className='text-[14px]'>8000</td>
                <td className='text-[14px]'>800</td>
                <td className='text-[14px]'>2023-10-05</td>
                <td className='text-[14px]'><p className="statut-aeronef maintenance text-center rounded-sm text-white">En maintenance</p></td>
                <td className='actions flex items-center gap-6'>
                  <button className='edit-btn rounded-sm text-[12px] flex items-center hover:scale-105 transition-all duration-300'><HugeiconsIcon icon={ArrowDown01Icon} size={20} />Actions</button>
                  <button className='delete-btn text-red-500'><HugeiconsIcon icon={Delete02Icon} size={20} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Liste des aéronefs sous forme de cartes */}
        <div className="hidden aeronefs-list flex items-center justify-between gap-4">
          <div className="avion-service rounded-lg flex flex-col gap-4">
            <h2 className='rounded-lg w-30 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />En service</h2>
            <div className='aeronefs-cards flex flex-col gap-10'>
              <CardAeronef immat="F-GABC" constructeur="Airbus" modele="A320" statut="En service" date_maintenance="2023-10-01" aeroport_base="CDG" cycle_vol={1500} />
              <CardAeronef immat="F-GDEF" constructeur="Boeing" modele="737" statut="En service" date_maintenance="2023-09-15" aeroport_base="ORY" cycle_vol={1200} />
            </div>
          </div>
          <div className="avion-maintenance rounded-lg flex flex-col gap-4">
            <h2 className='rounded-lg w-40 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />En maintenance</h2>
            <div className='aeronefs-cards flex flex-col gap-10'>
              <CardAeronef immat="F-GHIJ" constructeur="Airbus" modele="A330" statut="En maintenance" date_maintenance="2023-10-05" aeroport_base="LYS" cycle_vol={800} />
              <CardAeronef immat="F-GKLM" constructeur="Boeing" modele="777" statut="En maintenance" date_maintenance="2023-09-20" aeroport_base="NCE" cycle_vol={600} />
            </div>
          </div>
          <div className="avion-hors-service rounded-lg flex flex-col gap-4">
            <h2 className='rounded-lg w-35 text-center flex items-center gap-2 text-[15px] font-semibold'><HugeiconsIcon icon={StopCircleIcon} size={8} className="" />Hors service</h2>
            <div className='aeronefs-cards flex flex-col gap-10'>
              <CardAeronef immat="F-GNOP" constructeur="Airbus" modele="A350" statut="Hors service" date_maintenance="2023-08-30" aeroport_base="TLS" cycle_vol={0} />
              <CardAeronef immat="F-GQRS" constructeur="Boeing" modele="787" statut="Hors service" date_maintenance="2023-07-25" aeroport_base="MRS" cycle_vol={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aeronefs