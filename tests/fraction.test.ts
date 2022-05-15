import { addition, division, multiplication, substraction } from '../src/operation';

describe('fraction', () => {
  describe('fraction: addition', () => {
    test.each([
      {
        operandA: '1',
        operandB: '0',
        expected: '1',
      },
      {
        operandA: '1',
        operandB: '1',
        expected: '2',
      },
      {
        operandA: '1/2',
        operandB: '0',
        expected: '1/2',
      },
      {
        operandA: '1/4',
        operandB: '0',
        expected: '1/4',
      },
      {
        operandA: '1/8',
        operandB: '1/2',
        expected: '5/8',
      },
      {
        operandA: '4/7',
        operandB: '2/7',
        expected: '6/7',
      },
    ])('addition: $operandA + $operandB = $expected', ({ operandA, operandB, expected }) => {
      // Act
      const result = addition(operandA, operandB);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('fraction: substraction', () => {
    test.each([
      {
        operandA: '1',
        operandB: '0',
        expected: '1',
      },
      {
        operandA: '1',
        operandB: '1',
        expected: '0',
      },
      {
        operandA: '1/2',
        operandB: '0',
        expected: '1/2',
      },
      {
        operandA: '1/8',
        operandB: '1/2',
        expected: '-3/8',
      },
    ])('substraction: $operandA - $operandB = $expected', ({ operandA, operandB, expected }) => {
      // Act
      const result = substraction(operandA, operandB);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('fraction: division', () => {
    test.each([
      {
        operandA: '1',
        operandB: '1',
        expected: '1',
      },
      {
        operandA: '4',
        operandB: '2',
        expected: '2',
      },
      {
        operandA: '4/7',
        operandB: '2/7',
        expected: '2',
      },
      {
        operandA: '4/3',
        operandB: '1/2',
        expected: '8/3',
      },
    ])('division: $operandA / $operandB = $expected', ({ operandA, operandB, expected }) => {
      // Act
      const result = division(operandA, operandB);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('fraction: multiplication', () => {
    test.each([
      {
        operandA: '1',
        operandB: '1',
        expected: '1',
      },
      {
        operandA: '1',
        operandB: '2',
        expected: '2',
      },
      {
        operandA: '3/2',
        operandB: '1/3',
        expected: '1/2',
      },
      {
        operandA: '4/7',
        operandB: '2/7',
        expected: '40/245', // TODO: division euclidienne: 8/49
      },
    ])('multiplication: $operandA * $operandB = $expected', ({ operandA, operandB, expected }) => {
      // Act
      const result = multiplication(operandA, operandB);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
