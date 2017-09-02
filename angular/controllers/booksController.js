myApp.controller('booksController',['$http','apiService','$routeParams',function($http,apiService,$routeParams) {

  //create a context
  var book=this;
 this.bookDetail=[];
 
 
  this.loadData=function(){
      var index=$routeParams.bookId;
  	apiService.getBook(index).then(function successCallback(response) {
  		
  		book.bookDetail = response.data;
  		//console.log(book.bookDetail);
  	},
  	function errorCallback(response) {
  		alert("some error occurred. Check the console.");
  		console.log(response); 
  	});


  };	

  this.loadData();










}]); // end controller