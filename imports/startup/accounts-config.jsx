import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    requestPermissions: {
      facebook: [
          'public_profile',
          'user_friends',
          'email'
      ],
    },
    // loginStyle: {
    //     facebook: 'redirect'
    // }
  // passwordSignupFields: 'USERNAME_ONLY',
});
