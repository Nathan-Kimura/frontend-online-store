import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
