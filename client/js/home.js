/**
 * Created by Zakaria on 05/01/2016.
 */

Session.setDefault("skip",0);
Deps.autorun(function(){
    Meteor.subscribe("postslist",Session.get("skip"))
})

Template.home.helpers({
    posts:function(){
        return Posts.find({},{sort: { createdAt: -1 }});
    },
    formatTime: function(time){
        return (new Date(time)).toLocaleString()
    },
    isMyPost: function(author){
        if(Meteor.user().username === "admin" || author === Meteor.user().username)
            return true;
        else
            return false;
    },getPhoto: function(owner){
        var user = Meteor.users.findOne({username : owner});
        return user.profile.photo;
    },hasPhoto: function(owner){
        var user = Meteor.users.findOne({username : owner});
        return user.profile.photo != null;
    },getIdUser: function(owner){
        var user = Meteor.users.findOne({username : owner});
        return user._id;
    },

});


Template.home.events({
    'click button.btnDelete': function(evt) {
        var id = evt.target.id;
        swal({
                    title: "Supression",
                    text: "Êtes-vous sûr de vouloir supprimer définitivement l'article ?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Oui, supprimer!",
                    closeOnConfirm: false
                },
                function(){
                    Meteor.call('deletePost',id);
                    swal("article supprimé !", "Vous  avez supprimé l'article avec succès.", "success");
                })

    },'click button.btnEdit': function(evt) {
        var id = evt.target.id;
        Router.go('post.id', {_id: id});
    },
    'click .previous':function(){
        if(Session.get('skip')>0)
            Session.set('skip',Session.get('skip')-6);
    },
    'click .next':function(){
            Session.set('skip',Session.get('skip')+6);
    }
});