const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(before, answer, list) {
  list[list.indexOf(Number(before))] = Number(answer);
  getInput(list);
}

function getInput(list) {
  console.log(list);
  rl.question("Number to swap or Q to exit: ", (before) => {
    if (before == "Q") {
      rl.close();
    } else {
      rl.question(`Swap ${before} with: `, (answer) =>
        inputHandler(before, answer, list)
      );
    }
  });
}

module.exports = getInput;
