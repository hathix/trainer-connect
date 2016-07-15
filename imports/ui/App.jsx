import {Meteor} from 'meteor/meteor';
import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';

import RaisedButton from 'material-ui/RaisedButton';

import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

// import Task from './Task.jsx';

// App component - represents the whole
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    };

    // bind stuff
    // https://github.com/goatslacker/alt/issues/283
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({slideIndex: value});
  }

  render() {

    return (
      <div className="container">
        <MuiThemeProvider>
          <div>

            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
              <Tab label="Tab One" value={0}/>
              <Tab label="Tab Two" value={1}/>
              <Tab label="Tab Three" value={2}/>
            </Tabs>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
              <div>
                <h1>Pokemon Trainer Connect</h1>
                <RaisedButton label="Default"/>
                <AccountsUIWrapper/> {this.props.currentUser
                  ? this.props.currentUser.services.facebook.email
                  : ''}

    <br /><br /><br /><br /><br /><br /><br /><br />5<br /><br /><br />

              </div>
              <div>
                slide n°2
              </div>
              <div>
                slide n°3

              </div>
            </SwipeableViews>
          </div>
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
