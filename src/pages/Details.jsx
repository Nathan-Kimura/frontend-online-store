import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductID } from '../services/api';

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
    console.log(productId);
    return (
      <section data-testid="product-detail-name">
        <h1>{productId.title}</h1>
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
};
