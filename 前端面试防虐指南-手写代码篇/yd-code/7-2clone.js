const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (!isDeep) {
    return buffer.slice();
  } else {
    const length = buffer.length;
    const result = allocUnsafe
      ? allocUnsafe(length)
      : new buffer.constructor(length);
    return result;
  }
}

const buf = Buffer.from('laoyuan');
// const buf2 = buf;
const buf2 = cloneBuffer(buf, true);
buf2.write('nodejs');
buf2.write('22');
console.log('buf', buf.toString('utf-8'));
console.log('buf2', buf2.toString('utf-8'));
