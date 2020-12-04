import fs from 'fs';
import readline from 'readline';

import { Puzzle, Solution } from './puzzle';

export default class Day2Puzzle extends Puzzle
{
    constructor() { super(2, './input/day2.txt'); }

    validatePart1(password: string, min: number, max: number, character: string): boolean
    {
        const count = [...password].filter(c => c === character).length;
        return count >= min && count <= max;
    }

    validatePart2(password: string, pos1: number, pos2: number, character: string): boolean
    {
        if (password.length < pos1 || password.length < pos2) return false;
        const AtPos1 = password[pos1 - 1] === character;
        const AtPos2 = password[pos2 - 1] === character;
        // Lolz, js doesn't have boolean XOR...
        return AtPos1 != AtPos2;
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile)
        });
      
        const passwords: Array<string> = [];
        let part1ValidCount: number = 0;
        let part2ValidCount: number = 0;
    
        for await (const line of rl)
        {
            const detailsRegex: RegExp = /(\d+)-(\d+) (\w): (\w+)/;
    
            const matches = detailsRegex.exec(line);
            if (matches && matches.length == 5)
            {
                const n1 = parseInt(matches[1]);
                const n2 = parseInt(matches[2]);
                const char = matches[3];
                const password = matches[4];
    
                if (this.validatePart1(password, n1, n2, char)) part1ValidCount++;
                if (this.validatePart2(password, n1, n2, char)) part2ValidCount++;
            }
        };
    
        let solution = new Solution();
        solution.part1 = part1ValidCount;
        solution.part2 = part2ValidCount;

        return solution;
    }
}