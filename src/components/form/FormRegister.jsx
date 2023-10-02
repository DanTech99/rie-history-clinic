
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormRegister() {
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
        defaultValue="Marcos Sanches Jaraba"
        name='odontologo' 
      />

      <TextField 
        id="outlined-multiline-static" 
        label="PACIENTE" 
        variant="filled"
        name='paciente' 
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
        />
        </div>
      </div>

      
        <FormControl variant="filled" sx={{ m: 1, maxWidth: 320}}>
        <InputLabel id="demo-simple-select-filled-label">Nucleo Familiar</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='nucleofamiliar'
        >
          <MenuItem value={1}>SI</MenuItem>
          <MenuItem value={2}>NO</MenuItem>
        </Select>
      </FormControl>
   

     

      <TextField 
        id="outlined-multiline-static" 
        label="ESTADO GENERAL" 
        variant="filled"
        name='estadogeneral' 
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
        />

        </div>
        <div  >
          <FormControl variant="filled"  className='w-80'>
            <InputLabel id="demo-simple-select-filled-label">Parto</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name='parto'
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
            >
              <MenuItem value={1}>Protrusivo Sup</MenuItem>
              <MenuItem value={2}>Protrusivo Inf</MenuItem>
              <MenuItem value={2}>Retrusivos Sup</MenuItem>
              <MenuItem value={2}>Retrusivos Inf</MenuItem>

              
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
            >
              <MenuItem value={1}>Bucal</MenuItem>
              <MenuItem value={2}>Nasal</MenuItem>
              <MenuItem value={2}>Mixta</MenuItem>
              <MenuItem value={2}>Deglucion Normal</MenuItem>
              <MenuItem value={2}>Deglucion Atipica</MenuItem>
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
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Interp. Anterior</MenuItem>
              <MenuItem value={2}>Interp. Lateral</MenuItem>
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
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={2}>Hiperactivo</MenuItem>
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
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={2}>Hiperactivo</MenuItem>
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
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={2}>Hiperactivo</MenuItem>
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
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>Hipoactivo</MenuItem>
              <MenuItem value={2}>Hiperactivo</MenuItem>
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
            >
              <MenuItem value={1}>Dedos</MenuItem>
              <MenuItem value={2}>Lengua</MenuItem>
              <MenuItem value={2}>Labios</MenuItem>
              <MenuItem value={2}>Onicofagia</MenuItem>
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
      />

      <TextField
          id="filled-textarea"
          label="TECNICA Y APARATOLOGIA A EMPLEAR"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='tecnicaaparato'
      />
       <TextField
          id="filled-textarea"
          label="TIEMPO ESTIMADO DE TRATAMIENTO"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='tiempoestimadotratamiento'
      />
      <TextField
          id="filled-textarea"
          label="PRONOSTICO"
          placeholder="Placeholder"
          multiline
          variant="filled"
          rows={4}
          name='pronostico'
      />


      </Box>
  
    </main>
    
    </> 
    
    
  )
}
