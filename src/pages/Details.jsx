import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductID } from '../services/api';
import Header from '../components/Header';

class Details extends Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.state = {
      productId: '',
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
      productId: product,
    });
  }

  render() {
    const { productId } = this.state;
    const { cartBack } = this.props;
    console.log(productId);
    return (
      <section data-testid="product-detail-name">
        <Header />
        <h1>{productId.title}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={
            () => cartBack(productId.title, productId.thumbnail, productId.price)
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
