function init() {}
console.log('🐻', Symbol() == Symbol());
console.log(
  '📚',
  Object.create(init.prototype) == Object.create(init.prototype)
);
