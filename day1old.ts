import fs from 'fs';
import readline from 'readline';

function day1(): void
{
  const inputFile: string = 'input/day1a.txt';

  const rl = readline.createInterface({
    input: fs.createReadStream(inputFile)
  });
  
  const targetNumber: number = 2020;
  let numbers: Array<number> = [];
  
  rl.on('line', (line: string) => {
    numbers.push(parseInt(line));
  });

  rl.on('close', () => {
    let part1Answer = part1(targetNumber, numbers);
    if (part1Answer)
    {
      let product = part1Answer[0] * part1Answer[1];
      console.log("Part 1 Answer = %d", product);
    }

    let part2Answer = part2(targetNumber, numbers);
    if (part2Answer)
    {
      let product = part2Answer[0] * part2Answer[1] * part2Answer[2];
      console.log("Part 2 Answer = %d", product);
    }
  });
}

function part1(target: number, input: Array<number>): [number, number] | undefined
{
  let previousNumbers: Array<number> = [];

  for (let [i, newNumber] of input.entries())
  {
    for (let [j, previousNumber] of previousNumbers.entries())
    {
      if (previousNumber + newNumber == target)
      {
        return [previousNumber, newNumber];
      }
    }

    previousNumbers.push(newNumber);
  }

  return undefined;
}

function part2(target: number, input: Array<number>): [number, number, number] | undefined
{
  let remainingNumbers: Array<number> = Array.from(input);
  while(remainingNumbers.length > 0)
  {
    let number: number | undefined = remainingNumbers.pop();
    if (number)
    {
      let values: [number, number] | undefined = part1(target - number, remainingNumbers);
      if (values)
      {
        return [number, values[0], values[1]];
      }
    }
  }

  return undefined;
}

day1();