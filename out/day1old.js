"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
function day1() {
    const inputFile = 'input/day1a.txt';
    const rl = readline_1.default.createInterface({
        input: fs_1.default.createReadStream(inputFile)
    });
    const targetNumber = 2020;
    let numbers = [];
    rl.on('line', (line) => {
        numbers.push(parseInt(line));
    });
    rl.on('close', () => {
        let part1Answer = part1(targetNumber, numbers);
        if (part1Answer) {
            let product = part1Answer[0] * part1Answer[1];
            console.log("Part 1 Answer = %d", product);
        }
        let part2Answer = part2(targetNumber, numbers);
        if (part2Answer) {
            let product = part2Answer[0] * part2Answer[1] * part2Answer[2];
            console.log("Part 2 Answer = %d", product);
        }
    });
}
function part1(target, input) {
    let previousNumbers = [];
    for (let [i, newNumber] of input.entries()) {
        for (let [j, previousNumber] of previousNumbers.entries()) {
            if (previousNumber + newNumber == target) {
                return [previousNumber, newNumber];
            }
        }
        previousNumbers.push(newNumber);
    }
    return undefined;
}
function part2(target, input) {
    let remainingNumbers = Array.from(input);
    while (remainingNumbers.length > 0) {
        let number = remainingNumbers.pop();
        if (number) {
            let values = part1(target - number, remainingNumbers);
            if (values) {
                return [number, values[0], values[1]];
            }
        }
    }
    return undefined;
}
day1();
//# sourceMappingURL=day1old.js.map