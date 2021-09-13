
/*
 * 初始化构造函数
 */
const MyQueue = function () {
    // 初始化两个栈
    this.inStack = [];
    this.outStack = [];
  };
  
  /**
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
  };
  
  /**
   * @return {number}
   */
  MyQueue.prototype.pop = function () {
    // 加入outStack为空，需要inStack 转移元素过来
    if (!this.outStack.length) {
      this.in2out();
    }
    // 为了达到逆序目的，我们只从stack2 里出栈元素
    return this.outStack.pop();
  };
  
  /**
   * @return {number}
   * 这个方法和pop的唯一区别就是没有将定位到的值出栈
   */
  MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
      this.in2out();
    }
  
    const outStackLen = this.outStack.length;
    return outStackLen && this.outStack[outStackLen - 1];
  };
  
  /**
   * @return {boolean}
   */
  MyQueue.prototype.empty = function () {
    // 若inStack 与outStack均为空，那么队列为空
    return this.inStack.length === 0 && this.outStack.length === 0;
  };
  
  /**
   * 定义一个inStack 到 outStack的方法
   * @return {void}
   */
  MyQueue.prototype.in2out = function () {
    // 当inStack 不为空的时候出栈
    while (this.inStack.length) {
      // 将inStack出栈的元素推入outStack
      this.outStack.push(this.inStack.pop());
    }
  };





  


  const MinStack = function () {
    this.stack = [];
    // 辅助栈
    this.minStack = [];
  };
  /**
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function (val) {
    this.stack.push(val);
    // 若入栈元素的值小于当前最小值，则推入辅助栈栈顶
    if (
      this.minStack.length === 0 ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function () {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值有效性
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function () {
    // 辅助栈的栈顶，存的就是目标中的最小值
    return this.minStack[this.minStack.length-1];
  };

// 示例
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   // --> 返回 -3
minStack.pop();
minStack.top();      // --> 返回 0
minStack.getMin();   // --> 返回 -2