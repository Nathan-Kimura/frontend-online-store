import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <p>{product.title}</p>
            <img
              src={ product.thumbnail }
              alt={ product.title }
            />
            <p>{product.price}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(Object),
};

Products.defaultProps = {
  products: PropTypes.arrayOf(Object),
};
