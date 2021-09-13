// 带一个函数参数 和 该函数的部分参数
const partial =
  (f, ...args) =>
  (...moreArgs) =>
    f(...args, ...moreArgs);

const add3 = (a, b, c) => a + b + c;
// 偏应用 `2` 和 `3` 到 `add3` 给你一个单参数的函数
const fivePlus = partial(add3, 2, 3);
fivePlus(4);
//bind实现const
//add1More = add3.bind(null, 2, 3)
// (c) => 2 + 3 + c
