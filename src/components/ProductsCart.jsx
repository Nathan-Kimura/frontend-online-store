import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      count: 1,
    };
  }

  handleAdd() {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  }

  render() {
    const { name, key, price, img, alt, removeItem } = this.props;
    const { count } = this.state;
    return (
      <div data-testid="shopping-cart-product-name" key={ key }>
        <p>{name}</p>
        <img src={ img } alt={ alt } />
        <p>{price}</p>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.handleAdd }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{count}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.setState({
              count: count + 1,
            }) }
          >
            +
          </button>
          <button type="button" onClick={ () => removeItem(key) }>X</button>
        </div>
      </div>
    );
  }
}

export default ProductCart;

ProductCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
