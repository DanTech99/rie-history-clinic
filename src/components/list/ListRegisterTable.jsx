import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import Layout from "../../layouts/Layout";
import {createClient} from "@supabase/supabase-js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const supabase = createClient("https://wamxoygslhrofzdwditu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhbXhveWdzbGhyb2Z6ZHdkaXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTM2MjUsImV4cCI6MjAxNjE2OTYyNX0.2btOnNHOmFqCt8JNlUwyBC44U8geD-zmUFGqZIWts1U")

function ListRegisterTable() {
  const { setEditId } = useContext(AppContext);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes()
  }, [])

  async function getPacientes() {
    const {data} = await supabase.from('pacientes').select();
    setPacientes(data)
  }

  console.log(pacientes)



  const navigate = useNavigate();



  // funcion para redireccionar al formulario con los datos a editar
  const handleEdit = (id) => {
    // guardar el id del registro a editar
    setEditId(id)
    
    // redireccionar al formulario con react router dom
    navigate(`/form/${id}`)
  }


  

  return (
    <Layout>
      <TableContainer component={Paper} className="p-5 scroll-auto">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Odontologo</TableCell>
            <TableCell align="right">Paciente</TableCell>
            <TableCell align="right">contacto</TableCell>
            <TableCell align="right">Cedula</TableCell>
            <TableCell align="right">Acudiente</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientes.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.odontologo}
              </TableCell>
              <TableCell align="right">{item.paciente}</TableCell>
              <TableCell align="right">{item.contacto}</TableCell>
              <TableCell align="right">{item.cedula}</TableCell>
              <TableCell align="right">{item.acudiente}</TableCell>
              <TableCell align="right">{item.direccion}</TableCell>
              <TableCell align="right">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
                  Generar pdf
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(item.id)}>
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}

export default ListRegisterTable;
