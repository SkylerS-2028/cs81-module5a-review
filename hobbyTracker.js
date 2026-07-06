
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function returns the total amount of minutes spent on hobbies
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); // Adds the minutes per session to sum and returns the sum of the two
}

// This function returns an array with every type of hobby listed in the log
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); // Lists every type of hobby listed (including multiples)
  // Uses .map to create a new array with all values of a specific property
  return [...new Set(names)]; // Sorts out all multiples returning an array with each string listed once
}

// This function returns an array with every entry that has spent more than minMinutes on a hobby
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes); // Finds every value that is more than minMinutes and returns an array with all objects that apply
}

// This function returns the number of sessions with a specific moodType designated in the parameters
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length; // Creates an array of every entry with moodType and returns the length of the array
  // Uses .filter to create a new filtered array
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));