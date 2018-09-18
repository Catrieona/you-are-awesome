// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {return prop};
const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        enumerable: false,
        value: 'value'
    });
    return prop;
};
const createProtoMagicObject = () => {
   
    return Function;
};
    let count = 0   
const incrementor = () => {
    
    let incrementor = function () {
        count++;
        return incrementor;
    }
    incrementor.valueOf = function () {
        count++;
        return count;
    };
    return incrementor;
};
    let sum = 0;
const asyncIncrementor = () => {
    return new Promise(function (resolve, reject) {
        resolve(++sum);
    })
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;