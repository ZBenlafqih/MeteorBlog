/**
 * Created by Zakaria on 05/01/2016.
 */

Template.addPost.events({
    'click a.btnAjout': function() {
        var titre = $('#titre');
        var contents = $('#content');
        Meteor.call('addPost',titre.val(),contents.val());
        swal({   title: "Merci !",   text: "Votre article est publié",  showConfirmButton: true },function(isConfirm){  Router.go('/');  });

    }
});