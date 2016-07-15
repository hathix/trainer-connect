import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import App from '../imports/ui/App.jsx';

// for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

// for login
import '../imports/startup/accounts-config.jsx';

Meteor.startup(() => {
  // material-ui
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

  render(
    <App/>, document.getElementById('render-target'));
});
