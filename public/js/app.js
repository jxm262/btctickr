App = Ember.Application.create();

App.Router.map(function() {
	this.resource('home');
	this.resource('contact');
	this.resource('login');
	this.resource('signup');

	this.resource('about');
	this.resource('posts', function(){
		this.resource('post', { path: ':post_id' });
	});
});






