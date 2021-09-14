function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${saloon.name}</h3>
    <p>${saloon.address.state}, ${saloon.address.city}. ${saloon.address.street}, ZIP: ${saloon.address.zip}</p>
    `;
}
displayInfo();