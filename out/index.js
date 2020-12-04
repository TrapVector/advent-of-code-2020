"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Day1Puzzle from './day1';
const day1_1 = __importDefault(require("./day1"));
const day2_1 = __importDefault(require("./day2"));
const day3_1 = __importDefault(require("./day3"));
const day4_1 = __importDefault(require("./day4"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const puzzles = [
            new day1_1.default(),
            new day2_1.default(),
            new day3_1.default(),
            new day4_1.default()
        ];
        console.log("Advent of Code 2020");
        for (const puzzle of puzzles) {
            console.log("Puzzle %s:", puzzle.name);
            console.log("----------------------------");
            const solution = yield puzzle.solve();
            if (solution.part1 || solution.part1 === 0) {
                console.log("Part 1\t:\t%d", solution.part1);
            }
            else {
                console.log("Part 1\t:\t(not solved)");
            }
            if (solution.part2 || solution.part2 === 0) {
                console.log("Part 2\t:\t%d", solution.part2);
            }
            else {
                console.log("Part 2\t:\t(not solved)");
            }
            const time = solution.time.toLocaleString('en', {
                maximumFractionDigits: 2
            });
            console.log("Runtime\t:\t%fms", time);
            console.log();
        }
    });
}
run();
//# sourceMappingURL=index.js.map