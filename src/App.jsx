import './index.css'
import {Route} from 'wouter';
import Home from './pages/Home';
import Form from './pages/Form';
import ListRegister from './pages/ListRegister';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <>
    <AppProvider>
      <Route path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/listado" component={ListRegister} />
    </AppProvider>
    </>
  )
}

export default App
