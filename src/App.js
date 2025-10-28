import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
//Switch foi descontinuado, agora é Routes. Nomeei para Switch para não haver confusão de semelhantes
import { Home } from './pages/home'
import { Login } from './pages/login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Switch>
    </Router>
    // Route path : A URL
  );
}

export default App;
