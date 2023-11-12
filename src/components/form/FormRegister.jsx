import { useContext, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { AppContext } from '../../contexts/AppContext';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';


export default function FormRegister() {

  const { data, handleInputChange, saveData, loading, alert, clearForm} = useContext(AppContext)

  let { id } = useParams(); // obtiene la ID de la url

  const [registerEdit, setRegisterEdit] = useState(null)

  useEffect(() => {
    // realizar una solicitud al servidor para obtener el registro con la ID
    const getRegisterEdit = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/getData/${id}`)
        if (res.ok) {
          const data = await res.json()
          setRegisterEdit(data)
        } else {
          console.error('Error al obtener los datos del servidor')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [id])

  const  handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // realizar una solicitud al servidor para actualizar el registro con la ID
    if(!registerEdit) {
      fetch(`http://localhost:3001/api/updateData/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: registerEdit}),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log('Registro actualizado')
      })
      .catch(error => console.log(error))
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
      <h1 className='text-xl mt-5'>DATOS DEL PACIENTE</h1>
      <hr />
      <FormControl variant="filled" sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-filled-label">ODONTOLOGO</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='odontologo'
          onChange={handleInputChange}
          value={data.odontologo}
          
          
        >
          <MenuItem value="Marcos Sanches Jaraba">Marcos Sanches Jaraba</MenuItem>
          <MenuItem value="otro">otro</MenuItem>

        </Select>
      </FormControl>

      <TextField
        id="outlined-multiline-static" 
        label="PACIENTE" 
        variant="filled"
        name='paciente'
        onChange={handleInputChange}
        value={data.paciente}
        
      />

    <TextField
        id="standard-number"
        label="CONTACTO" 
        variant="filled"
        name='contacto'
        onChange={handleInputChange}
        value={data.contacto}
        type='number'
        
      />
      
      <TextField 
        id="standard-number" 
        label="CEDULA" 
        variant="filled"
        name='cedula'
        onChange={handleInputChange}
        value={data.cedula}
        type='number'
      />

      <TextField 
        id="outlined-multiline-static" 
        label="ACUDIENTE" 
        variant="filled"
        name='acudiente'
        onChange={handleInputChange}
        value={data.acudiente}
        
      />

      <TextField 
        id="outlined-multiline-static" 
        label="OCUPACION" 
        variant="filled"
        name='ocupacion'
        onChange={handleInputChange}
        value={data.ocupacion}
      />

      <TextField 
        id="outlined-multiline-static" 
        label="direccion" 
        variant="filled"
        name='direccion'
        onChange={handleInputChange}
        value={data.direccion}
        
      />
      <TextField 
        id="outlined-multiline-static" 
        label="CIUDAD" 
        variant="filled"
        name='ciudad'
        onChange={handleInputChange}
        value={data.ciudad}
        
      />
      <div className='flex  flex-row gap-4'>
      

        <div className='w-full mr-5'>
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
        <div className='w-full'>
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

        <div className='w-full flex '>
          <FormControl variant="filled" className='w-full'>
            <InputLabel id="demo-simple-select-filled-label">Nucleo Familiar</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='nucleofamiliar'
              onChange={handleInputChange}
              value={data.nucleofamiliar}
              
              
            >
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

  
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
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
              <MenuItem value="chupete">chupete</MenuItem>
              <MenuItem value="mamadera">mamadera</MenuItem>
              <MenuItem value="lactancia">lactancia</MenuItem>
              <MenuItem value="NO">NO</MenuItem>
            </Select>
          </FormControl>
        </div>

      

        <div className='mt-5' >
        <TextField 
          id="standard-number" 
          label="Hasta que edad" 
          type='number'
          name='hastaqueedad'
          
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
              <MenuItem value="Mesofacial">Mesofacial</MenuItem>
              <MenuItem value="Dólico facial">Dólico facial</MenuItem>
              <MenuItem value="Braquifacial">Braquifacial</MenuItem>
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
              <MenuItem value="Recto">Recto</MenuItem>
              <MenuItem value="Cóncavo">Cóncavo</MenuItem>
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
              <MenuItem value="Mand. Derecha">Mand. Derecha</MenuItem>
              <MenuItem value="Mand. Izquierda">Mand. Izquierda</MenuItem>
              <MenuItem value="Otras">Otras</MenuItem>
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
              <MenuItem value="Equilibradas">Equilibrada</MenuItem>
              <MenuItem value="Larga">Larga</MenuItem>
              <MenuItem value="Corta">Corta</MenuItem>
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
              <MenuItem value="Equilibrada">Equilibrada</MenuItem>
              <MenuItem value="Estrecho">Estrecho</MenuItem>
              <MenuItem value="Amplio">Amplio</MenuItem>
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
              <MenuItem value="Ortognático">Ortognático</MenuItem>
              <MenuItem value="Prognático">Prognático</MenuItem>
              <MenuItem value="Retrognático">Retrognático</MenuItem>
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
              <MenuItem value="Ortognático">Ortognático</MenuItem>
              <MenuItem value="Prognático">Prognático</MenuItem>
              <MenuItem value="Retrognático">Retrognático</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Marcado">Marcado</MenuItem>
              <MenuItem value="Borrado">Borrado</MenuItem>
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
              <MenuItem value="Compotentes">Compotentes</MenuItem>
              <MenuItem value="Incompetentes">Incompetentes</MenuItem>
              
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
              <MenuItem value="Protrusivo Sup">Protrusivo Sup</MenuItem>
              <MenuItem value="Protrusivo Inf">Protrusivo Inf</MenuItem>
              <MenuItem value="Retrusivos Sup">Retrusivos Sup</MenuItem>
              <MenuItem value="Retrusivos Inf">Retrusivos Inf</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>


              
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
              <MenuItem value="Bucal">Bucal</MenuItem>
              <MenuItem value="Nasal">Nasal</MenuItem>
              <MenuItem value="Mixta">Mixta</MenuItem>
              <MenuItem value="Deglucion Normal">Deglucion Normal</MenuItem>
              <MenuItem value="Deglucion Atipica">Deglucion Atipica</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Contraccion">Contraccion</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Interp. Anterior">Interp. Anterior</MenuItem>
              <MenuItem value="Interp. Lateral">Interp. Lateral</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Hipoactivo">Hipoactivo</MenuItem>
              <MenuItem value="Hiperactivo">Hiperactivo</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Hipoactivo">Hipoactivo</MenuItem>
              <MenuItem value="Hiperactivo">Hiperactivo</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Hipoactivo">Hipoactivo</MenuItem>
              <MenuItem value="Hiperactivo">Hiperactivo</MenuItem>
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
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Hipoactivo">Hipoactivo</MenuItem>
              <MenuItem value="Hiperactivo">Hiperactivo</MenuItem>
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
              <MenuItem value="Dedos">Dedos</MenuItem>
              <MenuItem value="Lengua">Lengua</MenuItem>
              <MenuItem value="Labios">Labios</MenuItem>
              <MenuItem value="Onicofagia">Onicofagia</MenuItem>
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

        <Button variant="outlined"  onClick={saveData} size='large' >
          {
            !loading ? 'Guardar y generar PDF' : <CircularProgress />
          }
        </Button>
        <Button onClick={clearForm} variant='outlined' size='large'>
          Limpiar Formulario
        </Button>
      </div>

      {/* alerta de error */}
      {
        alert && <Alert severity="error">Error al guardar el registro, verificar que todos los campos esten llenos</Alert>
      }
         

      </Box>

      
    </main>
    
    </> 
    
    
  )
}
