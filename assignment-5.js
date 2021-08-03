let scores = [];
let scoreEntered;
let count = 0;
prompt("Enter score\nEnter 999 to end entries");
while (scoreEntered != 999) {
  scoreEntered = prompt("Enter score\nEnter 999 to end entries");
  scores.push(scoreEntered);
}
scores.pop();

for (let i = 0; i < scores.length; i++) {
  var number = parseInt(scores[i], 10);
  count += number;
}
const average = count / scores.length;
const avg = alert("Average score is " + average);
