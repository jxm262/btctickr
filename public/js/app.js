App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'my-namespace'
});

App.Store = DS.Store.extend({
    revision: 11,
    url:"http://localhost:3000"
});


App.Router.map(function() {
	this.resource('home', {path: '/home'});
	this.resource('test');
	this.resource('contact');
	this.resource('login');
	this.resource('signup');

	this.resource('about');
	this.resource('posts', function(){
		this.resource('post', { path: ':post_id' });
	});
});

App.Auth = DS.Model.extend({
	csrf: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	fullname: function(){
		return "hello world";
	}
});

App.Post = DS.Model.extend({
	  title: DS.attr('string'),
	  body: DS.attr('string')
});

App.HomeController = Ember.ArrayController.extend({
	actions: {
		signup: function () {
			console.log("clicked signup");
			var todo = this.store.createRecord('auth', {
				csrf: "my csrf",
				isCompleted: false
			});
			todo.save();
			
//			this.store.createRecord('auth', {csrf: "hello"});
//			this.store.push('auth', {csrf: "hello2"});
//			this.store.find('auth').then(function(data){
//				console.log(data); 
//			});
			console.log("done..");
		}
	}
});



App.HomeRoute = Ember.Route.extend({
	model: function() {
//		return App.Auth.create();
//		this.store.createRecord('auth', {csrf: "hello2"});
		return this.store.find('auth');
	},
	setupController : function(controller, model){
        controller.set("model", model);
    }
});


//App.TestRoute = Ember.Route.extend({
//	model: function() {
//		this.store.push('auth', {
//			csrf: "some pass"
//		});
//		console.log("logged...");
//		this.store.createRecord('auth');
//		console.log(this.store.createRecord('auth'));
//		
////		;
//		return {me: "justin"};
//	}
//});




