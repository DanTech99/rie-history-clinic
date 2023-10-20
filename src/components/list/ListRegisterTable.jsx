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
  const { saveData } = useContext(AppContext);
  const [data,  setData] = useState([]);

  // function to save data in localStorage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  }

  // function to get data from localStorage
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('data');
    return data ? JSON.parse(data) : [];
  }

  // function to fetch data from server
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getData");
      if(res.ok) {
        const data = await res.json();
        setData(data);
        saveDataToLocalStorage(data); // save data in localStorage
      } else {
        console.error("error al obtener los datos del servidor")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const dataFromLocalStorage = getDataFromLocalStorage();
    if (dataFromLocalStorage.length > 0) {
      setData(dataFromLocalStorage);
    } else {
      fetchData();
    }
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
            <TableCell align="right">Acciones</TableCell>

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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}

export default ListRegisterTable;
