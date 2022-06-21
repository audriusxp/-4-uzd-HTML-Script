window.onload = function(){
    let zodis1Laukelis = document.getElementById("zodis1");
    console.log(zodis1Laukelis);

    let zodis2Laukelis = document.getElementById("zodis2");
    console.log(zodis2Laukelis);

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);

    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function() {
        let zodis1 = zodis1Laukelis.value;
        console.log(zodis1);

        let zodis2 = zodis2Laukelis.value;
        console.log(zodis2);

        console.log(zodziuPalyginimas(zodis1, zodis2));

        pastraipa.innerHTML = "Zodziu palyginimas: " + zodziuPalyginimas(zodis1,zodis2);
    }
}
function zodziuPalyginimas(zodis1, zodis2) {
    if (zodis1.length === zodis2.length) {
        return zodis1 ,zodis2;
    }
    else if (zodis1.length > zodis2.length) {
        return zodis1;
    }
    else {
        return zodis2;
    }
    }
