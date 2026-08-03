/**
 * Foxhole Fire Calculator
 * Tactical Raid Simulation Engine
 * v0.3
 */


function simulateRaid(
    weapons,
    building,
    duration,
    weatherModifier = 1
) {


    let totalFireStack = 0;


    let timeline = [];



    for(
        let second = 0;
        second <= duration;
        second++
    ){


        let fireThisSecond = 0;



        weapons.forEach(
            attack => {


                const weapon =
                    attack.weapon;


                const shotsPerSecond =
                    weapon.shotsPerMinute / 60;



                fireThisSecond +=

                    weapon.fireStack *

                    shotsPerSecond *

                    attack.quantity;


            }
        );



        fireThisSecond *=
            weatherModifier;



        totalFireStack +=
            fireThisSecond;



        timeline.push({

            time:
                second,

            fire:
                totalFireStack.toFixed(2)

        });


    }



    const effectiveFire =

        totalFireStack *

        (1 - building.fireResistance);



    let status;



    if(effectiveFire < 10){

        status = "LOW";

    }

    else if(effectiveFire < 30){

        status = "MEDIUM";

    }

    else if(effectiveFire < 60){

        status = "HIGH";

    }

    else {

        status = "INFERNO";

    }



    return {

        totalFireStack:
            totalFireStack.toFixed(2),

        effectiveFire:
            effectiveFire.toFixed(2),

        status,

        timeline

    };


}
