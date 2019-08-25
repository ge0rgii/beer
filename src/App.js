import React from 'react';
import './App.css';
import BeersList from './components/beersList';
import Home from './components/home';
import About from './components/about';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ButtonAppBar from './components/appBar';



class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }
  getBeers(page, size) {
    fetch(`https://api.punkapi.com/v2/beers?page?page=${page}&per_page=${size}`).then(arg => arg.json()).then(data => {
      console.log(data);
      this.setState({
        beers: data
      })
    });
    
  }
  componentDidMount() {
    this.getBeers(1, 80);
  }
  render() {

    return(
      
      <Router>
        <div>
        <ButtonAppBar/>
      </div>
        <div className='App'>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/beers'>Beers</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/beers' render={props => <BeersList {...props} beers={this.state.beers}/>}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
