import Home from './Home'
import {urls} from './Requests';
import Row from './Row'
import SearchBar from './SearchBar';
import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/movie-detail" component={MovieDetail} exact={true}></Route>

        <Route path="/">
          <Navbar />
          <Home />
          <div className="App">
            <SearchBar />
            <Row title="Popular" fetchUrl={urls.popularMovies} />
            <Row title="Top Rated" fetchUrl={urls.topRated} />
          </div>
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
