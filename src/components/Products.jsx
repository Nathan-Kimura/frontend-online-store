import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { products, cartBack } = this.props;
    return (
      <section>
        {products.map((prod) => (

          <div key={ prod.id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ `/details/${prod.id}` }
            >
              <p>{prod.title}</p>
              <img src={ prod.thumbnail } alt={ prod.title } />
              <p>{prod.price}</p>
            </Link>
            <button
              onClick={ () => cartBack(prod.title, prod.thumbnail, prod.price) }
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
  cartBack: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: PropTypes.arrayOf(Object),
};
