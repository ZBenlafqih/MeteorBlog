/**
 * Created by Zakaria on 09/01/2016.
 */

var photo;
Template.editProfil.events({
    'click #photo_btn': function() {
        MeteorCameraUI.getPicture({
            width:150, height:150,
            quality : 80
        }, function(er,data){
                photo = data;
            if(er)
                   return console.log(er)
            document.getElementById('photo').src = data;
        }

        )
    },
    'click a.edit_btn': function () {
        var nom = $('#nom');
        var prenom = $('#prenom');

        if(photo)
        Meteor.users.update({
            _id: Meteor.userId()
        },{
            $set : {
                'profile.photo' : photo
            }
        });
        if(nom.val()!="")
            Meteor.users.update({
                _id: Meteor.userId()
            },{
                $set : {
                    'profile.nom' : nom.val()
                }
            });
        if(prenom.val()!="")
            Meteor.users.update({
                _id: Meteor.userId()
            },{
                $set : {
                    'profile.prenom' : prenom.val()
                }
            });
        swal({   title: "Merci !",   text: "Votre profil est modifié",  showConfirmButton: true },function(isConfirm){  Router.go('/');  });
    }
});