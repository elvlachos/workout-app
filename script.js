"use strict";

class Workout {
  constructor({ excersice, repetition }) {
    this.excersice = excersice;
    this.repetition = repetition;
  }
}

const workoutDays = {
  1: "cardio",
  2: "strength",
  3: "cardio",
  4: "cardioStrength",
  5: "strength",
  6: "cardioStrength",
};

const workoutByType = {
  cardio: [
    new Workout({
      excersice: "Shadowboxing💪",
      repetition: "4 * 10 * 4",
    }),
    new Workout({
      excersice: "Standing Leg Raises",
      repetition: "10 * 5",
    }),
    new Workout({
      excersice: "Squats💪",
      repetition: "20 * 2",
    }),
    new Workout({
      excersice: "Lunges",
      repetition: "15 * 3",
    }),
    new Workout({
      excersice: "Mountain Climbers",
      repetition: "15 * 3",
    }),
    new Workout({
      excersice: "Side Plank",
      repetition: "30δ * 2",
    }),
    new Workout({
      excersice: "Butt Kicks",
      repetition: "40δ * 2",
    }),
    new Workout({
      excersice: "Inchworm",
      repetition: "30δ * 3",
    }),
    new Workout({
      excersice: "Plank Shoulder Taps",
      repetition: "10 * 3",
    }),
    new Workout({
      excersice: "Τρέξιμο",
      repetition: "30λ",
    }),
  ],
  strength: [
    new Workout({
      excersice: "Regular Push Ups",
      repetition: "10 * 3",
    }),
    new Workout({
      excersice: "Straight Push Ups - Slow",
      repetition: "7 * 3",
    }),
    new Workout({
      excersice: "Lateral Arm Raise - Side💪",
      repetition: "15 * 2",
    }),
    new Workout({
      excersice: "Lateral Arm Raise - Front💪",
      repetition: "10 * 2",
    }),
    new Workout({
      excersice: "Plank",
      repetition: "45δ * 3",
    }),
    new Workout({
      excersice: "Side Plank",
      repetition: "30δ * 2",
    }),
    new Workout({
      excersice: "Crunches",
      repetition: "15 * 3",
    }),
    new Workout({
      excersice: "Curls💪",
      repetition: "12 * 3",
    }),
    new Workout({
      excersice: "Shoulder Arm Raise",
      repetition: "10 * 2",
    }),
    new Workout({
      excersice: "Decline Push Ups",
      repetition: "10 * 2",
    }),
  ],
  cardioStrength: [
    new Workout({
      excersice: "Squats💪",
      repetition: "20 * 2",
    }),
    new Workout({
      excersice: "Butt Kicks",
      repetition: "40δ * 2",
    }),
    new Workout({
      excersice: "Supermans",
      repetition: "15 * 2",
    }),
    new Workout({
      excersice: "Plank Shoulder Taps",
      repetition: "10 * 3",
    }),
    new Workout({
      excersice: "Plank",
      repetition: "45δ * 3",
    }),
    new Workout({
      excersice: "Lying Leg Raise",
      repetition: "15 * 2",
    }),
    new Workout({
      excersice: "Lying Hand Raise💪",
      repetition: "10 * 3",
    }),
    new Workout({
      excersice: "Diamond Push Ups",
      repetition: "10 * 2",
    }),
    new Workout({
      excersice: "Regular Push Ups",
      repetition: "15 * 2",
    }),
    new Workout({
      excersice: "Lying Leg Cross",
      repetition: "30δ * 2",
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
  var days = [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο",
  ];
  const dd = String(date.getDate());
  const mm = String(date.getMonth() + 1);
  const yy = String(date.getFullYear());
  document.getElementById("header-info").innerHTML =
    "📅" + days[date.getDay()] + ` ${dd}/${mm}/${yy}`;
};

let dailyScore = 0;
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
      if (checkedBoolean) {
        dailyScore += 1;
        document.getElementById(
          "score-header"
        ).innerHTML = `Score: ${dailyScore}/10`;
      } else {
        dailyScore -= 1;
        document.getElementById(
          "score-header"
        ).innerHTML = `Score: ${dailyScore}/10`;
      }
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
