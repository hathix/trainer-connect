import {Meteor} from 'meteor/meteor';
import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';

import RaisedButton from 'material-ui/RaisedButton';

// import Task from './Task.jsx';

// App component - represents the whole
class App extends Component {

  render() {

    return (
      <div className="container">
        <MuiThemeProvider>
          <header>
            <h1>Pokemon Trainer Connect</h1>
            <RaisedButton label="Default"/>
            <AccountsUIWrapper/>

                { this.props.currentUser ?
                    this.props.currentUser.services.facebook.email
                 : ''}

          </header>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

export default createContainer(() => {
  return {currentUser: Meteor.user()};
}, App);
