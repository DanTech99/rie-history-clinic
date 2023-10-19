import { createContext, useState, } from "react"

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [data, setData] = useState({
    odontologo: '',
    paciente: '',
    contacto: '',
    cedula: '',
    acudiente: '',
    ocupacion: '',
    direccion: '',
    ciudad: '',
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
    deglucion: '',
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

  // esado para mostrar un mensaje de cargando
  const [loading, setLoading] = useState(false)

  
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

    // mensaje de cargando
    setLoading(true)

    const newData = {
      ...data,
    }
    setData(newData)

    // guardar en localstorage
    const jsonData = JSON.stringify(newData)
    localStorage.setItem('data', jsonData)

      // consumir lada data del localstorage
  // consumir data del localstorage
    const data2 = JSON.parse(localStorage.getItem('data')) || []

      const res = await fetch('http://localhost:3001/generatehistoryclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
      })
      if (res.ok) {
        // mostrar mensaje de cargando
        setLoading(true)
        // descargar el pdf
        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'historiaclinica.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        // ocultar mensaje de cargando
        setLoading(false)
      }


    // limpiar el formulario
    setData({
      odontologo: '',
      paciente: '',
      contacto: '',
      cedula: '',
      acudiente: '',
      ocupacion: '',
      direccion: '',
      ciudad: '',
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
      deglucion: '',
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


  const contextValue = {
    data,
    handleInputChange,
    saveData,
    loading,
    
  }


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
