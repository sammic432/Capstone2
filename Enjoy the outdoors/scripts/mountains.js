"use strict";

window.onload = function(){
    let mountainBtn = document.getElementById("mountBtn");
    displayMountainDropdown(mountainsArray);
    mountainBtn.addEventListener("click", function () {displayMountain(mountainsArray)})
}

const mountainImg = document.getElementById("mountainImg");
const mountainInfo = document.getElementById("mountainInfo");
const mountain = document.getElementById("mountain");

function displayMountainDropdown(array){
    let menu = document.getElementById("mountainDropdown");
    for (let i = 0; i < array.length; i++){
        var option = array[i].name;
        var element = document.createElement("option");
        element.textContent = option;
        element.value = option;
        menu.appendChild(element);
    }
}

function displayMountain(array){
    let selected = document.getElementById("mountainDropdown").value;
    mountainImg.innerHTML = "";
    mountainInfo.innerHTML = "";
    mountain.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        if (selected === array[i].name){
            mountainImg.src = `../images/${array[i].img}`;
            mountain.innerHTML = `<div>${array[i].name}</div>`;
            mountainInfo.innerHTML = `<div>${array[i].desc}</div>`;
        }
    }
}