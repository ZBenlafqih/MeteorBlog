/**
 * Created by Zakaria on 11/01/2016.
 */

Meteor.methods({
    addMessage: function(mail,sujet,message){
        if(Meteor.userId()){
            Messages.insert({
                'mail':mail,
                'message':message,
                'sujet':sujet,
                'createdAt':Date.now()
            });
        }
    }
})