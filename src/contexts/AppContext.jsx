import { createContext, useState, } from "react"

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

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
    respiracion:'',
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
  const [lastId, setLastId] = useState(0);

  
  /* manejar el cambio de valores de entrada del formulario */
  const handleInputChange = (event) => {
    event.preventDefault()

    let {name, value} = event.target
    // Verifica si el elemento es un campo de selección
  if (event.target.tagName === "SELECT") {
    // El valor de un campo de selección se encuentra en event.target.value
    value = event.target.value;
  }

    setData(prevData => (
      { ...prevData, 
        [name]: value 
      }))

    // Convierte data a JSON y lo almacena en jsonData
  }


  
  const saveData = async (event) => {
    event.preventDefault()

    const newId = lastId + 1

    const newData = {
      ...data,
      id: newId,

    }
    
    setLastId(newId)

    setData(newData)

    // guardar en localstorage
    const jsonData = JSON.stringify(newData)
    localStorage.setItem('data', jsonData)


    // limpiar el formulario
    setData({
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
      respiracion:'',
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
  }
  // consumir lada data del localstorage
  // consumir data del localstorage
  const data2 = JSON.parse(localStorage.getItem('data')) || []


    // enviar los datos al servidor
    const handleFormSubmit = async (event) => {
      event.preventDefault()
      const res = await fetch('http://localhost:3001/generatehistoryclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
      })
      if (res.ok) {
        // descargar el pdf
        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'historiaclinica.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }



  const contextValue = {
    data,
    handleInputChange,
    saveData,
    handleFormSubmit,
    data2
  }


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
