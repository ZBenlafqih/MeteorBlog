/**
 * Created by Zakaria on 11/01/2016.
 */

Template.messages.helpers({
    messages:function(){
        return Messages.find({},{sort: { createdAt: -1 }});
    },
    formatTime: function(time){
        return (new Date(time)).toLocaleString()
    }
});