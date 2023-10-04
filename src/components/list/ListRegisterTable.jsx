import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Layout from "../../layouts/Layout";

function ListRegisterTable() {
  const { handleFormSubmit } = useContext(AppContext);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    // Recuperar los datos del localStorage cuando el componente se monte
    const storedData = localStorage.getItem("data");

    if (storedData) {
      // Si hay datos en el localStorage, parsearlos a JSON
      const parsedData = JSON.parse(storedData);
      setLocalStorageData(parsedData);
    }
  }, []);

  console.log(localStorageData);

  return (
    <Layout>
      
    </Layout>
  );
}

export default ListRegisterTable;
