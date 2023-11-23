import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import Layout from "../../layouts/Layout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import supabase from "../../config/api/supabaseClient";

function ListRegisterTable() {

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes();
  }, []);

  async function getPacientes() {
    const { data } = await supabase.from("pacientes").select();
    setPacientes(data);
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
          { pacientes.map((pacient) => (
            <TableRow
              key={pacient.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pacient.odontologo}
              </TableCell>
              <TableCell align="right">{pacient.paciente}</TableCell>
              <TableCell align="right">{pacient.contacto}</TableCell>
              <TableCell align="right">{pacient.cedula}</TableCell>
              <TableCell align="right">{pacient.acudiente}</TableCell>
              <TableCell align="right">{pacient.direccion}</TableCell>
              <TableCell align="right">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
                  Generar pdf
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ) )}
        
        </TableBody>
          
      </Table>
    </TableContainer>
    </Layout>
  );
}

export default ListRegisterTable;
