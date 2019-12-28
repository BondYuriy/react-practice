import React, { Component } from 'react';
import ProductList from './product-list';
import * as API from '../servies/product-api';

export default class ProductListPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    API.getAllProductListItems().then(items => {
      this.setState({ items });
    });
  }

  handleDeleteItem = id => {
    API.delemeProductListItem(id).then(isStatusOk => {
      if (isStatusOk) {
        this.setState(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      }
    });
  };

  handelShowMoreInfo = id => {
    API.getItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddProductListItem = () => {
    const item = {
      name: 'qwe',
      description: 'qweqweqe',
      price: 100,
      image:
        'https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/red-robin-burger-pass-ft-blog1117.jpg?itok=Na0Jcedn',
    };

    API.addProductListItem(item).then(newItem => {
      this.setState(state => ({
        items: [...state.items, newItem],
      }));
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleAddProductListItem}>
          Добавить карточку
        </button>
        <ProductList
          items={items}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handelShowMoreInfo}
        />
      </div>
    );
  }
}
