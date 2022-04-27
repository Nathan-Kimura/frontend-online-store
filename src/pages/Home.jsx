import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.getFunc = this.getFunc.bind(this);
    this.recoveryCat = this.recoveryCat.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      input: '',
      category: '',
      products: [],
      cart: [],
    };
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      input: value,
    });
  }

  async getFunc() {
    const { category, input } = this.state;
    const response = await getProductsFromCategoryAndQuery(category, input);
    this.setState({
      products: response.results,
    });
  }

  async recoveryCat(data) {
    this.setState({
      category: data,
    });
    await this.getFunc();
  }

  addToCart(title, thumbnail, price) {
    this.setState((prevState) => ({
      cart: [...prevState.cart, { title, thumbnail, price }],
    }), () => {
      const { cart } = this.state;
      const { cartBack } = this.props;
      cartBack(cart);
    });
  }

  render() {
    const { category, input, products } = this.state;
    return (
      <section>
        <Header />
        <Categories callBack={ this.recoveryCat } />
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ input }
          />
          <button
            type="button"
            onClick={ this.getFunc }
            data-testid="query-button"
          >
            Buscar
          </button>
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Products
          category={ category }
          input={ input }
          products={ products }
          addToCart={ this.addToCart }
        />
      </section>
    );
  }
}

export default Home;

Home.propTypes = {
  cartBack: PropTypes.func.isRequired,
};
