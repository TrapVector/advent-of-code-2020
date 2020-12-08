import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

export default class Day7Puzzle extends Puzzle
{
    constructor() { super(7, './input/day7.txt'); }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        for await (const line of rl)
        {

        }

        let solution = new Solution();
        return solution;
    }
}
