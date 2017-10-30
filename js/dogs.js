var dogName = document.getElementById("dog-name");
var breed = document.getElementById("breed");
var age = document.getElementById("age");
var dogDisplay = document.getElementById("dog-display");
var addDog = document.getElementById("add-dog");
var resetList = document.getElementById("reset-list");
var dogList = [];
var nextID = 0;


var Dog = function Dog(dogName, breed, age){
    this.dogName = dogName;
    this.breed = breed;
    this.age = age;
    this.id = nextID++;

    this.dogInfo = function() {
        return "<strong>Name: </strong>" + this.dogName + "<strong>   Breed: </strong>" + this.breed +
        "<strong>   Age: </strong>" + this.age + "<strong>   ID: </stong>" + this.id;
    };
};

addDog.addEventListener("click", function(){

    if(dogName.value == "" || breed.value == "" || age == ""){
        alert("Please enter all information.");
        return;
    }     
    var newDog = new Dog(dogName.value, breed.value, age.value);
    dogList.push(newDog);
    displayDogs();

});

resetList.addEventListener("click", function(){
    dogDisplay.innerHTML = " ";
    dogList = [];
})

var displayDogs = function displayDogs(){
    dogDisplay.innerHTML = " ";
    
    for(var i=0; i < dogList.length; i++ )
    {
        var dog = dogList[i];
        dogDisplay.innerHTML += "<br>" + dog.dogInfo();
    };
    dogName.value = "";
    breed.value="";
    age.value="";
};

