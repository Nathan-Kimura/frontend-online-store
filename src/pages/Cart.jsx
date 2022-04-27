import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { littleCart } = this.props;
    const quantity = littleCart.length;
    return (
      <section>
        <h1 data-testid="shopping-cart-product-quantity">{quantity}</h1>
        {littleCart ? (
          littleCart.map((cart) => (
            <div data-testid="shopping-cart-product-name" key={ cart.title }>
              <p>{cart.title}</p>
              <img src={ cart.thumbnail } alt={ cart.title } />
              <p>{cart.price}</p>
            </div>
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
