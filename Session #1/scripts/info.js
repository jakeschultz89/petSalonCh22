function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${salon.name}</h3>
    <p>${salon.address.street}, ${salon.address.city}. ${salon.address.state} ${salon.address.zip}</p>
    `;
}
displayInfo();