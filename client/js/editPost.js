/**
 * Created by Zakaria on 09/01/2016.
 */


Template.editPost.helpers({
    getContent: function(id){
        return Posts.findOne(id).content;
    },
    getTitle: function(id){
        return Posts.findOne(id).title;
    }
});

Template.editPost.events({
    'click a.btnEdit': function(evt) {
        console.log("entered");
        var id = evt.target.id;
        var titre = $('#titre');
        var contents = $('#content');
        Meteor.call('updatePost',id,titre.val(),contents.val());
        swal({   title: "Merci !",   text: "Votre article est modifié",  showConfirmButton: true },function(isConfirm){  Router.go('/');  });
    }
});