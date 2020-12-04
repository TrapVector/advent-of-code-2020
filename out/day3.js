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
class Day3Puzzle extends puzzle_1.Puzzle {
    constructor() { super(3, './input/day3.txt'); }
    traverse(field, slope) {
        let x = 0;
        let y = 0;
        let treeCount = 0;
        while (y < field.length) {
            if (field[y][x % field[y].length])
                treeCount++;
            x += slope[0];
            y += slope[1];
        }
        return treeCount;
    }
    solveInternal() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline_1.default.createInterface({
                input: fs_1.default.createReadStream(this.inputFile),
            });
            let field = [];
            try {
                for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), !rl_1_1.done;) {
                    const line = rl_1_1.value;
                    field.push([...line].map(c => c === '#'));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (rl_1_1 && !rl_1_1.done && (_a = rl_1.return)) yield _a.call(rl_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            const slopes = [
                [1, 1], [3, 1], [5, 1], [7, 1], [1, 2]
            ];
            let treeCounts = [];
            for (const slope of slopes) {
                treeCounts.push(this.traverse(field, slope));
            }
            let solution = new puzzle_1.Solution();
            solution.part1 = treeCounts[1];
            const product = treeCounts.reduce((a, b) => a * b);
            solution.part2 = product;
            return solution;
        });
    }
}
exports.default = Day3Puzzle;
//# sourceMappingURL=day3.js.map