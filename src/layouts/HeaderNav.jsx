import { Link } from 'react-router-dom'
import LogoRie from '../assets/logo-rie.png'

function HeaderNav() {
  return (
    <nav className="flex justify-between items-center content-center p-3 bg-[#50a1a5] text-white ">
    <div className="flex justify-between items-center content-center">
      <Link to="/" className="text-2xl nav">
        <img src={LogoRie} alt="" className='w-12' />
      </Link>
      <Link to="/" className="text-2xl  nav">Rie Odontologia</Link>
    </div>
    <div className="flex flex-col"> 
    <Link to="/" className="text-2xl  nav">Dr Marcos Sanches Jaraba</Link>
    </div>
  </nav>
  )
}

export default HeaderNav