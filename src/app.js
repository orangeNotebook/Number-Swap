const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(before, answer, list) {
  var firstIndex = list.indexOf(Number(before));
  var secondIndex = list.indexOf(Number(answer));
  list[firstIndex] = Number(answer);
  list[secondIndex] = Number(before);
  getInput(list);
}

function getInput(list) {
  console.log(list);
  rl.question("Number to swap or Q to exit: ", (before) => {
    if (before == "Q") {
      rl.close();
    } else if (before >= 16) {
      console.log(`${before} does not exist in the list`);
      getInput(list);
    } else {
      rl.question(`Swap ${before} with: `, (answer) => {
        if (answer >= 16) {
          console.log(`${answer} does not exist in the list`);
          getInput(list);
        } else {
          inputHandler(before, answer, list);
        }
      });
    }
  });
}

module.exports = getInput;
