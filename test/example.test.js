import { add, sub, mult, div } from "../mathUtils.js";

const test = QUnit.test;

// Addition
test("add should take in 7 and 3 and return 10", (expect) => {

    const argument1 = 7;
    const argument2 = 3;
    const expected = 10;

    const actual = add(argument1, argument2);

    expect.equal(actual, expected);
});
test("add should take in 2 and 3 and return 5", (expect) => {

    const argument1 = 2;
    const argument2 = 3;
    const expected = 5;

    const actual = add(argument1, argument2);

    expect.equal(actual, expected);
});

// Subtraction
test("subtract should take in 7 and 3 and return 10", (expect) => {

    const argument1 = 7;
    const argument2 = 3;
    const expected = 4;

    const actual = sub(argument1, argument2);

    expect.equal(actual, expected);
});
test("subtract should take in 10 and 3 and return 10", (expect) => {

    const argument1 = 10;
    const argument2 = 3;
    const expected = 7;

    const actual = sub(argument1, argument2);

    expect.equal(actual, expected);
});

// Multiplication
test("multiply should take in 7 and 3 and return 21", (expect) => {

    const argument1 = 7;
    const argument2 = 3;
    const expected = 21;

    const actual = mult(argument1, argument2);

    expect.equal(actual, expected);
});
test("multiply should take in 10 and 3 and return 10", (expect) => {

    const argument1 = 10;
    const argument2 = 3;
    const expected = 30;

    const actual = mult(argument1, argument2);

    expect.equal(actual, expected);
});

// Division
test("divide should take in 21 and 3 and return 7", (expect) => {

    const argument1 = 21;
    const argument2 = 3;
    const expected = 7;

    const actual = div(argument1, argument2);

    expect.equal(actual, expected);
});

test("divide should take in 9 and 3 and return 3", (expect) => {

    const argument1 = 9;
    const argument2 = 3;
    const expected = 3;

    const actual = div(argument1, argument2);

    expect.equal(actual, expected);
});




