"use strict";var D=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var m=D(function(O,f){
var u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),h=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-clip-index/dist'),l=require('@stdlib/ndarray-base-stride/dist'),p=require('@stdlib/ndarray-base-offset/dist'),w=require('@stdlib/ndarray-base-data-buffer/dist'),k=require('@stdlib/blas-ext-base-zcopy-within/dist').ndarray;function z(e){var r,t,d,s,q,o,x,c,g,i,a,v;return a=e[0],v=e[4],i=h(a,0),r=n(u(e[1]),i),t=n(u(e[2]),i),d=n(u(e[3]),i),g=w(a),x=l(a,0),c=p(a),o=w(v),s=l(v,0),q=p(v),k(i,r,t,d,g,x,c,o,s,q),a}f.exports=z
});var I=m();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
