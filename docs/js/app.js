/**
 * Foxhole Fire Calculator
 * Application controller v0.2
 */


let weapons = [];
let buildings = [];



async function loadData() {


    const [
    weaponResponse,
    buildingResponse
] = await Promise.all([

    fetch("data/weapons.json"),

    fetch("data/buildings.json")

]);


weapons =
    await weaponResponse.json();


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



function updateFireBar(value) {


    const bar =
        document.getElementById(
            "fireBar"
        );


    let percentage =
        Math.min(
            value,
            100
        );


    bar.style.width =
        percentage + "%";



    if(value < 25){

        bar.style.background =
            "#2ecc71";

    }

    else if(value < 50){

        bar.style.background =
            "#f1c40f";

    }

    else if(value < 75){

        bar.style.background =
            "#e67e22";

    }

    else {

        bar.style.background =
            "#e74c3c";

    }

}




function getFireStatus(level){


    switch(level){


        case "LOW":
            return "Fire contained";


        case "MEDIUM":
            return "Fire developing";


        case "HIGH":
            return "Dangerous fire";


        case "INFERNO":
            return "Critical fire";


        default:
            return "Unknown";

    }

}




function calculate(){


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
        "fireResistance"
    ).textContent =
        (building.fireResistance * 100)
        + "%";



    document.getElementById(
        "intensity"
    ).textContent =
        result.intensity;



    document.getElementById(
        "fireStatus"
    ).textContent =
        getFireStatus(
            result.intensity
        );



    updateFireBar(
        Number(
            result.effectiveFire
        )
    );


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
