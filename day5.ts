import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

export default class Day5Puzzle extends Puzzle
{
    constructor() { super(5, './input/day5.txt'); }

    parseSeatId(key: string): number
    {
        const binary = [...key].map((c) => {
            if (c === 'B' || c === 'R') return '1';
            return '0';
        }).join('');

        return parseInt(binary, 2);
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        let seatIds: number[] = [];
        for await (const line of rl)
        {
            const seatId = this.parseSeatId(line);
            seatIds.push(seatId);
        }

        // Unbelievable that you have to specify this...
        seatIds.sort((a, b) => a - b);
        let maxSeatId = seatIds[seatIds.length - 1];

        let lastSeat = seatIds[0];
        let mySeatId: number | undefined = undefined;
        for (let i = 1; i < seatIds.length; i++)
        {
            const currentSeat = seatIds[i];
            if (lastSeat != currentSeat - 1)
            {
                mySeatId = lastSeat + 1;
                break;
            }

            lastSeat = currentSeat;
        }

        let solution = new Solution();
        solution.part1 = maxSeatId;
        solution.part2 = mySeatId;
        return solution;
    }
}