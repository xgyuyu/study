var regex = /yideng/g;
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));

function cloneReg(target, isDeep) {
  var regFlag = /\w%$/;
  var result = new target.constructor(target.source, regFlag.exec(target));
  if (isDeep) {
    result.lastIndex = 0;
  } else {
    result.lastIndex = target.lastIndex;
  }
}
var regex = /yideng/g;
var reg2 = cloneReg(regx, true);
console.log(reg2);
