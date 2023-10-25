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
  const [data, setData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Function to save data and last update time to localStorage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('lastUpdate', new Date().getTime());
  }

  // Function to get data from localStorage
  const getDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('data');
    const savedLastUpdate = localStorage.getItem('lastUpdate');
    if (savedData && savedLastUpdate) {
      return { data: JSON.parse(savedData), lastUpdate: parseInt(savedLastUpdate) };
    }
    return null;
  }

  // Function to fetch data from server
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getData");
      if (res.ok) {
        const newData = await res.json();
        setData(newData);
        setLastUpdate(new Date().getTime()); // Set last update time to current time
        saveDataToLocalStorage(newData);
      } else {
        console.error("Error al obtener los datos del servidor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const localData = getDataFromLocalStorage();

    if (localData) {
      setData(localData.data);
      setLastUpdate(localData.lastUpdate);
    }

    const currentTime = new Date().getTime();
    const updateThreshold = 60000; // 1 minute (adjust to your needs)

    if (!localData || (currentTime - localData.lastUpdate) > updateThreshold) {
      fetchData(); // Fetch new data if local data is missing or outdated
    }
  }, []);


  

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
              <TableCell align="right">{item.direccion}</TableCell>
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
