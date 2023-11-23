import HeaderNav from "../layouts/HeaderNav"
import IconForm from '../assets/icon-form.png'
import IconRegister from '../assets/icon-register.png'

import { Link } from 'react-router-dom'

function home() {
  return (
    <>
    <HeaderNav />

    <main className="flex justify-center items-center content-center h-[70vh] md:flex-row sm:flex-col">
      
       <div className="card w-80 rounded-full h-80 flex flex-col justify-between items-center content-center hover:shadow-xl border border-[#50a1a5]">
          <div className="card-body w-auto h-auto cursor-pointer">
            <Link to="/form">
              <img src={IconForm} alt=""  />
            </Link>
          </div>  
          <h1 className="text-2xl font-bold text-[#236768]">Generar Historia Clinica</h1>
      </div>

      <div className="card w-80 rounded-full h-80 flex flex-col justify-between items-center content-center hover:shadow-xl border-[#50a1a5] border">
          <div className="card-body w-auto h-auto cursor-pointer">
            <Link to="/listado">
              <img src={IconRegister} alt=""  />
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-[#236768]">Listado de Historias Clinicas</h1>
      </div>
    </main>
    </> 
  )
}

export default home