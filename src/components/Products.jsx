import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        {products.map((product) => (
          <Link
            key={ product.id }
            data-testid="product-detail-link"
            to={ `/details/${product.id}` }
          >
            <div data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          </Link>
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
