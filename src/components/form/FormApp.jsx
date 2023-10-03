import {useState} from 'react'
import FormRegister from './FormRegister';

function FormApp() {

  const [lastId, setLastId] = useState(0);
  const [data, setData] = useState({
    odontologo: '',
    paciente: '',
    fechatratamiento: '',
    edad: '',
    nucleofamiliar: '',
    estadogeneral: '',
    nacimiento: '',
    parto: '',
    enfermedadescronicas: '',
    alteracionescongenitas: '',
    traumatismos: '',
    intervencionesquirurgicas: '',
    tratamientoprevio: '',
    uso: '',
    hastaqueedad: '',
    observaciones: '',
    patronfacial: '',
    perfil: '',
    asimetria: '',
    alturafacial: '',
    anchofacial: '',
    perfilmaxilar: '',
    perfilmandibular: '',
    surcolabiomenton: '',
    labiosenreposo: '',
    perfillabial: '',
    repiracion:'',
    actividadcomisural: '',
    actividadlingual: '',
    labiosuperior: '',
    labioinferior: '',
    masetero: '',
    mentoniano: '',
    habitosdesuccion: '',
    plantratamiento: '',
    tecnicaaparato: '',
    tiempoestimadotratamiento: '',
    pronostico: '',

  })
  const [jsonData, setJsonData] = useState('');

  /* manejar el cambio de valores de entrada del formulario */
  const handleInputChange = (event) => {
    event.preventDefault()

    const {name, value} = event.target

    setData({
      ...data,
      [name]: value
    })

    // Convierte data a JSON y lo almacena en jsonData
  setJsonData(JSON.stringify(data, null, 2));
  }



  

  return (
    <FormRegister handleInputChange={handleInputChange} data={data} jsonData={jsonData} />
  )
}

export default FormApp