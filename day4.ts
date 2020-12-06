import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

export default class Day4Puzzle extends Puzzle
{
    constructor() { super(4, './input/day4.txt'); }

    parseEntry(pair: string): [string, string]
    {
        const parts = pair.split(':');
        return [parts[0], parts[1]];
    }

    isRequiredField(key: string): boolean
    {
        const fields: string[] = [
            "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
        ];

        return fields.includes(key);
    }

    validateData(passport: Map<string, string>): boolean
    {
        const inRange = (s: string, min: number, max: number) => {
            const v = parseInt(s);
            return v >= min && v <= max;   
        };

        const isValidHeight = (s: string) => {
            if (s.endsWith("cm"))
            {
                return inRange(s.slice(0, -2), 150, 193);
            }
            else if (s.endsWith("in"))
            {
                return inRange(s.slice(0, -2), 59, 76);
            }
            else
            {
                return false;
            }
        };

        const isColourValue = (s: string) => {
            return /#[a-f0-9]{6}/.test(s);
        };

        const isEyeColour = (s: string) => {
            const colours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
            return colours.includes(s);
        };

        const validators: Map<string, (v: string) => boolean> = new Map([
            [ "byr", (v: string) => inRange(v, 1920, 2002) ],
            [ "iyr", (v: string) => inRange(v, 2010, 2020) ],
            [ "eyr", (v: string) => inRange(v, 2020, 2030) ],
            [ "hgt", (v: string) => isValidHeight(v) ],
            [ "hcl", (v: string) => isColourValue(v) ],
            [ "ecl", (v: string) => isEyeColour(v) ],
            [ "pid", (v: string) => v.length == 9 ],
        ]);

        for (var [key, value] of passport)
        {
            if (!validators.get(key)?.call(this, value)) return false;
        }

        return true;
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        let currentPassport: Map<string, string> = new Map();
        let validForPart1 = 0;
        let validForPart2 = 0;

        const consumeCurrentPassport = () => {
            if (currentPassport.size == 7)
            {
                validForPart1++;
                if (this.validateData(currentPassport))
                {
                    validForPart2++;
                }
            }

            currentPassport.clear();
        };

        for await (const line of rl)
        {
            if (line.length == 0)
            {
                consumeCurrentPassport();
            }
            else
            {
                const pairs = line.split(' ');
                for (const pair of pairs)
                {
                    const field = this.parseEntry(pair);
                    if (this.isRequiredField(field[0]))
                    {
                        currentPassport.set(field[0], field[1]);
                    }
                }
            }
        }

        // I don't seem to be getting the very last line
        // to close out the last one... sigh...
        consumeCurrentPassport();

        let solution = new Solution();
        solution.part1 = validForPart1;
        solution.part2 = validForPart2;
        return solution;
    }
}