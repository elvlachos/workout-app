'use strict'

let workoutType;

const workoutC = {
    'treksimo': '15 lepta',
    'push ups': 5
}

const workoutS = {
    's1': 4,
    's2': 33
}

const workoutCS = {
    'cs1': 3,
    'cs2': 2
}

const today = new Date();
const dd = String(today.getDay() - 1)
const mm = String(today.getMonth() + 1)
const yy = String(today.getFullYear())


function getDayName(dateString, locale) {
    let date = new Date(dateString);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}
const day = getDayName(today, "el-GR");

if (day === 'Δευτέρα' || day === 'Πέμπτη') {
    workoutType = workoutC;
} else if (day === 'Τετάρτη' || day === 'Παρασκευή') {
    workoutType = workoutS;
} else {
    workoutType = workoutCS
}

document.getElementById('header-info').innerHTML = '📅' + day + ` ${dd}/${mm}/${yy}`;

let targetUl = document.getElementById('checkboxes')
for (const [key, value] of Object.entries(workoutType)) {
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let lisomth = document.createElement('li');
    checkbox.type = 'checkbox';
    checkbox.class = 'workoutListCheckbox';
    checkbox.id = `cbox${key}`;
    checkbox.onclick = (e) => {
        console.log(e.target.checked)
    }
    lisomth.appendChild(checkbox)
    lisomth.appendChild(label)
    targetUl.appendChild(lisomth)
    label.appendChild(document.createTextNode(`${value} - ${key}`))
}






