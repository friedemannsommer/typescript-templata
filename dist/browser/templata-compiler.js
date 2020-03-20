!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Templata=e():t.Templata=e()}(window,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var i=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),n=0;for(e=0;e<r;e++)for(var s=arguments[e],o=0,p=s.length;o<p;o++,n++)i[n]=s[o];return i};Object.defineProperty(e,"__esModule",{value:!0});var n,s=r(1),o=r(2),p=r(3),l=r(4);!function(t){t[t.FULL_MATCH=0]="FULL_MATCH"}(n||(n={}));var u=function(){function t(t,e,r,i){void 0===t&&(t={}),void 0===e&&(e={}),void 0===r&&(r={}),void 0===i&&(i={}),this.replaceExpressions={AFTER_HTML_TAG:/>\s+/g,BEFORE_HTML_TAG:/\s+</g,EMPTY_APPEND_BUFFER:/\s*\+\s*([\'\"]{1})\1/g,EMPTY_COMMENT_TAG:/<!--[\s\S]*?-->/g,EMPTY_LINES:/^(?:\s*?)$/gm,EMPTY_START_APPEND_BUFFER:null,EMPTY_START_BUFFER:null,NEW_LINE:/\r|\n|\t|\/\*[\s\S]*?\*\//g},this.matchExpressions={BLOCK_LIST:null},this.buffer={APPEND:"'+(",END:"';",POST_APPEND:")+'",START:null},this._setupImports(t),this._provider=i,this._helper=e,this._filter=r,this._listener={},this._setupRegularExpressions(),this._setupBuffer()}return t.prototype.registerImport=function(t,e){return this.hasImport(t)||(this._importNames.push(t),this._importValues.push(e)),this},t.prototype.hasImport=function(t){return this._importNames.indexOf(t)>=0},t.prototype.removeImport=function(t){var e=this._importNames.indexOf(t);return e>-1&&(this._importNames.splice(e,1),this._importValues.splice(e,1)),this},t.prototype.registerHelper=function(e,r){if(e.slice(0,t.settings.DELIMITER.CLOSING.length)===t.settings.DELIMITER.CLOSING)throw Error('Helper cannot start with "'+t.settings.DELIMITER.CLOSING+'"!');return this._helper[e]=r,this},t.prototype.hasHelper=function(t){return"function"==typeof this._helper[t]},t.prototype.removeHelper=function(t){return delete this._helper[t],this},t.prototype.registerFilter=function(t,e){return this._filter[t]=e,this},t.prototype.hasFilter=function(t){return"function"==typeof this._filter[t]},t.prototype.removeFilter=function(t){return delete this._filter[t],this},t.prototype.registerProvider=function(t,e){return this._provider[t]=e,this},t.prototype.hasProvider=function(t){return"function"==typeof this._provider[t]},t.prototype.removeProvider=function(t){return delete this._provider[t],this},t.prototype.on=function(t,e){return this._listener.hasOwnProperty(t)?this._listener[t].push(e):this._listener[t]=[e],this},t.prototype.off=function(t,e){if(!this._listener.hasOwnProperty(t))return this;for(var r=this._listener[t].length,i=-1;++i<r;)this._listener[t][i]===e&&(this._listener[t].splice(i,1),r=this._listener[t].length);return this},t.prototype.dispatch=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(this._listener.hasOwnProperty(t))for(var n=this._listener[t].length,s=-1;++s<n;)this._listener[t][s].apply(void 0,i([t,this],e))},t.prototype.callProvider=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return this._provider[t].apply(void 0,i([t],e))},t.prototype.initialize=function(t){return t(this),this},t.prototype.compile=function(t){if("string"!=typeof t)throw new Error('Expected parameter "template" to be typeof "string" but instead got "'+typeof t+'"');return this.dispatch("COMPILE_START"),t=s.default(t),this._createTemplateFunction(this._optimizeTemplate(this._concatTemplateParts(this._matchBlocks(t),t)))},t.prototype._createTemplateFunction=function(t){return this.dispatch("COMPILE_END"),new Function(this._importNames.join(","),"return "+t).apply(void 0,this._importValues)},t.prototype._optimizeTemplate=function(t){return this._optimizeFnSource(this._addFnBody(t.replace(this.replaceExpressions.EMPTY_COMMENT_TAG,"").replace(this.replaceExpressions.BEFORE_HTML_TAG,"<").replace(this.replaceExpressions.AFTER_HTML_TAG,">").replace(this.replaceExpressions.NEW_LINE,"")))},t.prototype._addFnBody=function(e){return"function anonymous("+t.settings.VARIABLE_NAME+"){"+t.settings.VARIABLE_NAME+" || ("+t.settings.VARIABLE_NAME+" = {});var "+t.settings.VARIABLE_PRINT+"='';"+this.buffer.START+e+this.buffer.END+"return "+t.settings.VARIABLE_PRINT+";}"},t.prototype._optimizeFnSource=function(t){return t.replace(this.replaceExpressions.EMPTY_START_APPEND_BUFFER,"$1+=").replace(this.replaceExpressions.EMPTY_APPEND_BUFFER,"").replace(this.replaceExpressions.EMPTY_START_BUFFER,"").replace(this.replaceExpressions.EMPTY_LINES,"")},t.prototype._concatTemplateParts=function(t,e){for(var r=t.length,i=null,n="",s=-1;++s<r;)n+=null!==i?e.slice(i.end,t[s].start)+t[s].content:e.slice(0,t[s].start)+t[s].content,i=t[s];return null!==i&&(n+=e.slice(i.end)),n},t.prototype._matchBlocks=function(t){var e,r=[];for(this.matchExpressions.BLOCK_LIST.lastIndex=0,e=this.matchExpressions.BLOCK_LIST.exec(t);null!==e;)r.push({content:this._parseBlock(e),end:e.index+e[n.FULL_MATCH].length,start:e.index}),e=this.matchExpressions.BLOCK_LIST.exec(t);return r},t.prototype._parseBlock=function(e){var r=e[n.FULL_MATCH].slice(t.settings.DELIMITER.OPENING_BLOCK.length,e[n.FULL_MATCH].length-t.settings.DELIMITER.CLOSING_BLOCK.length),i=this._getBlockProperties(r);return this._helper[i.OPERATOR]?i.FILTER.length>0?this._callFilterList(i.FILTER,this._callHelper(i)):this._callHelper(i):r},t.prototype._getBlockProperties=function(t){var e=this._getBlockOperator(t),r=this._isClosingBlock(t),i=this._isSelfClosingBlock(t,e,r),n=this._getBlockParameter(t,e,i);return{CLOSING:r,FILTER:this._getBlockFilter(n),OPERATOR:e,PARAMETER:this._removeBlockFilter(n),SELF_CLOSING:i}},t.prototype._getBlockOperator=function(e){var r=e.indexOf(t.settings.DELIMITER.SPACE,0),i=e.slice(0,t.settings.DELIMITER.CLOSING.length)===t.settings.DELIMITER.CLOSING,n=0,s=e.length;return i&&(n=t.settings.DELIMITER.CLOSING.length),r>0&&(s=r),e.slice(n,s)},t.prototype._isClosingBlock=function(e){return e.slice(0,t.settings.DELIMITER.CLOSING.length)===t.settings.DELIMITER.CLOSING},t.prototype._isSelfClosingBlock=function(e,r,i){return!i&&e.slice(-1*r.length-t.settings.DELIMITER.SPACE.length)===t.settings.DELIMITER.SPACE+r},t.prototype._getBlockParameter=function(e,r,i){var n=r.length+t.settings.DELIMITER.SPACE.length,s=i?e.length-(r.length+t.settings.DELIMITER.SPACE.length):e.length;return e.slice(n,s)},t.prototype._getBlockFilter=function(e){for(var r,i=[],n=t.settings.DELIMITER.SPACE+t.settings.DELIMITER.FILTER_SEPERATOR+t.settings.DELIMITER.SPACE,s=e.indexOf(n);s>0;)r=s,(s=e.indexOf(n,s+1))>0&&i.push(l.default(e.slice(r+n.length,s)));return void 0!==r&&r>-1&&i.push(l.default(e.slice(r+n.length))),i},t.prototype._removeBlockFilter=function(e){var r=t.settings.DELIMITER.SPACE+t.settings.DELIMITER.FILTER_SEPERATOR+t.settings.DELIMITER.SPACE,i=e.indexOf(r);return i>0?e.slice(0,i):e},t.prototype._callFilterList=function(t,e){for(var r=t.length,i=-1;++i<r;)e=this._callFilter(t[i],e);return e},t.prototype._callHelper=function(t){try{return this._helper[t.OPERATOR](t.OPERATOR,t.PARAMETER,t.SELF_CLOSING,t.CLOSING,this.buffer,this)}catch(t){return""}},t.prototype._callFilter=function(t,e){try{return this._filter[t](t,e,this.buffer,this)}catch(t){return e}},t.prototype._setupImports=function(t){this._importNames=o.default(t),this._importValues=Array(this._importNames.length);for(var e=this._importNames.length,r=-1;++r<e;)this._importValues[r]=t[this._importNames[r]]},t.prototype._setupRegularExpressions=function(){this.matchExpressions.BLOCK_LIST=new RegExp("__OPENING_BLOCK__.+?__CLOSING_BLOCK__".replace("__OPENING_BLOCK__",p.default(t.settings.DELIMITER.OPENING_BLOCK)).replace("__CLOSING_BLOCK__",p.default(t.settings.DELIMITER.CLOSING_BLOCK)),"g"),this.replaceExpressions.EMPTY_START_BUFFER=new RegExp("__VARIABLE_PRINT__\\s*?\\+=\\s*?([\\'\\\"]{1})\\1\\;".replace("__VARIABLE_PRINT__",p.default(t.settings.VARIABLE_PRINT)),"g"),this.replaceExpressions.EMPTY_START_APPEND_BUFFER=new RegExp("(__VARIABLE_PRINT__)\\s*?\\+\\=\\s*?([\\'\\\"]{1})\\2\\s*?\\+".replace("__VARIABLE_PRINT__",p.default(t.settings.VARIABLE_PRINT)),"g")},t.prototype._setupBuffer=function(){this.buffer.START=t.settings.VARIABLE_PRINT+"+='"},t.settings={DELIMITER:{CLOSING:"/",CLOSING_BLOCK:"}}",FILTER_SEPERATOR:"|",OPENING_BLOCK:"{{",SPACE:" "},VARIABLE_NAME:"local",VARIABLE_PRINT:"__print"},t}();e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/'|\\/g,"\\$&")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=[],r=["toString","toLocalString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(var i in t)t.hasOwnProperty(i)&&r.indexOf(i)<0&&e.push(i);return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=new RegExp("["+["-","[","]","/","{","}","(",")","*","+","?",".","\\","^","$","|","~","`","!","@","#"].join("\\")+"]","g");e.default=function(t){return t.replace(i,"\\$&")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/^\s+|\s+$/g,"")}}]).default}));
//# sourceMappingURL=templata-compiler.map