/**
 * Created by Zakaria on 10/01/2016.
 */


Template.profile.helpers({
    getPhoto: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.profile.photo;
    },getUsername: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.username;
    },getNom: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.profile.nom;
    },getPrenom: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.profile.prenom;
    },getMail: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.emails[0].address;
    },getPhoto: function(id){
        var user = Meteor.users.findOne({_id : id});
        return user.profile.photo;
    },getDateInscription: function(id) {
        var user = Meteor.users.findOne({_id: id});
        return (user.createdAt).toLocaleString()
    },hasPhoto: function(id){
        var user = Meteor.users.findOne({_id: id});
        return user.profile.photo != null;
    },hasNom: function(id){
        var user = Meteor.users.findOne({_id: id});
        return user.profile.nom != null;
    },hasPrenom: function(id){
        var user = Meteor.users.findOne({_id: id});
        return user.profile.prenom != null;
    },
    isMyProfile: function(id){
        if(id === Meteor.user()._id || Meteor.user().username === "admin")
             return true;
        else
            return false;
    }
});
