
/**
 * Created by Zakaria on 09/01/2016.
 */

Meteor.startup(function(){
    Meteor.publish('postslist',function(skipCount){
        return Posts.find({},{sort: { createdAt: -1 },limit:6,skip:skipCount});
    });
    Meteor.publish('messagelist',function(){
        return Messages.find({},{sort: { createdAt: -1 }});
    });

})