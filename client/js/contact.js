/**
 * Created by Zakaria on 11/01/2016.
 */


Deps.autorun(function(){
    Meteor.subscribe("messagelist")
})


Template.contact.events({
    'click a.btnSend': function() {
        var email = $('#email');
        var sujet = $('#sujet');
        var message = $('#message');

        Meteor.call('addMessage',email.val(),sujet.val(),message.val());
        swal({   title: "Merci !",   text: "Votre message est envoyé",  showConfirmButton: true },function(isConfirm){  Router.go('/');  });

    }
});