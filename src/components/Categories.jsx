import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.getFunc = this.getFunc.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getFunc();
  }

  async getFunc() {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <nav>
          {categories.map((cat) => (
            <button
              type="button"
              data-testid="category"
              key={ cat.id }
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </section>
    );
  }
}

export default Categories;
