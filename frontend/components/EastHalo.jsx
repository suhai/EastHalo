import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import RootApp from './RootApp';

const EastHalo = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <RootApp />
    </HashRouter>
  </Provider>
);

export default EastHalo;