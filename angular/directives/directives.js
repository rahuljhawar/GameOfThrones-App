myApp.directive('bookView',function(){
	return{
		restrict:"E",
		
		templateUrl: "views/books-view.html",
		scope:{
			book:"=",
			index: "@"

		},
		link:function(scope,element,attrs){
			var elem=element.find('.icon');
			var card=element.find('.card');
			card.bind('mouseover',function(){
				elem.addClass('animated zoomIn')
				elem.html('<i class="fa fa-book" aria-hidden="true"></i>');
			});
			card.bind('mouseleave',function(){
				elem.removeClass('animated zoomIn');
				elem.html('');
			});
		},
		controller:function($scope){



		}
	}

});

myApp.directive('characterView',function(){
	return{
		restrict:"E",
		templateUrl: "views/characters-view.html",
		scope:{
			character: "=",
			index: "@"
		},
		link:function(scope,element,attrs){
			var elem=element.find('.icon');
			var card=element.find('.card');
			card.bind('mouseover',function(){
				elem.addClass('animated zoomIn')
				elem.html('<i class="fa fa-male" aria-hidden="true"></i>');
			});
			card.bind('mouseleave',function(){
				elem.removeClass('animated zoomIn');
				elem.html('');
			});
		},
		controller:function($scope){
			
			
		}
	}

});

myApp.directive('houseView',function(){
	return{
		restrict:"E",
		templateUrl:"views/houses-view.html",
		scope:{
			house: "=",
			index: "@"
		},
		link:function(scope,element,attrs){
			var elem=element.find('.icon');
			var card=element.find('.card');
			card.bind('mouseover',function(){
				elem.addClass('animated zoomIn')
				elem.html('<i class="fa fa-home" aria-hidden="true"></i>');
			});
			card.bind('mouseleave',function(){
				elem.removeClass('animated zoomIn');
				elem.html('');
			});
		},
		controller:function($scope){
			
			
		}
	}

});
