import CartWidget from './CartWidget'
import LogoSVG from '../assets/Logo-SVG.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='shadow-md w-full relative top-0 left'>
      <div className='flex bg-white py-4 px-7 items-center justify-between'>
          <div className='w-20'>
            <h1>
                <Link to={"/"} ><img src={LogoSVG} alt="Logo Master Gym Ciudad Victoria svg"/></Link>
            </h1>
          </div>
          <div className=''>
            <ul className='flex items-center'>
              <li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Productos</a></li>
              <Link to={"/detailitem"}><li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Detail</a></li></Link>
              <Link to={"/about"} ><li className='sm:text-xl sm:mr-8 text-lg mr-5 text-gray-800 hover:text-gray-400 duration-500'>Acerca</li></Link>
            </ul>
          </div>
          <div>
            <Link to={"/cart"}> <CartWidget /> </Link> 
          </div>
      </div>
    </div>
  )
}

export default NavBar