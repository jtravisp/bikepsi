var riderweight, bikeweight, tubeless, tirewidth ;

function psi() {

    riderweight = document.getElementById('riderweight').value;
    bikeweight = document.getElementById('bikeweight').value;
    tubeless = document.getElementById('tubeless').value;
    tirewidth = document.getElementById('tirewidth').value;

    var totalweight = riderweight + bikeweight;
    var baseline = 100;
    var psi = 0;

    // Shorten this code...
    if (tirewidth == 23) {
        if (totalweight < 180) {
            psi = baseline - 5;
        } else if (totalweight > 200) {
            psi = baseline + 5;
        } else {
            psi = baseline;
        }
        if (tubeless == Yes) {
            psi -= 10;
        }
    }
    // TO-DO
    else if (tirewidth == 25) {
        psi = baseline - 15;
    } else if (tirewidth == 28) {
        psi = baseline - 30;
    } else if (tirewidth == 30) {
        psi = baseline - 35;
    } else if (tirewidth == 32) {
        psi = baseline - 35;
    }

    document.getElementById("psi").innerHTML = "Why no work" + psi;

    // psiDiv.innerHTML += `<p> ${psi} </p>`
}


/*
// For 700cc wheeles only
// Rider weight- over 180 + 3 per 20 lbs
    //under 180 - 3 per 20 lbs
// Bike weight (include typical weight)
    // add to rider weight before calculation
// Tubeless checkbox?
    // -10 psi
// Tire width selector
    //23 100 psi, adjust for weight
    //25 - 15% baseline (85)
    //28 - 30% baseline (70)
    //30 - 35% (65)
    //32 - 35%

// pseudo code
accept variables from user:
riderWeight
bikeWeight
tubeless -True/False
tireWidth

run variables through psi formula
return recommended psi
*/