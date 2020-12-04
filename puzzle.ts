import { performance } from 'perf_hooks';

export class Solution
{
    part1?: number = undefined;
    part2?: number = undefined;
    time: number = 0;
}

export abstract class Puzzle
{
    readonly name: string;

    constructor(readonly index: number, readonly inputFile: string)
    {
        this.name = "Day " + index;
    }

    async solve(): Promise<Solution>
    {
        const startTime = performance.now();

        let solution = await this.solveInternal();
        solution.time = performance.now() - startTime;

        return solution;
    }

    protected async solveInternal(): Promise<Solution>
    {
        return await new Solution;
    }
}