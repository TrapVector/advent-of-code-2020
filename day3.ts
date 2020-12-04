import fs from 'fs';
import readline from 'readline';

import { Puzzle, Solution } from './puzzle';

export default class Day3Puzzle extends Puzzle
{
    constructor() { super(3, './input/day3.txt'); }

    traverse(field: boolean[][], slope: [number, number]): number
    {
        let x = 0;
        let y = 0;
        
        let treeCount = 0;
        while (y < field.length)
        {
            if (field[y][x % field[y].length]) treeCount++;

            x += slope[0];
            y += slope[1];
        }
        return treeCount;
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        let field: boolean[][] = [];

        for await (const line of rl)
        {
            field.push([...line].map(c => c === '#'));
        }
            
        const slopes: [number, number][] = [
            [1, 1], [3, 1], [5, 1], [7, 1], [1, 2]
        ];
        let treeCounts: number[] = [];

        for (const slope of slopes)
        {
            treeCounts.push(this.traverse(field, slope));
        }

        let solution = new Solution();
        solution.part1 = treeCounts[1];

        const product = treeCounts.reduce((a, b) => a * b);
        solution.part2 = product;

        return solution;
    }
}
