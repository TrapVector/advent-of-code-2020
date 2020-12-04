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
const fs_1 = __importDefault(require("fs"));
const puzzle_1 = require("./puzzle");
// class PassportParser
// {
//     parse(inputFile: string): 
// }
class Day4Puzzle extends puzzle_1.Puzzle {
    constructor() { super(4, './input/day4.txt'); }
    isRequiredField(key) {
        const fields = [
            "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
        ];
        return fields.includes(key);
    }
    solveInternal() {
        return __awaiter(this, void 0, void 0, function* () {
            let readStream = fs_1.default.createReadStream(this.inputFile, { encoding: "utf-8" });
            let token = '';
            let newLine = 2;
            while (readStream.readable) {
                const char = readStream.read(1);
                if (char === '\n')
                    newLine--;
                if (char === '\r')
                    newLine--;
                if (newLine === 0 || char === ' ') {
                    if (token.length > 0) {
                    }
                    else {
                    }
                }
                else {
                    token += char;
                }
            }
            let solution = new puzzle_1.Solution();
            return solution;
        });
    }
}
exports.default = Day4Puzzle;
//# sourceMappingURL=day4.js.map