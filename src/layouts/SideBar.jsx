import LogoRie from '../assets/logo-rie.png'

import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
    <aside className="border p-5 container-fluid w-full h-screen scroll-">
      <header className="flex justify-center items-center content-center p-4  ]">
        <div className='border border-[#236768] rounded-full p-1'>
          <img src={LogoRie} alt="" className='w-full' />
        </div>
      </header>
      <nav className='flex justify-center flex-col'>
        <ul className='flex flex-col'>
          <Link to="/form" className=''>
          <li className='mb-2 flex justify-center items-center content-center p-4 border border-[#236768] rounded-full text-[#236768] hover:text-white hover:bg-[#50A1A5] cursor-pointer'>
            Formulario
          </li>
          </Link>
          <Link to="/listado">
          <li className='mb-2 flex justify-center items-center content-center p-4 border border-[#236768] hover:bg-[#50A1A5]  rounded-full text-[#236768] hover:text-white cursor-pointer'>
           Listado
          </li>
          </Link>
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default SideBar