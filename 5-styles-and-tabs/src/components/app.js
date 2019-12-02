import React, { Component } from 'react';
import Tabs from './tabs/tabs';
import data from '../tabs.json';

export default class App extends Component {
  state = {};

  render() {
    return <Tabs items={data} />;
  }
}
