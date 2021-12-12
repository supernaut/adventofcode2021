export const solve = (input: number[], days: number): number => {
  // One slot per days left
  const states = new Array(9).fill(0);

  // Fill with input
  input.forEach((state) => {
    // Add to the state value of each fish
    states[state]++;
  });

  // Loop over days
  for (let i = 0, l = days; i < l; i += 1) {
    // First state is birthing, shift out those fish
    const b = states.shift();

    // Add a new fish for each birthing one
    states.push(b);

    // Add the fish that birthed to day 6
    states[6] += b;
  }

  // Sum up the fish of all states
  return states.reduce((a, b) => a + b);
};
