const { src, dest } = require('gulp');
function move () {
    return src('first/script.js').pipe(dest('second/'));
}
exports.move = move;