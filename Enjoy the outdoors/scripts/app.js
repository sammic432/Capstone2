"use strict";

window.onload = function(){
    let locationBtn = document.getElementById("locaBtn");
    let parkBtn = document.getElementById("parkBtn");
    displayLocaDropdown(locationsArray);
    displayParksDropdown(parkTypesArray);

    // if(statesInput.value != ""){
    //     menu = document.getElementById("states");
    //     displayDropdown(locationsArray);
    // }
    // else if(parkTypeInput.value != ""){
    //     menu = document.getElementById("parktype");
    //     displayDropdown(parkTypesArray);
    // }
    
    // console.log(displayDropdown(locationsArray));
    locationBtn.addEventListener("click", function () {displayLocaSearch(nationalParksArray)});
    parkBtn.addEventListener("click", function () {displayParkSearch(nationalParksArray)});

}

// let menu = [];

const statesInput = document.getElementById("states");
const parkTypeInput = document.getElementById("parktype");

// function displayDropdown(infoArray){
//     for (let i = 0; i < infoArray.length; i++){
//         var option = array[i];
//         var element = document.createElement("option");
//         element.textContent = option;
//         element.value = option;
//         menu.appendChild(element);
//     }
// }

// can combine both dropdowns
function displayLocaDropdown(array){
    let menu = document.getElementById("states");
    for (let i = 0; i < array.length; i++){
        var option = array[i];
        var element = document.createElement("option");
        element.textContent = option;
        element.value = option;
        menu.appendChild(element);
    }
}

function displayParksDropdown(array){
    let menu = document.getElementById("parktype");
    for (let i = 0; i < array.length; i++){
        var option = array[i];
        var element = document.createElement("option");
        element.textContent = option;
        element.value = option;
        menu.appendChild(element);
    }
}

const contentList = document.getElementById("contentList");

function displayLocaSearch(array){
    contentList.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        if(statesInput.value === array[i].State){
            contentList.innerHTML += `<button type="button" id="showPark" onclick="displaySelectedPark(${array[i].LocationName})">${array[i].LocationName}</button>`
        }
    }
}

function displayParkSearch(array){
    contentList.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        if(array[i].LocationName.includes(parkTypeInput.value)){
            contentList.innerHTML += `<button type="button" id="showPark" onclick="displaySelectedPark(${array[i].LocationName})">${array[i].LocationName}</button>`
        }
    }
}

function setListeners(){
    document.getElementById("showPark").addEventListener("click");
}

const specificPark = document.getElementById("selectedPark");
const parkLocaID = document.getElementById("cardID");
const parkName = document.getElementById("cardName");
const parkAddress1 = document.getElementById("cardAddress1");
const parkAddress2 = document.getElementById("cardAddress2");
const parkPhone = document.getElementById("cardPhone");
const parkLong = document.getElementById("cardLong");
const parkLati = document.getElementById("cardLati");

function displaySelectedPark(park){
    parkLocaID.innerHTML = "";
    parkName.innerHTML = "";
    parkAddress1.innerHTML = "";
    parkAddress2.innerHTML = "";
    parkPhone.innerHTML = "";
    parkLong.innerHTML = "";
    parkLati.innerHTML = "";
    for(let i = 0; i < nationalParksArray.length; i++){
        if(park == nationalParksArray[i].LocationName){
            parkLocaID.innerHTML = `${array[i].LocationID}`;
            parkName.innerHTML = `${array[i].LocationName}`;
            parkAddress1.innerHTML = `${array[i].Address}`;
            parkAddress2.innerHTML = `${array[i].City}, ${array[i].State} ${array[i].ZipCode}`;
            parkPhone.innerHTML = `${array[i].Phone}`;
            parkLong.innerHTML = `${array[i].Longitude}`;
            parkLati.innerHTML = `${array[i].Latitude}`;
        }
    }
}