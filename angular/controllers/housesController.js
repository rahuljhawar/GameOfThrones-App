myApp.controller('housesController',['$http','apiService','$routeParams',function($http,apiService,$routeParams) {

  //create a context
  var house=this;
  this.houseDetail=[];
  
  
  this.loadData=function(){
    var index=$routeParams.houseId;
    apiService.getHouse(index).then(function successCallback(response) {
      
      house.houseDetail = response.data;
  		//console.log(book.bookDetail);
  	},
  	function errorCallback(response) {
  		alert("some error occurred. Check the console.");
  		console.log(response); 
  	});


  };	

  this.loadData();










}]); // end controller