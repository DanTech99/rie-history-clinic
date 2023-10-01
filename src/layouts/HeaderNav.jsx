import {Link} from 'wouter'
import LogoRie from '../assets/logo-rie.png'

function HeaderNav() {
  return (
    <nav className="flex justify-between items-center content-center p-5 bg-green-700 text-white ">
    <div className="flex justify-between items-center content-center">
      <Link to="/" className="text-2xl nav">
        <img src={LogoRie} alt="" className='w-12' />
      </Link>
      <Link to="/" className="text-2xl  nav">Rie Odontologia</Link>
    </div>
    <div className="flex flex-col"> 
      <a href="/" className="text-xl  py-2">Dr Marcos Sanches Jaraba</a>
    </div>
  </nav>
  )
}

export default HeaderNav