import { createContext, useState, } from "react"
import supabase from "../config/api/supabaseClient";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [items, setItems] = useState({
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

  // estado para alertas
  const [alert, setAlert] = useState(false)

  /* manejar el cambio de valores de entrada del formulario */
  const handleInputChange = (event) => {
    event.preventDefault()

    let {name, value} = event.target
    // Verifica si el elemento es un campo de selección
  if (event.target.tagName === "SELECT") {
    // El valor de un campo de selección se encuentra en event.target.value
    value = event.target.value;
  }

    setItems(prevData => (
      { ...prevData, 
        [name]: value 
      }))

  }


  // guardar en la base de datos
  const saveData = async (event) => {
    event.preventDefault()

    setLoading(true)

    if (!items.odontologo || !items.paciente || !items.contacto || !items.cedula || !items.acudiente || !items.ocupacion || !items.direccion || !items.ciudad || !items.fechatratamiento || !items.edad || !items.nucleofamiliar || !items.estadogeneral || !items.nacimiento || !items.parto || !items.enfermedadescronicas || !items.alteracionescongenitas || !items.traumatismos || !items.intervencionesquirurgicas || !items.tratamientoprevio || !items.uso || !items.hastaqueedad || !items.observaciones || !items.patronfacial || !items.perfil || !items.asimetria || !items.alturafacial || !items.anchofacial || !items.perfilmaxilar || !items.perfilmandibular || !items.surcolabiomenton || !items.labiosenreposo || !items.perfillabial || !items.respiracion || !items.deglucion || !items.actividadcomisural || !items.actividadlingual || !items.labiosuperior || !items.labioinferior || !items.masetero || !items.mentoniano || !items.habitosdesuccion || !items.plantratamiento || !items.tecnicaaparato || !items.tiempoestimadotratamiento || !items.pronostico) {
      setAlert(true)
      setLoading(false)

    }

    const {data, error} = await supabase.from('pacientes').insert([{
      odontologo: items.odontologo,
      paciente: items.paciente,
      contacto: items.contacto,
      cedula: items.cedula,
      acudiente: items.acudiente,
      ocupacion: items.ocupacion,
      direccion: items.direccion,
      ciudad: items.ciudad,
      fechatratamiento: items.fechatratamiento,
      edad: items.edad,
      nucleofamiliar: items.nucleofamiliar,
      estadogeneral: items.estadogeneral,
      nacimiento: items.nacimiento,
      parto: items.parto,
      enfermedadescronicas: items.enfermedadescronicas,
      alteracionescongenitas: items.alteracionescongenitas,
      traumatismos: items.traumatismos,
      intervencionesquirurgicas: items.intervencionesquirurgicas,
      tratamientoprevio: items.tratamientoprevio,
      uso: items.uso,
      hastaqueedad: items.hastaqueedad,
      observaciones: items.observaciones,
      patronfacial: items.patronfacial,
      perfil: items.perfil,
      asimetria: items.asimetria,
      alturafacial: items.alturafacial,
      anchofacial: items.anchofacial,
      perfilmaxilar: items.perfilmaxilar,
      perfilmandibular: items.perfilmandibular,
      surcolabiomenton: items.surcolabiomenton,
      labiosenreposo: items.labiosenreposo,
      perfillabial: items.perfillabial,
      respiracion: items.respiracion,
      deglucion: items.deglucion,
      actividadcomisural: items.actividadcomisural,
      actividadlingual: items.actividadlingual,
      labiosuperior: items.labiosuperior,
      labioinferior: items.labioinferior,
      masetero: items.masetero,
      mentoniano: items.mentoniano,
      habitosdesuccion: items.habitosdesuccion,
      plantratamiento: items.plantratamiento,
      tecnicaaparato: items.tecnicaaparato,
      tiempoestimadotratamiento: items.tiempoestimadotratamiento,
      pronostico: items.pronostico,
    }])

    if (error) {
      console.log(error);
      setLoading(false)
      setAlert(true)
    }

    if(data) {
      setLoading(false)
    }

  }



    // clear form

    const clearForm = () => {
      setItems({
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
    


  // funcion para descargar el pdf
  const downloadPdf = async (event) => {
    event.preventDefault()


    const newData = {
      ...items,
    }
    setItems(newData)

      const res = await fetch('https://server-generate-pdf-production.up.railway.app/api/generatehistoryclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
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
      } else {
        console.log('error al descargar el pdf')
        setAlert(true)
        setLoading(false)
      }
    }

  const contextValue = {
    items,
    handleInputChange,
    saveData,
    loading,
    downloadPdf,
    alert,
    clearForm,
    
  }


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
