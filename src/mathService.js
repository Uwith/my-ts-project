"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathService = void 0;
exports.multiply = multiply;
exports.divide = divide;
// 导入必要的库
const mathUtils_1 = require("./mathUtils");
/**
 * 提供基础的数学运算服务
 */
class MathService {
    constructor() { }
    // 实现加法操作
    addNumbers(a, b) {
        return (0, mathUtils_1.add)(a, b);
    }
    // 实现减法操作
    subtractNumbers(a, b) {
        return (0, mathUtils_1.subtract)(a, b);
    }
}
exports.MathService = MathService;
// 也可以直接导出一些工具函数
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0)
        throw new Error('Cannot divide by zero');
    return a / b;
}
