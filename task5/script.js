let name = prompt("Adıvızı daxil edin:");
let surname = prompt("Soyadıvızı daxil edin:");
let username = prompt("Istifadeci adıvızı girin");

let infoPlace = document.body;
infoPlace.innerHTML += "Ad: " + name + "<br>";
infoPlace.innerHTML += "Soyad: " + surname + "<br>";
infoPlace.innerHTML += "Istifadeci adı: " + username + "<br>";
infoPlace.style.color = "green";
infoPlace.style.fontSize = "60px";
infoPlace.style.fontWeight = "bold";
infoPlace.style.textTransform = "capitalize";
