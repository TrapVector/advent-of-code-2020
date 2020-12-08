import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

export class Day6PuzzleSet extends Puzzle
{
    constructor() { super(6, './input/day6.txt'); }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        const allPossible = [..."abcdefghijklmnopqrstuvwxyz"];
        let anyAnswers: Set<string> = new Set();
        let allAnswers: Set<string> = new Set(allPossible);
        let anyAnswerSum: number = 0;
        let allAnswerSum: number = 0;

        const consumeSets = () => {
            anyAnswerSum += anyAnswers.size;
            allAnswerSum += allAnswers.size;
            anyAnswers.clear();
            allAnswers = new Set(allPossible);
        };

        for await (const line of rl)
        {
            if (line.length > 0)
            {
                const characters = [...line];

                allAnswers = new Set(characters.filter(c => allAnswers.has(c)));
                characters.forEach(c => anyAnswers.add(c));
            }
            else
            {
                consumeSets();
            }
        }

        // Once again... consume the last line.
        consumeSets();

        let solution = new Solution();
        solution.part1 = anyAnswerSum;
        solution.part2 = allAnswerSum;
        return solution;
    }
}

export default class Day6PuzzleBinary extends Puzzle
{
    constructor() { super(6, './input/day6.txt'); }

    convertToBitfield(line: string): number
    {
        let bitfield = 0;
        for (let i = 0; i < line.length; i++)
        {
            bitfield |= 1 << line.charCodeAt(i) - 65;
        }
        return bitfield;
    }

    countBits(i: number): number
    {
        let bitCount = 0;
        while(i != 0)
        {
            bitCount += 0x1 & i;
            i = i >> 1;
        }
        return bitCount;
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        const allPossible = 0x3FFFFFF;
        let anyAnswers:number = 0
        let allAnswers:number = allPossible;
        let anyAnswerSum: number = 0;
        let allAnswerSum: number = 0;

        const consumeSets = () => {
            anyAnswerSum += this.countBits(anyAnswers);
            allAnswerSum += this.countBits(allAnswers);
            anyAnswers = 0;
            allAnswers = allPossible;
        };

        for await (const line of rl)
        {
            if (line.length > 0)
            {
                const bitfield = this.convertToBitfield(line);

                anyAnswers |= bitfield;
                allAnswers &= bitfield;
            }
            else
            {
                consumeSets();
            }
        }

        // Once again... consume the last line.
        consumeSets();

        let solution = new Solution();
        solution.part1 = anyAnswerSum;
        solution.part2 = allAnswerSum;
        return solution;
    }
}
