var lastInput = null;
var notLastInput = null;

var lastSelect = null;
var notLastSelect = null;

function getLastIn(lastIn, notLastIn) {
    lastInput = document.getElementById(lastIn);
    notLastInput = document.getElementById(notLastIn);
}

function getLastSel(lastSel, notLastSel) {
    lastSelect = document.getElementById(lastSel);
    notLastSelect = document.getElementById(notLastSel);
}

function clearInput(input) {
    if(document.getElementById(input).value == '0') {
        document.getElementById(input).value = '';
    }
}

function dropdownToLabel(label, drop, input1, unit1, input2, unit2) {
    var drop = document.getElementById(drop).value;

    var symArr = ["mL", "L", "cup", "fl oz"];
    
    document.getElementById(label).innerHTML = symArr[drop];

    convert(input1, unit1, input2, unit2);
}

function convert(input1, unit1, input2, unit2) {
    if(lastInput != null) {      
        var input1 = lastInput.value;
        var input2 = notLastInput;     

        var unit1 = lastSelect.value;
        var unit2 = notLastSelect.value;
        console.log(unit1 + ' // ' + unit2);
    }
    else {
        var input1 = document.getElementById(input1).value;
        var input2 = document.getElementById(input2);

        var unit1 = document.getElementById(unit1).value;
        var unit2 = document.getElementById(unit2).value;
    }

    var formula = [
        [1, 0.001, 0.00416667, 0.033814023],
        [1000, 1, 4.16667, 33.814023],
        [240, 0.24, 1, 8.11536552],
        [29.5735295625, 0.02957352956, 0.12322304,1]
    ];

    console.log(unit1 + " / " + unit2);
    var converted = (input1 * formula[unit1][unit2]);
    console.log(converted);
    console.log('input2 = ' + input2);
    input2.value = roundUp(converted, 5);
    lastInput = null;
    notlastInput = null
}

function roundUp(num, places) {
    places = Math.pow(10, places)
    return Math.ceil(num * places) / places
}