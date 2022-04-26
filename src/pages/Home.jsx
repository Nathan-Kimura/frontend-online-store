import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
