import { Puzzle, Solution } from './puzzle';
//import Day1Puzzle from './day1';
import Day1Puzzle from './day1';
import Day2Puzzle from './day2';
import Day3Puzzle from './day3';
import Day4Puzzle from './day4';
import Day5Puzzle from './day5';

async function run()
{
    const puzzles: Puzzle[] = [
        new Day1Puzzle(),
        new Day2Puzzle(),
        new Day3Puzzle(),
        new Day4Puzzle(),
        new Day5Puzzle()
    ];

    console.log("Advent of Code 2020")

    for (const puzzle of puzzles)
    {
        console.log("Puzzle %s:", puzzle.name);
        console.log("----------------------------");

        const solution = await puzzle.solve();

        if (solution.part1 || solution.part1 === 0)
        {
            console.log("Part 1\t:\t%d", solution.part1);
        }
        else
        {
            console.log("Part 1\t:\t(not solved)");
        }

        if (solution.part2 || solution.part2 === 0)
        {
            console.log("Part 2\t:\t%d", solution.part2);
        }
        else
        {
            console.log("Part 2\t:\t(not solved)");
        }

        const time = solution.time.toLocaleString('en', {
            maximumFractionDigits: 2
        });
        console.log("Runtime\t:\t%fms", time);
        console.log();
    }
}

run();