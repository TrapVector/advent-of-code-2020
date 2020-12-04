import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

// class PassportParser
// {
//     parse(inputFile: string): 
// }

export default class Day4Puzzle extends Puzzle
{
    constructor() { super(4, './input/day4.txt'); }

    isRequiredField(key: string): boolean
    {
        const fields: string[] = [
            "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
        ];
        return fields.includes(key);
    }

    protected async solveInternal(): Promise<Solution>
    {
        let readStream = fs.createReadStream(this.inputFile, { encoding: "utf-8" });

        let token = '';
        let newLine = 2;
        while(readStream.readable)
        {
            const char:string = readStream.read(1);
            if (char === '\n') newLine--;
            if (char === '\r') newLine--;

            if (newLine === 0 || char === ' ')
            {
                if (token.length > 0)
                {
                    
                }
                else
                {

                }
            }
            else
            {
                token += char;
            }
        }

        let solution = new Solution();
        return solution;
    }
}