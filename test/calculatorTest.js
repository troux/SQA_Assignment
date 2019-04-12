let calculator = require('../src/calculator');
let expect = require('chai').expect;

describe('add', () => {
    it('should add 2 number and return the result', () => {
        const result = calculator.add(4, 4);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(8);
    });
    it('should return an error because of wrong input type', () => {
        const result = calculator.add("2", "w");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number")
    })
});

describe('substract', () => {
    it('should add 2 number and return the result', () => {
        const result = calculator.substract(6, 2);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(4);
    });
    it('should return an error because of wrong input type', () => {
        const result = calculator.substract("sajdb", "awoinweo");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number")
    })
});

describe('mutiply', () => {
    it('should add 2 number and return the result', () => {
        const result = calculator.multiply(3, 5);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(15);
    });
    it('should return an error because of wrong input type', () => {
        const result = calculator.multiply("niwvw", "vsaisd");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number")
    })
});

describe('divide', () => {
    it('should add 2 number and return the result', () => {
        const result = calculator.divide(20, 5);
        expect(result).to.be.a('number');
        expect(result).to.be.equal(4);
    });
    it('should return an error because of wrong input type', () => {
        const result = calculator.divide("waeg", "wweaovi");
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, both input must be number")
    })
    it('should return an error because of division by zero', () => {
        const result = calculator.divide(1, 0);
        expect(result).to.be.a('string');
        expect(result).to.be.equal("Error, division by zero")
    })
});