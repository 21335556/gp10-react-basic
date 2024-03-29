//如果js对象想map遍历，可以利用Immutable的Seq高效实现。
// Seq只执行需要的工作，不会创建Immuntab L e缓存数组。任何数据可以通过toSeq( )转换为lasy Seq格式

const { Seq } = require('immutable');
const myObject = { a: 1, b: 2, c: 3 };
const seq = Seq(myObject).map(x => x * x);
const seqToObject = seq.toObject()
console.log(seq, seqToObject)
// { a: 1, b: 4, c: 9 }