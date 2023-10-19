import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Layout from "../../layouts/Layout";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListRegisterTable() {
  const { handleFormSubmit } = useContext(AppContext);
  const [data,  setData] = useState([]);

  // funcio para obtener los registros de la base de datos
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getData");
      if(res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        console.error("error al obtener los datos del servidor")
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <Layout>
      <TableContainer component={Paper} className="p-5 scroll-auto">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}

export default ListRegisterTable;
