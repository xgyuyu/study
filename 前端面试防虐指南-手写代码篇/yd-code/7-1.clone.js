function isObject(val) {
  return typeof val === 'object' && val !== null;
}
function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });
}

var obj1 = {
  a: 1,
  b: { a: 2 },
};
var obj2 = deepClone(obj1);
console.log(obj1);
