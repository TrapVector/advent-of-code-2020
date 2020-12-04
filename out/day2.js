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
class Day2Puzzle extends puzzle_1.Puzzle {
    constructor() { super(2, './input/day2.txt'); }
    validatePart1(password, min, max, character) {
        const count = [...password].filter(c => c === character).length;
        return count >= min && count <= max;
    }
    validatePart2(password, pos1, pos2, character) {
        if (password.length < pos1 || password.length < pos2)
            return false;
        const AtPos1 = password[pos1 - 1] === character;
        const AtPos2 = password[pos2 - 1] === character;
        // Lolz, js doesn't have boolean XOR...
        return AtPos1 != AtPos2;
    }
    solveInternal() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline_1.default.createInterface({
                input: fs_1.default.createReadStream(this.inputFile)
            });
            const passwords = [];
            let part1ValidCount = 0;
            let part2ValidCount = 0;
            try {
                for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), !rl_1_1.done;) {
                    const line = rl_1_1.value;
                    const detailsRegex = /(\d+)-(\d+) (\w): (\w+)/;
                    const matches = detailsRegex.exec(line);
                    if (matches && matches.length == 5) {
                        const n1 = parseInt(matches[1]);
                        const n2 = parseInt(matches[2]);
                        const char = matches[3];
                        const password = matches[4];
                        if (this.validatePart1(password, n1, n2, char))
                            part1ValidCount++;
                        if (this.validatePart2(password, n1, n2, char))
                            part2ValidCount++;
                    }
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
            solution.part1 = part1ValidCount;
            solution.part2 = part2ValidCount;
            return solution;
        });
    }
}
exports.default = Day2Puzzle;
//# sourceMappingURL=day2.js.map