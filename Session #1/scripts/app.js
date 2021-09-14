//Object literal
var saloon={
    name:"The Fashion Pet",
    address:{
        state:"Baja California",
        city:"Tijuana",
        street:"Universidad 1245",
        zip:"25669"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 am"
    },
    pets:[]
}

//name,age,gender,breed,service,owner,phone
class Pet{
    constructor(name,age,gender,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}
//create pets
var scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-555");
saloon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Mixed","Nails cut","Shaggy","555-555-555");
saloon.pets.push(scrappy);
// getting tha values from the inputs
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');

function register(){
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);
    saloon.pets.push(thePet);
    clear();
}

function clear(){
    txtName.value="";// clearing the input
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtOwner.value="";
    txtPhone.value="";
}