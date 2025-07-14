import '../styles/StyleAdmin.css'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/home');
    }

    return (
        <div>
            <div className="login-part flex items-center">
                <div>
                    <div className="flex flex-col justify-center items-center w-[50vw] h-[100vh]">
                        <img src='../src/assets/images/LogoAero.png' alt='Image de maintenance' className='w-60' />
                        <form action="" className='login-form rounded-lg' onSubmit={handleSubmit}>
                            <h3 className='text-2xl text-center font-bold'>Connectez-vous à votre<br /> compte</h3>
                            <p className='text-[15px] text-center font-normal'>Entrez vos identifiants ci-dessous pour vous<br /> connecter.</p>
                            <div className="login-input relative flex flex-col">
                                <label htmlFor="username" className='text-[16px] font-semibold'>Username</label>
                                <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                <input type="text" name='username' autoComplete='off' placeholder='username' className='text-[15px] border rounded-sm ' />
                            </div>
                            <div className="login-input relative flex flex-col">
                                <label htmlFor='password' className='text-[16px] font-semibold'>Password</label>
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                <input type="password" name='password' placeholder='******' className='border rounded-sm' />
                            </div>
                            <Link to='/'  className='forgot-password text-[12px]'>Mot de passe oublié ?</Link>
                            <button type='submit' className='btn-login text-center font-semibold transition-all duration-300 flex jutify-center text-white rounded-lg cursor-pointer'>Connexion</button>
                        </form>
                    </div>
                </div>

                <div className="login-text">
                    <h1 className='text-[45px]'>Fiabilité-Productivité-Efficacité</h1>
                    <h2 className='text-[20px] text-center'>&lt;&lt; Au coeur de votre flotte avec vous. &gt;&gt;</h2>
                </div>
            </div>

        </div>
    )
}

export default LoginPage