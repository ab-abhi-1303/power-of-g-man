const main = require("./geektrust");
const { expect } = require('chai');
const fs = require("fs");

describe("integration test", function () {
    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 150';
        const input = fs.readFileSync('sample_input/input1.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 70';
        const input = fs.readFileSync('sample_input/input2.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 130';
        const input = fs.readFileSync('sample_input/input3.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 90';
        const input = fs.readFileSync('sample_input/input5.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 120';
        const input = fs.readFileSync('sample_input/input4.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 180';
        const input = fs.readFileSync('sample_input/input6.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });

    it("should be able to get correct output", function () {
        const expectedOutput = 'POWER 170';
        const input = fs.readFileSync('sample_input/input7.txt').toString();

        const output = main(input);
        expect(output).to.equal(expectedOutput);
    });
});