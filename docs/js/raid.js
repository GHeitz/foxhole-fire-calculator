/**
 * Raid Simulator Controller
 * v0.3
 */


let weapons = [];
let buildings = [];

let selectedWeapons = [];



async function loadRaidData(){


const weaponResponse =
await fetch(
"data/weapons.json"
);


weapons =
await weaponResponse.json();



const buildingResponse =
await fetch(
"data/buildings.json"
);


buildings =
await buildingResponse.json();



populateRaid();


}




function populateRaid(){


const weaponSelect =
document.getElementById(
"raidWeapon"
);



weapons.forEach(
weapon=>{


let option =
document.createElement(
"option"
);


option.value =
weapon.id;


option.textContent =
weapon.name;


weaponSelect.appendChild(
option
);


});



const buildingSelect =
document.getElementById(
"raidBuilding"
);



buildings.forEach(
building=>{


let option =
document.createElement(
"option"
);


option.value =
building.id;


option.textContent =
building.name;


buildingSelect.appendChild(
option
);


});


}





document
.getElementById(
"addWeapon"
)
.addEventListener(
"click",
()=>{


const id =
document.getElementById(
"raidWeapon"
).value;



const quantity =
Number(
document.getElementById(
"raidQuantity"
).value
);



const weapon =
weapons.find(
w=>w.id===id
);



selectedWeapons.push({

weapon,

quantity

});



document.getElementById(
"weaponList"
).innerHTML +=

"<p>"
+
quantity
+
"x "
+
weapon.name
+
"</p>";



});





document
.getElementById(
"simulate"
)
.addEventListener(
"click",
()=>{


const building =

buildings.find(

b=>
b.id ===
document.getElementById(
"raidBuilding"
).value

);



const duration =

Number(

document.getElementById(
"raidDuration"
).value

);



const result =

simulateRaid(

selectedWeapons,

building,

duration

);



document.getElementById(
"raidFire"
).textContent =
result.totalFireStack;



document.getElementById(
"raidEffective"
).textContent =
result.effectiveFire;



document.getElementById(
"raidStatus"
).textContent =
result.status;



});




loadRaidData();
