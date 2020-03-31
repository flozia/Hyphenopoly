/**
 * @license Hyphenopoly_Loader 4.2.1 - client side hyphenation
 * ©2020  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */
((e,t,s,n)=>{"use strict";const a=sessionStorage,r="Hyphenopoly_Loader.js",l=new Map,i=()=>n.create(null),o="appendChild",p="createElement",c="createTextNode",d=(e,t)=>n.keys(e).forEach(t);s.cacheFeatureTests&&a.getItem(r)?s.cf=JSON.parse(a.getItem(r)):s.cf={langs:i(),pf:!1},(()=>{const e=t.currentScript.src.replace(r,""),n=e+"patterns/";s.paths?(s.paths.maindir=s.paths.maindir||e,s.paths.patterndir=s.paths.patterndir||n):s.paths={maindir:e,patterndir:n}})(),s.setup?(s.setup.CORScredentials=s.setup.CORScredentials||"include",s.setup.hide=s.setup.hide||"all",s.setup.selectors=s.setup.selectors||{".hyphenate":{}},s.setup.timeout=s.setup.timeout||1e3):s.setup={CORScredentials:"include",hide:"all",selectors:{".hyphenate":{}},timeout:1e3},s.setup.hide=new Map([["all",1],["element",2],["text",3]]).get(s.setup.hide)||0,d(s.require,e=>{const t=s.fallbacks&&s.fallbacks[e]||e;l.set(e.toLowerCase(),new Map([["fn",t],["wo",s.require[e]]]))}),s.defProm=()=>{let e=null,t=null;const s=new Promise((s,n)=>{e=s,t=n});return s.resolve=e,s.reject=t,s},s.hide=(e,n)=>{const a="H9Y_Styles";if(0===e){const e=t.getElementById(a);e&&e.remove()}else{const e="{visibility:hidden!important}",r=t[p]("style");let l="";r.id=a,1===n?l="html"+e:d(s.setup.selectors,t=>{l+=2===n?t+e:t+"{color:transparent!important}"}),r[o](t[c](l)),t.head[o](r)}};const h=(()=>{let e=null;const n="hyphens:auto",a=`visibility:hidden;-webkit-${n};-ms-${n};${n};width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal`;return{ap:()=>e?(t.documentElement[o](e),e):null,cl:()=>{e&&e.remove()},cr:n=>{if(s.cf.langs[n])return;e=e||t[p]("body");const r=t[p]("div");r.lang=n,r.style.cssText=a,r[o](t[c](l.get(n).get("wo").toLowerCase())),e[o](r)}}})();s.res=new Map([["he",new Map]]);const u=new Map;function f(t){const n=l.get(t).get("fn")+".wasm";if(s.cf.pf=!0,s.cf.langs[t]="H9Y",u.has(n)){const e=s.res.get("he").get(u.get(n));e.c+=1,s.res.get("he").set(t,e)}else s.res.get("he").set(t,{c:1,w:e.fetch(s.paths.patterndir+n,{credentials:s.setup.CORScredentials})}),u.set(n,t)}l.forEach((e,t)=>{"FORCEHYPHENOPOLY"===e.get("wo")||"H9Y"===s.cf.langs[t]?f(t):h.cr(t)});const m=h.ap();if(m){m.querySelectorAll("div").forEach(e=>{var t;"auto"===((t=e.style).hyphens||t.webkitHyphens||t.msHyphens)&&e.offsetHeight>12?s.cf.langs[e.lang]="CSS":f(e.lang)}),h.cl()}const g=s.handleEvent;if(s.cf.pf){s.res.set("DOM",new Promise(e=>{"loading"===t.readyState?t.addEventListener("DOMContentLoaded",e,{once:!0,passive:!0}):e()})),1===s.setup.hide&&s.hide(1,1),0!==s.setup.hide&&(s.timeOutHandler=e.setTimeout(()=>{s.hide(0,null),console.info(r+" timed out.")},s.setup.timeout)),s.res.get("DOM").then(()=>{s.setup.hide>1&&s.hide(1,s.setup.hide)});const n=t[p]("script");n.src=s.paths.maindir+"Hyphenopoly.js",t.head[o](n),s.hyphenators=i(),d(s.cf.langs,e=>{"H9Y"===s.cf.langs[e]&&(s.hyphenators[e]=s.defProm())}),g&&g.polyfill&&g.polyfill()}else g&&g.tearDown&&g.tearDown(),e.Hyphenopoly=null;s.cacheFeatureTests&&a.setItem(r,JSON.stringify(s.cf))})(window,document,Hyphenopoly,Object);