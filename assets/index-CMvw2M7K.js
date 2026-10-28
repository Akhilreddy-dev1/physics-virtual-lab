(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var vc={exports:{}},Uo={},xc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function t_(){if(Ap)return dt;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(I,re,Ie){this.props=I,this.context=re,this.refs=A,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(I,re,Ie){this.props=I,this.context=re,this.refs=A,this.updater=Ie||S}var L=D.prototype=new g;L.constructor=D,T(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(I,re,Ie){var Q,de={},Ee=null,xe=null;if(re!=null)for(Q in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)G.call(re,Q)&&!F.hasOwnProperty(Q)&&(de[Q]=re[Q]);var we=arguments.length-2;if(we===1)de.children=Ie;else if(1<we){for(var Ne=Array(we),Qe=0;Qe<we;Qe++)Ne[Qe]=arguments[Qe+2];de.children=Ne}if(I&&I.defaultProps)for(Q in we=I.defaultProps,we)de[Q]===void 0&&(de[Q]=we[Q]);return{$$typeof:s,type:I,key:Ee,ref:xe,props:de,_owner:O.current}}function C(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function N(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return re[Ie]})}var ee=/\/+/g;function K(I,re){return typeof I=="object"&&I!==null&&I.key!=null?N(""+I.key):re.toString(36)}function le(I,re,Ie,Q,de){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,de=de(xe),I=Q===""?"."+K(xe,0):Q,P(de)?(Ie="",I!=null&&(Ie=I.replace(ee,"$&/")+"/"),le(de,re,Ie,"",function(Qe){return Qe})):de!=null&&(w(de)&&(de=C(de,Ie+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+I)),re.push(de)),1;if(xe=0,Q=Q===""?".":Q+":",P(I))for(var we=0;we<I.length;we++){Ee=I[we];var Ne=Q+K(Ee,we);xe+=le(Ee,re,Ie,Ne,de)}else if(Ne=v(I),typeof Ne=="function")for(I=Ne.call(I),we=0;!(Ee=I.next()).done;)Ee=Ee.value,Ne=Q+K(Ee,we++),xe+=le(Ee,re,Ie,Ne,de);else if(Ee==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(I,re,Ie){if(I==null)return I;var Q=[],de=0;return le(I,Q,"","",function(Ee){return re.call(Ie,Ee,de++)}),Q}function ae(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},z={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:fe,forEach:function(I,re,Ie){fe(I,function(){re.apply(this,arguments)},Ie)},count:function(I){var re=0;return fe(I,function(){re++}),re},toArray:function(I){return fe(I,function(re){return re})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=y,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,dt.act=oe,dt.cloneElement=function(I,re,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=T({},I.props),de=I.key,Ee=I.ref,xe=I._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=O.current),re.key!==void 0&&(de=""+re.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Ne in re)G.call(re,Ne)&&!F.hasOwnProperty(Ne)&&(Q[Ne]=re[Ne]===void 0&&we!==void 0?we[Ne]:re[Ne])}var Ne=arguments.length-2;if(Ne===1)Q.children=Ie;else if(1<Ne){we=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)we[Qe]=arguments[Qe+2];Q.children=we}return{$$typeof:s,type:I.type,key:de,ref:Ee,props:Q,_owner:xe}},dt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},dt.createElement=W,dt.createFactory=function(I){var re=W.bind(null,I);return re.type=I,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:d,render:I}},dt.isValidElement=w,dt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ae}},dt.memo=function(I,re){return{$$typeof:m,type:I,compare:re===void 0?null:re}},dt.startTransition=function(I){var re=z.transition;z.transition={};try{I()}finally{z.transition=re}},dt.unstable_act=oe,dt.useCallback=function(I,re){return ce.current.useCallback(I,re)},dt.useContext=function(I){return ce.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},dt.useEffect=function(I,re){return ce.current.useEffect(I,re)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(I,re,Ie){return ce.current.useImperativeHandle(I,re,Ie)},dt.useInsertionEffect=function(I,re){return ce.current.useInsertionEffect(I,re)},dt.useLayoutEffect=function(I,re){return ce.current.useLayoutEffect(I,re)},dt.useMemo=function(I,re){return ce.current.useMemo(I,re)},dt.useReducer=function(I,re,Ie){return ce.current.useReducer(I,re,Ie)},dt.useRef=function(I){return ce.current.useRef(I)},dt.useState=function(I){return ce.current.useState(I)},dt.useSyncExternalStore=function(I,re,Ie){return ce.current.useSyncExternalStore(I,re,Ie)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Cp;function Xf(){return Cp||(Cp=1,xc.exports=t_()),xc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function n_(){if(Rp)return Uo;Rp=1;var s=Xf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(x[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:d,key:v,ref:S,props:x,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=f,Uo.jsxs=f,Uo}var Pp;function i_(){return Pp||(Pp=1,vc.exports=n_()),vc.exports}var J=i_(),Xn=Xf(),tl={},yc={exports:{}},Nn={},Sc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function r_(){return bp||(bp=1,(function(s){function e(z,ue){var oe=z.length;z.push(ue);e:for(;0<oe;){var I=oe-1>>>1,re=z[I];if(0<a(re,ue))z[I]=ue,z[oe]=re,oe=I;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ue=z[0],oe=z.pop();if(oe!==ue){z[0]=oe;e:for(var I=0,re=z.length,Ie=re>>>1;I<Ie;){var Q=2*(I+1)-1,de=z[Q],Ee=Q+1,xe=z[Ee];if(0>a(de,oe))Ee<re&&0>a(xe,de)?(z[I]=xe,z[Ee]=oe,I=Ee):(z[I]=de,z[Q]=oe,I=Q);else if(Ee<re&&0>a(xe,oe))z[I]=xe,z[Ee]=oe,I=Ee;else break e}}return ue}function a(z,ue){var oe=z.sortIndex-ue.sortIndex;return oe!==0?oe:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var h=[],m=[],_=1,x=null,v=3,S=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=z)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function P(z){if(A=!1,L(z),!T)if(n(h)!==null)T=!0,ae(G);else{var ue=n(m);ue!==null&&ce(P,ue.startTime-z)}}function G(z,ue){T=!1,A&&(A=!1,g(W),W=-1),S=!0;var oe=v;try{for(L(ue),x=n(h);x!==null&&(!(x.expirationTime>ue)||z&&!N());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var re=I(x.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?x.callback=re:x===n(h)&&r(h),L(ue)}else r(h);x=n(h)}if(x!==null)var Ie=!0;else{var Q=n(m);Q!==null&&ce(P,Q.startTime-ue),Ie=!1}return Ie}finally{x=null,v=oe,S=!1}}var O=!1,F=null,W=-1,C=5,w=-1;function N(){return!(s.unstable_now()-w<C)}function ee(){if(F!==null){var z=s.unstable_now();w=z;var ue=!0;try{ue=F(!0,z)}finally{ue?K():(O=!1,F=null)}}else O=!1}var K;if(typeof D=="function")K=function(){D(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=ee,K=function(){fe.postMessage(null)}}else K=function(){y(ee,0)};function ae(z){F=z,O||(O=!0,K())}function ce(z,ue){W=y(function(){z(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(G))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var oe=v;v=ue;try{return z()}finally{v=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=v;v=z;try{return ue()}finally{v=oe}},s.unstable_scheduleCallback=function(z,ue,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,z={id:_++,callback:ue,priorityLevel:z,startTime:oe,expirationTime:re,sortIndex:-1},oe>I?(z.sortIndex=oe,e(m,z),n(h)===null&&z===n(m)&&(A?(g(W),W=-1):A=!0,ce(P,oe-I))):(z.sortIndex=re,e(h,z),T||S||(T=!0,ae(G))),z},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(z){var ue=v;return function(){var oe=v;v=ue;try{return z.apply(this,arguments)}finally{v=oe}}}})(Mc)),Mc}var Lp;function s_(){return Lp||(Lp=1,Sc.exports=r_()),Sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function o_(){if(Dp)return Nn;Dp=1;var s=Xf(),e=s_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return h.call(x,t)?!0:h.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function re(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function Q(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,U=p.length-1;1<=M&&0<=U&&c[M]!==p[U];)U--;for(;1<=M&&0<=U;M--,U--)if(c[M]!==p[U]){if(M!==1||U!==1)do if(M--,U--,0>U||c[M]!==p[U]){var k=`
`+c[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=U);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function de(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case C:return"Profiler";case W:return"StrictMode";case K:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case ee:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Qe(t))}function mt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Mn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){ht(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Rt(t,i,o){(i!=="number"||Dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function me(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function $e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=$e(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,se=null,pe=null;function Le(t){if(t=vo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ga(i),Ce(t.stateNode,t.type,i))}}function be(t){se?pe?pe.push(t):pe=[t]:se=t}function rt(){if(se){var t=se,i=pe;if(pe=se=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function It(t,i){return t(i)}function Kt(){}var yt=!1;function Pn(t,i,o){if(yt)return t(i,o);yt=!0;try{return It(t,i,o)}finally{yt=!1,(se!==null||pe!==null)&&(Kt(),rt())}}function En(t,i){var o=t.stateNode;if(o===null)return null;var l=ga(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{ts=!1}function Ei(t,i,o,l,c,p,M,U,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ve){this.onError(ve)}}var Ti=!1,Tr=null,wr=!1,Xi=null,$o={onError:function(t){Ti=!0,Tr=t}};function ns(t,i,o,l,c,p,M,U,k){Ti=!1,Tr=null,Ei.apply($o,arguments)}function Ko(t,i,o,l,c,p,M,U,k){if(ns.apply(this,arguments),Ti){if(Ti){var te=Tr;Ti=!1,Tr=null}else throw Error(n(198));wr||(wr=!0,Xi=te)}}function pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qo(t){if(pi(t)!==t)throw Error(n(188))}function Hl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return Qo(c),t;if(p===l)return Qo(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,U=c.child;U;){if(U===o){M=!0,o=c,l=p;break}if(U===l){M=!0,l=c,o=p;break}U=U.sibling}if(!M){for(U=p.child;U;){if(U===o){M=!0,o=p,l=c;break}if(U===l){M=!0,l=p,o=c;break}U=U.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Jo(t){return t=Hl(t),t!==null?ea(t):null}function ea(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ea(t);if(i!==null)return i;t=t.sibling}return null}var R=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,H=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,je=null,st=null;function Mt(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:qe,kt=Math.log,vt=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(kt(t)/vt|0)|0}var Gt=64,gt=4194304;function cn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ti(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var U=M&~c;U!==0?l=cn(U):(p&=M,p!==0&&(l=cn(p)))}else M=o&~c,M!==0?l=cn(M):p!==0&&(l=cn(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Et(i),c=1<<o,l|=t[o],i&=~c;return l}function Tn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-Et(p),U=1<<M,k=c[M];k===-1?((U&o)===0||(U&l)!==0)&&(c[M]=Tn(U,i)):k<=i&&(t.expiredLanes|=U),p&=~U}}function bt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wn(){var t=Gt;return Gt<<=1,(Gt&4194240)===0&&(Gt=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Et(i),t[i]=o}function pn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Et(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function Cr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Et(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var pt=0;function rd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sd,Vl,od,ad,ld,Gl=!1,ta=[],ji=null,Yi=null,qi=null,to=new Map,no=new Map,$i=[],Eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":to.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(i.pointerId)}}function io(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=vo(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Tg(t,i,o,l,c){switch(i){case"focusin":return ji=io(ji,t,i,o,l,c),!0;case"dragenter":return Yi=io(Yi,t,i,o,l,c),!0;case"mouseover":return qi=io(qi,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return to.set(p,io(to.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,no.set(p,io(no.get(p)||null,t,i,o,l,c)),!0}return!1}function cd(t){var i=Rr(t.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Zo(o),i!==null){t.blockedOn=i,ld(t.priority,function(){od(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Ct=l,o.target.dispatchEvent(l),Ct=null}else return i=vo(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function fd(t,i,o){na(t)&&o.delete(i)}function wg(){Gl=!1,ji!==null&&na(ji)&&(ji=null),Yi!==null&&na(Yi)&&(Yi=null),qi!==null&&na(qi)&&(qi=null),to.forEach(fd),no.forEach(fd)}function ro(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wg)))}function so(t){function i(c){return ro(c,t)}if(0<ta.length){ro(ta[0],t);for(var o=1;o<ta.length;o++){var l=ta[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&ro(ji,t),Yi!==null&&ro(Yi,t),qi!==null&&ro(qi,t),to.forEach(i),no.forEach(i),o=0;o<$i.length;o++)l=$i[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)cd(o),o.blockedOn===null&&$i.shift()}var is=P.ReactCurrentBatchConfig,ia=!0;function Ag(t,i,o,l){var c=pt,p=is.transition;is.transition=null;try{pt=1,Wl(t,i,o,l)}finally{pt=c,is.transition=p}}function Cg(t,i,o,l){var c=pt,p=is.transition;is.transition=null;try{pt=4,Wl(t,i,o,l)}finally{pt=c,is.transition=p}}function Wl(t,i,o,l){if(ia){var c=Xl(t,i,o,l);if(c===null)lu(t,i,l,ra,o),ud(t,l);else if(Tg(c,t,i,o,l))l.stopPropagation();else if(ud(t,l),i&4&&-1<Eg.indexOf(t)){for(;c!==null;){var p=vo(c);if(p!==null&&sd(p),p=Xl(t,i,o,l),p===null&&lu(t,i,l,ra,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else lu(t,i,l,null,o)}}var ra=null;function Xl(t,i,o,l){if(ra=null,t=X(l),t=Rr(t),t!==null)if(i=pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ra=t,null}function dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case Ue:return 4;case Oe:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Ki=null,jl=null,sa=null;function hd(){if(sa)return sa;var t,i=jl,o=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return sa=c.slice(t,1<l?1-l:void 0)}function oa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function pd(){return!1}function Bn(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?aa:pd,this.isPropagationStopped=pd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Bn(rs),oo=oe({},rs,{view:0,detail:0}),Rg=Bn(oo),ql,$l,ao,la=oe({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(ql=t.screenX-ao.screenX,$l=t.screenY-ao.screenY):$l=ql=0,ao=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),md=Bn(la),Pg=oe({},la,{dataTransfer:0}),bg=Bn(Pg),Lg=oe({},oo,{relatedTarget:0}),Kl=Bn(Lg),Dg=oe({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Bn(Dg),Ig=oe({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ng=Bn(Ig),Fg=oe({},rs,{data:0}),gd=Bn(Fg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Bg[t])?!!i[t]:!1}function Zl(){return zg}var Hg=oe({},oo,{key:function(t){if(t.key){var i=Og[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vg=Bn(Hg),Gg=oe({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Bn(Gg),Wg=oe({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Xg=Bn(Wg),jg=oe({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Bn(jg),qg=oe({},la,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Bn(qg),Kg=[9,13,27,32],Ql=d&&"CompositionEvent"in window,lo=null;d&&"documentMode"in document&&(lo=document.documentMode);var Zg=d&&"TextEvent"in window&&!lo,vd=d&&(!Ql||lo&&8<lo&&11>=lo),xd=" ",yd=!1;function Sd(t,i){switch(t){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Qg(t,i){switch(t){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(yd=!0,xd);case"textInput":return t=i.data,t===xd&&yd?null:t;default:return null}}function Jg(t,i){if(ss)return t==="compositionend"||!Ql&&Sd(t,i)?(t=hd(),sa=jl=Ki=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vd&&i.locale!=="ko"?null:i.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!e0[t.type]:i==="textarea"}function Td(t,i,o,l){be(l),i=ha(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var uo=null,co=null;function t0(t){Vd(t,0)}function ua(t){var i=cs(t);if(mt(i))return t}function n0(t,i){if(t==="change")return i}var wd=!1;if(d){var Jl;if(d){var eu="oninput"in document;if(!eu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),eu=typeof Ad.oninput=="function"}Jl=eu}else Jl=!1;wd=Jl&&(!document.documentMode||9<document.documentMode)}function Cd(){uo&&(uo.detachEvent("onpropertychange",Rd),co=uo=null)}function Rd(t){if(t.propertyName==="value"&&ua(co)){var i=[];Td(i,co,t,X(t)),Pn(t0,i)}}function i0(t,i,o){t==="focusin"?(Cd(),uo=i,co=o,uo.attachEvent("onpropertychange",Rd)):t==="focusout"&&Cd()}function r0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ua(co)}function s0(t,i){if(t==="click")return ua(i)}function o0(t,i){if(t==="input"||t==="change")return ua(i)}function a0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:a0;function fo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!ni(t[c],i[c]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,i){var o=Pd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Ld(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ld(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var t=window,i=Dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dt(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function l0(t){var i=Dd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ld(o.ownerDocument.documentElement,o)){if(l!==null&&tu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=bd(o,p);var M=bd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u0=d&&"documentMode"in document&&11>=document.documentMode,os=null,nu=null,ho=null,iu=!1;function Ud(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iu||os==null||os!==Dt(l)||(l=os,"selectionStart"in l&&tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=ha(nu,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=os)))}function ca(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},ru={},Id={};d&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function fa(t){if(ru[t])return ru[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Id)return ru[t]=i[o];return t}var Nd=fa("animationend"),Fd=fa("animationiteration"),Od=fa("animationstart"),kd=fa("transitionend"),Bd=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Bd.set(t,i),u(i,[t])}for(var su=0;su<zd.length;su++){var ou=zd[su],c0=ou.toLowerCase(),f0=ou[0].toUpperCase()+ou.slice(1);Zi(c0,"on"+f0)}Zi(Nd,"onAnimationEnd"),Zi(Fd,"onAnimationIteration"),Zi(Od,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(kd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Hd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ko(l,i,void 0,t),t.currentTarget=null}function Vd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],k=U.instance,te=U.currentTarget;if(U=U.listener,k!==p&&c.isPropagationStopped())break e;Hd(c,U,te),p=k}else for(M=0;M<l.length;M++){if(U=l[M],k=U.instance,te=U.currentTarget,U=U.listener,k!==p&&c.isPropagationStopped())break e;Hd(c,U,te),p=k}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Nt(t,i){var o=i[pu];o===void 0&&(o=i[pu]=new Set);var l=t+"__bubble";o.has(l)||(Gd(i,t,2,!1),o.add(l))}function au(t,i,o){var l=0;i&&(l|=4),Gd(o,t,l,i)}var da="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[da]){t[da]=!0,r.forEach(function(o){o!=="selectionchange"&&(d0.has(o)||au(o,!1,t),au(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[da]||(i[da]=!0,au("selectionchange",!1,i))}}function Gd(t,i,o,l){switch(dd(i)){case 1:var c=Ag;break;case 4:c=Cg;break;default:c=Wl}o=c.bind(null,i,o,t),c=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function lu(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===c||U.nodeType===8&&U.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;M=M.return}for(;U!==null;){if(M=Rr(U),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}U=U.parentNode}}l=l.return}Pn(function(){var te=p,ve=X(o),ye=[];e:{var ge=Bd.get(t);if(ge!==void 0){var De=Yl,He=t;switch(t){case"keypress":if(oa(o)===0)break e;case"keydown":case"keyup":De=Vg;break;case"focusin":He="focus",De=Kl;break;case"focusout":He="blur",De=Kl;break;case"beforeblur":case"afterblur":De=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Xg;break;case Nd:case Fd:case Od:De=Ug;break;case kd:De=Yg;break;case"scroll":De=Rg;break;case"wheel":De=$g;break;case"copy":case"cut":case"paste":De=Ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=_d}var Ve=(i&4)!==0,Yt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var V=te,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=En(V,q),Te!=null&&Ve.push(go(V,Te,$)))),Yt)break;V=V.return}0<Ve.length&&(ge=new De(ge,He,null,o,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Rr(He)||He[wi]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(He=o.relatedTarget||o.toElement,De=te,He=He?Rr(He):null,He!==null&&(Yt=pi(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(De=null,He=te),De!==He)){if(Ve=md,Te="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=_d,Te="onPointerLeave",q="onPointerEnter",V="pointer"),Yt=De==null?ge:cs(De),$=He==null?ge:cs(He),ge=new Ve(Te,V+"leave",De,o,ve),ge.target=Yt,ge.relatedTarget=$,Te=null,Rr(ve)===te&&(Ve=new Ve(q,V+"enter",He,o,ve),Ve.target=$,Ve.relatedTarget=Yt,Te=Ve),Yt=Te,De&&He)t:{for(Ve=De,q=He,V=0,$=Ve;$;$=ls($))V++;for($=0,Te=q;Te;Te=ls(Te))$++;for(;0<V-$;)Ve=ls(Ve),V--;for(;0<$-V;)q=ls(q),$--;for(;V--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ls(Ve),q=ls(q)}Ve=null}else Ve=null;De!==null&&Wd(ye,ge,De,Ve,!1),He!==null&&Yt!==null&&Wd(ye,Yt,He,Ve,!0)}}e:{if(ge=te?cs(te):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var We=n0;else if(Ed(ge))if(wd)We=o0;else{We=r0;var Ke=i0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=s0);if(We&&(We=We(t,te))){Td(ye,We,o,ve);break e}Ke&&Ke(t,ge,te),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ke=te?cs(te):window,t){case"focusin":(Ed(Ke)||Ke.contentEditable==="true")&&(os=Ke,nu=te,ho=null);break;case"focusout":ho=nu=os=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Ud(ye,o,ve);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Ud(ye,o,ve)}var Ze;if(Ql)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Sd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(vd&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Ze=hd()):(Ki=ve,jl="value"in Ki?Ki.value:Ki.textContent,ss=!0)),Ke=ha(te,nt),0<Ke.length&&(nt=new gd(nt,t,null,o,ve),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Md(o),Ze!==null&&(nt.data=Ze)))),(Ze=Zg?Qg(t,o):Jg(t,o))&&(te=ha(te,"onBeforeInput"),0<te.length&&(ve=new gd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:te}),ve.data=Ze))}Vd(ye,i)})}function go(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ha(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=En(t,o),p!=null&&l.unshift(go(t,p,c)),p=En(t,i),p!=null&&l.push(go(t,p,c))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wd(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var U=o,k=U.alternate,te=U.stateNode;if(k!==null&&k===l)break;U.tag===5&&te!==null&&(U=te,c?(k=En(o,p),k!=null&&M.unshift(go(o,k,U))):c||(k=En(o,p),k!=null&&M.push(go(o,k,U)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Xd(t){return(typeof t=="string"?t:""+t).replace(h0,`
`).replace(p0,"")}function pa(t,i,o){if(i=Xd(i),Xd(t)!==i&&o)throw Error(n(425))}function ma(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(_0)}:du;function _0(t){setTimeout(function(){throw t})}function hu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),so(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);so(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Yd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),mi="__reactFiber$"+us,_o="__reactProps$"+us,wi="__reactContainer$"+us,pu="__reactEvents$"+us,v0="__reactListeners$"+us,x0="__reactHandles$"+us;function Rr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Yd(t);t!==null;){if(o=t[mi])return o;t=Yd(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[mi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ga(t){return t[_o]||null}var mu=[],fs=-1;function Ji(t){return{current:t}}function Ft(t){0>fs||(t.current=mu[fs],mu[fs]=null,fs--)}function Ut(t,i){fs++,mu[fs]=t.current,t.current=i}var er={},mn=Ji(er),bn=Ji(!1),Pr=er;function ds(t,i){var o=t.type.contextTypes;if(!o)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Ln(t){return t=t.childContextTypes,t!=null}function _a(){Ft(bn),Ft(mn)}function qd(t,i,o){if(mn.current!==er)throw Error(n(168));Ut(mn,i),Ut(bn,o)}function $d(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return oe({},o,l)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Pr=mn.current,Ut(mn,t),Ut(bn,bn.current),!0}function Kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=$d(t,i,Pr),l.__reactInternalMemoizedMergedChildContext=t,Ft(bn),Ft(mn),Ut(mn,t)):Ft(bn),Ut(bn,o)}var Ai=null,xa=!1,gu=!1;function Zd(t){Ai===null?Ai=[t]:Ai.push(t)}function y0(t){xa=!0,Zd(t)}function tr(){if(!gu&&Ai!==null){gu=!0;var t=0,i=pt;try{var o=Ai;for(pt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,xa=!1}catch(c){throw Ai!==null&&(Ai=Ai.slice(t+1)),R(Re,tr),c}finally{pt=i,gu=!1}}return null}var hs=[],ps=0,ya=null,Sa=0,jn=[],Yn=0,br=null,Ci=1,Ri="";function Lr(t,i){hs[ps++]=Sa,hs[ps++]=ya,ya=t,Sa=i}function Qd(t,i,o){jn[Yn++]=Ci,jn[Yn++]=Ri,jn[Yn++]=br,br=t;var l=Ci;t=Ri;var c=32-Et(l)-1;l&=~(1<<c),o+=1;var p=32-Et(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ci=1<<32-Et(i)+c|o<<c|l,Ri=p+t}else Ci=1<<p|o<<c|l,Ri=t}function _u(t){t.return!==null&&(Lr(t,1),Qd(t,1,0))}function vu(t){for(;t===ya;)ya=hs[--ps],hs[ps]=null,Sa=hs[--ps],hs[ps]=null;for(;t===br;)br=jn[--Yn],jn[Yn]=null,Ri=jn[--Yn],jn[Yn]=null,Ci=jn[--Yn],jn[Yn]=null}var zn=null,Hn=null,Bt=!1,ii=null;function Jd(t,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Hn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,Hn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Bt){var i=Hn;if(i){var o=i;if(!eh(t,i)){if(xu(t))throw Error(n(418));i=Qi(o.nextSibling);var l=zn;i&&eh(t,i)?Jd(l,o):(t.flags=t.flags&-4097|2,Bt=!1,zn=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,zn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Ma(t){if(t!==zn)return!1;if(!Bt)return th(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Hn)){if(xu(t))throw nh(),Error(n(418));for(;i;)Jd(t,i),i=Qi(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=Qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=zn?Qi(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=Hn;t;)t=Qi(t.nextSibling)}function ms(){Hn=zn=null,Bt=!1}function Su(t){ii===null?ii=[t]:ii.push(t)}var S0=P.ReactCurrentBatchConfig;function xo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var U=c.refs;M===null?delete U[p]:U[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ea(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i(q,V){if(t){var $=q.deletions;$===null?(q.deletions=[V],q.flags|=16):$.push(V)}}function o(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function c(q,V){return q=ur(q,V),q.index=0,q.sibling=null,q}function p(q,V,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<V?(q.flags|=2,V):$):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function U(q,V,$,Te){return V===null||V.tag!==6?(V=dc($,q.mode,Te),V.return=q,V):(V=c(V,$),V.return=q,V)}function k(q,V,$,Te){var We=$.type;return We===F?ve(q,V,$.props.children,Te,$.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ae&&ih(We)===V.type)?(Te=c(V,$.props),Te.ref=xo(q,V,$),Te.return=q,Te):(Te=Ya($.type,$.key,$.props,null,q.mode,Te),Te.ref=xo(q,V,$),Te.return=q,Te)}function te(q,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=hc($,q.mode,Te),V.return=q,V):(V=c(V,$.children||[]),V.return=q,V)}function ve(q,V,$,Te,We){return V===null||V.tag!==7?(V=Br($,q.mode,Te,We),V.return=q,V):(V=c(V,$),V.return=q,V)}function ye(q,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=dc(""+V,q.mode,$),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return $=Ya(V.type,V.key,V.props,null,q.mode,$),$.ref=xo(q,null,V),$.return=q,$;case O:return V=hc(V,q.mode,$),V.return=q,V;case ae:var Te=V._init;return ye(q,Te(V._payload),$)}if(Xe(V)||ue(V))return V=Br(V,q.mode,$,null),V.return=q,V;Ea(q,V)}return null}function ge(q,V,$,Te){var We=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return We!==null?null:U(q,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===We?k(q,V,$,Te):null;case O:return $.key===We?te(q,V,$,Te):null;case ae:return We=$._init,ge(q,V,We($._payload),Te)}if(Xe($)||ue($))return We!==null?null:ve(q,V,$,Te,null);Ea(q,$)}return null}function De(q,V,$,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,U(V,q,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return q=q.get(Te.key===null?$:Te.key)||null,k(V,q,Te,We);case O:return q=q.get(Te.key===null?$:Te.key)||null,te(V,q,Te,We);case ae:var Ke=Te._init;return De(q,V,$,Ke(Te._payload),We)}if(Xe(Te)||ue(Te))return q=q.get($)||null,ve(V,q,Te,We,null);Ea(V,Te)}return null}function He(q,V,$,Te){for(var We=null,Ke=null,Ze=V,nt=V=0,an=null;Ze!==null&&nt<$.length;nt++){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var Tt=ge(q,Ze,$[nt],Te);if(Tt===null){Ze===null&&(Ze=an);break}t&&Ze&&Tt.alternate===null&&i(q,Ze),V=p(Tt,V,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt,Ze=an}if(nt===$.length)return o(q,Ze),Bt&&Lr(q,nt),We;if(Ze===null){for(;nt<$.length;nt++)Ze=ye(q,$[nt],Te),Ze!==null&&(V=p(Ze,V,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&Lr(q,nt),We}for(Ze=l(q,Ze);nt<$.length;nt++)an=De(Ze,q,nt,$[nt],Te),an!==null&&(t&&an.alternate!==null&&Ze.delete(an.key===null?nt:an.key),V=p(an,V,nt),Ke===null?We=an:Ke.sibling=an,Ke=an);return t&&Ze.forEach(function(cr){return i(q,cr)}),Bt&&Lr(q,nt),We}function Ve(q,V,$,Te){var We=ue($);if(typeof We!="function")throw Error(n(150));if($=We.call($),$==null)throw Error(n(151));for(var Ke=We=null,Ze=V,nt=V=0,an=null,Tt=$.next();Ze!==null&&!Tt.done;nt++,Tt=$.next()){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var cr=ge(q,Ze,Tt.value,Te);if(cr===null){Ze===null&&(Ze=an);break}t&&Ze&&cr.alternate===null&&i(q,Ze),V=p(cr,V,nt),Ke===null?We=cr:Ke.sibling=cr,Ke=cr,Ze=an}if(Tt.done)return o(q,Ze),Bt&&Lr(q,nt),We;if(Ze===null){for(;!Tt.done;nt++,Tt=$.next())Tt=ye(q,Tt.value,Te),Tt!==null&&(V=p(Tt,V,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt);return Bt&&Lr(q,nt),We}for(Ze=l(q,Ze);!Tt.done;nt++,Tt=$.next())Tt=De(Ze,q,nt,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&Ze.delete(Tt.key===null?nt:Tt.key),V=p(Tt,V,nt),Ke===null?We=Tt:Ke.sibling=Tt,Ke=Tt);return t&&Ze.forEach(function(e_){return i(q,e_)}),Bt&&Lr(q,nt),We}function Yt(q,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var We=$.key,Ke=V;Ke!==null;){if(Ke.key===We){if(We=$.type,We===F){if(Ke.tag===7){o(q,Ke.sibling),V=c(Ke,$.props.children),V.return=q,q=V;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ae&&ih(We)===Ke.type){o(q,Ke.sibling),V=c(Ke,$.props),V.ref=xo(q,Ke,$),V.return=q,q=V;break e}o(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}$.type===F?(V=Br($.props.children,q.mode,Te,$.key),V.return=q,q=V):(Te=Ya($.type,$.key,$.props,null,q.mode,Te),Te.ref=xo(q,V,$),Te.return=q,q=Te)}return M(q);case O:e:{for(Ke=$.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){o(q,V.sibling),V=c(V,$.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=hc($,q.mode,Te),V.return=q,q=V}return M(q);case ae:return Ke=$._init,Yt(q,V,Ke($._payload),Te)}if(Xe($))return He(q,V,$,Te);if(ue($))return Ve(q,V,$,Te);Ea(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(o(q,V.sibling),V=c(V,$),V.return=q,q=V):(o(q,V),V=dc($,q.mode,Te),V.return=q,q=V),M(q)):o(q,V)}return Yt}var gs=rh(!0),sh=rh(!1),Ta=Ji(null),wa=null,_s=null,Mu=null;function Eu(){Mu=_s=wa=null}function Tu(t){var i=Ta.current;Ft(Ta),t._currentValue=i}function wu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){wa=t,Mu=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(wa===null)throw Error(n(308));_s=t,wa.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Dr=null;function Au(t){Dr===null?Dr=[t]:Dr.push(t)}function oh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Au(i)):(o.next=c.next,c.next=o),i.interleaved=o,Pi(t,l)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var nr=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Pi(t,o)}return c=l.interleaved,c===null?(i.next=i,Au(l)):(i.next=c.next,c.next=i),l.interleaved=i,Pi(t,o)}function Aa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Cr(t,o)}}function lh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ca(t,i,o,l){var c=t.updateQueue;nr=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var k=U,te=k.next;k.next=null,M===null?p=te:M.next=te,M=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=te:U.next=te,ve.lastBaseUpdate=k))}if(p!==null){var ye=c.baseState;M=0,ve=te=k=null,U=p;do{var ge=U.lane,De=U.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=t,Ve=U;switch(ge=i,De=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){ye=He.call(De,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(De,ye,ge):He,ge==null)break e;ye=oe({},ye,ge);break e;case 2:nr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[U]:ge.push(U))}else De={eventTime:De,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(te=ve=De,k=ye):ve=ve.next=De,M|=ge;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(k=ye),c.baseState=k,c.firstBaseUpdate=te,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=ye}}function uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var yo={},gi=Ji(yo),So=Ji(yo),Mo=Ji(yo);function Ur(t){if(t===yo)throw Error(n(174));return t}function Ru(t,i){switch(Ut(Mo,i),Ut(So,t),Ut(gi,yo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Ft(gi),Ut(gi,i)}function xs(){Ft(gi),Ft(So),Ft(Mo)}function ch(t){Ur(Mo.current);var i=Ur(gi.current),o=Ge(i,t.type);i!==o&&(Ut(So,t),Ut(gi,o))}function Pu(t){So.current===t&&(Ft(gi),Ft(So))}var zt=Ji(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Lu(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Pa=P.ReactCurrentDispatcher,Du=P.ReactCurrentBatchConfig,Ir=0,Ht=null,Zt=null,sn=null,ba=!1,Eo=!1,To=0,M0=0;function gn(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ni(t[o],i[o]))return!1;return!0}function Iu(t,i,o,l,c,p){if(Ir=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Pa.current=t===null||t.memoizedState===null?A0:C0,t=o(l,c),Eo){p=0;do{if(Eo=!1,To=0,25<=p)throw Error(n(301));p+=1,sn=Zt=null,i.updateQueue=null,Pa.current=R0,t=o(l,c)}while(Eo)}if(Pa.current=Ua,i=Zt!==null&&Zt.next!==null,Ir=0,sn=Zt=Ht=null,ba=!1,i)throw Error(n(300));return t}function Nu(){var t=To!==0;return To=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=t:sn=sn.next=t,sn}function $n(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Ht.memoizedState=sn=t:sn=sn.next=t}return sn}function wo(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=$n(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Zt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var U=M=null,k=null,te=p;do{var ve=te.lane;if((Ir&ve)===ve)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(U=k=ye,M=l):k=k.next=ye,Ht.lanes|=ve,Nr|=ve}te=te.next}while(te!==null&&te!==p);k===null?M=l:k.next=U,ni(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,Ht.lanes|=p,Nr|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ou(t){var i=$n(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);ni(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function fh(){}function dh(t,i){var o=Ht,l=$n(),c=i(),p=!ni(l.memoizedState,c);if(p&&(l.memoizedState=c,Dn=!0),l=l.queue,ku(mh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Ao(9,ph.bind(null,o,l,c,i),void 0,null),on===null)throw Error(n(349));(Ir&30)!==0||hh(o,i,c)}return c}function hh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ph(t,i,o,l){i.value=o,i.getSnapshot=l,gh(i)&&_h(t)}function mh(t,i,o){return o(function(){gh(i)&&_h(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ni(t,o)}catch{return!0}}function _h(t){var i=Pi(t,1);i!==null&&ai(i,t,1,-1)}function vh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},i.queue=t,t=t.dispatch=w0.bind(null,Ht,t),[i.memoizedState,t]}function Ao(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function xh(){return $n().memoizedState}function La(t,i,o,l){var c=_i();Ht.flags|=t,c.memoizedState=Ao(1|i,o,void 0,l===void 0?null:l)}function Da(t,i,o,l){var c=$n();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,l!==null&&Uu(l,M.deps)){c.memoizedState=Ao(i,o,p,l);return}}Ht.flags|=t,c.memoizedState=Ao(1|i,o,p,l)}function yh(t,i){return La(8390656,8,t,i)}function ku(t,i){return Da(2048,8,t,i)}function Sh(t,i){return Da(4,2,t,i)}function Mh(t,i){return Da(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,o){return o=o!=null?o.concat([t]):null,Da(4,4,Eh.bind(null,i,t),o)}function Bu(){}function wh(t,i){var o=$n();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ah(t,i){var o=$n();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ch(t,i,o){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(ni(o,i)||(o=wn(),Ht.lanes|=o,Nr|=o,t.baseState=!0),i)}function E0(t,i){var o=pt;pt=o!==0&&4>o?o:4,t(!0);var l=Du.transition;Du.transition={};try{t(!1),i()}finally{pt=o,Du.transition=l}}function Rh(){return $n().memoizedState}function T0(t,i,o){var l=ar(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))bh(i,o);else if(o=oh(t,i,o,l),o!==null){var c=Cn();ai(o,t,l,c),Lh(o,i,l)}}function w0(t,i,o){var l=ar(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))bh(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,U=p(M,o);if(c.hasEagerState=!0,c.eagerState=U,ni(U,M)){var k=i.interleaved;k===null?(c.next=c,Au(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}o=oh(t,i,c,l),o!==null&&(c=Cn(),ai(o,t,l,c),Lh(o,i,l))}}function Ph(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function bh(t,i){Eo=ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Cr(t,o)}}var Ua={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},A0={readContext:qn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:yh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,La(4194308,4,Eh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return La(4194308,4,t,i)},useInsertionEffect:function(t,i){return La(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=T0.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:vh,useDebugValue:Bu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=vh(!1),i=t[0];return t=E0.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ht,c=_i();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));(Ir&30)!==0||hh(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,yh(mh.bind(null,l,p,t),[t]),l.flags|=2048,Ao(9,ph.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=on.identifierPrefix;if(Bt){var o=Ri,l=Ci;o=(l&~(1<<32-Et(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=M0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},C0={readContext:qn,useCallback:wh,useContext:qn,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Fu,useRef:xh,useState:function(){return Fu(wo)},useDebugValue:Bu,useDeferredValue:function(t){var i=$n();return Ch(i,Zt.memoizedState,t)},useTransition:function(){var t=Fu(wo)[0],i=$n().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1},R0={readContext:qn,useCallback:wh,useContext:qn,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Ou,useRef:xh,useState:function(){return Ou(wo)},useDebugValue:Bu,useDeferredValue:function(t){var i=$n();return Zt===null?i.memoizedState=t:Ch(i,Zt.memoizedState,t)},useTransition:function(){var t=Ou(wo)[0],i=$n().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ia={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Cn(),c=ar(t),p=bi(l,c);p.payload=i,o!=null&&(p.callback=o),i=ir(t,p,c),i!==null&&(ai(i,t,c,l),Aa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Cn(),c=ar(t),p=bi(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=ir(t,p,c),i!==null&&(ai(i,t,c,l),Aa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Cn(),l=ar(t),c=bi(o,l);c.tag=2,i!=null&&(c.callback=i),i=ir(t,c,l),i!==null&&(ai(i,t,l,o),Aa(i,t,l))}};function Dh(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!fo(o,l)||!fo(c,p):!0}function Uh(t,i,o){var l=!1,c=er,p=i.contextType;return typeof p=="object"&&p!==null?p=qn(p):(c=Ln(i)?Pr:mn.current,l=i.contextTypes,p=(l=l!=null)?ds(t,c):er),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ia,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ih(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ia.enqueueReplaceState(i,i.state,null)}function Hu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Cu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=qn(p):(p=Ln(i)?Pr:mn.current,c.context=ds(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zu(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ia.enqueueReplaceState(c,c.state,null),Ca(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",l=i;do o+=de(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function Vu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ha||(Ha=!0,rc=l),Gu(t,i)},o}function Fh(t,i,o){o=bi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Gu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Gu(t,i),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Oh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new P0;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=G0.bind(null,t,i,o),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var b0=P.ReactCurrentOwner,Dn=!1;function An(t,i,o,l){i.child=t===null?sh(i,null,o,l):gs(i,t.child,o,l)}function zh(t,i,o,l,c){o=o.render;var p=i.ref;return vs(i,c),l=Iu(t,i,o,l,p,c),o=Nu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Bt&&o&&_u(i),i.flags|=1,An(t,i,l,c),i.child)}function Hh(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!fc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Vh(t,i,p,l,c)):(t=Ya(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(M,l)&&t.ref===i.ref)return Li(t,i,c)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(fo(p,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Li(t,i,c)}return Wu(t,i,o,l,c)}function Gh(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ms,Vn),Vn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ms,Vn),Vn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ut(Ms,Vn),Vn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Ut(Ms,Vn),Vn|=l;return An(t,i,c,o),i.child}function Wh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,o,l,c){var p=Ln(o)?Pr:mn.current;return p=ds(i,p),vs(i,c),o=Iu(t,i,o,l,p,c),l=Nu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Bt&&l&&_u(i),i.flags|=1,An(t,i,o,c),i.child)}function Xh(t,i,o,l,c){if(Ln(o)){var p=!0;va(i)}else p=!1;if(vs(i,c),i.stateNode===null)Fa(t,i),Uh(i,o,l),Hu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var k=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=qn(te):(te=Ln(o)?Pr:mn.current,te=ds(i,te));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||k!==te)&&Ih(i,M,l,te),nr=!1;var ge=i.memoizedState;M.state=ge,Ca(i,l,M,c),k=i.memoizedState,U!==l||ge!==k||bn.current||nr?(typeof ve=="function"&&(zu(i,o,ve,l),k=i.memoizedState),(U=nr||Dh(i,o,U,l,ge,k,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=te,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ah(t,i),U=i.memoizedProps,te=i.type===i.elementType?U:ri(i.type,U),M.props=te,ye=i.pendingProps,ge=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=qn(k):(k=Ln(o)?Pr:mn.current,k=ds(i,k));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ge!==k)&&Ih(i,M,l,k),nr=!1,ge=i.memoizedState,M.state=ge,Ca(i,l,M,c);var He=i.memoizedState;U!==ye||ge!==He||bn.current||nr?(typeof De=="function"&&(zu(i,o,De,l),He=i.memoizedState),(te=nr||Dh(i,o,te,l,ge,He,k)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=k,l=te):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Xu(t,i,o,l,p,c)}function Xu(t,i,o,l,c,p){Wh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Kd(i,o,!1),Li(t,i,p);l=i.stateNode,b0.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,U,p)):An(t,i,U,p),i.memoizedState=l.state,c&&Kd(i,o,!0),i.child}function jh(t){var i=t.stateNode;i.pendingContext?qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&qd(t,i.context,!1),Ru(t,i.containerInfo)}function Yh(t,i,o,l,c){return ms(),Su(c),i.flags|=256,An(t,i,o,l),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function qh(t,i,o){var l=i.pendingProps,c=zt.current,p=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(c&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ut(zt,c&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=qa(M,l,0,null),t=Br(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Yu(o),i.memoizedState=ju,t):qu(i,M));if(c=t.memoizedState,c!==null&&(U=c.dehydrated,U!==null))return L0(t,i,M,l,U,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,U=c.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=ur(c,k),l.subtreeFlags=c.subtreeFlags&14680064),U!==null?p=ur(U,p):(p=Br(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Yu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=ju,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function qu(t,i){return i=qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Na(t,i,o,l){return l!==null&&Su(l),gs(i,t.child,null,o),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function L0(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Vu(Error(n(422))),Na(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=qa({mode:"visible",children:l.children},c,0,null),p=Br(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=Yu(M),i.memoizedState=ju,p);if((i.mode&1)===0)return Na(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var U=l.dgst;return l=U,p=Error(n(419)),l=Vu(p,l,void 0),Na(t,i,M,l)}if(U=(M&t.childLanes)!==0,Dn||U){if(l=on,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Pi(t,c),ai(l,t,c,-1))}return cc(),l=Vu(Error(n(421))),Na(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=W0.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,Hn=Qi(c.nextSibling),zn=i,Bt=!0,ii=null,t!==null&&(jn[Yn++]=Ci,jn[Yn++]=Ri,jn[Yn++]=br,Ci=t.id,Ri=t.overflow,br=i),i=qu(i,l.children),i.flags|=4096,i)}function $h(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wu(t.return,i,o)}function $u(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function Kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(An(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,o,i);else if(t.tag===19)$h(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),$u(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ra(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}$u(i,!0,o,null,p);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function D0(t,i,o){switch(i.tag){case 3:jh(i),ms();break;case 5:ch(i);break;case 1:Ln(i.type)&&va(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ut(Ta,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?qh(t,i,o):(Ut(zt,zt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Ut(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ut(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,o)}return Li(t,i,o)}var Zh,Ku,Qh,Jh;Zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},Qh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Ur(gi.current);var p=null;switch(o){case"input":c=B(t,c),l=B(t,l),p=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":c=E(t,c),l=E(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ma)}ft(o,l);var M;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var U=c[te];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in l){var k=l[te];if(U=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&k!==U&&(k!=null||U!=null))if(te==="style")if(U){for(M in U)!U.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&U[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(p=p||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Nt("scroll",t),p||U===k||(p=[])):(p=p||[]).push(te,k))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},Jh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Co(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function U0(t,i,o){var l=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Ln(i.type)&&_a(),_n(i),null;case 3:return l=i.stateNode,xs(),Ft(bn),Ft(mn),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(ac(ii),ii=null))),Ku(t,i),_n(i),null;case 5:Pu(i);var c=Ur(Mo.current);if(o=i.type,t!==null&&i.stateNode!=null)Qh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Ur(gi.current),Ma(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[mi]=i,l[_o]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<po.length;c++)Nt(po[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":Mn(l,p),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",l);break;case"textarea":Z(l,p),Nt("invalid",l)}ft(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var U=p[M];M==="children"?typeof U=="string"?l.textContent!==U&&(p.suppressHydrationWarning!==!0&&pa(l.textContent,U,t),c=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&pa(l.textContent,U,t),c=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":Pt(l),Ye(l,p,!0);break;case"textarea":Pt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ma)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[_o]=l,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<po.length;c++)Nt(po[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":Mn(t,l),c=B(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Nt("invalid",t);break;default:c=l}ft(o,c),U=c;for(p in U)if(U.hasOwnProperty(p)){var k=U[p];p==="style"?Je(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ut(t,k):typeof k=="number"&&ut(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Nt("scroll",t):k!=null&&L(t,p,k,M))}switch(o){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?b(t,!!l.multiple,p,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ma)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ur(Mo.current),Ur(gi.current),Ma(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(p=l.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:pa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return _n(i),null;case 13:if(Ft(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),ms(),i.flags|=98560,p=!1;else if(p=Ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),p=!1}else ii!==null&&(ac(ii),ii=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Qt===0&&(Qt=3):cc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return xs(),Ku(t,i),t===null&&mo(i.stateNode.containerInfo),_n(i),null;case 10:return Tu(i.type._context),_n(i),null;case 17:return Ln(i.type)&&_a(),_n(i),null;case 19:if(Ft(zt),p=i.memoizedState,p===null)return _n(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Co(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,Co(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ut(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&H()>Es&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ra(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return _n(i),null}else 2*H()-p.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=H(),i.sibling=null,o=zt.current,Ut(zt,l?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return uc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function I0(t,i){switch(vu(i),i.tag){case 1:return Ln(i.type)&&_a(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Ft(bn),Ft(mn),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pu(i),null;case 13:if(Ft(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(zt),null;case 4:return xs(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Oa=!1,vn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Wt(t,i,l)}else o.current=null}function Zu(t,i,o){try{o()}catch(l){Wt(t,i,l)}}var ep=!1;function F0(t,i){if(uu=ia,t=Dd(),tu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,U=-1,k=-1,te=0,ve=0,ye=t,ge=null;t:for(;;){for(var De;ye!==o||c!==0&&ye.nodeType!==3||(U=M+c),ye!==p||l!==0&&ye.nodeType!==3||(k=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===o&&++te===c&&(U=M),ge===p&&++ve===l&&(k=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}o=U===-1||k===-1?null:{start:U,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(cu={focusedElem:t,selectionRange:o},ia=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Yt=He.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ri(i.type,Ve),Yt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Wt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return He=ep,ep=!1,He}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&Zu(i,o,p)}c=c.next}while(c!==l)}}function ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Qu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[_o],delete i[pu],delete i[v0],delete i[x0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ma));else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}function ec(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,o),t=t.sibling;t!==null;)ec(t,i,o),t=t.sibling}var fn=null,si=!1;function rr(t,i,o){for(o=o.child;o!==null;)rp(t,i,o),o=o.sibling}function rp(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,o)}catch{}switch(o.tag){case 5:vn||Ss(o,i);case 6:var l=fn,c=si;fn=null,rr(t,i,o),fn=l,si=c,fn!==null&&(si?(t=fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(si?(t=fn,o=o.stateNode,t.nodeType===8?hu(t.parentNode,o):t.nodeType===1&&hu(t,o),so(t)):hu(fn,o.stateNode));break;case 4:l=fn,c=si,fn=o.stateNode.containerInfo,si=!0,rr(t,i,o),fn=l,si=c;break;case 0:case 11:case 14:case 15:if(!vn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Zu(o,i,M),c=c.next}while(c!==l)}rr(t,i,o);break;case 1:if(!vn&&(Ss(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Wt(o,i,U)}rr(t,i,o);break;case 21:rr(t,i,o);break;case 22:o.mode&1?(vn=(l=vn)||o.memoizedState!==null,rr(t,i,o),vn=l):rr(t,i,o);break;default:rr(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new N0),i.forEach(function(l){var c=X0.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function oi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:fn=U.stateNode,si=!1;break e;case 3:fn=U.stateNode.containerInfo,si=!0;break e;case 4:fn=U.stateNode.containerInfo,si=!0;break e}U=U.return}if(fn===null)throw Error(n(160));rp(p,M,c),fn=null,si=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(te){Wt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),vi(t),l&4){try{Ro(3,t,t.return),ka(3,t)}catch(Ve){Wt(t,t.return,Ve)}try{Ro(5,t,t.return)}catch(Ve){Wt(t,t.return,Ve)}}break;case 1:oi(i,t),vi(t),l&512&&o!==null&&Ss(o,o.return);break;case 5:if(oi(i,t),vi(t),l&512&&o!==null&&Ss(o,o.return),t.flags&32){var c=t.stateNode;try{ut(c,"")}catch(Ve){Wt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,U=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&ht(c,p),it(U,M);var te=it(U,p);for(M=0;M<k.length;M+=2){var ve=k[M],ye=k[M+1];ve==="style"?Je(c,ye):ve==="dangerouslySetInnerHTML"?Fe(c,ye):ve==="children"?ut(c,ye):L(c,ve,ye,te)}switch(U){case"input":ct(c,p);break;case"textarea":me(c,p);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?b(c,!!p.multiple,De,!1):ge!==!!p.multiple&&(p.defaultValue!=null?b(c,!!p.multiple,p.defaultValue,!0):b(c,!!p.multiple,p.multiple?[]:"",!1))}c[_o]=p}catch(Ve){Wt(t,t.return,Ve)}}break;case 6:if(oi(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(Ve){Wt(t,t.return,Ve)}}break;case 3:if(oi(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(Ve){Wt(t,t.return,Ve)}break;case 4:oi(i,t),vi(t);break;case 13:oi(i,t),vi(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(ic=H())),l&4&&sp(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(vn=(te=vn)||ve,oi(i,t),vn=te):oi(i,t),vi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ve&&(t.mode&1)!==0)for(ke=t,ve=t.child;ve!==null;){for(ye=ke=ve;ke!==null;){switch(ge=ke,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ro(4,ge,ge.return);break;case 1:Ss(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Wt(l,o,Ve)}}break;case 5:Ss(ge,ge.return);break;case 22:if(ge.memoizedState!==null){up(ye);continue}}De!==null?(De.return=ge,ke=De):up(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{c=ye.stateNode,te?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=ye.stateNode,k=ye.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=$e("display",M))}catch(Ve){Wt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ve){Wt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,t),vi(t),l&4&&sp(t);break;case 21:break;default:oi(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ut(c,""),l.flags&=-33);var p=ip(t);ec(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,U=ip(t);Ju(t,U,M);break;default:throw Error(n(161))}}catch(k){Wt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O0(t,i,o){ke=t,ap(t)}function ap(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var c=ke,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Oa;if(!M){var U=c.alternate,k=U!==null&&U.memoizedState!==null||vn;U=Oa;var te=vn;if(Oa=M,(vn=k)&&!te)for(ke=c;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?cp(c):k!==null?(k.return=M,ke=k):cp(c);for(;p!==null;)ke=p,ap(p),p=p.sibling;ke=c,Oa=U,vn=te}lp(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ke=p):lp(t)}}function lp(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||ka(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!vn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&uh(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uh(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&so(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&Qu(i)}catch(ge){Wt(i,i.return,ge)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function up(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function cp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ka(4,i)}catch(k){Wt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){Wt(i,c,k)}}var p=i.return;try{Qu(i)}catch(k){Wt(i,p,k)}break;case 5:var M=i.return;try{Qu(i)}catch(k){Wt(i,M,k)}}}catch(k){Wt(i,i.return,k)}if(i===t){ke=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ke=U;break}ke=i.return}}var k0=Math.ceil,Ba=P.ReactCurrentDispatcher,tc=P.ReactCurrentOwner,Kn=P.ReactCurrentBatchConfig,St=0,on=null,qt=null,dn=0,Vn=0,Ms=Ji(0),Qt=0,Po=null,Nr=0,za=0,nc=0,bo=null,Un=null,ic=0,Es=1/0,Di=null,Ha=!1,rc=null,sr=null,Va=!1,or=null,Ga=0,Lo=0,sc=null,Wa=-1,Xa=0;function Cn(){return(St&6)!==0?H():Wa!==-1?Wa:Wa=H()}function ar(t){return(t.mode&1)===0?1:(St&2)!==0&&dn!==0?dn&-dn:S0.transition!==null?(Xa===0&&(Xa=wn()),Xa):(t=pt,t!==0||(t=window.event,t=t===void 0?16:dd(t.type)),t)}function ai(t,i,o,l){if(50<Lo)throw Lo=0,sc=null,Error(n(185));jt(t,o,l),((St&2)===0||t!==on)&&(t===on&&((St&2)===0&&(za|=o),Qt===4&&lr(t,dn)),In(t,l),o===1&&St===0&&(i.mode&1)===0&&(Es=H()+500,xa&&tr()))}function In(t,i){var o=t.callbackNode;Ar(t,i);var l=ti(t,t===on?dn:0);if(l===0)o!==null&&j(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&j(o),i===1)t.tag===0?y0(dp.bind(null,t)):Zd(dp.bind(null,t)),g0(function(){(St&6)===0&&tr()}),o=null;else{switch(rd(l)){case 1:o=Re;break;case 4:o=Ue;break;case 16:o=Oe;break;case 536870912:o=tt;break;default:o=Oe}o=yp(o,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function fp(t,i){if(Wa=-1,Xa=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var l=ti(t,t===on?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ja(t,l);else{i=l;var c=St;St|=2;var p=pp();(on!==t||dn!==i)&&(Di=null,Es=H()+500,Or(t,i));do try{H0();break}catch(U){hp(t,U)}while(!0);Eu(),Ba.current=p,St=c,qt!==null?i=0:(on=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(c=bt(t),c!==0&&(l=c,i=oc(t,c))),i===1)throw o=Po,Or(t,0),lr(t,l),In(t,H()),o;if(i===6)lr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!B0(c)&&(i=ja(t,l),i===2&&(p=bt(t),p!==0&&(l=p,i=oc(t,p))),i===1))throw o=Po,Or(t,0),lr(t,l),In(t,H()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Un,Di);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=ic+500-H(),10<i)){if(ti(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Cn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=du(kr.bind(null,t,Un,Di),i);break}kr(t,Un,Di);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Et(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=H()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*k0(l/1960))-l,10<l){t.timeoutHandle=du(kr.bind(null,t,Un,Di),l);break}kr(t,Un,Di);break;case 5:kr(t,Un,Di);break;default:throw Error(n(329))}}}return In(t,H()),t.callbackNode===o?fp.bind(null,t):null}function oc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Or(t,i).flags|=256),t=ja(t,i),t!==2&&(i=Un,Un=o,i!==null&&ac(i)),t}function ac(t){Un===null?Un=t:Un.push.apply(Un,t)}function B0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!ni(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~nc,i&=~za,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Et(i),l=1<<o;t[o]=-1,i&=~l}}function dp(t){if((St&6)!==0)throw Error(n(327));Ts();var i=ti(t,0);if((i&1)===0)return In(t,H()),null;var o=ja(t,i);if(t.tag!==0&&o===2){var l=bt(t);l!==0&&(i=l,o=oc(t,l))}if(o===1)throw o=Po,Or(t,0),lr(t,i),In(t,H()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Un,Di),In(t,H()),null}function lc(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(Es=H()+500,xa&&tr())}}function Fr(t){or!==null&&or.tag===0&&(St&6)===0&&Ts();var i=St;St|=1;var o=Kn.transition,l=pt;try{if(Kn.transition=null,pt=1,t)return t()}finally{pt=l,Kn.transition=o,St=i,(St&6)===0&&tr()}}function uc(){Vn=Ms.current,Ft(Ms)}function Or(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,m0(o)),qt!==null)for(o=qt.return;o!==null;){var l=o;switch(vu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_a();break;case 3:xs(),Ft(bn),Ft(mn),Lu();break;case 5:Pu(l);break;case 4:xs();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:Tu(l.type._context);break;case 22:case 23:uc()}o=o.return}if(on=t,qt=t=ur(t.current,null),dn=Vn=i,Qt=0,Po=null,nc=za=Nr=0,Un=bo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}Dr=null}return t}function hp(t,i){do{var o=qt;try{if(Eu(),Pa.current=Ua,ba){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ba=!1}if(Ir=0,sn=Zt=Ht=null,Eo=!1,To=0,tc.current=null,o===null||o.return===null){Qt=1,Po=i,qt=null;break}e:{var p=t,M=o.return,U=o,k=i;if(i=dn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,ve=U,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=kh(M);if(De!==null){De.flags&=-257,Bh(De,M,U,p,i),De.mode&1&&Oh(p,te,i),i=De,k=te;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(k),i.updateQueue=Ve}else He.add(k);break e}else{if((i&1)===0){Oh(p,te,i),cc();break e}k=Error(n(426))}}else if(Bt&&U.mode&1){var Yt=kh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Bh(Yt,M,U,p,i),Su(ys(k,U));break e}}p=k=ys(k,U),Qt!==4&&(Qt=2),bo===null?bo=[p]:bo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Nh(p,k,i);lh(p,q);break e;case 1:U=k;var V=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(sr===null||!sr.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Fh(p,U,i);lh(p,Te);break e}}p=p.return}while(p!==null)}gp(o)}catch(We){i=We,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function pp(){var t=Ba.current;return Ba.current=Ua,t===null?Ua:t}function cc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Nr&268435455)===0&&(za&268435455)===0||lr(on,dn)}function ja(t,i){var o=St;St|=2;var l=pp();(on!==t||dn!==i)&&(Di=null,Or(t,i));do try{z0();break}catch(c){hp(t,c)}while(!0);if(Eu(),St=o,Ba.current=l,qt!==null)throw Error(n(261));return on=null,dn=0,Qt}function z0(){for(;qt!==null;)mp(qt)}function H0(){for(;qt!==null&&!ne();)mp(qt)}function mp(t){var i=xp(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,i===null?gp(t):qt=i,tc.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=U0(o,i,Vn),o!==null){qt=o;return}}else{if(o=I0(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Qt===0&&(Qt=5)}function kr(t,i,o){var l=pt,c=Kn.transition;try{Kn.transition=null,pt=1,V0(t,i,o,l)}finally{Kn.transition=c,pt=l}return null}function V0(t,i,o,l){do Ts();while(or!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(pn(t,p),t===on&&(qt=on=null,dn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Va||(Va=!0,yp(Oe,function(){return Ts(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Kn.transition,Kn.transition=null;var M=pt;pt=1;var U=St;St|=4,tc.current=null,F0(t,o),op(o,t),l0(cu),ia=!!uu,cu=uu=null,t.current=o,O0(o),ie(),St=U,pt=M,Kn.transition=p}else t.current=o;if(Va&&(Va=!1,or=t,Ga=c),p=t.pendingLanes,p===0&&(sr=null),Mt(o.stateNode),In(t,H()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ha)throw Ha=!1,t=rc,rc=null,t;return(Ga&1)!==0&&t.tag!==0&&Ts(),p=t.pendingLanes,(p&1)!==0?t===sc?Lo++:(Lo=0,sc=t):Lo=0,tr(),null}function Ts(){if(or!==null){var t=rd(Ga),i=Kn.transition,o=pt;try{if(Kn.transition=null,pt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,Ga=0,(St&6)!==0)throw Error(n(331));var c=St;for(St|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var U=p.deletions;if(U!==null){for(var k=0;k<U.length;k++){var te=U[k];for(ke=te;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Ro(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,ke=ye;else for(;ke!==null;){ve=ke;var ge=ve.sibling,De=ve.return;if(tp(ve),ve===te){ke=null;break}if(ge!==null){ge.return=De,ke=ge;break}ke=De}}}var He=p.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Yt=Ve.sibling;Ve.sibling=null,Ve=Yt}while(Ve!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,ke=q;break e}ke=p.return}}var V=t.current;for(ke=V;ke!==null;){M=ke;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ke=$;else e:for(M=V;ke!==null;){if(U=ke,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ka(9,U)}}catch(We){Wt(U,U.return,We)}if(U===M){ke=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ke=Te;break e}ke=U.return}}if(St=c,tr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,t)}catch{}l=!0}return l}finally{pt=o,Kn.transition=i}}return!1}function _p(t,i,o){i=ys(o,i),i=Nh(t,i,1),t=ir(t,i,1),i=Cn(),t!==null&&(jt(t,1,i),In(t,i))}function Wt(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){t=ys(o,t),t=Fh(i,t,1),i=ir(i,t,1),t=Cn(),i!==null&&(jt(i,1,t),In(i,t));break}}i=i.return}}function G0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(dn&o)===o&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>H()-ic?Or(t,0):nc|=o),In(t,i)}function vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var o=Cn();t=Pi(t,i),t!==null&&(jt(t,i,o),In(t,o))}function W0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),vp(t,o)}function X0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),vp(t,o)}var xp;xp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,D0(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Bt&&(i.flags&1048576)!==0&&Qd(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Fa(t,i),t=i.pendingProps;var c=ds(i,mn.current);vs(i,o),c=Iu(null,i,l,t,c,o);var p=Nu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(p=!0,va(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Cu(i),c.updater=Ia,i.stateNode=c,c._reactInternals=i,Hu(i,l,t,o),i=Xu(null,i,l,!0,p,o)):(i.tag=0,Bt&&p&&_u(i),An(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Fa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Y0(l),t=ri(l,t),c){case 0:i=Wu(null,i,l,t,o);break e;case 1:i=Xh(null,i,l,t,o);break e;case 11:i=zh(null,i,l,t,o);break e;case 14:i=Hh(null,i,l,ri(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Wu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Xh(t,i,l,c,o);case 3:e:{if(jh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,ah(t,i),Ca(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=ys(Error(n(423)),i),i=Yh(t,i,l,o,c);break e}else if(l!==c){c=ys(Error(n(424)),i),i=Yh(t,i,l,o,c);break e}else for(Hn=Qi(i.stateNode.containerInfo.firstChild),zn=i,Bt=!0,ii=null,o=sh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),l===c){i=Li(t,i,o);break e}An(t,i,l,o)}i=i.child}return i;case 5:return ch(i),t===null&&yu(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,fu(l,c)?M=null:p!==null&&fu(l,p)&&(i.flags|=32),Wh(t,i),An(t,i,M,o),i.child;case 6:return t===null&&yu(i),null;case 13:return qh(t,i,o);case 4:return Ru(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,o):An(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),zh(t,i,l,c,o);case 7:return An(t,i,i.pendingProps,o),i.child;case 8:return An(t,i,i.pendingProps.children,o),i.child;case 12:return An(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,Ut(Ta,l._currentValue),l._currentValue=M,p!==null)if(ni(p.value,M)){if(p.children===c.children&&!bn.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){M=p.child;for(var k=U.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=bi(-1,o&-o),k.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),te.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),wu(p.return,o,i),U.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),wu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}An(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,vs(i,o),c=qn(c),l=l(c),i.flags|=1,An(t,i,l,o),i.child;case 14:return l=i.type,c=ri(l,i.pendingProps),c=ri(l.type,c),Hh(t,i,l,c,o);case 15:return Vh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Fa(t,i),i.tag=1,Ln(l)?(t=!0,va(i)):t=!1,vs(i,o),Uh(i,l,c),Hu(i,l,c,o),Xu(null,i,l,!0,t,o);case 19:return Kh(t,i,o);case 22:return Gh(t,i,o)}throw Error(n(156,i.tag))};function yp(t,i){return R(t,i)}function j0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,o,l){return new j0(t,i,o,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===fe)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Zn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ya(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")fc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Br(o.children,c,p,i);case W:M=8,c|=8;break;case C:return t=Zn(12,o,i,c|2),t.elementType=C,t.lanes=p,t;case K:return t=Zn(13,o,i,c),t.elementType=K,t.lanes=p,t;case le:return t=Zn(19,o,i,c),t.elementType=le,t.lanes=p,t;case ce:return qa(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case N:M=9;break e;case ee:M=11;break e;case fe:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Zn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Br(t,i,o,l){return t=Zn(7,t,l,i),t.lanes=o,t}function qa(t,i,o,l){return t=Zn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function dc(t,i,o){return t=Zn(6,t,null,i),t.lanes=o,t}function hc(t,i,o){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function q0(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function pc(t,i,o,l,c,p,M,U,k){return t=new q0(t,i,o,U,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Zn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(p),t}function $0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Sp(t){if(!t)return er;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return $d(t,o,i)}return i}function Mp(t,i,o,l,c,p,M,U,k){return t=pc(o,l,!0,t,c,p,M,U,k),t.context=Sp(null),o=t.current,l=Cn(),c=ar(o),p=bi(l,c),p.callback=i??null,ir(o,p,c),t.current.lanes=c,jt(t,c,l),In(t,l),t}function $a(t,i,o,l){var c=i.current,p=Cn(),M=ar(c);return o=Sp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(c,i,M),t!==null&&(ai(t,c,M,p),Aa(t,c,M)),M}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mc(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function K0(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}Za.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$a(t,i,null,null)},Za.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Fr(function(){$a(null,t,null,null)}),i[wi]=null}};function Za(t){this._internalRoot=t}Za.prototype.unstable_scheduleHydration=function(t){if(t){var i=ad();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&cd(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function Z0(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var te=Ka(M);p.call(te)}}var M=Mp(i,l,t,0,null,!1,!1,"",wp);return t._reactRootContainer=M,t[wi]=M.current,mo(t.nodeType===8?t.parentNode:t),Fr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var U=l;l=function(){var te=Ka(k);U.call(te)}}var k=pc(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=k,t[wi]=k.current,mo(t.nodeType===8?t.parentNode:t),Fr(function(){$a(i,k,o,l)}),k}function Ja(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var U=c;c=function(){var k=Ka(M);U.call(k)}}$a(i,M,t,c)}else M=Z0(o,i,t,c,l);return Ka(M)}sd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=cn(i.pendingLanes);o!==0&&(Cr(i,o|1),In(i,H()),(St&6)===0&&(Es=H()+500,tr()))}break;case 13:Fr(function(){var l=Pi(t,1);if(l!==null){var c=Cn();ai(l,t,1,c)}}),mc(t,1)}},Vl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=Cn();ai(i,t,134217728,o)}mc(t,134217728)}},od=function(t){if(t.tag===13){var i=ar(t),o=Pi(t,i);if(o!==null){var l=Cn();ai(o,t,i,l)}mc(t,i)}},ad=function(){return pt},ld=function(t,i){var o=pt;try{return pt=t,i()}finally{pt=o}},Ce=function(t,i,o){switch(i){case"input":if(ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ga(l);if(!c)throw Error(n(90));mt(l),ct(l,c)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},It=lc,Kt=Fr;var Q0={usingClientEntryPoint:!1,Events:[vo,cs,ga,be,rt,lc]},Do={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J0={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jo(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||K0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{je=el.inject(J0),st=el}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0,Nn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(i))throw Error(n(200));return $0(t,i,null,o)},Nn.createRoot=function(t,i){if(!_c(t))throw Error(n(299));var o=!1,l="",c=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=pc(t,1,!1,null,null,o,!1,l,c),t[wi]=i.current,mo(t.nodeType===8?t.parentNode:t),new gc(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Jo(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Fr(t)},Nn.hydrate=function(t,i,o){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!0,o)},Nn.hydrateRoot=function(t,i,o){if(!_c(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Mp(i,null,t,1,o??null,c,!1,p,M),t[wi]=i.current,mo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Za(i)},Nn.render=function(t,i,o){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!1,o)},Nn.unmountComponentAtNode=function(t){if(!Qa(t))throw Error(n(40));return t._reactRootContainer?(Fr(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Nn.unstable_batchedUpdates=lc,Nn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Qa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ja(t,i,o,!1,l)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Up;function a_(){if(Up)return yc.exports;Up=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yc.exports=o_(),yc.exports}var Ip;function l_(){if(Ip)return tl;Ip=1;var s=a_();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var u_=l_();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Xn.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:f,...d},h)=>Xn.createElement("svg",{ref:h,...f_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:zm("lucide",a),...d},[...f.map(([m,_])=>Xn.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(s,e)=>{const n=Xn.forwardRef(({className:r,...a},u)=>Xn.createElement(d_,{ref:u,iconNode:e,className:zm(`lucide-${c_(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=rn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=rn("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=rn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=rn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=rn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=rn("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=rn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=rn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=rn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=rn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=rn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=rn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=rn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=rn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=rn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=rn("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=rn("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=rn("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=rn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="171",R_=0,kp=1,P_=2,Vm=1,b_=2,ki=3,Mr=0,On=1,Bi=2,xr=0,Vs=1,Bp=2,zp=3,Hp=4,L_=5,qr=100,D_=101,U_=102,I_=103,N_=104,F_=200,O_=201,k_=202,B_=203,rf=204,sf=205,z_=206,H_=207,V_=208,G_=209,W_=210,X_=211,j_=212,Y_=213,q_=214,of=0,af=1,lf=2,Xs=3,uf=4,cf=5,ff=6,df=7,Gm=0,$_=1,K_=2,yr=0,Z_=1,Q_=2,J_=3,ev=4,tv=5,nv=6,iv=7,Wm=300,js=301,Ys=302,hf=303,pf=304,Ol=306,mf=1e3,Kr=1001,gf=1002,hi=1003,rv=1004,nl=1005,yi=1006,Ec=1007,Zr=1008,Gi=1009,Xm=1010,jm=1011,Wo=1012,Yf=1013,Jr=1014,zi=1015,Xo=1016,qf=1017,$f=1018,qs=1020,Ym=35902,qm=1021,$m=1022,di=1023,Km=1024,Zm=1025,Gs=1026,$s=1027,Qm=1028,Kf=1029,Jm=1030,Zf=1031,Qf=1033,Al=33776,Cl=33777,Rl=33778,Pl=33779,_f=35840,vf=35841,xf=35842,yf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37808,wf=37809,Af=37810,Cf=37811,Rf=37812,Pf=37813,bf=37814,Lf=37815,Df=37816,Uf=37817,If=37818,Nf=37819,Ff=37820,Of=37821,bl=36492,kf=36494,Bf=36495,eg=36283,zf=36284,Hf=36285,Vf=36286,sv=3200,ov=3201,tg=0,av=1,vr="",Jn="srgb",Ks="srgb-linear",Dl="linear",Lt="srgb",ws=7680,Vp=519,lv=512,uv=513,cv=514,ng=515,fv=516,dv=517,hv=518,pv=519,Gp=35044,Wp="300 es",Hi=2e3,Ul=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Gf=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function mv(s,e){return(s%e+e)%e}function wc(s,e,n){return(1-n)*s+n*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m)}set(e,n,r,a,u,f,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],T=r[8],A=a[0],y=a[3],g=a[6],D=a[1],L=a[4],P=a[7],G=a[2],O=a[5],F=a[8];return u[0]=f*A+d*D+h*G,u[3]=f*y+d*L+h*O,u[6]=f*g+d*P+h*F,u[1]=m*A+_*D+x*G,u[4]=m*y+_*L+x*O,u[7]=m*g+_*P+x*F,u[2]=v*A+S*D+T*G,u[5]=v*y+S*L+T*O,u[8]=v*g+S*P+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*h+a*u*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=_*f-d*m,v=d*h-_*u,S=m*u-f*h,T=n*x+r*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*f)*A,e[3]=v*A,e[4]=(_*n-a*h)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*h-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new ot;function ig(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Il(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gv(){const s=Il("canvas");return s.style.display="block",s}const Xp={};function Bs(s){s in Xp||(Xp[s]=!0,console.warn(s))}function _v(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function vv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yv(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Lt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Lt&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vr?Dl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:r,transfer:Dl,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const wt=yv();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class Sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Il("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Vi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mv=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Cc(a[f].image)):u.push(Cc(a[f]))}else u=Cc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ev=0;class kn extends Qs{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=Kr,a=Kr,u=yi,f=Zr,d=di,h=Gi,m=kn.DEFAULT_ANISOTROPY,_=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=jo(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Wm;kn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],x=h[8],v=h[1],S=h[5],T=h[9],A=h[2],y=h[6],g=h[10];if(Math.abs(_-v)<.01&&Math.abs(x-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(S+1)/2,G=(g+1)/2,O=(_+v)/4,F=(x+A)/4,W=(T+y)/4;return L>P&&L>G?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=F/r):P>G?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=O/a,u=W/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=F/u,a=W/u),this.set(r,a,u,n),this}let D=Math.sqrt((y-T)*(y-T)+(x-A)*(x-A)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-A)/D,this.z=(v-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends Qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Tv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class sg extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wv extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let h=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[f+0],S=u[f+1],T=u[f+2],A=u[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(x!==A||h!==v||m!==S||_!==T){let y=1-d;const g=h*v+m*S+_*T+x*A,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),O=Math.atan2(G,g*D);y=Math.sin(y*O)/G,d=Math.sin(d*O)/G}const P=d*D;if(h=h*y+v*P,m=m*y+S*P,_=_*y+T*P,x=x*y+A*P,y===1-d){const G=1/Math.sqrt(h*h+m*m+_*_+x*x);h*=G,m*=G,_*=G,x*=G}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],x=u[f],v=u[f+1],S=u[f+2],T=u[f+3];return e[n]=d*T+_*x+h*S-m*v,e[n+1]=h*T+_*v+m*x-d*S,e[n+2]=m*T+_*S+d*v-h*x,e[n+3]=_*T-d*x-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=h(r/2),S=h(a/2),T=h(u/2);switch(f){case"XYZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"YXZ":this._x=v*_*x+m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"ZXY":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x-v*S*T;break;case"ZYX":this._x=v*_*x-m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x+v*S*T;break;case"YZX":this._x=v*_*x+m*S*T,this._y=m*S*x+v*_*T,this._z=m*_*T-v*S*x,this._w=m*_*x-v*S*T;break;case"XZY":this._x=v*_*x-m*S*T,this._y=m*S*x-v*_*T,this._z=m*_*T+v*S*x,this._w=m*_*x+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],h=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*h,this._y=a*_+f*h+u*d-r*m,this._z=u*_+f*m+r*h-a*d,this._w=f*_-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+h*m+f*x-d*_,this.y=r+h*_+d*m-u*x,this.z=a+h*x+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new Y,qp=new Yo;class qo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,li):li.fromBufferAttribute(u,f),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),il.copy(r.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),rl.subVectors(this.max,No),Cs.subVectors(e.a,No),Rs.subVectors(e.b,No),Ps.subVectors(e.c,No),fr.subVectors(Rs,Cs),dr.subVectors(Ps,Rs),zr.subVectors(Cs,Ps);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-zr.z,zr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,zr.z,0,-zr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-zr.y,zr.x,0];return!Pc(n,Cs,Rs,Ps,rl)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Cs,Rs,Ps,rl))?!1:(sl.crossVectors(fr,dr),n=[sl.x,sl.y,sl.z],Pc(n,Cs,Rs,Ps,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],li=new Y,il=new qo,Cs=new Y,Rs=new Y,Ps=new Y,fr=new Y,dr=new Y,zr=new Y,No=new Y,rl=new Y,sl=new Y,Hr=new Y;function Pc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Hr.fromArray(s,u);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=n.dot(Hr),_=r.dot(Hr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const Av=new qo,Fo=new Y,bc=new Y;class kl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Av.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(bc)),this.expandByPoint(Fo.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Y,Lc=new Y,ol=new Y,hr=new Y,Dc=new Y,al=new Y,Uc=new Y;class og{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Lc.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Lc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(ol),d=hr.dot(this.direction),h=-hr.dot(ol),m=hr.lengthSq(),_=Math.abs(1-f*f);let x,v,S,T;if(_>0)if(x=f*h-d,v=f*d-h,T=u*_,x>=0)if(v>=-T)if(v<=T){const A=1/_;x*=A,v*=A,S=x*(x+f*v+2*d)+v*(f*x+v+2*h)+m}else v=u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*h)+m;else v=-u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*h)+m;else v<=-T?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-h),u),S=-x*x+v*(v+2*h)+m):v<=T?(x=0,v=Math.min(Math.max(-u,-h),u),S=v*(v+2*h)+m):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-h),u),S=-x*x+v*(v+2*h)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Lc).addScaledVector(ol,v),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,h;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,u){Dc.subVectors(n,e),al.subVectors(r,e),Uc.crossVectors(Dc,al);let f=this.direction.dot(Uc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(al.crossVectors(hr,al));if(h<0)return null;const m=d*this.direction.dot(Dc.cross(hr));if(m<0||h+m>f)return null;const _=-d*hr.dot(Uc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,u,f,d,h,m,_,x,v,S,T,A,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m,_,x,v,S,T,A,y)}set(e,n,r,a,u,f,d,h,m,_,x,v,S,T,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=f*_,S=f*x,T=d*_,A=d*x;n[0]=h*_,n[4]=-h*x,n[8]=m,n[1]=S+T*m,n[5]=v-A*m,n[9]=-d*h,n[2]=A-v*m,n[6]=T+S*m,n[10]=f*h}else if(e.order==="YXZ"){const v=h*_,S=h*x,T=m*_,A=m*x;n[0]=v+A*d,n[4]=T*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=S*d-T,n[6]=A+v*d,n[10]=f*h}else if(e.order==="ZXY"){const v=h*_,S=h*x,T=m*_,A=m*x;n[0]=v-A*d,n[4]=-f*x,n[8]=T+S*d,n[1]=S+T*d,n[5]=f*_,n[9]=A-v*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const v=f*_,S=f*x,T=d*_,A=d*x;n[0]=h*_,n[4]=T*m-S,n[8]=v*m+A,n[1]=h*x,n[5]=A*m+v,n[9]=S*m-T,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const v=f*h,S=f*m,T=d*h,A=d*m;n[0]=h*_,n[4]=A-v*x,n[8]=T*x+S,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+T,n[10]=v-A*x}else if(e.order==="XZY"){const v=f*h,S=f*m,T=d*h,A=d*m;n[0]=h*_,n[4]=-x,n[8]=m*_,n[1]=v*x+A,n[5]=f*_,n[9]=S*x-T,n[2]=T*x-S,n[6]=d*_,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cv,e,Rv)}lookAt(e,n,r){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),pr.crossVectors(r,Gn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),pr.crossVectors(r,Gn)),pr.normalize(),ll.crossVectors(Gn,pr),a[0]=pr.x,a[4]=ll.x,a[8]=Gn.x,a[1]=pr.y,a[5]=ll.y,a[9]=Gn.y,a[2]=pr.z,a[6]=ll.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],T=r[2],A=r[6],y=r[10],g=r[14],D=r[3],L=r[7],P=r[11],G=r[15],O=a[0],F=a[4],W=a[8],C=a[12],w=a[1],N=a[5],ee=a[9],K=a[13],le=a[2],fe=a[6],ae=a[10],ce=a[14],z=a[3],ue=a[7],oe=a[11],I=a[15];return u[0]=f*O+d*w+h*le+m*z,u[4]=f*F+d*N+h*fe+m*ue,u[8]=f*W+d*ee+h*ae+m*oe,u[12]=f*C+d*K+h*ce+m*I,u[1]=_*O+x*w+v*le+S*z,u[5]=_*F+x*N+v*fe+S*ue,u[9]=_*W+x*ee+v*ae+S*oe,u[13]=_*C+x*K+v*ce+S*I,u[2]=T*O+A*w+y*le+g*z,u[6]=T*F+A*N+y*fe+g*ue,u[10]=T*W+A*ee+y*ae+g*oe,u[14]=T*C+A*K+y*ce+g*I,u[3]=D*O+L*w+P*le+G*z,u[7]=D*F+L*N+P*fe+G*ue,u[11]=D*W+L*ee+P*ae+G*oe,u[15]=D*C+L*K+P*ce+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],h=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],T=e[3],A=e[7],y=e[11],g=e[15];return T*(+u*h*x-a*m*x-u*d*v+r*m*v+a*d*S-r*h*S)+A*(+n*h*S-n*m*v+u*f*v-a*f*S+a*m*_-u*h*_)+y*(+n*m*x-n*d*S-u*f*x+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*h*x+n*d*v+a*f*x-r*f*v+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],T=e[12],A=e[13],y=e[14],g=e[15],D=x*y*m-A*v*m+A*h*S-d*y*S-x*h*g+d*v*g,L=T*v*m-_*y*m-T*h*S+f*y*S+_*h*g-f*v*g,P=_*A*m-T*x*m+T*d*S-f*A*S-_*d*g+f*x*g,G=T*x*h-_*A*h-T*d*v+f*A*v+_*d*y-f*x*y,O=n*D+r*L+a*P+u*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=D*F,e[1]=(A*v*u-x*y*u-A*a*S+r*y*S+x*a*g-r*v*g)*F,e[2]=(d*y*u-A*h*u+A*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(x*h*u-d*v*u-x*a*m+r*v*m+d*a*S-r*h*S)*F,e[4]=L*F,e[5]=(_*y*u-T*v*u+T*a*S-n*y*S-_*a*g+n*v*g)*F,e[6]=(T*h*u-f*y*u-T*a*m+n*y*m+f*a*g-n*h*g)*F,e[7]=(f*v*u-_*h*u+_*a*m-n*v*m-f*a*S+n*h*S)*F,e[8]=P*F,e[9]=(T*x*u-_*A*u-T*r*S+n*A*S+_*r*g-n*x*g)*F,e[10]=(f*A*u-T*d*u+T*r*m-n*A*m-f*r*g+n*d*g)*F,e[11]=(_*d*u-f*x*u-_*r*m+n*x*m+f*r*S-n*d*S)*F,e[12]=G*F,e[13]=(_*A*a-T*x*a+T*r*v-n*A*v-_*r*y+n*x*y)*F,e[14]=(T*d*a-f*A*a-T*r*h+n*A*h+f*r*y-n*d*y)*F,e[15]=(f*x*a-_*d*a+_*r*h-n*x*h-f*r*v+n*d*v)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,h=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*f,0,m*h-a*d,_*h+a*f,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,h=n._w,m=u+u,_=f+f,x=d+d,v=u*m,S=u*_,T=u*x,A=f*_,y=f*x,g=d*x,D=h*m,L=h*_,P=h*x,G=r.x,O=r.y,F=r.z;return a[0]=(1-(A+g))*G,a[1]=(S+P)*G,a[2]=(T-L)*G,a[3]=0,a[4]=(S-P)*O,a[5]=(1-(v+g))*O,a[6]=(y+D)*O,a[7]=0,a[8]=(T+L)*F,a[9]=(y-D)*F,a[10]=(1-(v+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=bs.set(a[0],a[1],a[2]).length();const f=bs.set(a[4],a[5],a[6]).length(),d=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const m=1/u,_=1/f,x=1/d;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=x,ui.elements[9]*=x,ui.elements[10]*=x,n.setFromRotationMatrix(ui),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Hi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,T;if(d===Hi)S=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Ul)S=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Hi){const h=this.elements,m=1/(n-e),_=1/(r-a),x=1/(f-u),v=(n+e)*m,S=(r+a)*_;let T,A;if(d===Hi)T=(f+u)*x,A=-2*x;else if(d===Ul)T=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new Y,ui=new Vt,Cv=new Y(0,0,0),Rv=new Y(1,1,1),pr=new Y,ll=new Y,Gn=new Y,$p=new Vt,Kp=new Yo;class Mi{constructor(e=0,n=0,r=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],h=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pv=0;const Zp=new Y,Ls=new Yo,Ni=new Vt,ul=new Y,Oo=new Y,bv=new Y,Lv=new Yo,Qp=new Y(1,0,0),Jp=new Y(0,1,0),em=new Y(0,0,1),tm={type:"added"},Dv={type:"removed"},Ds={type:"childadded",child:null},Ic={type:"childremoved",child:null};class en extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Y,n=new Mi,r=new Yo,a=new Y(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ot}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Oo,ul,this.up):Ni.lookAt(ul,Oo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Dv),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,bv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const x=h[m];u(e.shapes,x)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),v=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}en.DEFAULT_UP=new Y(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new Y,Fi=new Y,Nc=new Y,Oi=new Y,Us=new Y,Is=new Y,nm=new Y,Fc=new Y,Oc=new Y,kc=new Y,Bc=new Xt,zc=new Xt,Hc=new Xt;class fi{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ci.subVectors(a,n),Fi.subVectors(r,n),Nc.subVectors(e,n);const f=ci.dot(ci),d=ci.dot(Fi),h=ci.dot(Nc),m=Fi.dot(Fi),_=Fi.dot(Nc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*h-d*_)*v,T=(f*_-d*h)*v;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,u,f,d,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Oi.x),h.addScaledVector(f,Oi.y),h.addScaledVector(d,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,f){return Bc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Hc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Bc,u.x),f.addScaledVector(zc,u.y),f.addScaledVector(Hc,u.z),f}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Fi.subVectors(e,n),ci.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Us.subVectors(a,r),Is.subVectors(u,r),Fc.subVectors(e,r);const h=Us.dot(Fc),m=Is.dot(Fc);if(h<=0&&m<=0)return n.copy(r);Oc.subVectors(e,a);const _=Us.dot(Oc),x=Is.dot(Oc);if(_>=0&&x<=_)return n.copy(a);const v=h*x-_*m;if(v<=0&&h>=0&&_<=0)return f=h/(h-_),n.copy(r).addScaledVector(Us,f);kc.subVectors(e,u);const S=Us.dot(kc),T=Is.dot(kc);if(T>=0&&S<=T)return n.copy(u);const A=S*m-h*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Is,d);const y=_*T-S*x;if(y<=0&&x-_>=0&&S-T>=0)return nm.subVectors(u,a),d=(x-_)/(x-_+(S-T)),n.copy(a).addScaledVector(nm,d);const g=1/(y+A+v);return f=A*g,d=v*g,n.copy(r).addScaledVector(Us,f).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Vc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=wt.workingColorSpace){if(e=mv(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Vc(f,u,e+1/3),this.g=Vc(f,u,e),this.b=Vc(f,u,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,n=Jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return wt.fromWorkingColorSpace(yn.copy(this),e),Math.round(_t(yn.r*255,0,255))*65536+Math.round(_t(yn.g*255,0,255))*256+Math.round(_t(yn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,u=yn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const _=(d+f)/2;if(d===f)h=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:h=(a-u)/x+(a<u?6:0);break;case a:h=(u-r)/x+2;break;case u:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Jn){wt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(cl);const r=wc(mr.h,cl.h,n),a=wc(mr.s,cl.s,n),u=wc(mr.l,cl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new xt;xt.NAMES=lg;let Uv=0;class Js extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Vs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rf&&(r.blendSrc=this.blendSrc),this.blendDst!==sf&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jf extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,fl=new At;class Si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Gp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array),u=Fn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class ug extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class cg extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Iv=0;const Qn=new Vt,Gc=new en,Ns=new Y,Wn=new qo,ko=new qo,ln=new Y;class Sn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?cg:ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,r){return Qn.makeTranslation(e,n,r),this.applyMatrix4(Qn),this}scale(e,n,r){return Qn.makeScale(e,n,r),this.applyMatrix4(Qn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Wn.min,ko.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,ko.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(ko.min),Wn.expandByPoint(ko.max))}Wn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)ln.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)ln.fromBufferAttribute(d,m),h&&(Ns.fromBufferAttribute(e,m),ln.add(Ns)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let W=0;W<r.count;W++)d[W]=new Y,h[W]=new Y;const m=new Y,_=new Y,x=new Y,v=new At,S=new At,T=new At,A=new Y,y=new Y;function g(W,C,w){m.fromBufferAttribute(r,W),_.fromBufferAttribute(r,C),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,W),S.fromBufferAttribute(u,C),T.fromBufferAttribute(u,w),_.sub(m),x.sub(m),S.sub(v),T.sub(v);const N=1/(S.x*T.y-T.x*S.y);isFinite(N)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(N),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(N),d[W].add(A),d[C].add(A),d[w].add(A),h[W].add(y),h[C].add(y),h[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let W=0,C=D.length;W<C;++W){const w=D[W],N=w.start,ee=w.count;for(let K=N,le=N+ee;K<le;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new Y,P=new Y,G=new Y,O=new Y;function F(W){G.fromBufferAttribute(a,W),O.copy(G);const C=d[W];L.copy(C),L.sub(G.multiplyScalar(G.dot(C))).normalize(),P.crossVectors(O,C);const N=P.dot(h[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,N)}for(let W=0,C=D.length;W<C;++W){const w=D[W],N=w.start,ee=w.count;for(let K=N,le=N+ee;K<le;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Y,u=new Y,f=new Y,d=new Y,h=new Y,m=new Y,_=new Y,x=new Y;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(h.length*_);let S=0,T=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?S=h[A]*d.data.stride+d.offset:S=h[A]*_;for(let g=0;g<_;g++)v[T++]=m[S++]}return new Si(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Vt,Vr=new og,dl=new kl,rm=new Y,hl=new Y,pl=new Y,ml=new Y,Wc=new Y,gl=new Y,sm=new Y,_l=new Y;class Jt extends en{constructor(e=new Sn,n=new Jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){gl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=d[h],x=u[h];_!==0&&(Wc.fromBufferAttribute(x,e),f?gl.addScaledVector(Wc,_):gl.addScaledVector(Wc.sub(n),_))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(dl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(dl,rm)===null||Vr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,G=L;P<G;P+=3){const O=d.getX(P),F=d.getX(P+1),W=d.getX(P+2);a=vl(this,g,e,r,m,_,x,O,F,W),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),P=d.getX(y+2);a=vl(this,f,e,r,m,_,x,D,L,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,G=L;P<G;P+=3){const O=P,F=P+1,W=P+2;a=vl(this,g,e,r,m,_,x,O,F,W),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=y,L=y+1,P=y+2;a=vl(this,f,e,r,m,_,x,D,L,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Nv(s,e,n,r,a,u,f,d){let h;if(e.side===On?h=r.intersectTriangle(f,u,a,!0,d):h=r.intersectTriangle(a,u,f,e.side===Mr,d),h===null)return null;_l.copy(d),_l.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(_l);return m<n.near||m>n.far?null:{distance:m,point:_l.clone(),object:s}}function vl(s,e,n,r,a,u,f,d,h,m){s.getVertexPosition(d,hl),s.getVertexPosition(h,pl),s.getVertexPosition(m,ml);const _=Nv(s,e,n,r,hl,pl,ml,sm);if(_){const x=new Y;fi.getBarycoord(sm,hl,pl,ml,x),a&&(_.uv=fi.getInterpolatedAttribute(a,d,h,m,x,new At)),u&&(_.uv1=fi.getInterpolatedAttribute(u,d,h,m,x,new At)),f&&(_.normal=fi.getInterpolatedAttribute(f,d,h,m,x,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:h,c:m,normal:new Y,materialIndex:0};fi.getNormal(hl,pl,ml,v.normal),_.face=v,_.barycoord=x}return _}class Sr extends Sn{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const h=[],m=[],_=[],x=[];let v=0,S=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(x,2));function T(A,y,g,D,L,P,G,O,F,W,C){const w=P/F,N=G/W,ee=P/2,K=G/2,le=O/2,fe=F+1,ae=W+1;let ce=0,z=0;const ue=new Y;for(let oe=0;oe<ae;oe++){const I=oe*N-K;for(let re=0;re<fe;re++){const Ie=re*w-ee;ue[A]=Ie*D,ue[y]=I*L,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[g]=O>0?1:-1,_.push(ue.x,ue.y,ue.z),x.push(re/F),x.push(1-oe/W),ce+=1}}for(let oe=0;oe<W;oe++)for(let I=0;I<F;I++){const re=v+I+fe*oe,Ie=v+I+fe*(oe+1),Q=v+(I+1)+fe*(oe+1),de=v+(I+1)+fe*oe;h.push(re,Ie,de),h.push(Ie,Q,de),z+=6}d.addGroup(S,z,C),S+=z,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const a in r)e[a]=r[a]}return e}function Fv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Ov={clone:Zs,merge:Rn};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class dg extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new Y,om=new At,am=new At;class ei extends dg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,om,am),n.subVectors(am,om)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class zv extends en{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(Fs,Os,e,n);a.layers=this.layers,this.add(a);const u=new ei(Fs,Os,e,n);u.layers=this.layers,this.add(u);const f=new ei(Fs,Os,e,n);f.layers=this.layers,this.add(f);const d=new ei(Fs,Os,e,n);d.layers=this.layers,this.add(d);const h=new ei(Fs,Os,e,n);h.layers=this.layers,this.add(h);const m=new ei(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,h]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,h,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class hg extends kn{constructor(e,n,r,a,u,f,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,u,f,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hv extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new hg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Sr(5,5,5),u=new Er({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:xr});u.uniforms.tEquirect.value=n;const f=new Jt(a,u),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=yi),new zv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}let Vv=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};const Xc=new Y,Gv=new Y,Wv=new ot;class jr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Xc.subVectors(r,n).cross(Gv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Wv.getNormalMatrix(e),a=this.coplanarPoint(Xc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new kl,xl=new Y;class ed{constructor(e=new jr,n=new jr,r=new jr,a=new jr,u=new jr,f=new jr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],T=a[9],A=a[10],y=a[11],g=a[12],D=a[13],L=a[14],P=a[15];if(r[0].setComponents(h-u,v-m,y-S,P-g).normalize(),r[1].setComponents(h+u,v+m,y+S,P+g).normalize(),r[2].setComponents(h+f,v+_,y+T,P+D).normalize(),r[3].setComponents(h-f,v-_,y-T,P-D).normalize(),r[4].setComponents(h-d,v-x,y-A,P-L).normalize(),n===Hi)r[5].setComponents(h+d,v+x,y+A,P+L).normalize();else if(n===Ul)r[5].setComponents(d,x,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(xl.x=a.normal.x>0?e.max.x:e.min.x,xl.y=a.normal.y>0?e.max.y:e.min.y,xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zs extends Js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nl=new Y,Fl=new Y,lm=new Vt,Bo=new og,yl=new kl,jc=new Y,um=new Y;class Ho extends en{constructor(e=new Sn,n=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Nl.fromBufferAttribute(n,a-1),Fl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Nl.distanceTo(Fl);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(a),yl.radius+=u,e.ray.intersectsSphere(yl)===!1)return;lm.copy(a).invert(),Bo.copy(e.ray).applyMatrix4(lm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let A=S,y=T-1;A<y;A+=m){const g=_.getX(A),D=_.getX(A+1),L=Sl(this,e,Bo,h,g,D);L&&n.push(L)}if(this.isLineLoop){const A=_.getX(T-1),y=_.getX(S),g=Sl(this,e,Bo,h,A,y);g&&n.push(g)}}else{const S=Math.max(0,f.start),T=Math.min(v.count,f.start+f.count);for(let A=S,y=T-1;A<y;A+=m){const g=Sl(this,e,Bo,h,A,A+1);g&&n.push(g)}if(this.isLineLoop){const A=Sl(this,e,Bo,h,T-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Sl(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Nl.fromBufferAttribute(f,a),Fl.fromBufferAttribute(f,u),n.distanceSqToSegment(Nl,Fl,jc,um)>r)return;jc.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(jc);if(!(h<e.near||h>e.far))return{distance:h,point:um.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Vo extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}class pg extends kn{constructor(e,n,r,a,u,f,d,h,m,_=Gs){if(_!==Gs&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Gs&&(r=Jr),r===void 0&&_===$s&&(r=qs),super(null,a,u,f,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Qr extends Sn{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],x=[],v=[],S=[];let T=0;const A=[],y=r/2;let g=0;D(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(S,2));function D(){const P=new Y,G=new Y;let O=0;const F=(n-e)/r;for(let W=0;W<=u;W++){const C=[],w=W/u,N=w*(n-e)+e;for(let ee=0;ee<=a;ee++){const K=ee/a,le=K*h+d,fe=Math.sin(le),ae=Math.cos(le);G.x=N*fe,G.y=-w*r+y,G.z=N*ae,x.push(G.x,G.y,G.z),P.set(fe,F,ae).normalize(),v.push(P.x,P.y,P.z),S.push(K,1-w),C.push(T++)}A.push(C)}for(let W=0;W<a;W++)for(let C=0;C<u;C++){const w=A[C][W],N=A[C+1][W],ee=A[C+1][W+1],K=A[C][W+1];(e>0||C!==0)&&(_.push(w,N,K),O+=3),(n>0||C!==u-1)&&(_.push(N,ee,K),O+=3)}m.addGroup(g,O,0),g+=O}function L(P){const G=T,O=new At,F=new Y;let W=0;const C=P===!0?e:n,w=P===!0?1:-1;for(let ee=1;ee<=a;ee++)x.push(0,y*w,0),v.push(0,w,0),S.push(.5,.5),T++;const N=T;for(let ee=0;ee<=a;ee++){const le=ee/a*h+d,fe=Math.cos(le),ae=Math.sin(le);F.x=C*ae,F.y=y*w,F.z=C*fe,x.push(F.x,F.y,F.z),v.push(0,w,0),O.x=fe*.5+.5,O.y=ae*.5*w+.5,S.push(O.x,O.y),T++}for(let ee=0;ee<a;ee++){const K=G+ee,le=N+ee;P===!0?_.push(le,le+1,K):_.push(le+1,le,K),W+=3}m.addGroup(g,W,P===!0?1:2),g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bl extends Sn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,x=e/d,v=n/h,S=[],T=[],A=[],y=[];for(let g=0;g<_;g++){const D=g*v-f;for(let L=0;L<m;L++){const P=L*x-u;T.push(P,-D,0),A.push(0,0,1),y.push(L/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const L=D+m*g,P=D+m*(g+1),G=D+1+m*(g+1),O=D+1+m*g;S.push(L,P,O),S.push(P,G,O)}this.setIndex(S),this.setAttribute("position",new un(T,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class td extends Sn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(f+d,Math.PI);let m=0;const _=[],x=new Y,v=new Y,S=[],T=[],A=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let P=0;g===0&&f===0?P=.5/n:g===r&&h===Math.PI&&(P=-.5/n);for(let G=0;G<=n;G++){const O=G/n;x.x=-e*Math.cos(a+O*u)*Math.sin(f+L*d),x.y=e*Math.cos(f+L*d),x.z=e*Math.sin(a+O*u)*Math.sin(f+L*d),T.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),y.push(O+P,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const L=_[g][D+1],P=_[g][D],G=_[g+1][D],O=_[g+1][D+1];(g!==0||f>0)&&S.push(L,P,O),(g!==r-1||h<Math.PI)&&S.push(P,G,O)}this.setIndex(S),this.setAttribute("position",new un(T,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nd extends Sn{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const f=[],d=[],h=[],m=[],_=new Y,x=new Y,v=new Y;for(let S=0;S<=r;S++)for(let T=0;T<=a;T++){const A=T/a*u,y=S/r*Math.PI*2;x.x=(e+n*Math.cos(y))*Math.cos(A),x.y=(e+n*Math.cos(y))*Math.sin(A),x.z=n*Math.sin(y),d.push(x.x,x.y,x.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),v.subVectors(x,_).normalize(),h.push(v.x,v.y,v.z),m.push(T/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=a;T++){const A=(a+1)*S+T-1,y=(a+1)*(S-1)+T-1,g=(a+1)*(S-1)+T,D=(a+1)*S+T;f.push(A,y,D),f.push(y,g,D)}this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zo extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tg,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xv extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mg extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Yv extends mg{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yc=new Vt,cm=new Y,fm=new Y;class qv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(cm),fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fm),n.updateMatrixWorld(),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gg extends dg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $v extends qv{constructor(){super(new gg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kv extends mg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new $v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zv extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const dm=new Y;let Ml,qc;class Qv extends en{constructor(e=new Y(0,0,1),n=new Y(0,0,0),r=1,a=16776960,u=r*.2,f=u*.2){super(),this.type="ArrowHelper",Ml===void 0&&(Ml=new Sn,Ml.setAttribute("position",new un([0,0,0,0,1,0],3)),qc=new Qr(0,.5,1,5,1),qc.translate(0,-.5,0)),this.position.copy(n),this.line=new Ho(Ml,new zs({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jt(qc,new Jf({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,u,f)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{dm.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(dm,n)}}setLength(e,n=e*.2,r=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(r,n,r),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function hm(s,e,n,r){const a=Jv(r);switch(n){case qm:return s*e;case Km:return s*e;case Zm:return s*e*2;case Qm:return s*e/a.components*a.byteLength;case Kf:return s*e/a.components*a.byteLength;case Jm:return s*e*2/a.components*a.byteLength;case Zf:return s*e*2/a.components*a.byteLength;case $m:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case Qf:return s*e*4/a.components*a.byteLength;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(s,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bl:case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eg:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jv(s){switch(s){case Gi:case Xm:return{byteLength:1,components:1};case Wo:case jm:case Xo:return{byteLength:2,components:1};case qf:case $f:return{byteLength:2,components:4};case Jr:case Yf:case zi:return{byteLength:4,components:1};case Ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _g(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function ex(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,m){const _=h.array,x=h.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<x.length;S++){const T=x[v],A=x[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++v,x[v]=A)}x.length=v+1;for(let S=0,T=x.length;S<T;S++){const A=x[S];s.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:f}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ax=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Py=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:sx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,batching_pars_vertex:ux,batching_vertex:cx,begin_vertex:fx,beginnormal_vertex:dx,bsdfs:hx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:vx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:Sx,color_pars_vertex:Mx,color_vertex:Ex,common:Tx,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:bx,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Nx,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Ox,fog_vertex:kx,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Wx,lights_lambert_pars_fragment:Xx,lights_pars_begin:jx,lights_toon_fragment:qx,lights_toon_pars_fragment:$x,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Qx,lights_physical_pars_fragment:Jx,lights_fragment_begin:ey,lights_fragment_maps:ty,lights_fragment_end:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:oy,map_fragment:ay,map_pars_fragment:ly,map_particle_fragment:uy,map_particle_pars_fragment:cy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:dy,morphinstance_vertex:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:Cy,opaque_fragment:Ry,packing:Py,premultiplied_alpha_fragment:by,project_vertex:Ly,dithering_fragment:Dy,dithering_pars_fragment:Uy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Oy,shadowmap_vertex:ky,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Hy,skinning_vertex:Vy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:jy,tonemapping_pars_fragment:Yy,transmission_fragment:qy,transmission_pars_fragment:$y,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Qy,worldpos_vertex:Jy,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:rS,cube_frag:sS,depth_vert:oS,depth_frag:aS,distanceRGBA_vert:lS,distanceRGBA_frag:uS,equirect_vert:cS,equirect_frag:fS,linedashed_vert:dS,linedashed_frag:hS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:vS,meshmatcap_frag:xS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:ES,meshphysical_vert:TS,meshphysical_frag:wS,meshtoon_vert:AS,meshtoon_frag:CS,points_vert:RS,points_frag:PS,shadow_vert:bS,shadow_frag:LS,sprite_vert:DS,sprite_frag:US},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Rn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Rn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Rn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Rn([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};xi.physical={uniforms:Rn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const El={r:0,b:0,g:0},Wr=new Mi,IS=new Vt;function NS(s,e,n,r,a,u,f){const d=new xt(0);let h=u===!0?0:1,m,_,x=null,v=0,S=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function A(L){let P=!1;const G=T(L);G===null?g(d,h):G&&G.isColor&&(g(G,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const G=T(P);G&&(G.isCubeTexture||G.mapping===Ol)?(_===void 0&&(_=new Jt(new Sr(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Zs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Wr.copy(P.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(Wr)),_.material.toneMapped=wt.getTransfer(G.colorSpace)!==Lt,(x!==G||v!==G.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=G,v=G.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Jt(new Bl(2,2),new Er({name:"BackgroundMaterial",uniforms:Zs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(G.colorSpace)!==Lt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||v!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=G,v=G.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,P){L.getRGB(El,fg(s)),r.buffers.color.setClear(El.r,El.g,El.b,P,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),h=P,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,g(d,h)},render:A,addToRenderList:y,dispose:D}}function FS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,f=!1;function d(w,N,ee,K,le){let fe=!1;const ae=x(K,ee,N);u!==ae&&(u=ae,m(u.object)),fe=S(w,K,ee,le),fe&&T(w,K,ee,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,P(w,N,ee,K),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function x(w,N,ee){const K=ee.wireframe===!0;let le=r[w.id];le===void 0&&(le={},r[w.id]=le);let fe=le[N.id];fe===void 0&&(fe={},le[N.id]=fe);let ae=fe[K];return ae===void 0&&(ae=v(h()),fe[K]=ae),ae}function v(w){const N=[],ee=[],K=[];for(let le=0;le<n;le++)N[le]=0,ee[le]=0,K[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ee,attributeDivisors:K,object:w,attributes:{},index:null}}function S(w,N,ee,K){const le=u.attributes,fe=N.attributes;let ae=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){const oe=le[z];let I=fe[z];if(I===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;ae++}return u.attributesNum!==ae||u.index!==K}function T(w,N,ee,K){const le={},fe=N.attributes;let ae=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){let oe=fe[z];oe===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),le[z]=I,ae++}u.attributes=le,u.attributesNum=ae,u.index=K}function A(){const w=u.newAttributes;for(let N=0,ee=w.length;N<ee;N++)w[N]=0}function y(w){g(w,0)}function g(w,N){const ee=u.newAttributes,K=u.enabledAttributes,le=u.attributeDivisors;ee[w]=1,K[w]===0&&(s.enableVertexAttribArray(w),K[w]=1),le[w]!==N&&(s.vertexAttribDivisor(w,N),le[w]=N)}function D(){const w=u.newAttributes,N=u.enabledAttributes;for(let ee=0,K=N.length;ee<K;ee++)N[ee]!==w[ee]&&(s.disableVertexAttribArray(ee),N[ee]=0)}function L(w,N,ee,K,le,fe,ae){ae===!0?s.vertexAttribIPointer(w,N,ee,le,fe):s.vertexAttribPointer(w,N,ee,K,le,fe)}function P(w,N,ee,K){A();const le=K.attributes,fe=ee.getAttributes(),ae=N.defaultAttributeValues;for(const ce in fe){const z=fe[ce];if(z.location>=0){let ue=le[ce];if(ue===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const oe=ue.normalized,I=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ie=re.buffer,Q=re.type,de=re.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ue.gpuType===Yf;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Ne=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<z.locationSize;Qe++)g(z.location+Qe,xe.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<z.locationSize;Qe++)y(z.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Qe=0;Qe<z.locationSize;Qe++)L(z.location+Qe,I/z.locationSize,Q,oe,we*de,(Ne+I/z.locationSize*Qe)*de,Ee)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<z.locationSize;xe++)L(z.location+xe,I/z.locationSize,Q,oe,I*de,I/z.locationSize*xe*de,Ee)}}else if(ae!==void 0){const oe=ae[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}D()}function G(){W();for(const w in r){const N=r[w];for(const ee in N){const K=N[ee];for(const le in K)_(K[le].object),delete K[le];delete N[ee]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const N=r[w.id];for(const ee in N){const K=N[ee];for(const le in K)_(K[le].object),delete K[le];delete N[ee]}delete r[w.id]}function F(w){for(const N in r){const ee=r[N];if(ee[w.id]===void 0)continue;const K=ee[w.id];for(const le in K)_(K[le].object),delete K[le];delete ee[w.id]}}function W(){C(),f=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function OS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let T=0;T<x;T++)S+=_[T];n.update(S,r,1)}function h(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let T=0;for(let A=0;A<x;A++)T+=_[A]*v[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function kS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==di&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!W)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:G,maxSamples:O}}function BS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new jr,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const T=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=s.get(x);if(!a||T===null||T.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,L=D*4;let P=g.clippingState||null;h.value=P,P=_(T,v,L,S);for(let G=0;G!==L;++G)P[G]=n[G];g.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,T){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=h.value,T!==!0||y===null){const g=S+A*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,P=S;L!==A;++L,P+=4)f.copy(x[L]).applyMatrix4(D,d),f.normal.toArray(y,P),y[P+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function zS(s){let e=new WeakMap;function n(f,d){return d===hf?f.mapping=js:d===pf&&(f.mapping=Ys),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===hf||d===pf)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new Hv(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Hs=4,pm=[.125,.215,.35,.446,.526,.582],$r=20,$c=new gg,mm=new xt;let Kc=null,Zc=0,Qc=0,Jc=!1;const Yr=(1+Math.sqrt(5))/2,ks=1/Yr,gm=[new Y(-Yr,ks,0),new Y(Yr,ks,0),new Y(-ks,0,Yr),new Y(ks,0,Yr),new Y(0,Yr,-ks),new Y(0,Yr,ks),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class _m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Xo,format:di,colorSpace:Ks,depthBuffer:!1},a=vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(u)),this._blurMaterial=VS(u,e,n)}return a}_compileMaterial(e){const n=new Jt(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,r,a){const d=new ei(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(mm),_.toneMapping=yr,_.autoClear=!1;const S=new Jf({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),T=new Jt(new Sr,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(mm),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;Tl(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),A&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Jt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;Tl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,$c)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=gm[(a-u-1)%gm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Jt(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*$r-1),A=u/T,y=isFinite(u)?1+Math.floor(_*A):$r;y>$r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const g=[];let D=0;for(let F=0;F<$r;++F){const W=F/A,C=Math.exp(-W*W/2);g.push(C),F===0?D+=C:F<y&&(D+=2*C)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const P=this._sizeLods[a],G=3*P*(a>L-Hs?a-L+Hs:0),O=4*(this._cubeSize-P);Tl(n,G,O,3*P,2*P),h.setRenderTarget(n),h.render(x,$c)}}function HS(s){const e=[],n=[],r=[];let a=s;const u=s-Hs+1+pm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>s-Hs?h=pm[f-s+Hs-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,T=6,A=3,y=2,g=1,D=new Float32Array(A*T*S),L=new Float32Array(y*T*S),P=new Float32Array(g*T*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,W=O>2?0:-1,C=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];D.set(C,A*T*O),L.set(v,y*T*O);const w=[O,O,O,O,O,O];P.set(w,g*T*O)}const G=new Sn;G.setAttribute("position",new Si(D,A)),G.setAttribute("uv",new Si(L,y)),G.setAttribute("faceIndex",new Si(P,g)),e.push(G),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function vm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function VS(s,e,n){const r=new Float32Array($r),a=new Y(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ym(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===hf||h===pf,_=h===js||h===Ys;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new _m(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new _m(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function WS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function XS(s,e,n,r){const a={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",f),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,n.memory.geometries++),v}function h(x){const v=x.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function m(x){const v=[],S=x.index,T=x.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let L=0,P=D.length;L<P;L+=3){const G=D[L+0],O=D[L+1],F=D[L+2];v.push(G,O,O,F,F,G)}}else if(T!==void 0){const D=T.array;A=T.version;for(let L=0,P=D.length/3-1;L<P;L+=3){const G=L+0,O=L+1,F=L+2;v.push(G,O,O,F,F,G)}}else return;const y=new(ig(v)?cg:ug)(v,1);y.version=A;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:h,getWireframeAttribute:_}}function jS(s,e,n){let r;function a(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function h(v,S){s.drawElements(r,S,u,v*f),n.update(S,r,1)}function m(v,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,v*f,T),n.update(S,r,T))}function _(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function x(v,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/f,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,A,0,T);let g=0;for(let D=0;D<T;D++)g+=S[D]*A[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function YS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function qS(s,e,n){const r=new WeakMap,a=new Xt;function u(f,d,h){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),y===!0&&(P=3);let G=d.attributes.position.count*P,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*O*4*x),W=new sg(F,G,O,x);W.type=zi,W.needsUpdate=!0;const C=P*4;for(let N=0;N<x;N++){const ee=g[N],K=D[N],le=L[N],fe=G*O*4*N;for(let ae=0;ae<ee.count;ae++){const ce=ae*C;T===!0&&(a.fromBufferAttribute(ee,ae),F[fe+ce+0]=a.x,F[fe+ce+1]=a.y,F[fe+ce+2]=a.z,F[fe+ce+3]=0),A===!0&&(a.fromBufferAttribute(K,ae),F[fe+ce+4]=a.x,F[fe+ce+5]=a.y,F[fe+ce+6]=a.z,F[fe+ce+7]=0),y===!0&&(a.fromBufferAttribute(le,ae),F[fe+ce+8]=a.x,F[fe+ce+9]=a.y,F[fe+ce+10]=a.z,F[fe+ce+11]=le.itemSize===4?a.w:1)}}v={count:x,texture:W,size:new At(G,O)},r.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function $S(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,x=e.get(h,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const vg=new kn,Sm=new pg(1,1),xg=new sg,yg=new wv,Sg=new hg,Mm=[],Em=[],Tm=new Float32Array(16),wm=new Float32Array(9),Am=new Float32Array(4);function eo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=Mm[a];if(u===void 0&&(u=new Float32Array(a),Mm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function tn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function nn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function KS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2fv(this.addr,e),nn(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;s.uniform3fv(this.addr,e),nn(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4fv(this.addr,e),nn(n,e)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Am.set(r),s.uniformMatrix2fv(this.addr,!1,Am),nn(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;wm.set(r),s.uniformMatrix3fv(this.addr,!1,wm),nn(n,r)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Tm.set(r),s.uniformMatrix4fv(this.addr,!1,Tm),nn(n,r)}}function iM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2iv(this.addr,e),nn(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3iv(this.addr,e),nn(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4iv(this.addr,e),nn(n,e)}}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2uiv(this.addr,e),nn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3uiv(this.addr,e),nn(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4uiv(this.addr,e),nn(n,e)}}function fM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=ng,u=Sm):u=vg,n.setTexture2D(e||u,a)}function dM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||yg,a)}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Sg,a)}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||xg,a)}function mM(s){switch(s){case 5126:return KS;case 35664:return ZS;case 35665:return QS;case 35666:return JS;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return uM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(s,e){s.uniform1fv(this.addr,e)}function _M(s,e){const n=eo(e,this.size,2);s.uniform2fv(this.addr,n)}function vM(s,e){const n=eo(e,this.size,3);s.uniform3fv(this.addr,n)}function xM(s,e){const n=eo(e,this.size,4);s.uniform4fv(this.addr,n)}function yM(s,e){const n=eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function SM(s,e){const n=eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function MM(s,e){const n=eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function EM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function AM(s,e){s.uniform4iv(this.addr,e)}function CM(s,e){s.uniform1uiv(this.addr,e)}function RM(s,e){s.uniform2uiv(this.addr,e)}function PM(s,e){s.uniform3uiv(this.addr,e)}function bM(s,e){s.uniform4uiv(this.addr,e)}function LM(s,e,n){const r=this.cache,a=e.length,u=zl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||vg,u[f])}function DM(s,e,n){const r=this.cache,a=e.length,u=zl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||yg,u[f])}function UM(s,e,n){const r=this.cache,a=e.length,u=zl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Sg,u[f])}function IM(s,e,n){const r=this.cache,a=e.length,u=zl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||xg,u[f])}function NM(s){switch(s){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return yM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return wM;case 35669:case 35673:return AM;case 5125:return CM;case 36294:return RM;case 36295:return PM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return IM}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=mM(n.type)}}class OM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NM(n.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function Cm(s,e){s.seq.push(e),s.map[e.id]=e}function BM(s,e,n){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const u=ef.exec(r),f=ef.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){Cm(n,m===void 0?new FM(d,s,e):new OM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new kM(d),Cm(n,x)),n=x}}}class Ll{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);BM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Rm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const zM=37297;let HM=0;function VM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Pm=new ot;function GM(s){wt._getMatrix(Pm,wt.workingColorSpace,s);const e=`mat3( ${Pm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+VM(s.getShaderSource(e),f)}else return a}function WM(s,e){const n=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function XM(s,e){let n;switch(e){case Z_:n="Linear";break;case Q_:n="Reinhard";break;case J_:n="Cineon";break;case ev:n="ACESFilmic";break;case nv:n="AgX";break;case iv:n="Neutral";break;case tv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new Y;function jM(){wt.getLuminanceCoefficients(wl);const s=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function qM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function $M(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Go(s){return s!==""}function Lm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(s){return s.replace(KM,QM)}const ZM=new Map;function QM(s,e){let n=lt[e];if(n===void 0){const r=ZM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(JM,eE)}function eE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Im(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gm:e="ENVMAP_BLENDING_MULTIPLY";break;case $_:e="ENVMAP_BLENDING_MIX";break;case K_:e="ENVMAP_BLENDING_ADD";break}return e}function sE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function oE(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=tE(n),m=nE(n),_=iE(n),x=rE(n),v=sE(n),S=YM(n),T=qM(u),A=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?lt.tonemapping_pars_fragment:"",n.toneMapping!==yr?XM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,WM("linearToOutputTexel",n.outputColorSpace),jM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),f=Wf(f),f=Lm(f,n),f=Dm(f,n),d=Wf(d),d=Lm(d,n),d=Dm(d,n),f=Um(f),d=Um(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+f,P=D+g+d,G=Rm(a,a.VERTEX_SHADER,L),O=Rm(a,a.FRAGMENT_SHADER,P);a.attachShader(A,G),a.attachShader(A,O),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(N){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(A).trim(),K=a.getShaderInfoLog(G).trim(),le=a.getShaderInfoLog(O).trim();let fe=!0,ae=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,G,O);else{const ce=bm(a,G,"vertex"),z=bm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ee+`
`+ce+`
`+z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(K===""||le==="")&&(ae=!1);ae&&(N.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:K,prefix:y},fragmentShader:{log:le,prefix:g}})}a.deleteShader(G),a.deleteShader(O),W=new Ll(a,A),C=$M(a,A)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(A,zM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new uE(e),n.set(e,r)),r}}class uE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function cE(s,e,n,r,a,u,f){const d=new ag,h=new lE,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,w,N,ee,K){const le=ee.fog,fe=K.geometry,ae=C.isMeshStandardMaterial?ee.environment:null,ce=(C.isMeshStandardMaterial?n:e).get(C.envMap||ae),z=ce&&ce.mapping===Ol?ce.image.height:null,ue=T[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,I=oe!==void 0?oe.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let Ie,Q,de,Ee;if(ue){const yt=xi[ue];Ie=yt.vertexShader,Q=yt.fragmentShader}else Ie=C.vertexShader,Q=C.fragmentShader,h.update(C),de=h.getVertexShaderID(C),Ee=h.getFragmentShaderID(C);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,Pt=!!C.map,mt=!!C.matcap,Dt=!!ce,B=!!C.aoMap,Mn=!!C.lightMap,ht=!!C.bumpMap,ct=!!C.normalMap,Ye=!!C.displacementMap,Rt=!!C.emissiveMap,Xe=!!C.metalnessMap,b=!!C.roughnessMap,E=C.anisotropy>0,Z=C.clearcoat>0,me=C.dispersion>0,_e=C.iridescence>0,he=C.sheen>0,Ge=C.transmission>0,Ae=E&&!!C.anisotropyMap,Fe=Z&&!!C.clearcoatMap,ut=Z&&!!C.clearcoatNormalMap,Me=Z&&!!C.clearcoatRoughnessMap,Be=_e&&!!C.iridescenceMap,$e=_e&&!!C.iridescenceThicknessMap,Je=he&&!!C.sheenColorMap,ze=he&&!!C.sheenRoughnessMap,ft=!!C.specularMap,it=!!C.specularColorMap,Ct=!!C.specularIntensityMap,X=Ge&&!!C.transmissionMap,Ce=Ge&&!!C.thicknessMap,se=!!C.gradientMap,pe=!!C.alphaMap,Le=C.alphaTest>0,be=!!C.alphaHash,rt=!!C.extensions;let It=yr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Kt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Q,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ks,alphaToCoverage:!!C.alphaToCoverage,map:Pt,matcap:mt,envMap:Dt,envMapMode:Dt&&ce.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:Mn,bumpMap:ht,normalMap:ct,displacementMap:v&&Ye,emissiveMap:Rt,normalMapObjectSpace:ct&&C.normalMapType===av,normalMapTangentSpace:ct&&C.normalMapType===tg,metalnessMap:Xe,roughnessMap:b,anisotropy:E,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:$e,sheen:he,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:it,specularIntensityMap:Ct,transmission:Ge,transmissionMap:X,thicknessMap:Ce,gradientMap:se,opaque:C.transparent===!1&&C.blending===Vs&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:be,combine:C.combine,mapUv:Pt&&A(C.map.channel),aoMapUv:B&&A(C.aoMap.channel),lightMapUv:Mn&&A(C.lightMap.channel),bumpMapUv:ht&&A(C.bumpMap.channel),normalMapUv:ct&&A(C.normalMap.channel),displacementMapUv:Ye&&A(C.displacementMap.channel),emissiveMapUv:Rt&&A(C.emissiveMap.channel),metalnessMapUv:Xe&&A(C.metalnessMap.channel),roughnessMapUv:b&&A(C.roughnessMap.channel),anisotropyMapUv:Ae&&A(C.anisotropyMap.channel),clearcoatMapUv:Fe&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:ut&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(C.sheenRoughnessMap.channel),specularMapUv:ft&&A(C.specularMap.channel),specularColorMapUv:it&&A(C.specularColorMap.channel),specularIntensityMapUv:Ct&&A(C.specularIntensityMap.channel),transmissionMapUv:X&&A(C.transmissionMap.channel),thicknessMapUv:Ce&&A(C.thicknessMap.channel),alphaMapUv:pe&&A(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ct||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!fe.attributes.uv&&(Pt||pe),fog:!!le,useFog:C.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:K.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Pt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Bi,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)w.push(N),w.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(D(w,C),L(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function D(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const w=T[C.type];let N;if(w){const ee=xi[w];N=Ov.clone(ee.uniforms)}else N=C.uniforms;return N}function G(C,w){let N;for(let ee=0,K=_.length;ee<K;ee++){const le=_[ee];if(le.cacheKey===w){N=le,++N.usedTimes;break}}return N===void 0&&(N=new oE(s,w,C,u),_.push(N)),N}function O(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function F(C){h.remove(C)}function W(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:P,acquireProgram:G,releaseProgram:O,releaseShaderCache:F,programs:_,dispose:W}}function fE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,h){s.get(f)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function dE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,v,S,T,A,y){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:T,renderOrder:x.renderOrder,z:A,group:y},s[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=A,g.group=y),e++,g}function d(x,v,S,T,A,y){const g=f(x,v,S,T,A,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(x,v,S,T,A,y){const g=f(x,v,S,T,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||dE),r.length>1&&r.sort(v||Nm),a.length>1&&a.sort(v||Nm)}function _(){for(let x=e,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:_,sort:m}}function hE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Fm,s.set(r,[f])):a>=u.length?(f=new Fm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new xt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let gE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vE(s){const e=new pE,n=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,u=new Vt,f=new Vt;function d(m){let _=0,x=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,A=0,y=0,g=0,D=0,L=0,P=0,G=0,O=0,F=0;m.sort(_E);for(let C=0,w=m.length;C<w;C++){const N=m[C],ee=N.color,K=N.intensity,le=N.distance,fe=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)_+=ee.r*K,x+=ee.g*K,v+=ee.b*K;else if(N.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(N.sh.coefficients[ae],K);F++}else if(N.isDirectionalLight){const ae=e.get(N);if(ae.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,z=n.get(N);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=N.shadow.matrix,D++}r.directional[S]=ae,S++}else if(N.isSpotLight){const ae=e.get(N);ae.position.setFromMatrixPosition(N.matrixWorld),ae.color.copy(ee).multiplyScalar(K),ae.distance=le,ae.coneCos=Math.cos(N.angle),ae.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ae.decay=N.decay,r.spot[A]=ae;const ce=N.shadow;if(N.map&&(r.spotLightMap[G]=N.map,G++,ce.updateMatrices(N),N.castShadow&&O++),r.spotLightMatrix[A]=ce.matrix,N.castShadow){const z=n.get(N);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[A]=z,r.spotShadowMap[A]=fe,P++}A++}else if(N.isRectAreaLight){const ae=e.get(N);ae.color.copy(ee).multiplyScalar(K),ae.halfWidth.set(N.width*.5,0,0),ae.halfHeight.set(0,N.height*.5,0),r.rectArea[y]=ae,y++}else if(N.isPointLight){const ae=e.get(N);if(ae.color.copy(N.color).multiplyScalar(N.intensity),ae.distance=N.distance,ae.decay=N.decay,N.castShadow){const ce=N.shadow,z=n.get(N);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=N.shadow.matrix,L++}r.point[T]=ae,T++}else if(N.isHemisphereLight){const ae=e.get(N);ae.skyColor.copy(N.color).multiplyScalar(K),ae.groundColor.copy(N.groundColor).multiplyScalar(K),r.hemi[g]=ae,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==S||W.pointLength!==T||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==P||W.numSpotMaps!==G||W.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,W.directionalLength=S,W.pointLength=T,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=P,W.numSpotMaps=G,W.numLightProbes=F,r.version=gE++)}function h(m,_){let x=0,v=0,S=0,T=0,A=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(L.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:d,setupView:h,state:r}}function Om(s){const e=new vE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:f}}function xE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Om(s),e.set(a,[d])):u>=f.length?(d=new Om(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ME(s,e,n){let r=new ed;const a=new At,u=new At,f=new Xt,d=new Xv({depthPacking:ov}),h=new jv,m={},_=n.maxTextureSize,x={[Mr]:On,[On]:Mr,[Bi]:Bi},v=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:yE,fragmentShader:SE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Sn;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Jt(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let g=this.type;this.render=function(O,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(xr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const K=g!==ki&&this.type===ki,le=g===ki&&this.type!==ki;for(let fe=0,ae=O.length;fe<ae;fe++){const ce=O[fe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ue=z.getFrameExtents();if(a.multiply(ue),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,z.mapSize.y=u.y)),z.map===null||K===!0||le===!0){const I=this.type!==ki?{minFilter:hi,magFilter:hi}:{};z.map!==null&&z.map.dispose(),z.map=new es(a.x,a.y,I),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let I=0;I<oe;I++){const re=z.getViewport(I);f.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),ee.viewport(f),z.updateMatrices(ce,I),r=z.getFrustum(),P(F,W,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&D(z,W),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(C,w,N)};function D(O,F){const W=e.update(A);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new es(a.x,a.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,W,v,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,W,S,A,null)}function L(O,F,W,C){let w=null;const N=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)w=N;else if(w=W.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ee=w.uuid,K=F.uuid;let le=m[ee];le===void 0&&(le={},m[ee]=le);let fe=le[K];fe===void 0&&(fe=w.clone(),le[K]=fe,F.addEventListener("dispose",G)),w=fe}if(w.visible=F.visible,w.wireframe=F.wireframe,C===ki?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:x[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ee=s.properties.get(w);ee.light=W}return w}function P(O,F,W,C,w){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const K=e.update(O),le=O.material;if(Array.isArray(le)){const fe=K.groups;for(let ae=0,ce=fe.length;ae<ce;ae++){const z=fe[ae],ue=le[z.materialIndex];if(ue&&ue.visible){const oe=L(O,ue,C,w);O.onBeforeShadow(s,O,F,W,K,oe,z),s.renderBufferDirect(W,null,K,oe,O,z),O.onAfterShadow(s,O,F,W,K,oe,z)}}}else if(le.visible){const fe=L(O,le,C,w);O.onBeforeShadow(s,O,F,W,K,fe,null),s.renderBufferDirect(W,null,K,fe,O,null),O.onAfterShadow(s,O,F,W,K,fe,null)}}const ee=O.children;for(let K=0,le=ee.length;K<le;K++)P(ee[K],F,W,C,w)}function G(O){O.target.removeEventListener("dispose",G);for(const W in m){const C=m[W],w=O.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const EE={[of]:af,[lf]:ff,[uf]:df,[Xs]:cf,[af]:of,[ff]:lf,[df]:uf,[cf]:Xs};function TE(s,e){function n(){let X=!1;const Ce=new Xt;let se=null;const pe=new Xt(0,0,0,0);return{setMask:function(Le){se!==Le&&!X&&(s.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){X=Le},setClear:function(Le,be,rt,It,Kt){Kt===!0&&(Le*=It,be*=It,rt*=It),Ce.set(Le,be,rt,It),pe.equals(Ce)===!1&&(s.clearColor(Le,be,rt,It),pe.copy(Ce))},reset:function(){X=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,se=null,pe=null,Le=null;return{setReversed:function(be){if(Ce!==be){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){se!==be&&!X&&(s.depthMask(be),se=be)},setFunc:function(be){if(Ce&&(be=EE[be]),pe!==be){switch(be){case of:s.depthFunc(s.NEVER);break;case af:s.depthFunc(s.ALWAYS);break;case lf:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case uf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case ff:s.depthFunc(s.GREATER);break;case df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=be}},setLocked:function(be){X=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){X=!1,se=null,pe=null,Le=null,Ce=!1}}}function a(){let X=!1,Ce=null,se=null,pe=null,Le=null,be=null,rt=null,It=null,Kt=null;return{setTest:function(yt){X||(yt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!X&&(s.stencilMask(yt),Ce=yt)},setFunc:function(yt,Pn,En){(se!==yt||pe!==Pn||Le!==En)&&(s.stencilFunc(yt,Pn,En),se=yt,pe=Pn,Le=En)},setOp:function(yt,Pn,En){(be!==yt||rt!==Pn||It!==En)&&(s.stencilOp(yt,Pn,En),be=yt,rt=Pn,It=En)},setLocked:function(yt){X=yt},setClear:function(yt){Kt!==yt&&(s.clearStencil(yt),Kt=yt)},reset:function(){X=!1,Ce=null,se=null,pe=null,Le=null,be=null,rt=null,It=null,Kt=null}}}const u=new n,f=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,L=null,P=null,G=null,O=null,F=new xt(0,0,0),W=0,C=!1,w=null,N=null,ee=null,K=null,le=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ce>=2);let ue=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ie=new Xt().fromArray(I),Q=new Xt().fromArray(re);function de(X,Ce,se,pe){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(X,be),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Ee={};Ee[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),f.setFunc(Xs),ht(!1),ct(kp),xe(s.CULL_FACE),B(xr);function xe(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function we(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Ne(X,Ce){return x[X]!==Ce?(s.bindFramebuffer(X,Ce),x[X]=Ce,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(X,Ce){let se=S,pe=!1;if(X){se=v.get(Ce),se===void 0&&(se=[],v.set(Ce,se));const Le=X.textures;if(se.length!==Le.length||se[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=Le.length;be<rt;be++)se[be]=s.COLOR_ATTACHMENT0+be;se.length=Le.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Pt(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const mt={[qr]:s.FUNC_ADD,[D_]:s.FUNC_SUBTRACT,[U_]:s.FUNC_REVERSE_SUBTRACT};mt[I_]=s.MIN,mt[N_]=s.MAX;const Dt={[F_]:s.ZERO,[O_]:s.ONE,[k_]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[W_]:s.SRC_ALPHA_SATURATE,[V_]:s.DST_COLOR,[z_]:s.DST_ALPHA,[B_]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[G_]:s.ONE_MINUS_DST_COLOR,[H_]:s.ONE_MINUS_DST_ALPHA,[X_]:s.CONSTANT_COLOR,[j_]:s.ONE_MINUS_CONSTANT_COLOR,[Y_]:s.CONSTANT_ALPHA,[q_]:s.ONE_MINUS_CONSTANT_ALPHA};function B(X,Ce,se,pe,Le,be,rt,It,Kt,yt){if(X===xr){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),X!==L_){if(X!==y||yt!==C){if((g!==qr||P!==qr)&&(s.blendEquation(s.FUNC_ADD),g=qr,P=qr),yt)switch(X){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.ONE,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,L=null,G=null,O=null,F.set(0,0,0),W=0,y=X,C=yt}return}Le=Le||Ce,be=be||se,rt=rt||pe,(Ce!==g||Le!==P)&&(s.blendEquationSeparate(mt[Ce],mt[Le]),g=Ce,P=Le),(se!==D||pe!==L||be!==G||rt!==O)&&(s.blendFuncSeparate(Dt[se],Dt[pe],Dt[be],Dt[rt]),D=se,L=pe,G=be,O=rt),(It.equals(F)===!1||Kt!==W)&&(s.blendColor(It.r,It.g,It.b,Kt),F.copy(It),W=Kt),y=X,C=!1}function Mn(X,Ce){X.side===Bi?we(s.CULL_FACE):xe(s.CULL_FACE);let se=X.side===On;Ce&&(se=!se),ht(se),X.blending===Vs&&X.transparent===!1?B(xr):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const pe=X.stencilWrite;d.setTest(pe),pe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function ct(X){X!==R_?(xe(s.CULL_FACE),X!==N&&(X===kp?s.cullFace(s.BACK):X===P_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),N=X}function Ye(X){X!==ee&&(ae&&s.lineWidth(X),ee=X)}function Rt(X,Ce,se){X?(xe(s.POLYGON_OFFSET_FILL),(K!==Ce||le!==se)&&(s.polygonOffset(Ce,se),K=Ce,le=se)):we(s.POLYGON_OFFSET_FILL)}function Xe(X){X?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(X){X===void 0&&(X=s.TEXTURE0+fe-1),ue!==X&&(s.activeTexture(X),ue=X)}function E(X,Ce,se){se===void 0&&(ue===null?se=s.TEXTURE0+fe-1:se=ue);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==X||pe.texture!==Ce)&&(ue!==se&&(s.activeTexture(se),ue=se),s.bindTexture(X,Ce||Ee[X]),pe.type=X,pe.texture=Ce)}function Z(){const X=oe[ue];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(X){Ie.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ie.copy(X))}function ze(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function ft(X,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let pe=se.get(X);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,X.name),se.set(X,pe))}function it(X,Ce){const pe=m.get(Ce).get(X);h.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,X.__bindingPointIndex),h.set(Ce,pe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,oe={},x={},v=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,L=null,P=null,G=null,O=null,F=new xt(0,0,0),W=0,C=!1,w=null,N=null,ee=null,K=null,le=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:xe,disable:we,bindFramebuffer:Ne,drawBuffers:Qe,useProgram:Pt,setBlending:B,setMaterial:Mn,setFlipSided:ht,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:Xe,activeTexture:b,bindTexture:E,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Be,texImage3D:$e,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Ge,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:ze,reset:Ct}}function wE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return S?new OffscreenCanvas(b,E):Il("canvas")}function A(b,E,Z){let me=1;const _e=Xe(b);if((_e.width>Z||_e.height>Z)&&(me=Z/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const he=Math.floor(me*_e.width),Ge=Math.floor(me*_e.height);x===void 0&&(x=T(he,Ge));const Ae=E?T(he,Ge):x;return Ae.width=he,Ae.height=Ge,Ae.getContext("2d").drawImage(b,0,0,he,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ge+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,E,Z,me,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=E;if(E===s.RED&&(Z===s.FLOAT&&(he=s.R32F),Z===s.HALF_FLOAT&&(he=s.R16F),Z===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.R8UI),Z===s.UNSIGNED_SHORT&&(he=s.R16UI),Z===s.UNSIGNED_INT&&(he=s.R32UI),Z===s.BYTE&&(he=s.R8I),Z===s.SHORT&&(he=s.R16I),Z===s.INT&&(he=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(he=s.RG32F),Z===s.HALF_FLOAT&&(he=s.RG16F),Z===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RG8UI),Z===s.UNSIGNED_SHORT&&(he=s.RG16UI),Z===s.UNSIGNED_INT&&(he=s.RG32UI),Z===s.BYTE&&(he=s.RG8I),Z===s.SHORT&&(he=s.RG16I),Z===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Z===s.UNSIGNED_INT&&(he=s.RGB32UI),Z===s.BYTE&&(he=s.RGB8I),Z===s.SHORT&&(he=s.RGB16I),Z===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Z===s.UNSIGNED_INT&&(he=s.RGBA32UI),Z===s.BYTE&&(he=s.RGBA8I),Z===s.SHORT&&(he=s.RGBA16I),Z===s.INT&&(he=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),E===s.RGBA){const Ge=_e?Dl:wt.getTransfer(me);Z===s.FLOAT&&(he=s.RGBA32F),Z===s.HALF_FLOAT&&(he=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(he=Ge===Lt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(b,E){let Z;return b?E===null||E===Jr||E===qs?Z=s.DEPTH24_STENCIL8:E===zi?Z=s.DEPTH32F_STENCIL8:E===Wo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Jr||E===qs?Z=s.DEPTH_COMPONENT24:E===zi?Z=s.DEPTH_COMPONENT32F:E===Wo&&(Z=s.DEPTH_COMPONENT16),Z}function G(b,E){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==hi&&b.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function O(b){const E=b.target;E.removeEventListener("dispose",O),W(E),E.isVideoTexture&&_.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),w(E)}function W(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Z=b.source,me=v.get(Z);if(me){const _e=me[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(b),Object.keys(me).length===0&&v.delete(Z)}r.remove(b)}function C(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const Z=b.source,me=v.get(Z);delete me[E.__cacheKey],f.memory.textures--}function w(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let _e=0;_e<E.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let me=0,_e=Z.length;me<_e;me++){const he=r.get(Z[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(Z[me])}r.remove(b)}let N=0;function ee(){N=0}function K(){const b=N;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),N+=1,b}function le(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function fe(b,E){const Z=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,b,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function ae(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function ce(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function z(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){de(Z,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ue={[mf]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[gf]:s.MIRRORED_REPEAT},oe={[hi]:s.NEAREST,[rv]:s.NEAREST_MIPMAP_NEAREST,[nl]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Ec]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},I={[lv]:s.NEVER,[pv]:s.ALWAYS,[uv]:s.LESS,[ng]:s.LEQUAL,[cv]:s.EQUAL,[hv]:s.GEQUAL,[fv]:s.GREATER,[dv]:s.NOTEQUAL};function re(b,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===Ec||E.magFilter===nl||E.magFilter===Zr||E.minFilter===yi||E.minFilter===Ec||E.minFilter===nl||E.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ue[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hi||E.minFilter!==nl&&E.minFilter!==Zr||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",O));const me=E.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const he=le(E);if(he!==b.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),_e[he].usedTimes++;const Ge=_e[b.__cacheKey];Ge!==void 0&&(_e[b.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),b.__cacheKey=he,b.__webglTexture=_e[he].texture}return Z}function Q(b,E,Z){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ie(b,E),he=E.source;n.bindTexture(me,b.__webglTexture,s.TEXTURE0+Z);const Ge=r.get(he);if(he.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+Z);const Ae=wt.getPrimaries(wt.workingColorSpace),Fe=E.colorSpace===vr?null:wt.getPrimaries(E.colorSpace),ut=E.colorSpace===vr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=A(E.image,!1,a.maxTextureSize);Me=Rt(E,Me);const Be=u.convert(E.format,E.colorSpace),$e=u.convert(E.type);let Je=L(E.internalFormat,Be,$e,E.colorSpace,E.isVideoTexture);re(me,E);let ze;const ft=E.mipmaps,it=E.isVideoTexture!==!0,Ct=Ge.__version===void 0||_e===!0,X=he.dataReady,Ce=G(E,Me);if(E.isDepthTexture)Je=P(E.format===$s,E.type),Ct&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Be,$e,null));else if(E.isDataTexture)if(ft.length>0){it&&Ct&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)ze=ft[se],it?X&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Be,$e,ze.data):n.texImage2D(s.TEXTURE_2D,se,Je,ze.width,ze.height,0,Be,$e,ze.data);E.generateMipmaps=!1}else it?(Ct&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,Me.width,Me.height),X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,$e,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Be,$e,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ft[0].width,ft[0].height,Me.depth);for(let se=0,pe=ft.length;se<pe;se++)if(ze=ft[se],E.format!==di)if(Be!==null)if(it){if(X)if(E.layerUpdates.size>0){const Le=hm(ze.width,ze.height,E.format,E.type);for(const be of E.layerUpdates){const rt=ze.data.subarray(be*Le/ze.data.BYTES_PER_ELEMENT,(be+1)*Le/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,be,ze.width,ze.height,1,Be,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,Me.depth,Be,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,Me.depth,Be,$e,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,ze.width,ze.height,Me.depth,0,Be,$e,ze.data)}else{it&&Ct&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)ze=ft[se],E.format!==di?Be!==null?it?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Be,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ze.width,ze.height,Be,$e,ze.data):n.texImage2D(s.TEXTURE_2D,se,Je,ze.width,ze.height,0,Be,$e,ze.data)}else if(E.isDataArrayTexture)if(it){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,Me.width,Me.height,Me.depth),X)if(E.layerUpdates.size>0){const se=hm(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const Le=Me.data.subarray(pe*se/Me.data.BYTES_PER_ELEMENT,(pe+1)*se/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Be,$e,Le)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(E.isData3DTexture)it?(Ct&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,Me.width,Me.height,Me.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(E.isFramebufferTexture){if(Ct)if(it)n.texStorage2D(s.TEXTURE_2D,Ce,Je,Me.width,Me.height);else{let se=Me.width,pe=Me.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(s.TEXTURE_2D,Le,Je,se,pe,0,Be,$e,null),se>>=1,pe>>=1}}else if(ft.length>0){if(it&&Ct){const se=Xe(ft[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)ze=ft[se],it?X&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Be,$e,ze):n.texImage2D(s.TEXTURE_2D,se,Je,Be,$e,ze);E.generateMipmaps=!1}else if(it){if(Ct){const se=Xe(Me);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,$e,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,Be,$e,Me);y(E)&&g(me),Ge.__version=he.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function de(b,E,Z){if(E.image.length!==6)return;const me=Ie(b,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const he=r.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+Z);const Ge=wt.getPrimaries(wt.workingColorSpace),Ae=E.colorSpace===vr?null:wt.getPrimaries(E.colorSpace),Fe=E.colorSpace===vr||Ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!ut&&!Me?Be[pe]=A(E.image[pe],!0,a.maxCubemapSize):Be[pe]=Me?E.image[pe].image:E.image[pe],Be[pe]=Rt(E,Be[pe]);const $e=Be[0],Je=u.convert(E.format,E.colorSpace),ze=u.convert(E.type),ft=L(E.internalFormat,Je,ze,E.colorSpace),it=E.isVideoTexture!==!0,Ct=he.__version===void 0||me===!0,X=_e.dataReady;let Ce=G(E,$e);re(s.TEXTURE_CUBE_MAP,E);let se;if(ut){it&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,$e.width,$e.height);for(let pe=0;pe<6;pe++){se=Be[pe].mipmaps;for(let Le=0;Le<se.length;Le++){const be=se[Le];E.format!==di?Je!==null?it?X&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,Je,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,Je,ze,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,Je,ze,be.data)}}}else{if(se=E.mipmaps,it&&Ct){se.length>0&&Ce++;const pe=Xe(Be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,Je,ze,Be[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Be[pe].width,Be[pe].height,0,Je,ze,Be[pe].data);for(let Le=0;Le<se.length;Le++){const rt=se[Le].image[pe].image;it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt.width,rt.height,Je,ze,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,rt.width,rt.height,0,Je,ze,rt.data)}}else{it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ze,Be[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Je,ze,Be[pe]);for(let Le=0;Le<se.length;Le++){const be=se[Le];it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Je,ze,be.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,Je,ze,be.image[pe])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),he.__version=_e.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ee(b,E,Z,me,_e,he){const Ge=u.convert(Z.format,Z.colorSpace),Ae=u.convert(Z.type),Fe=L(Z.internalFormat,Ge,Ae,Z.colorSpace),ut=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!ut.__hasExternalTextures){const Be=Math.max(1,E.width>>he),$e=Math.max(1,E.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Fe,Be,$e,E.depth,0,Ge,Ae,null):n.texImage2D(_e,he,Fe,Be,$e,0,Ge,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,ht(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const me=E.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=P(E.stencilBuffer,_e),Ge=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ht(E);ct(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,he,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,b)}else{const me=E.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ge=u.convert(he.format,he.colorSpace),Ae=u.convert(he.type),Fe=L(he.internalFormat,Ge,Ae,he.colorSpace),ut=ht(E);Z&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Fe,E.width,E.height):ct(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe(E.depthTexture,0);const _e=me.__webglTexture,he=ht(E);if(E.depthTexture.format===Gs)ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===$s)ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const E=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=me}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[me],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(b,E,Z){const me=r.get(b);E!==void 0&&Ee(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ne(b)}function Pt(b){const E=b.texture,Z=r.get(b),me=r.get(E);b.addEventListener("dispose",F);const _e=b.textures,he=b.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,f.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ut=r.get(_e[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ct(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=u.convert(Fe.format,Fe.colorSpace),Me=u.convert(Fe.type),Be=L(Fe.internalFormat,ut,Me,Fe.colorSpace,b.isXRRenderTarget===!0),$e=ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Ae][Fe],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(Z.__webglFramebuffer[Ae],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ut=_e[Ae],Me=r.get(ut);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,ut),Ee(Z.__webglFramebuffer,b,ut,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(ut)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,me.__webglTexture),re(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Fe],b,E,s.COLOR_ATTACHMENT0,Ae,Fe);else Ee(Z.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}b.depthBuffer&&Ne(b)}function mt(b){const E=b.textures;for(let Z=0,me=E.length;Z<me;Z++){const _e=E[Z];if(y(_e)){const he=D(b),Ge=r.get(_e).__webglTexture;n.bindTexture(he,Ge),g(he),n.unbindTexture()}}}const Dt=[],B=[];function Mn(b){if(b.samples>0){if(ct(b)===!1){const E=b.textures,Z=b.width,me=b.height;let _e=s.COLOR_BUFFER_BIT;const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(b),Ae=E.length>1;if(Ae)for(let Fe=0;Fe<E.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=r.get(E[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,_e,s.NEAREST),h===!0&&(Dt.length=0,B.length=0,Dt.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Dt.push(he),B.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<E.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=r.get(E[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ut,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ht(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function Rt(b,E){const Z=b.colorSpace,me=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==Ks&&Z!==vr&&(wt.getTransfer(Z)===Lt?(me!==di||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Qe,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function AE(s,e){function n(r,a=vr){let u;const f=wt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ym)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xm)return s.BYTE;if(r===jm)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Yf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===qm)return s.ALPHA;if(r===$m)return s.RGB;if(r===di)return s.RGBA;if(r===Km)return s.LUMINANCE;if(r===Zm)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Qm)return s.RED;if(r===Kf)return s.RED_INTEGER;if(r===Jm)return s.RG;if(r===Zf)return s.RG_INTEGER;if(r===Qf)return s.RGBA_INTEGER;if(r===Al||r===Cl||r===Rl||r===Pl)if(f===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Al)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Al)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_f||r===vf||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===_f)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===Mf||r===Ef)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===Mf)return f===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ef)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If||r===Nf||r===Ff||r===Of)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Tf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Af)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===If)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ff)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Of)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bl||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bl)return f===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eg||r===zf||r===Hf||r===Vf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===bl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===zf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const CE={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Vo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new kn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:RE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jt(new Bl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Qs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",h=1,m=null,_=null,x=null,v=null,S=null,T=null;const A=new bE,y=n.getContextAttributes();let g=null,D=null;const L=[],P=[],G=new At;let O=null;const F=new ei;F.viewport=new Xt;const W=new ei;W.viewport=new Xt;const C=[F,W],w=new Zv;let N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=L[Q];return de===void 0&&(de=new tf,L[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=L[Q];return de===void 0&&(de=new tf,L[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=L[Q];return de===void 0&&(de=new tf,L[Q]=de),de.getHandSpace()};function K(Q){const de=P.indexOf(Q.inputSource);if(de===-1)return;const Ee=L[de];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||f),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function le(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<L.length;Q++){const de=P[Q];de!==null&&(P[Q]=null,L[Q].disconnect(de))}N=null,ee=null,A.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,D=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",le),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),a.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new es(S.framebufferWidth,S.framebufferHeight,{format:di,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?$s:Gs,Ee=y.stencil?qs:Jr);const we={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(we),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new es(v.textureWidth,v.textureHeight,{format:di,type:Gi,depthTexture:new pg(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function fe(Q){for(let de=0;de<Q.removed.length;de++){const Ee=Q.removed[de],xe=P.indexOf(Ee);xe>=0&&(P[xe]=null,L[xe].disconnect(Ee))}for(let de=0;de<Q.added.length;de++){const Ee=Q.added[de];let xe=P.indexOf(Ee);if(xe===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=P.length){P.push(Ee),xe=Ne;break}else if(P[Ne]===null){P[Ne]=Ee,xe=Ne;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const ae=new Y,ce=new Y;function z(Q,de,Ee){ae.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(ce),we=de.projectionMatrix.elements,Ne=Ee.projectionMatrix.elements,Qe=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Dt=(we[9]-1)/we[5],B=(we[8]-1)/we[0],Mn=(Ne[8]+1)/Ne[0],ht=Qe*B,ct=Qe*Mn,Ye=xe/(-B+Mn),Rt=Ye*-B;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=Qe+Ye,b=Pt+Ye,E=ht-Rt,Z=ct+(xe-Rt),me=mt*Pt/b*Xe,_e=Dt*Pt/b*Xe;Q.projectionMatrix.makePerspective(E,Z,me,_e,Xe,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Ee=Q.far;A.texture!==null&&(A.depthNear>0&&(de=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),w.near=W.near=F.near=de,w.far=W.far=F.far=Ee,(N!==w.near||ee!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,ee=w.far),F.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,w.layers.mask=F.layers.mask|W.layers.mask;const xe=Q.parent,we=w.cameras;ue(w,xe);for(let Ne=0;Ne<we.length;Ne++)ue(we[Ne],xe);we.length===2?z(w,F,W):w.projectionMatrix.copy(F.projectionMatrix),oe(Q,w,xe)};function oe(Q,de,Ee){Ee===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Q){h=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let I=null;function re(Q,de){if(_=de.getViewerPose(m||f),T=de,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let Ne=0;Ne<Ee.length;Ne++){const Qe=Ee[Ne];let Pt=null;if(S!==null)Pt=S.getViewport(Qe);else{const Dt=x.getViewSubImage(v,Qe);Pt=Dt.viewport,Ne===0&&(e.setRenderTargetTextures(D,Dt.colorTexture,v.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(D))}let mt=C[Ne];mt===void 0&&(mt=new ei,mt.layers.enable(Ne),mt.viewport=new Xt,C[Ne]=mt),mt.matrix.fromArray(Qe.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Qe.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ne===0&&(w.matrix.copy(mt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(mt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ne=x.getDepthInformation(Ee[0]);Ne&&Ne.isValid&&Ne.texture&&A.init(e,Ne,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=P[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,de,m||f)}I&&I(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ie=new _g;Ie.setAnimationLoop(re),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const Xr=new Mi,DE=new Vt;function UE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,fg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,P)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===On&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===On&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,P=D.envMapRotation;L&&(y.envMap.value=L,Xr.copy(P),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function IE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const P=L.program;r.uniformBlockBinding(D,P)}function m(D,L){let P=a[D.id];P===void 0&&(T(D),P=_(D),a[D.id]=P,D.addEventListener("dispose",y));const G=L.program;r.updateUBOMapping(D,G);const O=e.render.frame;u[D.id]!==O&&(v(D),u[D.id]=O)}function _(D){const L=x();D.__bindingPointIndex=L;const P=s.createBuffer(),G=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function x(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=a[D.id],P=D.uniforms,G=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,F=P.length;O<F;O++){const W=Array.isArray(P[O])?P[O]:[P[O]];for(let C=0,w=W.length;C<w;C++){const N=W[C];if(S(N,O,C,G)===!0){const ee=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let le=0;for(let fe=0;fe<K.length;fe++){const ae=K[fe],ce=A(ae);typeof ae=="number"||typeof ae=="boolean"?(N.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,ee+le,N.__data)):ae.isMatrix3?(N.__data[0]=ae.elements[0],N.__data[1]=ae.elements[1],N.__data[2]=ae.elements[2],N.__data[3]=0,N.__data[4]=ae.elements[3],N.__data[5]=ae.elements[4],N.__data[6]=ae.elements[5],N.__data[7]=0,N.__data[8]=ae.elements[6],N.__data[9]=ae.elements[7],N.__data[10]=ae.elements[8],N.__data[11]=0):(ae.toArray(N.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,L,P,G){const O=D.value,F=L+"_"+P;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const W=G[F];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return G[F]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function T(D){const L=D.uniforms;let P=0;const G=16;for(let F=0,W=L.length;F<W;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,N=C.length;w<N;w++){const ee=C[w],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,fe=K.length;le<fe;le++){const ae=K[le],ce=A(ae),z=P%G,ue=z%ce.boundary,oe=z+ue;P+=ue,oe!==0&&G-oe<ce.storage&&(P+=G-oe),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=P,P+=ce.storage}}}const O=P%G;return O>0&&(P+=G-O),D.__size=P,D.__cache={},this}function A(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const P=f.indexOf(L.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);f=[],a={},u={}}return{bind:h,update:m,dispose:g}}class NE{constructor(e={}){const{canvas:n=gv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=yr,this.toneMappingExposure=1;const P=this;let G=!1,O=0,F=0,W=null,C=-1,w=null;const N=new Xt,ee=new Xt;let K=null;const le=new xt(0);let fe=0,ae=n.width,ce=n.height,z=1,ue=null,oe=null;const I=new Xt(0,0,ae,ce),re=new Xt(0,0,ae,ce);let Ie=!1;const Q=new ed;let de=!1,Ee=!1;const xe=new Vt,we=new Vt,Ne=new Y,Qe=new Xt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Dt(){return W===null?z:1}let B=r;function Mn(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",be,!1),B===null){const j="webgl2";if(B=Mn(j,R),B===null)throw Mn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,ct,Ye,Rt,Xe,b,E,Z,me,_e,he,Ge,Ae,Fe,ut,Me,Be,$e,Je,ze,ft,it,Ct,X;function Ce(){ht=new WS(B),ht.init(),it=new AE(B,ht),ct=new kS(B,ht,e,it),Ye=new TE(B,ht),ct.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Rt=new YS(B),Xe=new fE,b=new wE(B,ht,Ye,Xe,ct,it,Rt),E=new zS(P),Z=new GS(P),me=new ex(B),Ct=new FS(B,me),_e=new XS(B,me,Rt,Ct),he=new $S(B,_e,me,Rt),Je=new qS(B,ct,b),Me=new BS(Xe),Ge=new cE(P,E,Z,ht,ct,Ct,Me),Ae=new UE(P,Xe),Fe=new hE,ut=new xE(ht),$e=new NS(P,E,Z,Ye,he,S,h),Be=new ME(P,he,ct),X=new IE(B,Rt,ct,Ye),ze=new OS(B,ht,Rt),ft=new jS(B,ht,Rt),Rt.programs=Ge.programs,P.capabilities=ct,P.extensions=ht,P.properties=Xe,P.renderLists=Fe,P.shadowMap=Be,P.state=Ye,P.info=Rt}Ce();const se=new LE(P,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ae,ce,!1))},this.getSize=function(R){return R.set(ae,ce)},this.setSize=function(R,j,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,ce=j,n.width=Math.floor(R*z),n.height=Math.floor(j*z),ne===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ae*z,ce*z).floor()},this.setDrawingBufferSize=function(R,j,ne){ae=R,ce=j,z=ne,n.width=Math.floor(R*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,j,ne,ie){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,j,ne,ie),Ye.viewport(N.copy(I).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,j,ne,ie){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,j,ne,ie),Ye.scissor(ee.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){Ye.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let ie=0;if(R){let H=!1;if(W!==null){const Se=W.texture.format;H=Se===Qf||Se===Zf||Se===Kf}if(H){const Se=W.texture.type,Re=Se===Gi||Se===Jr||Se===Wo||Se===qs||Se===qf||Se===$f,Ue=$e.getClearColor(),Oe=$e.getClearAlpha(),et=Ue.r,tt=Ue.g,je=Ue.b;Re?(T[0]=et,T[1]=tt,T[2]=je,T[3]=Oe,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=et,A[1]=tt,A[2]=je,A[3]=Oe,B.clearBufferiv(B.COLOR,0,A))}else ie|=B.COLOR_BUFFER_BIT}j&&(ie|=B.DEPTH_BUFFER_BIT),ne&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",be,!1),$e.dispose(),Fe.dispose(),ut.dispose(),Xe.dispose(),E.dispose(),Z.dispose(),he.dispose(),Ct.dispose(),X.dispose(),Ge.dispose(),se.dispose(),se.removeEventListener("sessionstart",ts),se.removeEventListener("sessionend",Wi),Ei.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Rt.autoReset,j=Be.enabled,ne=Be.autoUpdate,ie=Be.needsUpdate,H=Be.type;Ce(),Rt.autoReset=R,Be.enabled=j,Be.autoUpdate=ne,Be.needsUpdate=ie,Be.type=H}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const j=R.target;j.removeEventListener("dispose",rt),It(j)}function It(R){Kt(R),Xe.remove(R)}function Kt(R){const j=Xe.get(R).programs;j!==void 0&&(j.forEach(function(ne){Ge.releaseProgram(ne)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,ie,H,Se){j===null&&(j=Pt);const Re=H.isMesh&&H.matrixWorld.determinant()<0,Ue=Zo(R,j,ne,ie,H);Ye.setMaterial(ie,Re);let Oe=ne.index,et=1;if(ie.wireframe===!0){if(Oe=_e.getWireframeAttribute(ne),Oe===void 0)return;et=2}const tt=ne.drawRange,je=ne.attributes.position;let st=tt.start*et,Mt=(tt.start+tt.count)*et;Se!==null&&(st=Math.max(st,Se.start*et),Mt=Math.min(Mt,(Se.start+Se.count)*et)),Oe!==null?(st=Math.max(st,0),Mt=Math.min(Mt,Oe.count)):je!=null&&(st=Math.max(st,0),Mt=Math.min(Mt,je.count));const Et=Mt-st;if(Et<0||Et===1/0)return;Ct.setup(H,ie,Ue,ne,Oe);let kt,vt=ze;if(Oe!==null&&(kt=me.get(Oe),vt=ft,vt.setIndex(kt)),H.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*Dt()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(H.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Dt()),H.isLineSegments?vt.setMode(B.LINES):H.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else H.isPoints?vt.setMode(B.POINTS):H.isSprite&&vt.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)vt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,Gt=H._multiDrawCounts,gt=H._multiDrawCount,cn=Oe?me.get(Oe).bytesPerElement:1,ti=Xe.get(ie).currentProgram.getUniforms();for(let Tn=0;Tn<gt;Tn++)ti.setValue(B,"_gl_DrawID",Tn),vt.render(qe[Tn]/cn,Gt[Tn])}else if(H.isInstancedMesh)vt.renderInstances(st,Et,H.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Gt=Math.min(ne.instanceCount,qe);vt.renderInstances(st,Et,Gt)}else vt.render(st,Et)};function yt(R,j,ne){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=On,R.needsUpdate=!0,ns(R,j,ne),R.side=Mr,R.needsUpdate=!0,ns(R,j,ne),R.side=Bi):ns(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),g=ut.get(ne),g.init(j),L.push(g),ne.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),R!==ne&&R.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const ie=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Se=H.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ue=Se[Re];yt(Ue,ne,H),ie.add(Ue)}else yt(Se,ne,H),ie.add(Se)}),L.pop(),g=null,ie},this.compileAsync=function(R,j,ne=null){const ie=this.compile(R,j,ne);return new Promise(H=>{function Se(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){H(R);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Pn=null;function En(R){Pn&&Pn(R)}function ts(){Ei.stop()}function Wi(){Ei.start()}const Ei=new _g;Ei.setAnimationLoop(En),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){Pn=R,se.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},se.addEventListener("sessionstart",ts),se.addEventListener("sessionend",Wi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,j,W),g=ut.get(R,L.length),g.init(j),L.push(g),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Ee),y=Fe.get(R,D.length),y.init(),D.push(y),se.enabled===!0&&se.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Ti(Se,j,-1/0,P.sortObjects)}Ti(R,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ue,oe),mt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,mt&&$e.addToRenderList(y,R),this.info.render.frame++,de===!0&&Me.beginShadows();const ne=g.state.shadowsArray;Be.render(ne,R,j),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,H=y.transmissive;if(g.setupLights(),j.isArrayCamera){const Se=j.cameras;if(H.length>0)for(let Re=0,Ue=Se.length;Re<Ue;Re++){const Oe=Se[Re];wr(ie,H,R,Oe)}mt&&$e.render(R);for(let Re=0,Ue=Se.length;Re<Ue;Re++){const Oe=Se[Re];Tr(y,R,Oe,Oe.viewport)}}else H.length>0&&wr(ie,H,R,j),mt&&$e.render(R),Tr(y,R,j);W!==null&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(P,R,j),Ct.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],de===!0&&Me.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ti(R,j,ne,ie){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ie&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Re=he.update(R),Ue=R.material;Ue.visible&&y.push(R,Re,Ue,ne,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Re=he.update(R),Ue=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Ue)){const Oe=Re.groups;for(let et=0,tt=Oe.length;et<tt;et++){const je=Oe[et],st=Ue[je.materialIndex];st&&st.visible&&y.push(R,Re,st,ne,Qe.z,je)}}else Ue.visible&&y.push(R,Re,Ue,ne,Qe.z,null)}}const Se=R.children;for(let Re=0,Ue=Se.length;Re<Ue;Re++)Ti(Se[Re],j,ne,ie)}function Tr(R,j,ne,ie){const H=R.opaque,Se=R.transmissive,Re=R.transparent;g.setupLightsView(ne),de===!0&&Me.setGlobalState(P.clippingPlanes,ne),ie&&Ye.viewport(N.copy(ie)),H.length>0&&Xi(H,j,ne),Se.length>0&&Xi(Se,j,ne),Re.length>0&&Xi(Re,j,ne),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function wr(R,j,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new es(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Xo:Gi,minFilter:Zr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[ie.id],Re=ie.viewport||N;Se.setSize(Re.z,Re.w);const Ue=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(le),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),mt&&$e.render(ne);const Oe=P.toneMapping;P.toneMapping=yr;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),de===!0&&Me.setGlobalState(P.clippingPlanes,ie),Xi(R,ne,ie),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,st=j.length;je<st;je++){const Mt=j[je],Et=Mt.object,kt=Mt.geometry,vt=Mt.material,qe=Mt.group;if(vt.side===Bi&&Et.layers.test(ie.layers)){const Gt=vt.side;vt.side=On,vt.needsUpdate=!0,$o(Et,ne,ie,kt,vt,qe),vt.side=Gt,vt.needsUpdate=!0,tt=!0}}tt===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}P.setRenderTarget(Ue),P.setClearColor(le,fe),et!==void 0&&(ie.viewport=et),P.toneMapping=Oe}function Xi(R,j,ne){const ie=j.isScene===!0?j.overrideMaterial:null;for(let H=0,Se=R.length;H<Se;H++){const Re=R[H],Ue=Re.object,Oe=Re.geometry,et=ie===null?Re.material:ie,tt=Re.group;Ue.layers.test(ne.layers)&&$o(Ue,j,ne,Oe,et,tt)}}function $o(R,j,ne,ie,H,Se){R.onBeforeRender(P,j,ne,ie,H,Se),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(P,j,ne,ie,R,Se),H.transparent===!0&&H.side===Bi&&H.forceSinglePass===!1?(H.side=On,H.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,H,R,Se),H.side=Mr,H.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,H,R,Se),H.side=Bi):P.renderBufferDirect(ne,j,ie,H,R,Se),R.onAfterRender(P,j,ne,ie,H,Se)}function ns(R,j,ne){j.isScene!==!0&&(j=Pt);const ie=Xe.get(R),H=g.state.lights,Se=g.state.shadowsArray,Re=H.state.version,Ue=Ge.getParameters(R,H.state,Se,j,ne),Oe=Ge.getProgramCacheKey(Ue);let et=ie.programs;ie.environment=R.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,ie.programs=et);let tt=et.get(Oe);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Re)return pi(R,Ue),tt}else Ue.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Ue,P),tt=Ge.acquireProgram(Ue,Oe),et.set(Oe,tt),ie.uniforms=Ue.uniforms;const je=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Me.uniform),pi(R,Ue),ie.needsLights=Hl(R),ie.lightsStateVersion=Re,ie.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function Ko(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ll.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function pi(R,j){const ne=Xe.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Zo(R,j,ne,ie,H){j.isScene!==!0&&(j=Pt),b.resetTextureUnits();const Se=j.fog,Re=ie.isMeshStandardMaterial?j.environment:null,Ue=W===null?P.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ks,Oe=(ie.isMeshStandardMaterial?Z:E).get(ie.envMap||Re),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,Mt=!!ne.morphAttributes.color;let Et=yr;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Et=P.toneMapping);const kt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vt=kt!==void 0?kt.length:0,qe=Xe.get(ie),Gt=g.state.lights;if(de===!0&&(Ee===!0||R!==w)){const jt=R===w&&ie.id===C;Me.setState(ie,R,jt)}let gt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Gt.state.version||qe.outputColorSpace!==Ue||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Oe||ie.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==tt||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==Mt||qe.toneMapping!==Et||qe.morphTargetsCount!==vt)&&(gt=!0):(gt=!0,qe.__version=ie.version);let cn=qe.currentProgram;gt===!0&&(cn=ns(ie,j,H));let ti=!1,Tn=!1,Ar=!1;const bt=cn.getUniforms(),wn=qe.uniforms;if(Ye.useProgram(cn.program)&&(ti=!0,Tn=!0,Ar=!0),ie.id!==C&&(C=ie.id,Tn=!0),ti||w!==R){Ye.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),vv(xe),xv(xe),bt.setValue(B,"projectionMatrix",xe)):bt.setValue(B,"projectionMatrix",R.projectionMatrix),bt.setValue(B,"viewMatrix",R.matrixWorldInverse);const pn=bt.map.cameraPosition;pn!==void 0&&pn.setValue(B,Ne.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Tn=!0,Ar=!0)}if(H.isSkinnedMesh){bt.setOptional(B,H,"bindMatrix"),bt.setOptional(B,H,"bindMatrixInverse");const jt=H.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),bt.setValue(B,"boneTexture",jt.boneTexture,b))}H.isBatchedMesh&&(bt.setOptional(B,H,"batchingTexture"),bt.setValue(B,"batchingTexture",H._matricesTexture,b),bt.setOptional(B,H,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",H._indirectTexture,b),bt.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",H._colorsTexture,b));const hn=ne.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Je.update(H,ne,cn),(Tn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,bt.setValue(B,"receiveShadow",H.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(wn.envMap.value=Oe,wn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),Tn&&(bt.setValue(B,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Qo(wn,Ar),Se&&ie.fog===!0&&Ae.refreshFogUniforms(wn,Se),Ae.refreshMaterialUniforms(wn,ie,z,ce,g.state.transmissionRenderTarget[R.id]),Ll.upload(B,Ko(qe),wn,b)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ll.upload(B,Ko(qe),wn,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(B,"center",H.center),bt.setValue(B,"modelViewMatrix",H.modelViewMatrix),bt.setValue(B,"normalMatrix",H.normalMatrix),bt.setValue(B,"modelMatrix",H.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const jt=ie.uniformsGroups;for(let pn=0,Cr=jt.length;pn<Cr;pn++){const pt=jt[pn];X.update(pt,cn),X.bind(pt,cn)}}return cn}function Qo(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Hl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,ne){Xe.get(R.texture).__webglTexture=j,Xe.get(R.depthTexture).__webglTexture=ne;const ie=Xe.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ne=Xe.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){W=R,O=j,F=ne;let ie=!0,H=null,Se=!1,Re=!1;if(R){const Oe=Xe.get(R);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Oe.__hasExternalTextures)b.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Oe.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const tt=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?H=tt[j][ne]:H=tt[j],Se=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?H=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?H=tt[ne]:H=tt,N.copy(R.viewport),ee.copy(R.scissor),K=R.scissorTest}else N.copy(I).multiplyScalar(z).floor(),ee.copy(re).multiplyScalar(z).floor(),K=Ie;if(Ye.bindFramebuffer(B.FRAMEBUFFER,H)&&ie&&Ye.drawBuffers(R,H),Ye.viewport(N),Ye.scissor(ee),Ye.setScissorTest(K),Se){const Oe=Xe.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,ne)}else if(Re){const Oe=Xe.get(R.texture),et=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,ne||0,et)}C=-1},this.readRenderTargetPixels=function(R,j,ne,ie,H,Se,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){Ye.bindFramebuffer(B.FRAMEBUFFER,Ue);try{const Oe=R.texture,et=Oe.format,tt=Oe.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ie&&ne>=0&&ne<=R.height-H&&B.readPixels(j,ne,ie,H,it.convert(et),it.convert(tt),Se)}finally{const Oe=W!==null?Xe.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,j,ne,ie,H,Se,Re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){const Oe=R.texture,et=Oe.format,tt=Oe.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-ie&&ne>=0&&ne<=R.height-H){Ye.bindFramebuffer(B.FRAMEBUFFER,Ue);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(j,ne,ie,H,it.convert(et),it.convert(tt),0);const st=W!==null?Xe.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,st);const Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _v(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(je),B.deleteSync(Mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ne=0){R.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-ne),H=Math.floor(R.image.width*ie),Se=Math.floor(R.image.height*ie),Re=j!==null?j.x:0,Ue=j!==null?j.y:0;b.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ne,0,0,Re,Ue,H,Se),Ye.unbindTexture()};const Jo=B.createFramebuffer(),ea=B.createFramebuffer();this.copyTextureToTexture=function(R,j,ne=null,ie=null,H=0,Se=null){R.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],j=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(H!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=H,H=0):Se=0);let Re,Ue,Oe,et,tt,je,st,Mt,Et;const kt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(ne!==null)Re=ne.max.x-ne.min.x,Ue=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,et=ne.min.x,tt=ne.min.y,je=ne.isBox3?ne.min.z:0;else{const hn=Math.pow(2,-H);Re=Math.floor(kt.width*hn),Ue=Math.floor(kt.height*hn),R.isDataArrayTexture?Oe=kt.depth:R.isData3DTexture?Oe=Math.floor(kt.depth*hn):Oe=1,et=0,tt=0,je=0}ie!==null?(st=ie.x,Mt=ie.y,Et=ie.z):(st=0,Mt=0,Et=0);const vt=it.convert(j.format),qe=it.convert(j.type);let Gt;j.isData3DTexture?(b.setTexture3D(j,0),Gt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Gt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Gt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),cn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ti=B.getParameter(B.UNPACK_SKIP_PIXELS),Tn=B.getParameter(B.UNPACK_SKIP_ROWS),Ar=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const bt=R.isDataArrayTexture||R.isData3DTexture,wn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const hn=Xe.get(R),jt=Xe.get(j),pn=Xe.get(hn.__renderTarget),Cr=Xe.get(jt.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let pt=0;pt<Oe;pt++)bt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,H,je+pt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,Se,Et+pt)),B.blitFramebuffer(et,tt,Re,Ue,st,Mt,Re,Ue,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||Xe.has(R)){const hn=Xe.get(R),jt=Xe.get(j);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,Jo),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,ea);for(let pn=0;pn<Oe;pn++)bt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,H,je+pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,H),wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,Se,Et+pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,Se),H!==0?B.blitFramebuffer(et,tt,Re,Ue,st,Mt,Re,Ue,B.COLOR_BUFFER_BIT,B.NEAREST):wn?B.copyTexSubImage3D(Gt,Se,st,Mt,Et+pn,et,tt,Re,Ue):B.copyTexSubImage2D(Gt,Se,st,Mt,et,tt,Re,Ue);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Gt,Se,st,Mt,Et,Re,Ue,Oe,vt,qe,kt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Gt,Se,st,Mt,Et,Re,Ue,Oe,vt,kt.data):B.texSubImage3D(Gt,Se,st,Mt,Et,Re,Ue,Oe,vt,qe,kt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,st,Mt,Re,Ue,vt,qe,kt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,st,Mt,kt.width,kt.height,vt,kt.data):B.texSubImage2D(B.TEXTURE_2D,Se,st,Mt,Re,Ue,vt,qe,kt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,cn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ti),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ar),Se===0&&j.generateMipmaps&&B.generateMipmap(Gt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne=null,ie=null,H=0){return R.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],j=arguments[3],H=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ne,ie,H)},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){O=0,F=0,W=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const FE=8617333262e-14,km=5670374419e-17,_r=s=>s*Math.PI/180,Ot=(s,e=4)=>Number(s.toFixed(e)),at=(s,e=0)=>Number.isFinite(Number(s))?Number(s):e,Mg={bandgap:{fields:[["temperature","Sample temperature","K",300,450,1],["current","Probe current","mA",1,50,.1],["voltage","Probe voltage","V",.001,2,.001],["spacing","Probe spacing","m",.001,.1,.001],["correction","Geometric correction F","",.1,5,.01]],calculate(s){const e=at(s.temperature,330),n=at(s.current,12)/1e3,r=at(s.voltage,.184),a=2*Math.PI*at(s.spacing,.02)*(r/Math.max(n,1e-9))*at(s.correction,1),u=2*FE*e*Math.log(Math.max(a,1.0001)*100),f=Math.abs(u)*Math.sqrt((.002/Math.max(r,1e-9))**2+(1e-4/Math.max(n,1e-9))**2),d=[300,320,340,360,380,400].map(h=>({x:h,y:Ot(u*(e/h),4)}));return{value:Ot(u,4),unit:"eV",label:"Band gap Eg",error:Ot(f,4),plot:{xLabel:"Temperature (K)",yLabel:"Eg estimate (eV)",points:d}}}},hall:{fields:[["current","Drive current","A",.01,5,.01],["field","Magnetic field B","T",.001,2,.001],["thickness","Sample thickness","m",1e-4,.01,1e-4],["voltage","Hall voltage VH","mV",-100,100,.01]],calculate(s){const e=at(s.current,.8),n=at(s.field,.16),r=at(s.thickness,.001),a=at(s.voltage,2.4)/1e3,u=a*r/Math.max(e*n,1e-12),f=1/Math.max(Math.abs(u)*1602e-22,1e-30),d=Math.abs(f)*Math.sqrt((.01/Math.max(Math.abs(a),1e-9))**2+(.001/Math.max(e,1e-9))**2),h=[.05,.1,.15,.2,.25,.3].map(m=>({x:m,y:Ot(u*e*m/r*1e3,3)}));return{value:Ot(f/1e20,3),unit:"×10²⁰ m⁻³",secondary:`${u.toExponential(3)} m³/C`,label:"Carrier concentration",error:Ot(d/1e20,3),plot:{xLabel:"Magnetic field (T)",yLabel:"Hall voltage (mV)",points:h}}}},lee:{fields:[["mass","Disc mass","kg",.05,2,.01],["heatCapacity","Disc heat capacity","J/kg K",100,1e3,1],["slope","Cooling slope |dT/dt|","K/s",1e-5,.01,1e-5],["length","Specimen thickness","m",.001,.05,.001],["area","Specimen area","m²",1e-4,.02,1e-4],["hot","Hot disc temperature","°C",40,150,.1],["cold","Cold disc temperature","°C",20,100,.1]],calculate(s){const e=Math.max(at(s.hot,88)-at(s.cold,31),.1),n=at(s.mass,.42)*at(s.heatCapacity,385)*at(s.slope,42e-5)*at(s.length,.006)/(at(s.area,.0028)*e),r=Math.abs(n)*.05,a=[35,45,55,65,75,85].map(u=>({x:u,y:Ot(n*e/Math.max(at(s.hot,88)-u,1),4)}));return{value:Ot(n,4),unit:"W m⁻¹ K⁻¹",label:"Thermal conductivity K",error:Ot(r,4),plot:{xLabel:"Cold disc temperature (°C)",yLabel:"K (W m⁻¹ K⁻¹)",points:a}}}},grating:{fields:[["lineDensity","Grating lines","lines/mm",100,1800,1],["angle","Diffraction angle","°",1,80,.1],["order","Diffraction order","n",1,4,1]],calculate(s){const e=Math.sin(_r(at(s.angle,21.3)))/(at(s.lineDensity,600)*1e3*at(s.order,1))*1e9,n=Math.abs(e)*_r(.1)/Math.max(Math.tan(_r(at(s.angle,21.3))),.01),r=[10,15,20,25,30,35].map(a=>({x:a,y:Ot(Math.sin(_r(a))/(at(s.lineDensity,600)*1e3*at(s.order,1))*1e9,1)}));return{value:Ot(e,2),unit:"nm",label:"Laser wavelength λ",error:Ot(n,2),plot:{xLabel:"Angle (°)",yLabel:"Wavelength (nm)",points:r}}}},brewster:{fields:[["angle","Brewster angle","°",1,89,.1],["wavelength","Laser wavelength","nm",400,700,.1],["incident","Incident intensity","mW",.1,100,.1]],calculate(s){const e=at(s.angle,56.3),n=Math.tan(_r(e)),r=Math.abs(1/Math.cos(_r(e))**2)*_r(.1),a=[40,45,50,55,60,65].map(u=>({x:u,y:Ot(Math.abs(Math.tan(_r(u))-n),3)}));return{value:Ot(n,4),unit:"index",label:"Glass refractive index n",error:Ot(r,4),plot:{xLabel:"Polariser angle (°)",yLabel:"|n(θ) − nB|",points:a}}}},fresnel:{fields:[["aperture","Aperture radius","mm",.2,20,.1],["wavelength","Wavelength","nm",400,700,.1],["distance","Screen distance","cm",1,100,.1]],calculate(s){const e=at(s.aperture,4)/1e3,n=at(s.wavelength,632.8)*1e-9,r=at(s.distance,24)/100,a=e*e/(n*r),u=Math.abs(a)*.03,f=[5,10,20,30,40,50].map(d=>({x:d,y:Ot(e*e/(n*d/100),2)}));return{value:Ot(a,2),unit:"dimensionless",label:"Fresnel number NF",error:Ot(u,2),plot:{xLabel:"Screen distance (cm)",yLabel:"Fresnel number",points:f}}}},stefan:{fields:[["emissivity","Surface emissivity","",.1,1,.01],["area","Radiating area","m²",1e-4,.1,1e-4],["temperature","Emitter temperature","K",290,1200,1],["ambient","Ambient temperature","K",200,400,1]],calculate(s){const e=at(s.emissivity,.92)*km*at(s.area,.012)*(at(s.temperature,480)**4-at(s.ambient,295)**4),n=Math.abs(e)*.02,r=[350,400,450,500,550,600].map(a=>({x:a,y:Ot(at(s.emissivity,.92)*km*at(s.area,.012)*(a**4-at(s.ambient,295)**4),3)}));return{value:Ot(e,4),unit:"W",label:"Net radiated power P",error:Ot(n,4),plot:{xLabel:"Emitter temperature (K)",yLabel:"Power (W)",points:r}}}},hysteresis:{fields:[["amplitude","Field amplitude","kA/m",.1,5,.01],["coercivity","Coercive field","kA/m",.01,2,.01],["remanence","Remanent flux density","T",.01,1.5,.01],["turns","Coil turns","turns",10,500,1]],calculate(s){const e=2*at(s.amplitude,1.2)*at(s.coercivity,.18)*(1+at(s.remanence,.62)),n=Math.abs(e)*.05,r=Array.from({length:25},(a,u)=>{const f=u/24*Math.PI*2;return{x:Ot(at(s.amplitude,1.2)*Math.sin(f),3),y:Ot(at(s.remanence,.62)*Math.sin(f)+at(s.coercivity,.18)*Math.sin(2*f),3)}});return{value:Ot(e,4),unit:"J m⁻³/cycle",label:"Hysteresis loop area W",error:Ot(n,4),plot:{xLabel:"H (kA/m)",yLabel:"B (T)",points:r}}}}};function OE(s,e){return Mg[s].calculate(e)}const Bm=[{id:"bandgap",index:"01",name:"Semiconductor band gap",short:"Four-probe setup",icon:h_,accent:"#79e5c4",category:"Electronic materials",formula:"ρ = 2πs(V/I)F; lnρ = lnρ₀ + Eg/(2kBT)",description:"Measure resistivity at several temperatures and fit the semiconductor band gap."},{id:"hall",index:"02",name:"Hall effect",short:"Carrier density & sign",icon:Np,accent:"#8bb9ff",category:"Electronic materials",formula:"VH = RHIB/t; RH = 1/(nq)",description:"Vary the magnetic field and determine Hall coefficient, carrier density, and sign."},{id:"lee",index:"03",name:"Lee's method",short:"Thermal conductivity",icon:w_,accent:"#ffbd7a",category:"Thermal physics",formula:"K = mc|dT/dt|L/[A(Th − Tc)]",description:"Use a Lee disc cooling slope and steady-state temperatures to find K."},{id:"grating",index:"04",name:"Diffraction grating",short:"Wavelength",icon:A_,accent:"#dc9cff",category:"Optics",formula:"d sinθ = nλ",description:"Rotate the telescope through diffraction orders and calculate laser wavelength."},{id:"brewster",index:"05",name:"Brewster angle",short:"Glass refractive index",icon:Hm,accent:"#f7de77",category:"Optics",formula:"tanθB = n₂/n₁",description:"Minimise p-polarised reflection to measure the refractive index of glass."},{id:"fresnel",index:"06",name:"Fresnel diffraction",short:"Near-field optics",icon:x_,accent:"#74d8f4",category:"Optics",formula:"NF = a²/(λz)",description:"Change aperture and screen distance to explore near-field diffraction."},{id:"stefan",index:"07",name:"Stefan's law",short:"Thermal radiation",icon:__,accent:"#ff8e86",category:"Thermal physics",formula:"P = εσA(T⁴ − Ta⁴)",description:"Compare radiated power against absolute temperature to verify Stefan's law."},{id:"hysteresis",index:"08",name:"Hysteresis / B-H curve",short:"Energy loss",icon:Np,accent:"#a9a7ff",category:"Magnetism",formula:"W = ∮ H dB",description:"Drive a ferromagnetic core through a loop and measure energy loss per cycle."}],nf={bandgap:{temperature:330,current:12,voltage:.184,spacing:.02,correction:1},hall:{current:.8,field:.16,thickness:.001,voltage:2.4},lee:{mass:.42,heatCapacity:385,slope:42e-5,length:.006,area:.0028,hot:88,cold:31},grating:{lineDensity:600,angle:21.3,order:1},brewster:{angle:56.3,wavelength:632.8,incident:1},fresnel:{aperture:4,wavelength:632.8,distance:24},stefan:{emissivity:.92,area:.012,temperature:480,ambient:295},hysteresis:{amplitude:1.2,coercivity:.18,remanence:.62,turns:120}};function kE({experiment:s,values:e,running:n}){const r=Xn.useRef(null);return Xn.useEffect(()=>{const a=r.current;if(!a)return;const u=new Vv,f=new ei(35,1,.1,100);f.position.set(5.2,4.2,6);const d=new NE({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.appendChild(d.domElement);const h=new Vo,m=new xt(s.accent),_=new zo({color:"#16283b",metalness:.25,roughness:.48}),x=new zo({color:"#b8cbd3",metalness:.8,roughness:.25}),v=new zo({color:m,emissive:m,emissiveIntensity:1.7}),S=(C,w,N=_)=>{const ee=new Jt(new Sr(...C),N);return ee.position.set(...w),h.add(ee),ee};if(S([6.5,.16,4],[0,-.2,0],new zo({color:"#182d3e"})),s.id==="bandgap"){S([2.4,.35,1.35],[-1,.35,0]),S([1.9,.12,1],[-1,.6,0],x);for(let C=0;C<4;C+=1){const w=new Jt(new Qr(.06,.06,.55,16),v);w.position.set(-1.65+C*.44,.9,0),h.add(w)}S([1.2,1,.6],[1.25,.55,.1]),S([.75,.4,.04],[1.25,.7,-.22],v)}else if(s.id==="hall"){S([2.8,.2,1.4],[-.8,.35,0],x),S([1.7,.25,.55],[-.8,.65,0],v);const w=S([.45,1.2,1.2],[-2.1,.65,0],_).clone();w.position.x=.5,h.add(w);const N=new Qv(new Y(1,0,0),new Y(-1.8,1.4,0),2,m,.25,.15);h.add(N)}else if(s.id==="lee"){const C=new Jt(new Qr(.9,.9,.18,48),x);C.rotation.x=Math.PI/2,C.position.set(-.7,.7,0),h.add(C);const w=C.clone();w.position.y=1.05,h.add(w),S([1.9,.18,1.9],[-.7,1.36,0],v);const N=new Jt(new Qr(.08,.08,1.3,16),v);N.position.set(1.25,.65,0),h.add(N)}else if(s.id==="grating"){S([1.4,.28,.35],[-2,.5,0],v);const C=new Jt(new Qr(.035,.035,3.2,12),v);C.rotation.z=Math.PI/2,C.position.set(-.3,.5,0),h.add(C);const w=new Jt(new Sr(.08,1.4,1.7),x);w.position.set(1,.65,0),h.add(w);for(let N=-4;N<=4;N+=1){const ee=new Ho(new Sn().setFromPoints([new Y(1.05,.65,0),new Y(2.7,.65+N*.18,0)]),new zs({color:m}));h.add(ee)}}else if(s.id==="brewster"){S([2,.25,1.4],[-.5,.3,0],x);const C=new Jt(new Sr(1.5,.12,1.2),v);C.rotation.z=BE(e.angle-45),C.position.set(-.5,.55,0),h.add(C);const w=new Ho(new Sn().setFromPoints([new Y(-2,1.8,0),new Y(-.5,.6,0),new Y(1.7,.6,0)]),new zs({color:m,linewidth:2}));h.add(w)}else if(s.id==="fresnel"){S([.3,1.6,1.5],[-1.4,.7,0],v);const C=S([.12,2,2],[1.5,.9,0],x);for(let w=-5;w<=5;w+=1){const N=new Ho(new Sn().setFromPoints([new Y(-1.2,.7,0),new Y(1.45,.9+w*.12,0)]),new zs({color:m,transparent:!0,opacity:.55}));h.add(N)}C.material=new zo({color:m,emissive:m,emissiveIntensity:.45,transparent:!0,opacity:.32})}else if(s.id==="stefan"){const C=new Jt(new td(.65,32,32),v);C.position.set(-.8,.75,0),h.add(C);for(let w=0;w<8;w+=1){const N=new Ho(new Sn().setFromPoints([new Y(-.2,.75,0),new Y(1.8,.75+(w-4)*.22,0)]),new zs({color:m,transparent:!0,opacity:.7}));h.add(N)}S([1,1.1,1],[1.2,.55,0],_)}else{S([1.3,.9,.9],[0,.65,0],x);const C=new Jt(new nd(1.1,.1,16,64),v);C.rotation.x=Math.PI/2,C.position.set(0,.65,0),h.add(C),S([.9,1.2,.8],[-1.7,.7,0]),S([.9,1.2,.8],[1.7,.7,0])}u.add(h),u.add(new Yv("#d5efff","#172235",2.4));const T=new Kv(m,3);T.position.set(4,5,4),u.add(T);const A=()=>{const C=a.clientWidth,w=a.clientHeight;f.aspect=C/w,f.updateProjectionMatrix(),d.setSize(C,w,!1)};A(),window.addEventListener("resize",A);let y=0,g=!1,D=0,L=0;const P=C=>{g=!0,D=C.clientX,L=C.clientY,d.domElement.setPointerCapture(C.pointerId)},G=C=>{g&&(h.rotation.y+=(C.clientX-D)*.01,h.rotation.x=Math.max(-.55,Math.min(.55,h.rotation.x+(C.clientY-L)*.006)),D=C.clientX,L=C.clientY)},O=()=>{g=!1},F=C=>{C.preventDefault(),f.position.z=Math.max(3.8,Math.min(9,f.position.z+C.deltaY*.004))};d.domElement.addEventListener("pointerdown",P),d.domElement.addEventListener("pointermove",G),d.domElement.addEventListener("pointerup",O),d.domElement.addEventListener("pointercancel",O),d.domElement.addEventListener("wheel",F,{passive:!1});const W=()=>{n&&!g&&(h.rotation.y+=.003),d.render(u,f),y=requestAnimationFrame(W)};return W(),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",A),d.domElement.removeEventListener("pointerdown",P),d.domElement.removeEventListener("pointermove",G),d.domElement.removeEventListener("pointerup",O),d.domElement.removeEventListener("pointercancel",O),d.domElement.removeEventListener("wheel",F),d.dispose(),a.removeChild(d.domElement)}},[s.id,e.angle,n]),J.jsx("div",{ref:r,className:"three-canvas","aria-label":`${s.name} interactive apparatus`})}function BE(s){return s*Math.PI/180}function zE({plot:s,accent:e}){const n=Math.max(...s.points.map(m=>m.x)),r=Math.min(...s.points.map(m=>m.x)),a=Math.max(...s.points.map(m=>m.y),0),u=Math.min(...s.points.map(m=>m.y),0),f=m=>8+(m-r)/Math.max(n-r,1e-9)*84,d=m=>88-(m-u)/Math.max(a-u,1e-9)*76,h=s.points.map(m=>`${f(m.x)},${d(m.y)}`).join(" ");return J.jsxs("div",{className:"plot-wrap",children:[J.jsxs("svg",{viewBox:"0 0 100 100",role:"img","aria-label":`${s.yLabel} against ${s.xLabel}`,children:[J.jsx("path",{d:"M8 5V88H96",fill:"none",stroke:"#385169",strokeWidth:".6"}),J.jsx("polyline",{points:h,fill:"none",stroke:e,strokeWidth:"2",vectorEffect:"non-scaling-stroke"}),J.jsx("g",{fill:e,children:s.points.map(m=>J.jsx("circle",{cx:f(m.x),cy:d(m.y),r:"1.5"},`${m.x}-${m.y}`))})]}),J.jsxs("div",{className:"plot-axis",children:[J.jsx("span",{children:s.xLabel}),J.jsx("span",{children:s.yLabel})]})]})}function HE({spec:s,value:e,onChange:n}){const[r,a,u,f,d,h]=s;return J.jsxs("label",{className:"field",children:[J.jsxs("span",{children:[a,u&&J.jsx("small",{children:u})]}),J.jsx("input",{"aria-label":a,type:"number",min:f,max:d,step:h,value:e,onChange:m=>n(r,m.target.value)}),J.jsx("input",{"aria-label":`${a} slider`,className:"range",type:"range",min:f,max:d,step:h,value:e,onChange:m=>n(r,m.target.value)})]})}function VE(){const[s,e]=Xn.useState("bandgap"),[n,r]=Xn.useState(nf.bandgap),[a,u]=Xn.useState([]),[f,d]=Xn.useState(!0),[h,m]=Xn.useState(!1),_=Bm.find(D=>D.id===s),x=Mg[s],v=OE(s,n),S=Xn.useMemo(()=>Bm.reduce((D,L)=>{var P;return(D[P=L.category]||(D[P]=[])).push(L),D},{}),[]),T=(D,L)=>r(P=>({...P,[D]:Number(L)})),A=D=>{e(D),r({...nf[D]}),u([]),m(!1)},y=()=>u(D=>[...D,{...v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),g=_.icon;return J.jsxs("div",{className:"app-shell",children:[J.jsxs("aside",{className:`sidebar ${h?"open":""}`,children:[J.jsxs("div",{className:"brand",children:[J.jsx("div",{className:"brand-mark",children:J.jsx(g_,{size:18})}),J.jsxs("div",{children:[J.jsxs("strong",{children:["ORBIT",J.jsx("span",{children:"LAB"})]}),J.jsx("small",{children:"Physics virtual laboratory"})]}),J.jsx("button",{className:"close-menu",onClick:()=>m(!1),children:J.jsx(C_,{size:18})})]}),J.jsxs("div",{className:"side-label",children:["EXPERIMENTS ",J.jsx("span",{children:"08"})]}),J.jsx("nav",{children:Object.entries(S).map(([D,L])=>J.jsxs("div",{className:"nav-group",children:[J.jsx("p",{children:D}),L.map(P=>{const G=P.icon;return J.jsxs("button",{className:s===P.id?"active":"",onClick:()=>A(P.id),children:[J.jsx("span",{className:"nav-index",children:P.index}),J.jsx(G,{size:16}),J.jsxs("span",{children:[P.name,J.jsx("small",{children:P.short})]}),s===P.id&&J.jsx(Fp,{className:"nav-arrow",size:16})]},P.id)})]},D))}),J.jsxs("div",{className:"sidebar-bottom",children:[J.jsxs("button",{children:[J.jsx(p_,{size:16})," Lab manual"]}),J.jsxs("button",{children:[J.jsx(m_,{size:16})," How it works"]})]})]}),J.jsxs("main",{className:"main",children:[J.jsxs("header",{className:"topbar",children:[J.jsx("button",{className:"menu-button",onClick:()=>m(!0),children:J.jsx(y_,{size:20})}),J.jsxs("div",{className:"breadcrumb",children:[J.jsxs("span",{children:["LAB ",_.index]}),J.jsx(Fp,{size:14}),J.jsx("b",{children:_.name})]}),J.jsxs("div",{className:"top-actions",children:[J.jsxs("span",{className:`session ${f?"live":""}`,children:[J.jsx("i",{})," ",f?"simulation live":"simulation paused"]}),J.jsx("button",{className:"icon-button","aria-label":"Help",children:J.jsx(v_,{size:18})})]})]}),J.jsxs("div",{className:"content",children:[J.jsxs("section",{className:"intro",children:[J.jsxs("div",{children:[J.jsxs("div",{className:"title-line",children:[J.jsx("div",{className:"experiment-icon",style:{color:_.accent,background:`${_.accent}18`},children:J.jsx(g,{size:20})}),J.jsxs("span",{className:"eyebrow",children:["B.TECH PHYSICS · ",_.category.toUpperCase()]})]}),J.jsx("h1",{children:_.name}),J.jsx("p",{children:_.description})]}),J.jsxs("div",{className:"intro-actions",children:[J.jsxs("button",{className:"ghost-button",onClick:()=>d(D=>!D),children:[J.jsx(S_,{size:16,fill:f?"currentColor":"none"})," ",f?"Pause simulation":"Run simulation"]}),J.jsxs("button",{className:"primary-button",onClick:()=>r({...nf[s]}),children:[J.jsx(Op,{size:16})," Reset inputs"]})]})]}),J.jsxs("div",{className:"workspace-grid",children:[J.jsxs("div",{className:"left-column",children:[J.jsxs("div",{className:"apparatus",children:[J.jsxs("div",{className:"apparatus-top",children:[J.jsx("span",{className:"eyebrow",children:"EXPERIMENT-SPECIFIC 3D BENCH"}),J.jsxs("span",{className:"scene-status",children:[J.jsx("i",{})," ",f?"interactive":"paused"]})]}),J.jsxs("div",{className:"scene",children:[J.jsx(kE,{experiment:_,values:n,running:f}),J.jsxs("div",{className:"scene-overlay",children:[J.jsxs("span",{className:"scene-caption",children:[J.jsx("strong",{children:_.name}),J.jsx("small",{children:"Drag-ready procedural apparatus · no external assets"})]}),J.jsxs("span",{className:"scene-readout",children:[v.value,J.jsx("small",{children:v.unit})]})]})]}),J.jsxs("div",{className:"apparatus-footer",children:[J.jsxs("span",{children:[J.jsx("i",{className:"dot cyan"})," Scene changes with experiment"]}),J.jsxs("span",{children:[J.jsx("i",{className:"dot amber"})," Inputs are editable"]}),J.jsxs("button",{onClick:()=>d(!1),children:[J.jsx(Op,{size:14})," Pause orbit"]})]})]}),J.jsxs("section",{className:"panel measurement-panel",children:[J.jsxs("div",{className:"panel-heading",children:[J.jsxs("div",{children:[J.jsx("span",{className:"eyebrow",children:"OBSERVATION GRAPH"}),J.jsx("h2",{children:v.plot.yLabel})]}),J.jsxs("span",{className:"record-count",children:[a.length.toString().padStart(2,"0")," readings"]})]}),J.jsx(zE,{plot:v.plot,accent:_.accent}),J.jsxs("div",{className:"reading-table",children:[J.jsxs("div",{className:"table-head",children:[J.jsx("span",{children:"Reading"}),J.jsx("span",{children:"Result"}),J.jsx("span",{children:"Error"})]}),a.length?a.slice(-5).reverse().map((D,L)=>J.jsxs("div",{className:"table-row",children:[J.jsxs("span",{children:[J.jsx("i",{style:{background:_.accent}})," #",a.length-L]}),J.jsxs("span",{children:[D.value," ",D.unit]}),J.jsxs("span",{children:["± ",D.error]})]},`${D.time}-${L}`)):J.jsxs("div",{className:"empty-row",children:[J.jsx(T_,{size:16})," Enter values, then record observations to build your table."]})]})]})]}),J.jsxs("div",{className:"right-column",children:[J.jsxs("section",{className:"panel controls-panel",children:[J.jsxs("div",{className:"panel-heading",children:[J.jsxs("div",{children:[J.jsx("span",{className:"eyebrow",children:"MEASUREMENT INPUTS"}),J.jsx("h2",{children:"Enter apparatus readings"})]}),J.jsx(E_,{size:18})]}),J.jsx("div",{className:"field-stack",children:x.fields.map(D=>J.jsx(HE,{spec:D,value:n[D[0]],onChange:T},D[0]))}),J.jsxs("div",{className:"formula-box",children:[J.jsx("span",{children:"Working equation"}),J.jsx("strong",{children:_.formula}),J.jsx("small",{children:"Computed from your entered values. Error is a first-order estimate from instrument uncertainty."})]}),J.jsxs("div",{className:"result-row",children:[J.jsxs("div",{children:[J.jsx("span",{children:v.label}),J.jsxs("strong",{children:[v.value," ",J.jsx("small",{children:v.unit})]}),J.jsxs("em",{className:"error",children:["± ",v.error," ",v.unit]}),v.secondary&&J.jsx("small",{className:"secondary",children:v.secondary})]}),J.jsxs("button",{className:"primary-button",onClick:y,children:[J.jsx(M_,{size:16})," Record observation"]})]})]}),J.jsxs("section",{className:"panel notes-panel",children:[J.jsxs("div",{className:"panel-heading",children:[J.jsxs("div",{children:[J.jsx("span",{className:"eyebrow",children:"PROCEDURE GUIDE"}),J.jsx("h2",{children:"Observe the trend"})]}),J.jsx(Hm,{size:17})]}),J.jsx("p",{children:"These interactions follow the standard apparatus flow shown in undergraduate virtual-lab demonstrations: set one instrument, observe the response, record a reading, and compare the graph with the theory."}),J.jsxs("div",{className:"tip",children:[J.jsx("span",{children:"01"}),J.jsx("b",{children:"Change one variable"}),J.jsx("small",{children:"Keep other readings fixed to see a clean relationship."})]}),J.jsxs("div",{className:"tip",children:[J.jsx("span",{children:"02"}),J.jsx("b",{children:"Record multiple observations"}),J.jsx("small",{children:"Use at least three readings before interpreting a slope or loop."})]})]})]})]})]})]})]})}typeof document<"u"&&u_.createRoot(document.getElementById("root")).render(J.jsx(VE,{}));
