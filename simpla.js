!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Simpla",n):e.Simpla=n()}(this,function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports,m),n.exports}function n(){N=!1,E.length?j=E.concat(j):O=-1,j.length&&t()}function t(){if(!N){var e=setTimeout(n);N=!0;for(var t=j.length;t;){for(E=j,j=[];++O<t;)E&&E[O].run();O=-1,t=j.length}E=null,N=!1,clearTimeout(e)}}function o(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];j.push(new r(e,n)),1!==j.length||N||setTimeout(t,0)}function r(e,n){this.fun=e,this.array=n}function i(){}function f(e){throw new Error("process.binding is not supported")}function u(){return"/"}function c(e){throw new Error("process.chdir is not supported")}function a(){return 0}function s(e){var n=.001*H.call(F),t=Math.floor(n),o=Math.floor(n%1*1e9);return e&&(t-=e[0],o-=e[1],o<0&&(t--,o+=1e9)),[t,o]}function l(){var e=new Date,n=e-U;return n/1e3}function d(e){return G(Object(e))}function p(e){var n=!1;if(null!=e&&"function"!=typeof e.toString)try{n=!!(e+"")}catch(t){}return n}function y(e){return!!e&&"object"==("undefined"==typeof e?"undefined":g["typeof"](e))}function b(e){if(!y(e)||Z.call(e)!=J||p(e))return!1;var n=d(e);if(null===n)return!0;var t=W.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&Q.call(t)==X}function h(e,n,t){function o(){p===d&&(p=d.slice())}function r(){return l}function i(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var n=!0;return o(),p.push(e),function(){if(n){n=!1,o();var t=p.indexOf(e);p.splice(t,1)}}}function f(e){if(!b(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,l=s(l,e)}finally{y=!1}for(var n=d=p,t=0;t<n.length;t++)n[t]();return e}function u(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,f({type:oe.INIT})}function c(){var e,n=i;return e={subscribe:function(e){function t(){e.next&&e.next(r())}if("object"!==("undefined"==typeof e?"undefined":g["typeof"](e)))throw new TypeError("Expected the observer to be an object.");t();var o=n(t);return{unsubscribe:o}}},e[te]=function(){return this},e}var a;if("function"==typeof n&&"undefined"==typeof t&&(t=n,n=void 0),"undefined"!=typeof t){if("function"!=typeof t)throw new Error("Expected the enhancer to be a function.");return t(h)(e,n)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,l=n,d=[],p=d,y=!1;return f({type:oe.INIT}),a={dispatch:f,subscribe:i,getState:r,replaceReducer:u},a[te]=c,a}function w(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(n){}}function v(){}var m="undefined"!=typeof window?window:"undefined"!=typeof global?global:this,g={};g["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},g.defineProperty=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},g.toConsumableArray=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)};var E,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},j=[],N=!1,O=-1;r.prototype.run=function(){this.fun.apply(null,this.array)};var S="browser",T="browser",A=!0,I={},D=[],k="",P={},R={},L={},z=i,C=i,M=i,V=i,Y=i,_=i,q=i,F=x.performance||{},H=F.now||F.mozNow||F.msNow||F.oNow||F.webkitNow||function(){return(new Date).getTime()},U=new Date,B={nextTick:o,title:S,browser:A,env:I,argv:D,version:k,versions:P,on:z,addListener:C,once:M,off:V,removeListener:Y,removeAllListeners:_,emit:q,binding:f,cwd:u,chdir:c,umask:a,hrtime:s,platform:T,release:R,config:L,uptime:l},G=Object.getPrototypeOf,J="[object Object]",K=Object.prototype,Q=Function.prototype.toString,W=K.hasOwnProperty,X=Q.call(Object),Z=K.toString,$=e(function(e){e.exports=function(e){var n,t=e.Symbol;return"function"==typeof t?t.observable?n=t.observable:(n=t("observable"),t.observable=n):n="@@observable",n}}),ee=$&&"object"===("undefined"==typeof $?"undefined":g["typeof"]($))&&"default"in $?$["default"]:$,ne=e(function(e,n,t){e.exports=ee(t||window||m)}),te=ne&&"object"===("undefined"==typeof ne?"undefined":g["typeof"](ne))&&"default"in ne?ne["default"]:ne,oe={INIT:"@@redux/INIT"};"production"!==B.env.NODE_ENV&&"string"==typeof v.name&&"isCrushed"!==v.name&&w("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");var re=function(e,n){return e},ie=(h(re),function(e){});return ie});