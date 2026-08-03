/**
 * Foxhole Fire Calculator
 * Core calculation engine
 */


function calculateFire(
    weapon,
    building,
    shots
) {

    const fireStack =
        weapon.fireStack * shots;


    const effectiveFire =
        fireStack *
        (1 - building.fireResistance);


    let intensity;


    if (effectiveFire < 5) {

        intensity = "LOW";

    } 
    else if (effectiveFire < 15) {

        intensity = "MEDIUM";

    } 
    else if (effectiveFire < 30) {

        intensity = "HIGH";

    } 
    else {

        intensity = "INFERNO";

    }


    return {

        fireStack:
            fireStack.toFixed(2),

        effectiveFire:
            effectiveFire.toFixed(2),

        intensity:
            intensity

    };

}
