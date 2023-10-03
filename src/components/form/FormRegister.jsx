
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
export default function FormRegister() {

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
    const res = await fetch('http://localhost:3001/generatehistoryclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data)
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

    console.log(data)

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

    // enviar los datos al servidor
    const handleFormSubmit = async (event) => {
      event.preventDefault()
      const res = await fetch('http://localhost:3001/generatehistoryclinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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

    



  return (
    <>
    <header className='p-2 text-center'>
      <h1 className='text-2xl'> Formulario Para Generar Historias Clinicas</h1>
    </header>

    <main>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '90%' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField 
        id="outlined-multiline-static" 
        label="ODONTOLOGO" 
        variant="filled" 
        multiline 
        
        name='odontologo'
        onChange={handleInputChange}
        value={data.odontologo}
        
        
      />

      <TextField 
        id="outlined-multiline-static" 
        label="PACIENTE" 
        variant="filled"
        name='paciente'
        onChange={handleInputChange}
        value={data.paciente}
        
      />

      <div className='flex  flex-row'>
        <div className='w-80 mr-5'>
        <TextField 
          id="standard-number" 
          label="Fecha de inicio de tratamiento"
          name='fechatratamiento' 
          type='date'
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='w-full'
          onChange={handleInputChange}
          value={data.fechatratamiento}
          
        />

        </div>
        <div className='w-80 '>
        <TextField 
          id="standard-number" 
          label="Edad" 
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='w-full'
          name='edad'
          onChange={handleInputChange}
          value={data.edad}
          
        />
        </div>
      </div>

      
        <FormControl variant="filled" sx={{ m: 1, maxWidth: 320}}>
        <InputLabel id="demo-simple-select-filled-label">Nucleo Familiar</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='nucleofamiliar'
          onChange={handleInputChange}
          value={data.nucleofamiliar}
          
          
        >
          <MenuItem value="si">SI</MenuItem>
          <MenuItem value="no">NO</MenuItem>
        </Select>
      </FormControl>
   

     

      <TextField 
        id="outlined-multiline-static" 
        label="ESTADO GENERAL" 
        variant="filled"
        name='estadogeneral'
        onChange={handleInputChange}
        value={data.estadogeneral}
         
      />

      <h1 className='text-xl mt-5'>ANTECEDENTES INDIVIDUALES</h1>
      <hr />

      <div className='flex flex-row flex-wrap '>

        <div className='mr-5' >
        <TextField 
          id="standard-number" 
          label="Nacimiento" 
          type='date'
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='w-80'
          name='nacimiento'
          onChange={handleInputChange}
          value={data.nacimiento}
        />

        </div>
        <div  >
          <FormControl variant="filled"  className='w-80'>
            <InputLabel id="demo-simple-select-filled-label">Parto</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='parto'
              onChange={handleInputChange}
              value={data.parto}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>
     
        <div className='mr-5 mt-5' >
          <FormControl variant="filled"  className='w-80 '>
            <InputLabel id="demo-simple-select-filled-label">Enfermedades Cronicas</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='enfermedadescronicas'
              onChange={handleInputChange}
              value={data.enfermedadescronicas}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>

        </div>
        <div className='mt-5' >
          <FormControl variant="filled"  className='w-80 '>
            <InputLabel id="demo-simple-select-filled-label">Alteraciones congénitas</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='alteracionescongenitas'
              onChange={handleInputChange}
              value={data.alteracionescongenitas}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5' >
          <FormControl variant="filled"  className='w-80 '>
            <InputLabel id="demo-simple-select-filled-label">Traumatismos:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='traumatismos'
              onChange={handleInputChange}
              value={data.traumatismos}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mt-5' >
          <FormControl variant="filled"  className='w-80 '>
            <InputLabel id="demo-simple-select-filled-label">Intervenciones quirúrgicas:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='intervencionesquirurgicas'
              onChange={handleInputChange}
              value={data.intervencionesquirurgicas}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 '>
            <InputLabel id="demo-simple-select-filled-label">Tuvo tratamiento de ortodoncia previo:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='tratamientoprevio'
              onChange={handleInputChange}
              value={data.tratamientoprevio}
            >
              <MenuItem value={1}>SI</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Uso:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='uso'
              onChange={handleInputChange}
              value={data.uso}
            >
              <MenuItem value={1}>chupete</MenuItem>
              <MenuItem value={2}>mamadera</MenuItem>
              <MenuItem value={2}>lactancia</MenuItem>
              <MenuItem value={2}>NO</MenuItem>
            </Select>
          </FormControl>
        </div>

      

        <div className='mt-5' >
        <TextField 
          id="standard-number" 
          label="Hasta que edad" 
          type='number'
          name='hastaqueedad'
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='w-80 '
          onChange={handleInputChange}
          value={data.hastaqueedad}
        />
        </div>
      </div>

      <TextField
          id="filled-textarea"
          label="OBSERVACIONES"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='observaciones'
          onChange={handleInputChange}
          value={data.observaciones}

      />


      <h1 className='text-xl mt-10'>ANALISIS FACIAL</h1>
      <hr />

      <div className='flex flex-row flex-wrap '>
        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Patrón Facial:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='patronfacial'
              onChange={handleInputChange}
              value={data.patronfacial}
            >
              <MenuItem value={1}>Mesofacial</MenuItem>
              <MenuItem value={2}>Dólico facial</MenuItem>
              <MenuItem value={3}>Braquifacial</MenuItem>
            </Select>
          </FormControl>
        </div>



        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Perfil:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='perfil'
              onChange={handleInputChange}
              value={data.perfil}
            >
              <MenuItem value={1}>Recto</MenuItem>
              <MenuItem value={2}>Cóncavo</MenuItem>
              <MenuItem value={3}>Convexo</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Asimetría:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='asimetria'
              onChange={handleInputChange}
              value={data.asimetria}
            >
              <MenuItem value={1}>Mand. Derecha</MenuItem>
              <MenuItem value={2}>Mand. Izquierda</MenuItem>
              <MenuItem value={3}>Otras</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Altura facial:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='alturafacial'
              onChange={handleInputChange}
              value={data.alturafacial}
            >
              <MenuItem value={1}>Equilibrada</MenuItem>
              <MenuItem value={2}>Larga</MenuItem>
              <MenuItem value={3}>Corta</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Ancho facial:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='anchofacial'
              onChange={handleInputChange}
              value={data.anchofacial}
            >
              <MenuItem value={1}>Equilibrada</MenuItem>
              <MenuItem value={2}>Estrecho</MenuItem>
              <MenuItem value={3}>Amplio</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Perfil Maxilar:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='perfilmaxilar'
              onChange={handleInputChange}
              value={data.perfilmaxilar}
            >
              <MenuItem value={1}>Ortognático</MenuItem>
              <MenuItem value={2}>Prognático</MenuItem>
              <MenuItem value={3}>Retrognático</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Perfil Madibular:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='perfilmandibular'
              onChange={handleInputChange}
              value={data.perfilmandibular}
            >
              <MenuItem value={1}>Ortognático</MenuItem>
              <MenuItem value={2}>Prognático</MenuItem>
              <MenuItem value={3}>Retrognático</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Surco Labio-Mentón:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='surcolabiomenton'
              onChange={handleInputChange}
              value={data.surcolabiomenton}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Marcado</MenuItem>
              <MenuItem value={3}>Borrado</MenuItem>
            </Select>
          </FormControl>
        </div>
        
        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Labios en Reposo:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='labiosenreposo'
              onChange={handleInputChange}
              value={data.labiosenreposo}
            >
              <MenuItem value={1}>Compotentes</MenuItem>
              <MenuItem value={2}>Incompetentes</MenuItem>
              
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Perfil labial:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='perfillabial'
              onChange={handleInputChange}
              value={data.perfillabial}
            >
              <MenuItem value={1}>Protrusivo Sup</MenuItem>
              <MenuItem value={2}>Protrusivo Inf</MenuItem>
              <MenuItem value={3}>Retrusivos Sup</MenuItem>
              <MenuItem value={4}>Retrusivos Inf</MenuItem>

              
            </Select>
          </FormControl>
        </div>
      </div>

      <h1 className='text-xl mt-10'>ANALISIS FUNCIONAL</h1>
      <hr />

      <div className='flex flex-row flex-wrap '>

      <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Respiracion:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='respiracion'
              onChange={handleInputChange}
              value={data.respiracion}
            >
              <MenuItem value={1}>Bucal</MenuItem>
              <MenuItem value={2}>Nasal</MenuItem>
              <MenuItem value={3}>Mixta</MenuItem>
              <MenuItem value={4}>Deglucion Normal</MenuItem>
              <MenuItem value={5}>Deglucion Atipica</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Actividad Comisural:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='actividadcomisural'
              onChange={handleInputChange}
              value={data.actividadcomisural}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Contraccion</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Actividad Lingual:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='actividadlingual'
              onChange={handleInputChange}
              value={data.actividadlingual}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Interp. Anterior</MenuItem>
              <MenuItem value={3}>Interp. Lateral</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Labio Superior:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='labiosuperior'
              onChange={handleInputChange}
              value={data.labiosuperior}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={3}>Hiperactivo</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Labio Inferior:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='labioinferior'
              onChange={handleInputChange}
              value={data.labioinferior}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={3}>Hiperactivo</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Masetero:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='masetero'
              onChange={handleInputChange}
              value={data.masetero}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={3}>Hiperactivo</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Mentoniano:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='mentoniano'
              onChange={handleInputChange}
              value={data.mentoniano}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={3}>Hiperactivo</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='mr-5 mt-5'>
          <FormControl variant="filled"  className='w-80 form-select'>
            <InputLabel id="demo-simple-select-filled-label">Hábitos de succión:</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='habitosdesuccion'
              onChange={handleInputChange}
              value={data.habitosdesuccion}
            >
              <MenuItem value={1}>Dedos</MenuItem>
              <MenuItem value={2}>Lengua</MenuItem>
              <MenuItem value={3}>Labios</MenuItem>
              <MenuItem value={4}>Onicofagia</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <TextField
          id="filled-textarea"
          label="PLAN DE TRATAMIENTO Y OBJETIVOS"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='plantratamiento'
          onChange={handleInputChange}
          value={data.plantratamiento}
      />

      <TextField
          id="filled-textarea"
          label="TECNICA Y APARATOLOGIA A EMPLEAR"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='tecnicaaparato'
          onChange={handleInputChange}
          value={data.tecnicaaparato}
      />
       <TextField
          id="filled-textarea"
          label="TIEMPO ESTIMADO DE TRATAMIENTO"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='tiempoestimadotratamiento'
          onChange={handleInputChange}
          value={data.tiempoestimadotratamiento}
      />
      <TextField
          id="filled-textarea"
          label="PRONOSTICO"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='pronostico'
          onChange={handleInputChange}
          value={data.pronostico}

      />

      <div className='flex'>
        <button type="submit" onClick={saveData} className='p-5 bg-blue-400'>Guardar datos</button>
        <button type="submit" onClick={handleFormSubmit} className='p-5 bg-blue-400'>Generar Pdf</button>
      </div>


      </Box>
   
    </main>
    
    </> 
    
    
  )
}
