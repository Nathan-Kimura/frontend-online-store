import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCart from '../components/ProductsCart';

class Cart extends Component {
  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      cartinho: '',
    };
  }

  componentDidMount() {
    const { littleCart } = this.props;
    this.setState({
      cartinho: littleCart,
    });
  }

  removeItem(id) {
    this.setState((prevState) => ({
      cartinho: prevState.cartinho.filter((item) => item.id !== id),
    }));
  }

  render() {
    const { cartinho } = this.state;

    const quantity = cartinho.length;
    return (
      <section>
        <h1>{quantity}</h1>
        {cartinho ? (
          cartinho.map((cart) => (
            <ProductCart
              key={ cart.id }
              name={ cart.title }
              img={ cart.thumbnail }
              alt={ cart.title }
              price={ cart.price }
              removeItem={ this.removeItem }
            />
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </section>
    );
  }
}

export default Cart;

Cart.propTypes = {
  littleCart: PropTypes.arrayOf(Object),
};

Cart.defaultProps = {
  littleCart: PropTypes.arrayOf(Object),
};
