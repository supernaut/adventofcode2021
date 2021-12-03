const fs = require("fs");
const readline = require("readline");
const path = require("path");

const processData = async () => {
  // Open filestream to input
  const fileStream = fs.createReadStream(path.resolve(__dirname, "input"));

  // create readline interface
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Line break agnostic
  });

  // Holder for column values
  const values = [];

  // Length of actual values, not lines
  let length = 0;

  // Loop over lines
  for await (const line of rl) {
    // Only parse if line isn't empty
    if (!!line) {
      // Loop over each digit and tick up column counter
      [...line].forEach((digit, index) => {
        values[index] = parseInt(digit, 10) + (values[index] || 0);
      });

      // Add to length of lines
      length += 1;
    }
  }

  // Loop over columns and create binary value from majority value
  const binary = values.map((value) => (value / length > 0.5 ? 1 : 0)).join("");

  // Parse binary to decimal
  const gamma = parseInt(binary, 2);

  // Invert binary value to get epsilon
  const epsilon = ~gamma + Math.pow(2, binary.length);

  // Multiply values in output
  console.log(gamma * epsilon);
};

processData();
