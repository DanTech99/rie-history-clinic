import React from 'react'

function utils() {

  
  // Function to save data and last update time to localStorage
  // const saveDataToLocalStorage = (data) => {
  //   localStorage.setItem('data', JSON.stringify(data));
  //   localStorage.setItem('lastUpdate', new Date().getTime());
  // }

  // // Function to get data from localStorage
  // const getDataFromLocalStorage = () => {
  //   const savedData = localStorage.getItem('data');
  //   const savedLastUpdate = localStorage.getItem('lastUpdate');
  //   if (savedData && savedLastUpdate) {
  //     return { data: JSON.parse(savedData), lastUpdate: parseInt(savedLastUpdate) };
  //   }
  //   return null;
  // }

  // Function to fetch data from server
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("https://server-generate-pdf-production.up.railway.app/api/getData");
  //     if (res.ok) {
  //       const newData = await res.json();
  //       setData(newData);
  //       setLastUpdate(new Date().getTime()); // Set last update time to current time
  //       saveDataToLocalStorage(newData);
  //     } else {
  //       console.error("Error al obtener los datos del servidor");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   const localData = getDataFromLocalStorage();

  //   if (localData) {
  //     setData(localData.data);
  //     setLastUpdate(localData.lastUpdate);
  //   }

  //   const currentTime = new Date().getTime();
  //   const updateThreshold = 60000; // 1 minute (adjust to your needs)

  //   if (!localData || (currentTime - localData.lastUpdate) > updateThreshold) {
  //     fetchData(); // Fetch new data if local data is missing or outdated
  //   }
  // }, []);


  return (
    <div>utils</div>
  )
}

export default utils