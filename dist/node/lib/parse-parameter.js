"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_trim_1 = require("./string-trim");
function parseParameter(input, blockSeperator, seperator) {
    if (blockSeperator === void 0) { blockSeperator = ':'; }
    if (seperator === void 0) { seperator = ','; }
    var start = input.indexOf(blockSeperator);
    var end = input.indexOf(blockSeperator, start + 1);
    var parameter = input.slice(start + 1, end).split(seperator);
    var length = parameter.length;
    var index = -1;
    while (++index < length) {
        parameter[index] = string_trim_1.default(parameter[index]);
    }
    return parameter;
}
exports.default = parseParameter;
