import HeaderPage from '../components/headerPage'


const DashbordPage = () => {
  return (
    <div>
      <HeaderPage title='Dashboard' />
      <div className=' flex align-items'>
        <h3 className='dashboard-message text-xl'>Bienvenue dans AéroMaintain en cours de création...</h3>
      </div>
    </div>
  )
}

export default DashbordPage