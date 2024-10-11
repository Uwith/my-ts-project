// mathUtils.test.ts
import { add, subtract } from '../src/mathUtils';

describe('add', () => {
    test('应正确地将两个正数相加', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });

    test('应该正确添加一个正数和一个负数', () => {
        const result = add(5, -3);
        expect(result).toBe(2);
    });

    test('应该正确地添加两个负数', () => {
        const result = add(-2, -3);
        expect(result).toBe(-5);
    });

    test('应该正确添加零和正数', () => {
        const result = add(0, 5);
        expect(result).toBe(5);
    });

    test('应该正确地添加零和负数', () => {
        const result = add(0, -5);
        expect(result).toBe(-5);
    });

    test('应该正确地添加零和零', () => {
        const result = add(0, 0);
        expect(result).toBe(0);
    });
});

describe('subtract', () => {
    test('应该正确减去两个正数', () => {
        const result = subtract(5, 3);
        expect(result).toBe(2);
    });

    test('应该正确减去正数和负数', () => {
        const result = subtract(5, -3);
        expect(result).toBe(8);
    });

    test('应该正确减去两个负数', () => {
        const result = subtract(-5, -3);
        expect(result).toBe(-2);
    });

    test('应该正确减去零和正数', () => {
        const result = subtract(0, 5);
        expect(result).toBe(-5);
    });

    test('应该正确减去零和负数', () => {
        const result = subtract(0, -5);
        expect(result).toBe(5);
    });

    test('应该正确地减去零和零', () => {
        const result = subtract(0, 0);
        expect(result).toBe(0);
    });
});