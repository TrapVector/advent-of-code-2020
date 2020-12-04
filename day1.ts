import fs from 'fs';
import readline from 'readline';

import { Puzzle, Solution } from './puzzle';

export default class Day1Puzzle extends Puzzle
{
    constructor() { super(1, './input/day1.txt'); }

    findPairForTarget(target: number, numbers: Set<number>): [number, number] | undefined
    {
        let returnTuple: [number, number] = [0, 0];
        for (const number of numbers)
        {
            const complement = target - number;
            if (numbers.has(complement))
            {
                return [ number, complement ];
            }
        }

        return undefined;
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile)
        });
        
        const target = 2020;
        let numbers: number[] = [];
        let numberSet: Set<number> = new Set();

        // Breaking out early will prevent the rest of
        // data being read in.
        for await (const line of rl)
        {
            const newValue = parseInt(line);
            numbers.push(newValue);
            numberSet.add(newValue);
        };
    
        let solution = new Solution();
        const pair = this.findPairForTarget(target, numberSet);
        if (pair) solution.part1 = pair[0] * pair[1];

        while (numbers.length > 0)
        {
            const a = numbers.pop();
            if (a)
            {
                numberSet.delete(a);
                for (const number of numbers)
                {
                    const pair = this.findPairForTarget(target - a, numberSet);
                    if (pair)
                    {
                        solution.part2 = a * pair[0] * pair[1];
                        break;
                    }
                }

                if (solution.part2) break;
            }
        }

        return solution;
    }
}