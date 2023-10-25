import './index.css'
import Home from './pages/Home';
import Form from './pages/Form';
import ListRegister from './pages/ListRegister';
import { AppProvider } from './contexts/AppContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/listado" element={<ListRegister />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
