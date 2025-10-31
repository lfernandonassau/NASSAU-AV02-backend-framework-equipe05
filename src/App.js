import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
//Switch foi descontinuado, agora é Routes. Nomei de Switch para não haver confusão de semelhantes
import { Home } from './pages/home'
import { Login } from './pages/login'
import { TelaPerfil } from './pages/telaperfil'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/perfil' element={<TelaPerfil/>}/>
      </Switch>
    </Router>
    // Route path: A URL
  );
}

export default App;
