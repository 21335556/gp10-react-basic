// js对象转换为Immutable时， 属性都是String类型的。而Immutable . Map接受任何类型，所以get方法不建议使用

const { fromJS } = require('immutable');

const obj = { 1: "one" };
console.log(Object.keys(obj)); // [ "1" ]
console.log(obj["1"], obj[1]); // "one", "one"

const map = fromJS(obj);
console.log(map.get("1"), map.get(1)); // "one", undefined