const tc = require('../table-compress.js');


let reuslt = tc.compress(['a', 'b', 'c'], [{a: 'haha', b: 'bbb', c: 'ccc'}], true);

console.log('compress ContainHeader: ', reuslt)


console.log('decompress: ', JSON.stringify(tc.decompress(reuslt)));