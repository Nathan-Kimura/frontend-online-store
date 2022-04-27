import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductID } from '../services/api';
import Header from '../components/Header';

class Details extends Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.state = {
      prod: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductID(id);
    this.setState({
      prod: product,
    });
  }

  render() {
    const { prod } = this.state;
    const { cartBack } = this.props;
    return (
      <section data-testid="product-detail-name">
        <Header />
        <h1>{prod.title}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={
            () => cartBack(prod.title, prod.thumbnail, prod.price, prod.id)
          }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  cartBack: PropTypes.func.isRequired,
};
