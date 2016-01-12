/**
 * Created by Zakaria on 11/01/2016.
 */

Template.layout.helpers({
    UserId:function() {
        return Meteor.userId();
    },isAdmin:function(user) {
        return Meteor.user().username === "admin"
    }
})