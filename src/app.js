const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(n1, n2, list) {
  var firstIndex = list[n1 - 1];
  var secondIndex = list[n2 - 1];
  list[n1 - 1] = secondIndex;
  list[n2 - 1] = firstIndex;
  getInput(list);
}

function getInput(list) {
  console.log(list);
  rl.question("Number to swap or Q to exit: ", (swap1) => {
    if (swap1 == "Q") {
      rl.close();
    } else if (swap1 >= 16) {
      console.log(`${swap1} does not exist in the list`);
      getInput(list);
    } else {
      rl.question(`Swap ${swap1} with: `, (swap2) => {
        if (swap2 >= 16) {
          console.log(`${swap2} does not exist in the list`);
          getInput(list);
        } else {
          inputHandler(Number(swap1), Number(swap2), list);
        }
      });
    }
  });
}

module.exports = getInput;
