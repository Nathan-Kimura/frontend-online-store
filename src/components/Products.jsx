import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Products extends Component {
  constructor() {
    super();
    this.getFunc = this.getFunc.bind(this);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getFunc();
  }

  componentDidUpdate() {
    this.getFunc();
  }

  async getFunc() {
    const { category, input } = this.props;
    const response = await getProductsFromCategoryAndQuery(category, input);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { products } = this.state;
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
  category: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};
