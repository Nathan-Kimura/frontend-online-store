import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <section>
        {products.map((product) => (

          <div key={ product.id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ `/details/${product.id}` }
            >
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </Link>
            <button
              onClick={ () => addToCart(product.title, product.thumbnail, product.price) }
              data-testid="product-add-to-cart"
              type="button"
            >
              Adicionar ao carrinho
            </button>
          </div>

        ))}
      </section>
    );
  }
}

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(Object),
  addToCart: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: PropTypes.arrayOf(Object),
};
