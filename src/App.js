import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import MainNav from './components/MainNav'
import Container from '@material-ui/core/Container';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Container>
          <Switch>
            <Route exact path='/' component={Trending} />
          </Switch>
          <Switch>
            <Route exact path='/movies' component={Movies} />
          </Switch>
          <Switch>
            <Route exact path='/series' component={Series} />
          </Switch>
          <Switch>
            <Route exact path='/search' component={Search} />
          </Switch>

        </Container>
      </div>

      <MainNav />
    </BrowserRouter>
  );
}

export default App;