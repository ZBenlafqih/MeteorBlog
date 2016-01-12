/**
 * Created by Zakaria on 06/01/2016.
 */

Accounts.onCreateUser(function(o,user){
    user.profile={};
    return user;
});

Meteor.publish('allUsers', function() {
    return Meteor.users.find();
});