import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.getFunc = this.getFunc.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getFunc();
  }

  handleClick({ target }) {
    const { callBack } = this.props;
    const { value } = target;
    callBack(value);
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
              onClick={ this.handleClick }
              value={ cat.id }
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

Categories.propTypes = {
  callBack: PropTypes.func.isRequired,
};
