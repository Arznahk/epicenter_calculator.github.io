let ps = 0;
let pSpeed = 8;
let sSpeed = 4;
let result = 0;
let exam = false;

function valueCheck(id, min, max){
    if(isNaN(valueToInt(id)) == true){
        document.getElementById(id).value = min;
    } else if (document.getElementById(id).value<min){
        document.getElementById(id).value = min;
    } else if(document.getElementById(id).value>max){
        document.getElementById(id).value = max;
    }

}

//해당 id태그의 값을 정수로 변환해 출력
/**
 * html 태그의 value값을 정수로 반환
 * @param {string} id 타깃 html태그의 id
 * @returns 목표 태그의 value값을 정수화하여 반환
 */
function valueToInt(id){
    return parseInt(document.getElementById(id).value);
}


function numberChanged(){
    valueCheck('ps', 0, Infinity);
    valueCheck('pSpeed', 5, 8);
    valueCheck('sSpeed', 3, 4);
    document.getElementById('pSlider').value = document.getElementById('pSpeed').value;
    document.getElementById('sSlider').value = document.getElementById('sSpeed').value;
}



function indicateValue(){
    if (exam) {
        document.getElementById('indicator').innerHTML = "진원거리: ?km";
    } else {
        document.getElementById('indicator').innerHTML = "진원거리: " + result + "km";
    }
}

function formula(){
    if (exam) {
        document.getElementById('formula').innerHTML = "?"
    } else {
        document.getElementById('formula').innerHTML = ps + " = " + "d/" + sSpeed + " - " + "d/" + pSpeed + "<br>" + ps + " = " + "d*(" + pSpeed + " - " + sSpeed + ")/" + pSpeed + "*" + sSpeed + "<br>" + "d" + " = " + ps + "*(" + pSpeed + "*" + sSpeed + ")/(" + pSpeed + " - " + sSpeed + ")<br>" + "d" + " = " + ps*pSpeed*sSpeed + "/" + (pSpeed - sSpeed) + " = " + result;
    }
}


function calculate() {
    result = (pSpeed*sSpeed)*ps/(pSpeed-sSpeed);
}



function inputData() {
    ps = document.getElementById('ps').value;
    pSpeed = document.getElementById('pSpeed').value;
    sSpeed = document.getElementById('sSpeed').value;
    calculate();
    indicateValue();
    formula();
}


function slide() {
    document.getElementById('pSpeed').value = document.getElementById('pSlider').value;
    document.getElementById('sSpeed').value = document.getElementById('sSlider').value;
}

document.getElementById('indicator').innerHTML = "진원거리: " + "가나다라";

function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function createExam() {
    exam = true;
    document.getElementById('pSpeed').value = getRandom(5, 8);
    document.getElementById('sSpeed').value = getRandom(3, 4);
    document.getElementById('ps').value = getRandom(1, 100);
    inputData();
    if (result % 1 === 0) {
        numberChanged();
    } else {
        createExam();
    }
}

function showAnswer(){
    exam = false;
    indicateValue();
    formula();
}

