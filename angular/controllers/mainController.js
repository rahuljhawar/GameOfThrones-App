myApp.controller('mainController',['$http','apiService','$routeParams',function($http,apiService,routeParams){
	var main=this;
	this.bookCardData=[];
	this.characterCardData=[];
	this.houseCardData=[];
	this.maxCharPage=10;
	this.maxHousePage=9;
	this.bookKey=false;
	this.charKey=false;
	this.houseKey=false;
	this.data=[
				{key:"books",value:main.bookCardData},
				{key:"characters",value:main.characterCardData},
				{key:"houses",value:main.houseCardData}
				];

	this.loadBookData=function(){
		
		apiService.getBooks().then(function successCallback(response){
			 var books = response.data;

			for(var i in books)
			{
				var book=books[i];
				var bookData=_.pick(book,'name','authors','numberOfPages','url');
				main.bookCardData.push(bookData);
			}

			console.log(main.bookCardData);
		},
		function errorCallback(response) {
			alert("some error occurred. Check the console.");
			console.log(response); 
		});

	};

	this.loadBookData();

	this.loadCharacterData=function(){
		for(var i=1;i<=main.maxCharPage;i++){
			apiService.getCharacters(i).then(function successCallback(response){
				
				var characters=response.data
				
				for(var j in characters)
				{
					var character=characters[j];
					var characterData=_.pick(character,'name','gender','culture','url');
					main.characterCardData.push(characterData);

				}

				
			},
			function errorCallback(response) {
				alert("some error occurred. Check the console.");
				console.log(response); 
			});
		}
		

	};
	console.log(main.characterCardData);
	this.loadCharacterData();

	this.loadHouseData=function(){
		for(var i=1;i<=main.maxHousePage;i++){
			apiService.getHouses(i).then(function successCallback(response){
				
				var houses=response.data
				
				for(var j in houses)
				{
					var house=houses[j];
					var houseData=_.pick(house,'name','region','url');
					main.houseCardData.push(houseData);

				}

				
			},
			function errorCallback(response) {
				alert("some error occurred. Check the console.");
				console.log(response); 
			});
		}
		

	};
	console.log(main.houseCardData);
	this.loadHouseData();
	this.showDiv=function(index){
		if(index==1){
			main.bookKey=true;
			main.charKey=false;
			main.houseKey=false;
		}
		else if(index==2){
			main.bookKey=false;
			main.charKey=true;
			main.houseKey=false;
		}
		else{
			main.bookKey=false;
			main.charKey=false;
			main.houseKey=true;
		}
	};

}]);