let weight, height, hInM;
let imgDiv = document.getElementById("realimg");
let health = document.getElementById("health");
let bmidata = document.getElementById("bmicount");
let getBgc = document.querySelectorAll('.bgc');


function get() {
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    hInM = (height * 0.01)
}

function clr() {
    document.getElementById('height').value = ""
    document.getElementById('weight').value = ""
    imgDiv.src = '';
    health.innerHTML = "";
    bmidata.innerHTML = '';
    
    getBgc.forEach(bgc=> {
        bgc.style.backgroundColor = "white"
        bgc.style.border = "0px solid black";
    })

}


function calculate() {
    let bmi = weight / (hInM * hInM)
    bmidata.innerHTML = parseFloat(bmi).toFixed(2) + ' kg/m^2';

    if (bmi <= 18.5) {

        imgDiv.src =  'image/underweight.jpg';
        health.innerHTML = "UnderWeight";

        getBgc.forEach(bgc=> {
            bgc.style.backgroundColor = "#00FFFF"
            bgc.style.padding = '20px'
        })



    } else if(bmi > 18.5 && bmi <= 24.9){
        imgDiv.src = 'image/normal.jpg';
        health.innerHTML = 'Normal'
        
        getBgc.forEach(bgc=> {
            bgc.style.backgroundColor = "#90EE90"
            bgc.style.padding = '20px'
        })

    } else if(bmi >24.9 && bmi <= 29.9){
        imgDiv.src = 'image/over.jpg';
        health.innerHTML = "OverWeight";
        
        getBgc.forEach(bgc=> {
            bgc.style.backgroundColor = "#FFA500"
            bgc.style.padding = '20px'
        })

    } else if (bmi > 29.9 && bmi <=34.9){
        imgDiv.src = 'image/Obese.jpg';
        health.innerHTML = "Obese";
        
        getBgc.forEach(bgc=> {
            bgc.style.backgroundColor = "#ff0000"
            bgc.style.padding = '20px'

        })

    } else if (bmi > 34.9 ){
        imgDiv.src = 'image/Exobese.png';
        health.innerHTML = "Extremely Obese";
        
        getBgc.forEach(bgc=> {
            bgc.style.backgroundColor = "#ff0000"
            bgc.style.padding = '20px'
        })  

    }
}
