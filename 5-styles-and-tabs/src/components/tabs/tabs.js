import React, { Component } from 'react';
import TabsContent from './tabsContent/tabsContent';
import s from './tabs.module.css';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  shouldComponentUpdate(nextProp, nextState) {
    const { activeTabIndex } = this.state;

    return nextState.activeTabIndex !== activeTabIndex;
  }

  changeActiveTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;

    const activeTabContent = items[activeTabIndex].content;

    console.log('hi');

    return (
      <div className={s.container}>
        <nav className={s.navs}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? s.active : s.btn}
              type="button"
              key={item.label}
              onClick={() => this.changeActiveTabIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <TabsContent
          title={activeTabContent.title}
          text={activeTabContent.text}
        />
      </div>
    );
  }
}
