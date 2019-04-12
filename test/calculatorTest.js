let calculator = require('../src/calculator');
let expect = require('chai').expect;

describe('add', () => {
    it('should add 2 number and return the result', (done) => {
        const result = calculator.add(4, 4);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(8);
        done();
    });
    it('should return an error because of wrong input type', (done) => {
        const result = calculator.add("2", "w");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number");
        done();
    });
});

describe('substract', () => {
    it('should add 2 number and return the result', (done) => {
        const result = calculator.substract(6, 2);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(4);
        done();
    });
    it('should return an error because of wrong input type', (done) => {
        const result = calculator.substract("sajdb", "awoinweo");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number");
        done();
    });
});

describe('mutiply', () => {
    it('should add 2 number and return the result', (done) => {
        const result = calculator.multiply(3, 5);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(15);
        done();
    });
    it('should return an error because of wrong input type', (done) => {
        const result = calculator.multiply("niwvw", "vsaisd");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number");
        done();
    });
});

describe('divide', () => {
    it('should add 2 number and return the result', (done) => {
        const result = calculator.divide(20, 5);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(4);
        done();
    });
    it('should return an error because of wrong input type', (done) => {
        const result = calculator.divide("waeg", "wweaovi");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number");
        done();
    });
    it('should return an error because of division by zero', (done) => {
        const result = calculator.divide(1, 0);
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, division by zero");
        done();
    });
});