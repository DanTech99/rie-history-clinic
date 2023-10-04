import './index.css'
import {Route} from 'wouter';
import home from './pages/home';
import Form from './pages/Form';
import ListRegister from './pages/ListRegister';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <>
    <AppProvider>
      <Route path="/" component={home} />
      <Route path="/form" component={Form} />
      <Route path="/list" component={ListRegister} />
    </AppProvider>
    </>
  )
}

export default App
