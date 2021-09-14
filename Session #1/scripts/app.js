//Object literal
var salon={
    name:"The Fashion Pet",
    address:{
        street:"123 Main Street",
        city:"San Diego",
        state:"California",
        zip:"92126"
    },
    hours:{
        opening:"9:00 AM",
        closing:"9:00 PM"
    },
    pets:[]
}

//name,age,gender,breed,service,owner,phone
var counter=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.id=counter++;
    }
}
//create pets
var scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-555");
salon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Mixed","Nails cut","Shaggy","555-555-555");
salon.pets.push(scrappy);
var tweety=new Pet("Tweety Bird", 60, "Male", "Bird", "Nails cut", "Bugs Bunny", "999-999-9999");
salon.pets.push(tweety);
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
    salon.pets.push(thePet);
    clear();
    displayTable();
}

function clear(){
    txtName.value="";// clearing the input
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtOwner.value="";
    txtPhone.value="";
}
function display(){
    const petSection=document.getElementById('pets');
    var tmp="";
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`<div class="pet">
                <h3> 🐾 ${salon.pets[i].name}</h3>
                <p>${salon.pets[i].age}</p>
                <p>${salon.pets[i].gender}</p>
                <p>${salon.pets[i].breed}</p>
                <p>${salon.pets[i].service}</p>
                <p>${salon.pets[i].owner}</p>
                <p>${salon.pets[i].phone}</p>

            </div>`;
    }
    petSection.innerHTML=tmp;
}

function displayTable(){
    //select the tbody section
    var table=document.getElementById('pets');
    //create a var tr
    var tr="";
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
        tr+=`
            <tr id=${salon.pets[i].id}>
                <td>🐾 ${salon.pets[i].name}</td>
                <td>${salon.pets[i].age}</td>
                <td>${salon.pets[i].gender}</td>
                <td>${salon.pets[i].breed}</td>
                <td>${salon.pets[i].service}</td>
                <td>${salon.pets[i].owner}</td>
                <td>${salon.pets[i].phone}</td>
                <td> <button onclick="deletePet(${salon.pets[i].id})">🗑️</button></td>
            </tr>
        `;
    }
    //insert the tr into the table
    table.innerHTML=tr;
}
function deletePet(id){
    var row=document.getElementById(id); //select element from html using id
    row.remove(); //remove element from HTML
    for(var i=0; i<salon.pets.length; i++){
        var indexDelete; //variable to store the position
        if(salon.pets[i].id===id){ //search for the id
            indexDelete=i; //update the position value
        }
    }
    salon.pets.splice(indexDelete,1); //delete the element from the array
}
function init(){
    console.log("app.js");
    displayTable();
    //hook events
}
window.onload=init;