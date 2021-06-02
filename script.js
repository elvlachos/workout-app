"use strict";

class Workout {
  constructor({ excersice, repetition }) {
    this.excersice = excersice;
    this.repetition = repetition;
  }
}

const workoutDays = {
  1: "cardio",
  2: "cardio-strength",
  3: "strength",
  4: "cardio",
  5: "strength",
  6: "cardio-strength",
};

const workoutByType = {
  cardio: [
    new Workout({
      excersice: "c1",
      repetition: "15",
    }),
    new Workout({
      excersice: "c2",
      repetition: "15",
    }),
  ],
  strength: [
    new Workout({
      excersice: "s1",
      repetition: "15",
    }),
    new Workout({
      excersice: "s2",
      repetition: "15",
    }),
  ],
  cardioStrength: [
    new Workout({
      excersice: "cs1",
      repetition: "15",
    }),
    new Workout({
      excersice: "cs2",
      repetition: "15",
    }),
  ],
};

const getTodaysWorkout = (date) => {
  //get workout type by day
  const day = date.getDay();
  const workoutType = workoutDays[day];
  //todo handle sunday
  return workoutByType[workoutType];
  //display datetime on header
};

const displayDate = (date) => {
  const dd = String(date.getDate());
  const mm = String(date.getMonth() + 1);
  const yy = String(date.getFullYear());
  document.getElementById("header-info").innerHTML =
    "📅" + ` ${dd}/${mm}/${yy}`;
};

const renderCheckboxes = (workout) => {
  let targetUl = document.getElementById("checkboxes");
  workout.forEach(({ excersice, repetition }) => {
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let lisomth = document.createElement("li");
    checkbox.type = "checkbox";
    checkbox.class = "workoutListCheckbox";
    checkbox.id = `cbox${excersice}`;
    checkbox.onclick = (e) => {
      let checkedBoolean = e.target.checked;
      console.log(`${excersice} is ${checkedBoolean}`);
      //...
    };
    lisomth.appendChild(checkbox);
    lisomth.appendChild(label);
    targetUl.appendChild(lisomth);
    label.appendChild(document.createTextNode(`${repetition} - ${excersice}`));
  });
};

const today = new Date();
displayDate(today);
const workout = getTodaysWorkout(today);
renderCheckboxes(workout);
