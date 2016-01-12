/**
 * Created by Zakaria on 06/01/2016.
 */


Accounts.ui.config({

    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Deps.autorun(function(){
    Meteor.subscribe("allUsers");
});