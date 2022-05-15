export function addition(...operands: string[]) {
  let count = 0;
  for (const operand of operands) count += convertToNumber(operand);
  return fraction(count);
}

export function substraction(...operands: string[]) {
  let count = convertToNumber(operands[0]);
  for (let i = 1; i < operands.length; i++) count -= convertToNumber(operands[i]);
  return fraction(count);
}

export function division(...operands: string[]) {
  let count = convertToNumber(operands[0]);
  for (let i = 1; i < operands.length; i++) count = count / convertToNumber(operands[i]);
  return fraction(count);
}

export function multiplication(...operands: string[]) {
  let count = convertToNumber(operands[0]);
  for (let i = 1; i < operands.length; i++) count = count * convertToNumber(operands[i]);
  return fraction(count);
}

function convertToNumber(operand: string): number {
  if (isFraction(operand)) return convertToNumber(eval(operand));
  return Number(operand);
}

function isFraction(operand: string): boolean {
  return isNaN(Number(operand));
}

function convertToFraction(number: number, denominator: number): string {
  return number.toString() + (denominator > 1 ? '/' + denominator : '');
}

function fraction(number: number, denominator = 1, originalNumber = number): string {
  if (Number.isInteger(number)) return convertToFraction(number, denominator);
  return fraction(originalNumber * (denominator + 1), denominator + 1, originalNumber);
}
