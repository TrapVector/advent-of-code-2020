import fs from 'fs';
import readline from 'readline';
import { Puzzle, Solution } from './puzzle';

class State
{
    accumulator:number = 0;
    programCounter:number = 0;
}

abstract class Instruction
{
    callCount: number = 0;

    constructor(readonly argument: number) { }

    call(state: State): void
    {
        this.callInternal(state);
        this.callCount++;
    }

    protected abstract callInternal(state: State): void;
}

class NopInstruction extends Instruction
{
    constructor(arg: number) { super(arg); }

    protected callInternal(state: State): void
    {
        state.programCounter++;
    }
}

class AccInstruction extends Instruction
{
    constructor(arg: number) { super(arg); }

    protected callInternal(state: State): void
    {
        state.accumulator += this.argument;
        state.programCounter++;
    }
}

class JmpInstruction extends Instruction
{
    constructor(arg: number) { super(arg); }

    protected callInternal(state: State): void
    {
        state.programCounter += this.argument;
    }
}

export default class Day8Puzzle extends Puzzle
{
    constructor() { super(8, './input/day8.txt'); }

    parseInstruction(line: string): Instruction
    {
        const parts = line.split(' ');
        const opCode = parts[0];
        const argument = parseInt(parts[1]);

        switch(opCode)
        {
            case 'acc':
                return new AccInstruction(argument);
            case 'jmp':
                return new JmpInstruction(argument);
            case 'nop':
            default:
                return new NopInstruction(argument);
        }
    }

    protected async solveInternal(): Promise<Solution>
    {
        const rl = readline.createInterface({
            input: fs.createReadStream(this.inputFile),
        });

        let Instructions: Instruction[] = [];
        for await (const line of rl)
        {
            Instructions.push(this.parseInstruction(line));
        }

        let part1Answer = 0;
        let state = new State();

        while (state.programCounter < Instructions.length)
        {
            const currentInstruction = Instructions[state.programCounter];
            if (currentInstruction.callCount > 0)
            {
                part1Answer = state.accumulator;
                break;
            }
            Instructions[state.programCounter].call(state);
        }

        let solution = new Solution();
        solution.part1 = part1Answer;
        return solution;
    }
}
