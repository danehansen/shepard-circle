(this["webpackJsonpshepard-wheel"]=this["webpackJsonpshepard-wheel"]||[]).push([[0],{1:function(e,t,n){e.exports={root:"Menu_root__3QA5H",property:"Menu_property__qoOWz",title:"Menu_title__tE_9H",reset:"Menu_reset__uN5da",label:"Menu_label__3hKMT",wide:"Menu_wide__2sfIP",labelText:"Menu_labelText__2uoMn",input:"Menu_input__17q9X",verticalRangeHolder:"Menu_verticalRangeHolder__2TdXL",verticalRange:"Menu_verticalRange__3aZoM"}},10:function(e,t,n){e.exports={root:"PitchLabel_root__3-xxj",button:"PitchLabel_button__29U3k",small:"PitchLabel_small__3x-Zk",deemphesized:"PitchLabel_deemphesized__Gd1GB"}},14:function(e,t,n){e.exports={root:"ChordLabel_root__U_GCi",button:"ChordLabel_button__3bTYZ"}},19:function(e,t,n){e.exports={root:"Display_root__ig8ld"}},22:function(e,t,n){e.exports={root:"TouchPad_root__22wzt"}},29:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(18),l=n.n(c),o=(n(29),n(5)),r=n(3),s=n(8),u=n.n(s),h=n(19),d=n.n(h),v=n(6),b=n.n(v),f=n(20),m=n(21);function j(e,t,n,a,i){var c=Math.cos(e),l=Math.sin(e),o=t-c*t-l*-n,r=n-l*t-c*n;i.call(a,c,l,-l,c,o,r)}var p=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("canvas"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.offsetWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.offsetHeight,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.devicePixelRatio;Object(f.a)(this,e),this.resize=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio;if(!e||!n){var i=!!t._element.parentNode;e=i?t._element.offsetWidth:t._width,n=i?t._element.offsetHeight:t._height}t._devicePixelRatio=a,t._width=e,t._height=n,t._element.width=e*t._devicePixelRatio,t._element.height=n*t._devicePixelRatio,t._imageDataHandler=null,t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.arc=function(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t._context.arc(e,n,a,i,c,l)},this.beginPath=function(){t._context.beginPath()},this.bezierCurveTo=function(){var e;(e=t._context).bezierCurveTo.apply(e,arguments)},this.clearRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.clearRect(e,n,a,i),t._imageDataHandler=null},this.clip=function(){var e;(e=t._context).clip.apply(e,arguments)},this.closePath=function(){t._context.closePath()},this.drawImage=function(n,a,i,c,l,o,r,s,u){var h=n instanceof e;"number"===typeof o?h?(a*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,l*=t._devicePixelRatio,t._context.drawImage(n.element,a,i,c,l,o,r,s,u)):t._context.drawImage(n,a,i,c,l,o,r,s,u):h?(c=c||n.width,l=l||n.height,t._drawImageDest(n.element,a,i,c,l)):t._drawImageDest(n,a,i,c,l),t._imageDataHandler=null},this._drawImageDest=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.width,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.height;t._context.drawImage(e,n,a,i,c)},this.fill=function(){var e;(e=t._context).fill.apply(e,arguments),t._imageDataHandler=null},this.fillRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.fillRect(e,n,a,i),t._imageDataHandler=null},this.lineTo=function(){var e;(e=t._context).lineTo.apply(e,arguments)},this.moveTo=function(){var e;(e=t._context).moveTo.apply(e,arguments)},this.quadraticCurveTo=function(){var e;(e=t._context).quadraticCurveTo.apply(e,arguments)},this.rect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.rect(e,n,a,i)},this.stroke=function(){var e;(e=t._context).stroke.apply(e,arguments),t._imageDataHandler=null},this.resetTransform=function(){t._context.resetTransform(),t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.restore=function(){t._context.restore()},this.rotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;e&&j(e,n,a,t._context,t._context.transform)},this.save=function(){t._context.save()},this.setRotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;j(e,n,a,t._context,t.setTransform)},this.setTransform=function(e,n,a,i,c,l){e*=t._devicePixelRatio,n*=t._devicePixelRatio,a*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,l*=t._devicePixelRatio,t._context.setTransform(e,n,a,i,c,l)},this.setTranslate=function(e,n){t.setTransform(1,0,0,1,e,n)},this.translate=function(e,n){t._context.translate(e,n)},this.createImageData=function(e,n){return t._context.createImageData(e,n)},this._element=n,this._context=this._element.getContext("2d"),this.resize(a,i,c)}return Object(m.a)(e,[{key:"element",get:function(){return this._element}},{key:"height",get:function(){return this._height}},{key:"imageDataHandler",get:function(){return this._imageDataHandler}},{key:"width",get:function(){return this._width}},{key:"fillStyle",set:function(e){this._context.fillStyle=e}},{key:"globalCompositeOperation",set:function(e){this._context.globalCompositeOperation=e}},{key:"globalAlpha",set:function(e){this._context.globalAlpha=e}},{key:"lineWidth",set:function(e){this._context.lineWidth=e}},{key:"strokeStyle",set:function(e){this._context.strokeStyle=e}}],[{key:"quadraticThrough",value:function(e){for(var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Path2D,i=e.length,c=0;c<i-1;c++)if(t=n||e[0],n=e[c+1],0===c)a.moveTo(t.x,t.y);else if(c<i-2){var l=(t.x+n.x)/2,o=(t.y+n.y)/2;a.quadraticCurveTo(t.x,t.y,l,o)}else a.quadraticCurveTo(t.x,t.y,n.x,n.y);return a}}]),e}(),x=n(4);function O(e){var t=2*Math.PI,n=function(e){return e*Math.PI/180}(-e)+.25*t;return Object(x.modulo)(n,t)}function g(e){var t=function(e){return 180*e/Math.PI}(-e);return Object(x.modulo)(t+90,360)}var _=[32,64,128,256,512,1024,2048,4096,8192,16384],y=2*Math.PI,I=[{name:"(none)",chords:[]},{name:"I ionian (major)",chords:["I",null,"ii",null,"iii","IV",null,"V",null,"vi",null,"vii\xba"]},{name:"II dorian",chords:["i",null,"ii","III",null,"IV",null,"v",null,"vi\xba","VII",null]},{name:"III phrygian",chords:["i","II",null,"III",null,"iv",null,"v\xba","VI",null,"vii",null]},{name:"IV lydian",chords:["I",null,"II",null,"iii",null,"iv\xba ","V",null,"vi",null,"vii"]},{name:"V mixolydian",chords:["I",null,"ii",null,"iii\xba","IV",null,"v",null,"vi","VII",null]},{name:"VI aeolian (minor)",chords:["i",null,"ii\xba","III",null,"iv",null,"v","VI",null,"VII",null]},{name:"VII locrian",chords:["i\xba","II",null,"iii",null,"iv","V",null,"VI",null,"vii",null]},{name:"major pentatonic",chords:["I",null,"ii",null,"iii",null,null,"V",null,"vi",null,null]},{name:"minor pentatonic",chords:["i",null,null,"III",null,"iv",null,"v",null,null,"VII",null]},{name:"blues major",chords:["I",null,"ii",null,null,"IV",null,"v",null,"vi",null,null]},{name:"blues minor",chords:["i",null,null,"III",null,"iv",null,null,"VI",null,"vii",null]},{name:"egyptian",chords:["i",null,"ii",null,null,"IV",null,"v",null,null,"VII",null]}],M="sine",w="square",N="sawtooth",S="triangle";function k(e){e-=.25*y;var t=y/3,n=Math.cos(-e),a=Math.cos(-e-t),i=Math.cos(-e+t);return{r:Math.round(255*n*.5+127.5),g:Math.round(255*a*.5+127.5),b:Math.round(255*i*.5+127.5)}}function T(e){return Math.atan2(-Math.sin(e),Math.cos(e))}function P(e,t,n,a,i,c,l,o){var r=n/2,s=Object(x.modulo)(a,y)===Object(x.modulo)(i,y);if(e.beginPath(),e.fillStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),s)e.arc(r,r,r*c,0,y);else{var u=Math.cos(a),h=Math.sin(a);e.moveTo(r+u*r*l,r+h*-r*l),e.lineTo(r+u*r*c,r+h*-r*c),e.arc(r,r,r*c,T(a),T(i),!0),u=Math.cos(i),h=Math.sin(i),e.moveTo(r+u*r*c,r+h*-r*c),e.lineTo(r+u*r*l,r+h*-r*l),e.arc(r,r,r*l,T(i),T(a),!1)}e.fill(),s&&(e.beginPath(),e.globalCompositeOperation="destination-out",e.arc(r,r,r*l,0,y),e.fill(),e.globalCompositeOperation="source-over")}var C=12,R=["A","A\u266f/B\u266d","B","C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d"];function E(e,t){return e*Math.pow(Math.pow(2,1/C),t/100)}var q={415:"baroque",427:"classical",428:"classical",429:"classical",430:"classical",430.54:"scientific",432:"\u201cfrequency of the universe\u201d",435:"diapson normal",439:"new philharmonic",440:"stuttgart",452:"old philharmonic",466:"chorton",DEFAULT:440};function H(e,t){var n,a,i=(n=e,a=t,1200*Math.log2(a/n)%1200);return Math.abs(i-100)<1||Math.abs(i+1100)<1?[16,15]:Math.abs(i-1100)<1||Math.abs(i+100)<1?[15,16]:Math.abs(i-200)<1||Math.abs(i+1e3)<1?[9,8]:Math.abs(i-1e3)<1||Math.abs(i+200)<1?[8,9]:Math.abs(i-300)<1||Math.abs(i+900)<1?[5,3]:Math.abs(i-900)<1||Math.abs(i+300)<1?[3,5]:Math.abs(i-400)<1||Math.abs(i+800)<1?[5,4]:Math.abs(i-800)<1||Math.abs(i+400)<1?[4,5]:Math.abs(i-500)<1||Math.abs(i+700)<1?[3,2]:Math.abs(i-700)<1||Math.abs(i+500)<1?[2,3]:Math.abs(i-600)<1||Math.abs(i+600)<1?[13,9]:void 0}function D(e,t,n,a,i,c,l,o,r){var s=n/2,u={x:s+Math.cos(e)*s*i,y:s+Math.sin(-e)*s*i},h={x:s+Math.cos(t)*s*i,y:s+Math.sin(-t)*s*i},d=H(c,l);if(d){a.lineWidth=1;var v=h.x-u.x,b=h.y-u.y,f=Math.sqrt(Math.pow(v,2)+Math.pow(b,2)),m=f/d[0]/2,j=f/d[1]/2;a.strokeStyle="rgb(".concat(o.r,", ").concat(o.g,", ").concat(o.b,")");for(var p=0;p<d[0];p++){a.beginPath();var x=u.x+v/d[0]*(p+.5),O=u.y+b/d[0]*(p+.5);a.arc(x,O,m,0,y),a.stroke()}a.strokeStyle="rgb(".concat(r.r,", ").concat(r.g,", ").concat(r.b,")");for(var g=0;g<d[1];g++){a.beginPath();var _=u.x+v/d[1]*(g+.5),I=u.y+b/d[1]*(g+.5);a.arc(_,I,j,0,y),a.stroke()}}a.globalCompositeOperation="source-over",a.strokeStyle="white",a.lineWidth=2,a.beginPath(),a.moveTo(u.x,u.y),a.lineTo(h.x,h.y),a.stroke()}var V=n(0);function A(e){var t=e.className,n=e.activePitches,i=e.baseFrequencies,c=e.diameter,l=e.mode,o=e.pitchSequence,s=Object(a.useRef)(),u=Object(a.useState)(null),h=Object(r.a)(u,2),v=h[0],f=h[1],m=Object(a.useState)(null),j=Object(r.a)(m,2),x=j[0],g=j[1];return Object(a.useEffect)((function(){s.current&&(f(new p(s.current)),g(new p(void 0,c,c)))}),[s,c]),Object(a.useEffect)((function(){v&&(v.resize(c,c),x.resize(c,c))}),[v,x,c]),Object(a.useEffect)((function(){if(v){var e=o.length,t=function(e){for(var t=[],n=360/e,a=0;a<e;a++)t.push(k(O(a*n)));return t}(e);v.clearRect(),x.clearRect(),function(){for(var a=y/e/2,i=I[l].chords,r=0;r<e;r++){var s=o[r]/e*360,u=t[r],h=n.indexOf(r)>=0,d=O(s);i[r];P(x,u,c,d-a,d+a,h?1:.95,h?.12:.1)}}(),function(){for(var a=0;a<n.length;a++)for(var l=n[a],r=360/e*o.indexOf(l),s=i[o.indexOf(l)],u=a+1;u<n.length;u++){var h=n[u],d=360/e*o.indexOf(h),v=i[o.indexOf(h)],b=t[l],f=t[h];D(O(r),O(d),c,x,.4,s,v,b,f)}}(),v.drawImage(x)}}),[n,i,c,l,o,x,v]),Object(V.jsx)("canvas",{className:b()(d.a.root,t),ref:s})}var L=n(1),F=n.n(L);function z(e,t){var n=String(e);return 1===e?n+=" (chromatic)":e===t-1?n+=" (reverse chromatic)":t===C&&7===e&&(n+=" (circle of fifths)"),n}function B(e){var t=e.a4,n=e.setA4,a=e.eq,i=e.setEq,c=e.mode,l=e.setMode,r=e.oscillator,s=e.setOscillator,u=e.pitchSkip,h=e.setPitchSkip,d=e.semitones,v=e.setSemitones,f=e.transposition,m=e.setTransposition,j=e.pitchSkipOptions;function p(e){var t=e.target.value;s(t)}function x(e,t){var n=t.target.value,c=Object(o.a)(a);c[e]=n,i(c)}return Object(V.jsxs)("form",{className:F.a.root,children:[Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsx)("h2",{className:F.a.title,children:"Oscillator"}),Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",checked:r===M,value:M,onChange:p}),Object(V.jsx)("div",{className:F.a.labelText,children:M})]}),Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",checked:r===w,value:w,onChange:p}),Object(V.jsx)("div",{className:F.a.labelText,children:w})]}),Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",checked:r===N,value:N,onChange:p}),Object(V.jsx)("div",{className:F.a.labelText,children:N})]}),Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",checked:r===S,value:S,onChange:p}),Object(V.jsx)("div",{className:F.a.labelText,children:S})]})]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsxs)("h2",{className:F.a.title,children:["EQ",Object(V.jsx)("button",{className:F.a.reset,onClick:function(){i([0,0,0,0,0,0,0,0,0,0])},children:"reset"})]}),Object(V.jsx)("div",{className:F.a.verticalRangeHolder,children:a.map((function(e,t){return Object(V.jsx)("input",{className:F.a.verticalRange,type:"range",min:"-1",max:.27,step:"0.01",value:e,onChange:x.bind(null,t)},t)}))})]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsxs)("h2",{className:F.a.title,children:["Semitones",Object(V.jsx)("button",{className:F.a.reset,onClick:function(){v(C)},children:"reset"})]}),Object(V.jsxs)("label",{className:b()(F.a.label,F.a.wide),children:[Object(V.jsx)("input",{className:F.a.input,type:"range",min:1,max:120,value:d,step:"1",onChange:function(e){var t=e.target.value;v(parseInt(t))}}),Object(V.jsx)("div",{className:F.a.labelText,children:d})]})]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsx)("h2",{className:F.a.title,children:"Transposition"}),R.map((function(e,t){return Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",value:100*t,name:"transposition",checked:f===100*t,onChange:function(e){var t=e.target.value;m(parseInt(t))}}),Object(V.jsx)("div",{className:F.a.labelText,children:e})]},e)}))]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsx)("h2",{className:F.a.title,children:"Mode"}),I.map((function(e,t){return Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",value:t,name:"mode",checked:c===t,onChange:function(e){var t=e.target.value;l(parseInt(t))}}),Object(V.jsx)("div",{className:F.a.labelText,children:e.name})]},e.name)}))]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsx)("h2",{className:F.a.title,children:"Pitch Skip"}),j.map((function(e){return Object(V.jsxs)("label",{className:F.a.label,children:[Object(V.jsx)("input",{className:F.a.input,type:"radio",value:e,name:"pitchSkip",checked:u===e,onChange:function(e){var t=e.target.value;h(parseInt(t))}}),Object(V.jsx)("div",{className:F.a.labelText,children:z(e,d)})]},e)}))]}),Object(V.jsxs)("div",{className:F.a.property,children:[Object(V.jsxs)("h2",{className:F.a.title,children:["A4",Object(V.jsx)("button",{className:F.a.reset,onClick:function(){n(q.DEFAULT)},children:"reset"})]}),Object(V.jsxs)("label",{className:b()(F.a.label,F.a.wide),children:[Object(V.jsx)("input",{className:F.a.input,type:"range",min:390,max:490,value:t,step:"1",onChange:function(e){var t=e.target.value;n(parseInt(t))}}),Object(V.jsxs)("div",{className:F.a.labelText,children:[t,q[t]&&" (".concat(q[t],")")]})]})]})]})}var W=n(10),G=n.n(W);function U(e){var t=e.pitchNamesSorted,n=e.diameter,a=e.chordNamesSorted,i=t.length;return Object(V.jsx)("div",{className:G.a.root,children:t.map((function(e,t){var c,l,o=360/i*t,r=e.length>1,s=-.475;return r?(c="translate(0%, -50%) rotate(".concat(o,"deg) translate(0%, 50%) translateY(").concat(n*s,"px) rotate(",90,"deg)"),l="0 50%"):(c="translate(-50%, 0) rotate(".concat(o,"deg) translateY(").concat(n*s,"px) "),l="50% 0"),Object(V.jsx)("div",{className:b()(G.a.button,r&&G.a.small,!a[t]&&G.a.deemphesized),style:{transform:c,transformOrigin:l},children:e},t)}))})}var Y=n(14),Z=n.n(Y);function X(e){var t=e.chordNamesSorted,n=e.diameter,a=t.length;return Object(V.jsx)("div",{className:Z.a.root,children:t.map((function(e,t){if(!e)return null;var i=360/a*t;return Object(V.jsx)("div",{className:Z.a.button,style:{transform:"translate(-50%, -50%) rotate(".concat(i,"deg) translateY(").concat(-.22*n,"px)")},children:e},t)}))})}var J=n(22),Q=n.n(J);function K(e){var t=e.pitchSequence,n=e.callback,i=e.diameter,c=Object(a.useRef)();function l(e){var a=e.targetTouches;a||n([]);for(var l=c.current.getBoundingClientRect(),o=y/t.length/2,r=[],s=0;s<a.length;s++){var u=a[s],h=u.clientX,d=u.clientY,v=h-l.x-.5*i,b=-(d-l.y-.5*i);if(Math.sqrt(Math.pow(v,2)+Math.pow(b,2))<=i/2){var f=g(Object(x.modulo)(Math.atan2(b,v),y)-o),m=Math.floor(f/360*t.length);r.push(t[m])}}n(r)}return Object(V.jsx)("div",{ref:c,className:Q.a.root,onTouchMove:function(e){l(e)},onTouchStart:function(e){l(e)},onTouchEnd:function(e){l(e)},onTouchCancel:function(e){l(e)}})}var $=n(23),ee=n(24);function te(e){var t=e.component,n=void 0===t?"div":t,i=e.callback,c=Object(ee.a)(e,["component","callback"]),l=Object(a.useState)(!1),o=Object(r.a)(l,2),s=o[0],u=o[1];return Object(V.jsx)(n,Object($.a)({onClick:s?null:function(){u(!0),i()}},c))}function ne(e){for(var t=[1],n=2;n<e;n++)ae(e,n)&&t.push(n);return t}function ae(e,t){for(var n=[],a=0;a<e;a++){var i=a*t%e;if(void 0!==n[i])return!1;n[i]=i}return n}function ie(e,t){return Object(o.a)(Array(e).keys()).map((function(n){var a=(n/e*C+t/100)%C,i=Math.floor(a),c=R[i],l=a%1;return l?"".concat(c).concat(String(Object(x.round)(l,.001)).slice(1,5)):c}))}function ce(e,t){for(var n=[],a=0;a<e;a++){for(var i=E(t,100*a*(C/e));i/2>20;)i/=2;n.push(i)}return n}function le(e,t){for(var n=[],a=0;a<e;a++)n.push(a*t%e);return n}function oe(e,t){return e.map((function(n,a){return e[a*t%e.length]}))}var re,se,ue,he,de,ve=n(15);function be(e,t){ue&&ue.close(),ue=new(window.AudioContext||window.webkitAudioContext),(he=ue.createGain()).connect(ue.destination),he.gain.value=.1,de=he;for(var n=0;n<t.length;n++){var a=ue.createBiquadFilter();0===n?a.type="lowshelf":n===t.length-1?a.type="highshelf":a.type="peaking",a.frequency.value=_[n],a.gain.value=40*t[n],a.connect(de),de=a}he.connect(de),se=[],re=e.map((function(e){return function(e){var t=[];for(;e<2e4;)t.push(e),e*=2;return t}(e)}))}function fe(e,t,n){se&&(t&&!se[e]?function(e,t){var n=[];se[e]=n;var a,i=Object(ve.a)(re[e]);try{for(i.s();!(a=i.n()).done;){var c=a.value,l=ue.createOscillator();l.frequency.value=c,l.type=t,l.connect(de),l.start(),n.push(l)}}catch(o){i.e(o)}finally{i.f()}}(e,n):!t&&se[e]&&function(e){var t,n=Object(ve.a)(se[e]);try{for(n.s();!(t=n.n()).done;)t.value.stop()}catch(a){n.e(a)}finally{n.f()}se[e]=null}(e))}var me=n(16),je=n.n(me),pe=n(11),xe="undefined"!==typeof window?window:null,Oe={addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}};function ge(){var e=je.a.parse(window.location.search,{parseNumbers:!0,arrayFormat:"comma"});function t(t,n,i){Object(a.useEffect)((function(){function a(){window.history.pushState(null,null,"".concat(window.location.origin).concat(window.location.pathname,"?").concat(je.a.stringify(e,{arrayFormat:"comma"})))}Object(pe.isEqual)(e[t],n)||(Object(pe.isEqual)(i,n)&&void 0!==e[t]?(delete e[t],a()):Object(pe.isEqual)(i,n)||(e[t]=n,a()))}),[n,t,i])}var n=Object(a.useState)(e.a4||q.DEFAULT),i=Object(r.a)(n,2),c=i[0],l=i[1];t("a4",c,q.DEFAULT);var s=Object(a.useState)(e.oscillator||M),h=Object(r.a)(s,2),d=h[0],v=h[1];t("oscillator",d,M);var b=Object(a.useState)(e.semitones||C),f=Object(r.a)(b,2),m=f[0],j=f[1];t("semitones",m,C);var p=Object(a.useState)(void 0!==e.transposition?e.transposition:300),x=Object(r.a)(p,2),O=x[0],g=x[1];t("transposition",O,300);var y=Object(a.useState)(ie(m,O)),w=Object(r.a)(y,2),N=w[0],S=w[1];Object(a.useEffect)((function(){S(ie(m,O))}),[m,O]);var k=Object(a.useState)(ne(m)),T=Object(r.a)(k,2),P=T[0],R=T[1];Object(a.useEffect)((function(){R(ne(m))}),[m]);var H=e.pitchSkip?e.pitchSkip:P[0],D=Object(a.useState)(H),L=Object(r.a)(D,2),F=L[0],z=L[1];Object(a.useEffect)((function(){P.indexOf(F)<0&&z(P[0])}),[P,F]),t("pitchSkip",F,H);for(var W=[],G=0;G<_.length;G++)W.push(0);var Y=Object(a.useState)(e.eq||W),Z=Object(r.a)(Y,2),J=Z[0],Q=Z[1];t("eq",J,W);var $=Object(a.useState)(E(c,O)),ee=Object(r.a)($,2),ae=ee[0],re=ee[1];Object(a.useEffect)((function(){re(E(c,O))}),[O,c]);var se=Object(a.useState)(ce(m,ae)),ue=Object(r.a)(se,2),he=ue[0],de=ue[1];Object(a.useEffect)((function(){de(ce(m,ae))}),[m,ae]);var ve=Object(a.useState)(le(m,F)),me=Object(r.a)(ve,2),ge=me[0],_e=me[1];Object(a.useEffect)((function(){_e(le(m,F))}),[m,F]);var ye=Object(a.useState)(oe(N,F)),Ie=Object(r.a)(ye,2),Me=Ie[0],we=Ie[1];Object(a.useEffect)((function(){we(oe(N,F))}),[N,F]);var Ne=Object(a.useState)(e.mode||0),Se=Object(r.a)(Ne,2),ke=Se[0],Te=Se[1];t("mode",ke,0);var Pe=Object(a.useState)([]),Ce=Object(r.a)(Pe,2),Re=Ce[0],Ee=Ce[1];Object(a.useEffect)((function(){Ee(function(e,t,n){for(var a=Object(o.a)(I[t].chords),i=[],c=0;c<e;c++){var l=c/e*a.length;i.push(a[l]||null)}return i.map((function(t,a){return i[a*n%e]}))}(m,ke,F))}),[m,F,ke]);var qe=Object(a.useState)([]),He=Object(r.a)(qe,2),De=He[0],Ve=He[1],Ae=Math.min.apply(Math,Object(o.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe||Oe,t=Object(a.useState)(e.innerHeight),n=Object(r.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)(e.innerWidth),o=Object(r.a)(l,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){function t(){c(e.innerHeight),u(e.innerWidth)}return e.addEventListener("resize",t),function(){e.removeEventListener("resize",t)}}),[e]),[s,i]}())),Le=Object(a.useState)(!1),Fe=Object(r.a)(Le,2),ze=Fe[0],Be=Fe[1];return Object(V.jsxs)(te,{className:u.a.root,callback:be.bind(null,he,J),children:[Object(V.jsx)("div",{className:u.a.contentHolder}),Object(V.jsxs)("div",{className:u.a.wheelHolder,style:{width:"".concat(Ae,"px"),height:"".concat(Ae,"px")},children:[Object(V.jsx)(A,{activePitches:De,baseFrequencies:he,diameter:Ae,pitchSequence:ge,mode:ke}),Object(V.jsx)(U,{pitchNamesSorted:Me,diameter:Ae,chordNamesSorted:Re}),Object(V.jsx)(X,{chordNamesSorted:Re,diameter:Ae}),Object(V.jsx)(K,{callback:function(e){for(var t=[].concat(Object(o.a)(e),[]),n=0;n<m;n++)t.indexOf(n)>=0?fe(n,!0,d):fe(n,!1,d);Ve(t)},diameter:Ae,pitchSequence:ge})]}),ze&&Object(V.jsx)("div",{className:u.a.menuHolder,children:Object(V.jsx)(B,{a4:c,setA4:l,eq:J,setEq:Q,mode:ke,setMode:Te,oscillator:d,setOscillator:v,pitchSkip:F,setPitchSkip:z,semitones:m,setSemitones:j,transposition:O,setTransposition:g,pitchSkipOptions:P})}),Object(V.jsx)("button",{className:u.a.menuButton,onClick:function(){ze&&be(he,J),Be(!ze)},children:ze?"x":"menu"})]})}var _e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),c(e),l(e)}))};l.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(ge,{})}),document.getElementById("root")),_e()},8:function(e,t,n){e.exports={root:"App_root__nWMuC",menuHolder:"App_menuHolder__243kY",menuButton:"App_menuButton__3IBp4",contentHolder:"App_contentHolder__3Zpi7",wheelHolder:"App_wheelHolder__1I76D"}}},[[46,1,2]]]);
//# sourceMappingURL=main.2983ab16.chunk.js.map