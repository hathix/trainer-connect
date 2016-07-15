import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <MuiThemeProvider>
          <header>
            <h1>Pokemon Trainer Connect</h1>
            <RaisedButton label="Default" />
            <AccountsUIWrapper />
          </header>
        </MuiThemeProvider>
      </div>
    );
  }
}
