// 导入必要的库
import { add, subtract } from './mathUtils';

/**
 * 提供基础的数学运算服务
 */
export class MathService {
    constructor() {}

    // 实现加法操作
    public addNumbers(a: number, b: number): number {
        return add(a, b);
    }

    // 实现减法操作
    public subtractNumbers(a: number, b: number): number {
        return subtract(a, b);
    }
}

// 也可以直接导出一些工具函数
export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}
