import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();
    this.receiveCart = this.receiveCart.bind(this);
    this.state = {
      littleCart: '',
    };
  }

  receiveCart(cart) {
    this.setState({
      littleCart: cart,
    });
  }

  render() {
    const { littleCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home cartBack={ this.receiveCart } /> }
          />
          <Route path="/details/:id" component={ Details } />
          <Route exact path="/cart" render={ () => <Cart littleCart={ littleCart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
