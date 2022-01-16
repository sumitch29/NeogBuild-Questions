//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const inputDay = prompt("Enter any day of a week. Example: Tuesday");

const checkWeekDay = day => weekdays.includes(day) ? `${day} is a weekday` : `${day} is weekend`;

console.log(checkWeekDay(inputDay.toLowerCase()));