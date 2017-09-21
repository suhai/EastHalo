import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import EastHalo from './components/EastHalo';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
	}
	
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<EastHalo store={ store } />, root);
});