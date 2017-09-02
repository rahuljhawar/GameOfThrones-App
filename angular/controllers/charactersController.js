myApp.controller('charactersController',['$http','apiService','$routeParams',function($http,apiService,$routeParams) {

  //create a context
  var character=this;
 this.characterDetail=[];
 
 
  this.loadData=function(){
      var index=$routeParams.characterId;
  	apiService.getCharacter(index).then(function successCallback(response) {
  		
  		character.characterDetail = response.data;
  		//console.log(book.bookDetail);
  	},
  	function errorCallback(response) {
  		alert("some error occurred. Check the console.");
  		console.log(response); 
  	});


  };	

  this.loadData();










}]); // end controller