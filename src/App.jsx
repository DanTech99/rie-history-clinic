import './index.css'
import {Route} from 'wouter';
import home from './pages/home';
import Form from './pages/Form';
import ListRegister from './pages/ListRegister';

function App() {
  return (
    <>
    <Route path="/" component={home} />
    <Route path="/form" component={Form} />
    <Route path="/list" component={ListRegister} />
    </>
  )
}

export default App
