/**
 * Created by Zakaria on 06/01/2016.
 */


Meteor.methods({
    addPost: function(titre,contenu){
        if(Meteor.userId()){
            Posts.insert({
                'author':Meteor.user().username,
                'title':titre,
                'content':contenu,
                'createdAt':Date.now()
            });
        }
    },
    deletePost: function(id){
        Posts.remove({_id:id})
    },
    updatePost: function(id,titre,contenu){
        Posts.update({
            "_id": id
        },{
            $set : {
                'title':titre,
                'content':contenu
            }
        });
    }
})