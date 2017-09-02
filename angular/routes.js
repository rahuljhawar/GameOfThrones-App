myApp.config(['$routeProvider', function($routeProvider){

      
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'mainCtrl'
        })
        .when('/book-detail/:bookId',{
        	templateUrl    : 'views/book-detail.html',
            controller     : 'booksController',
            controllerAs   : 'bookCtrl'
        	
        })
         .when('/character-detail/:characterId',{
            templateUrl    : 'views/character-detail.html',
            controller     : 'charactersController',
            controllerAs   : 'characterCtrl'
            
        })
           .when('/house-detail/:houseId',{
            templateUrl    : 'views/house-detail.html',
            controller     : 'housesController',
            controllerAs   : 'houseCtrl'
            
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);