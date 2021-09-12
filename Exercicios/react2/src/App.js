import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/categoria/esportes">Esportes</Link>
            </li>
            <li>
              <Link to="/categoria/noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/categoria/viagem">Viagem</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr/>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:cat">
          <Categoria />
        </Route>

        <Route path="*">
          <h4>Página não encontrada!</h4>
        </Route>

      </Switch>

      <hr/>
      <footer>
        Todos os direitos reservados.
      </footer>
    </BrowserRouter>
  );
}

export default App;
