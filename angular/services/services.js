myApp.service('apiService',function($http){

var baseUrl='https://anapioficeandfire.com/api';

this.getBooks=function(){
	return $http.get(baseUrl + '/books?page=1&pageSize=50');
};
this.getBook=function(bookId){
	return $http.get(baseUrl + '/books/'+ bookId);
};
this.getCharacters=function(pageNo){
	return $http.get(baseUrl + '/characters?page='+pageNo+'&pageSize=50');
};
this.getCharacter=function(charId){
	return $http.get(baseUrl + '/characters/'+ charId);
};
this.getHouses=function(pageNo){
	return $http.get(baseUrl + '/houses?page='+pageNo+'&pageSize=50');
};
this.getHouse=function(houseId){
	return $http.get(baseUrl + '/houses/'+ houseId);
};
});// end api service