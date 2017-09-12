import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './Root';

const App = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
		<MuiThemeProvider>
      <Root />
		</MuiThemeProvider>
    </HashRouter>
  </Provider>
);

export default App;