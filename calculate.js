let ps = 0;
let pSpeed = 8;
let sSpeed = 4;
let result = 0;

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
    document.getElementById('ps').value = valueToInt('ps');
    document.getElementById('pSpeed').value = valueToInt('pSpeed');
    document.getElementById('sSpeed').value = valueToInt('sSpeed');
}



function indicateValue(){
    document.getElementById('indicator').innerHTML = "진원거리: " + result;
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
}


function speedChanged(){
    document.getElementById('pSpeed').value = valueToInt('pSlider');
    document.getElementById('sSpeed').value = valueToInt('sSlider');
    indicateValue();
}


document.getElementById('indicator').innerHTML = "진원거리: " + "가나다라";