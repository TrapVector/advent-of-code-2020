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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const puzzle_1 = require("./puzzle");
class Day1Puzzle extends puzzle_1.Puzzle {
    constructor() { super(1, './input/day1.txt'); }
    findPairForTarget(target, numbers) {
        let returnTuple = [0, 0];
        for (const number of numbers) {
            const complement = target - number;
            if (numbers.has(complement)) {
                return [number, complement];
            }
        }
        return undefined;
    }
    solveInternal() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline_1.default.createInterface({
                input: fs_1.default.createReadStream(this.inputFile)
            });
            const target = 2020;
            let numbers = [];
            let numberSet = new Set();
            try {
                // Breaking out early will prevent the rest of
                // data being read in.
                for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), !rl_1_1.done;) {
                    const line = rl_1_1.value;
                    const newValue = parseInt(line);
                    numbers.push(newValue);
                    numberSet.add(newValue);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (rl_1_1 && !rl_1_1.done && (_a = rl_1.return)) yield _a.call(rl_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            ;
            let solution = new puzzle_1.Solution();
            const pair = this.findPairForTarget(target, numberSet);
            if (pair)
                solution.part1 = pair[0] * pair[1];
            while (numbers.length > 0) {
                const a = numbers.pop();
                if (a) {
                    numberSet.delete(a);
                    for (const number of numbers) {
                        const pair = this.findPairForTarget(target - a, numberSet);
                        if (pair) {
                            solution.part2 = a * pair[0] * pair[1];
                            break;
                        }
                    }
                    if (solution.part2)
                        break;
                }
            }
            return solution;
        });
    }
}
exports.default = Day1Puzzle;
//# sourceMappingURL=day1.js.map