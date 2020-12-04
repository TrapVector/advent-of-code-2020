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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puzzle = exports.Solution = void 0;
const perf_hooks_1 = require("perf_hooks");
class Solution {
    constructor() {
        this.part1 = undefined;
        this.part2 = undefined;
        this.time = 0;
    }
}
exports.Solution = Solution;
class Puzzle {
    constructor(index, inputFile) {
        this.index = index;
        this.inputFile = inputFile;
        this.name = "Day " + index;
    }
    solve() {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = perf_hooks_1.performance.now();
            let solution = yield this.solveInternal();
            solution.time = perf_hooks_1.performance.now() - startTime;
            return solution;
        });
    }
    solveInternal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Solution;
        });
    }
}
exports.Puzzle = Puzzle;
//# sourceMappingURL=puzzle.js.map