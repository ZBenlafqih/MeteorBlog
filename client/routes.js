/**
 * Created by Zakaria on 05/01/2016.
 */



Router.configure({
    layoutTemplate : 'layout'
});

Router.route('/',function(){
    this.render('home');
});

Router.route('/posts',function(){
    this.render('posts');
});

Router.route('/contact',function(){
    this.render('contact');
});

Router.route('/about',function(){
    this.render('about');
});

Router.route('/posts/add',function(){
    this.render('addPost');
});


Router.route('/profil/edit',function(){
    this.render('editProfil');
});


Router.route('/posts/edit/:_id', function () {
    this.render('editPost');
}, {
    name: 'post.id',
    data: function(){
        return {_id: this.params._id};
    }
});


Router.route('/profil/:_id', function () {
    this.render('profile');
}, {
    data: function(){
        return {_id: this.params._id};
    }
});

Router.route('/admin/messages',function(){
    this.render('messages');
});
