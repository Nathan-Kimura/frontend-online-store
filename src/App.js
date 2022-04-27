import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      littleCart: '',
    };
  }

  // receiveCart(cart) {
  //   this.setState({
  //     littleCart: cart,
  //   });
  // }

  addToCart(title, thumbnail, price, id) {
    this.setState((prevState) => ({
      littleCart: [...prevState.littleCart, { title, thumbnail, price, id }],
    }));
  }

  render() {
    const { littleCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home cartBack={ this.addToCart } /> }
          />
          <Route
            path="/details/:id"
            render={ (props) => <Details { ...props } cartBack={ this.addToCart } /> }
          />
          <Route exact path="/cart" render={ () => <Cart littleCart={ littleCart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
