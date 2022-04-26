import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';

class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      input: '',
      category: '',
      product: '',
    };
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      input: value,
    });
  }

  onClick() {
    const { input } = this.state;
    this.setState({
      product: input,
    });
  }

  render() {
    const { category, input, product } = this.state;
    return (
      <section>
        <Header />
        <Categories />
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ input }
          />
          <button
            type="button"
            onClick={ this.onClick }
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
          input={ product }
        />
      </section>
    );
  }
}

export default Home;
