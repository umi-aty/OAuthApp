const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fizzBuzz(N) {
  let count3 = 0;
  let count5 = 0;

  for (let i = 1; i <= N; i++) {
    count3++;

    count5++;

    let flag = false;

    if (count3 == 3) {
      console.log("Fizz");

      count3 = 0;
      flag = true;
    }

    if (count5 == 5) {
      console.log("Buzz");

      count5 = 0;
      flag = true;
    }

    if (!flag) {
      console.log(i);
    }
  }
}

rl.question("What is your number ? ", function saveInput(N) {
  fizzBuzz(N);
  rl.close();
});
