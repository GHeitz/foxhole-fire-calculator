/**
 * Foxhole Fire Calculator
 * Application controller
 */


let weapons = [];
let buildings = [];



async function loadData() {


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



    populateMenus();

}




function populateMenus() {


    const weaponSelect =
        document.getElementById(
            "weapon"
        );


    weapons.forEach(
        weapon => {

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

        }
    );



    const buildingSelect =
        document.getElementById(
            "building"
        );


    buildings.forEach(
        building => {

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

        }
    );


}




function calculate() {


    const weaponId =
        document.getElementById(
            "weapon"
        ).value;



    const buildingId =
        document.getElementById(
            "building"
        ).value;



    const shots =
        Number(
            document.getElementById(
                "shots"
            ).value
        );



    const weapon =
        weapons.find(
            w =>
            w.id === weaponId
        );



    const building =
        buildings.find(
            b =>
            b.id === buildingId
        );



    const result =
        calculateFire(
            weapon,
            building,
            shots
        );



    document.getElementById(
        "fireStack"
    ).textContent =
        result.fireStack;



    document.getElementById(
        "effectiveFire"
    ).textContent =
        result.effectiveFire;



    document.getElementById(
        "intensity"
    ).textContent =
        result.intensity;


}



document
    .getElementById(
        "calculate"
    )
    .addEventListener(
        "click",
        calculate
    );



loadData();
