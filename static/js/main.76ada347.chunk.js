(this["webpackJsonpshepard-wheel"]=this["webpackJsonpshepard-wheel"]||[]).push([[0],{1:function(e,t,n){e.exports={root:"Menu_root__3QA5H",property:"Menu_property__qoOWz",title:"Menu_title__tE_9H",reset:"Menu_reset__uN5da",label:"Menu_label__3hKMT",wide:"Menu_wide__2sfIP",labelText:"Menu_labelText__2uoMn",input:"Menu_input__17q9X",verticalRangeHolder:"Menu_verticalRangeHolder__2TdXL",verticalRange:"Menu_verticalRange__3aZoM"}},11:function(e,t,n){e.exports={root:"PitchLabel_root__3-xxj",button:"PitchLabel_button__29U3k",small:"PitchLabel_small__3x-Zk",deemphesized:"PitchLabel_deemphesized__Gd1GB"}},15:function(e,t,n){e.exports={root:"ChordLabel_root__U_GCi",button:"ChordLabel_button__3bTYZ"}},20:function(e,t,n){e.exports={root:"Display_root__ig8ld"}},23:function(e,t,n){e.exports={root:"TouchPad_root__22wzt"}},30:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(19),l=n.n(c),o=(n(30),n(5)),r=n(3),s=n(9),u=n.n(s),h=n(20),d=n.n(h),v=n(6),b=n.n(v),f=n(21),m=n(22);function j(e,t,n,a,i){var c=Math.cos(e),l=Math.sin(e),o=t-c*t-l*-n,r=n-l*t-c*n;i.call(a,c,l,-l,c,o,r)}var p=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("canvas"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.offsetWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.offsetHeight,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.devicePixelRatio;Object(f.a)(this,e),this.resize=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio;if(!e||!n){var i=!!t._element.parentNode;e=i?t._element.offsetWidth:t._width,n=i?t._element.offsetHeight:t._height}t._devicePixelRatio=a,t._width=e,t._height=n,t._element.width=e*t._devicePixelRatio,t._element.height=n*t._devicePixelRatio,t._imageDataHandler=null,t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.arc=function(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t._context.arc(e,n,a,i,c,l)},this.beginPath=function(){t._context.beginPath()},this.bezierCurveTo=function(){var e;(e=t._context).bezierCurveTo.apply(e,arguments)},this.clearRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.clearRect(e,n,a,i),t._imageDataHandler=null},this.clip=function(){var e;(e=t._context).clip.apply(e,arguments)},this.closePath=function(){t._context.closePath()},this.drawImage=function(n,a,i,c,l,o,r,s,u){var h=n instanceof e;"number"===typeof o?h?(a*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,l*=t._devicePixelRatio,t._context.drawImage(n.element,a,i,c,l,o,r,s,u)):t._context.drawImage(n,a,i,c,l,o,r,s,u):h?(c=c||n.width,l=l||n.height,t._drawImageDest(n.element,a,i,c,l)):t._drawImageDest(n,a,i,c,l),t._imageDataHandler=null},this._drawImageDest=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.width,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.height;t._context.drawImage(e,n,a,i,c)},this.fill=function(){var e;(e=t._context).fill.apply(e,arguments),t._imageDataHandler=null},this.fillRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.fillRect(e,n,a,i),t._imageDataHandler=null},this.lineTo=function(){var e;(e=t._context).lineTo.apply(e,arguments)},this.moveTo=function(){var e;(e=t._context).moveTo.apply(e,arguments)},this.quadraticCurveTo=function(){var e;(e=t._context).quadraticCurveTo.apply(e,arguments)},this.rect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.rect(e,n,a,i)},this.stroke=function(){var e;(e=t._context).stroke.apply(e,arguments),t._imageDataHandler=null},this.resetTransform=function(){t._context.resetTransform(),t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.restore=function(){t._context.restore()},this.rotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;e&&j(e,n,a,t._context,t._context.transform)},this.save=function(){t._context.save()},this.setRotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;j(e,n,a,t._context,t.setTransform)},this.setTransform=function(e,n,a,i,c,l){e*=t._devicePixelRatio,n*=t._devicePixelRatio,a*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,l*=t._devicePixelRatio,t._context.setTransform(e,n,a,i,c,l)},this.setTranslate=function(e,n){t.setTransform(1,0,0,1,e,n)},this.translate=function(e,n){t._context.translate(e,n)},this.createImageData=function(e,n){return t._context.createImageData(e,n)},this._element=n,this._context=this._element.getContext("2d"),this.resize(a,i,c)}return Object(m.a)(e,[{key:"element",get:function(){return this._element}},{key:"height",get:function(){return this._height}},{key:"imageDataHandler",get:function(){return this._imageDataHandler}},{key:"width",get:function(){return this._width}},{key:"fillStyle",set:function(e){this._context.fillStyle=e}},{key:"globalCompositeOperation",set:function(e){this._context.globalCompositeOperation=e}},{key:"globalAlpha",set:function(e){this._context.globalAlpha=e}},{key:"lineWidth",set:function(e){this._context.lineWidth=e}},{key:"strokeStyle",set:function(e){this._context.strokeStyle=e}}],[{key:"quadraticThrough",value:function(e){for(var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Path2D,i=e.length,c=0;c<i-1;c++)if(t=n||e[0],n=e[c+1],0===c)a.moveTo(t.x,t.y);else if(c<i-2){var l=(t.x+n.x)/2,o=(t.y+n.y)/2;a.quadraticCurveTo(t.x,t.y,l,o)}else a.quadraticCurveTo(t.x,t.y,n.x,n.y);return a}}]),e}(),x=n(4);function O(e){var t=2*Math.PI,n=function(e){return e*Math.PI/180}(-e)+.25*t;return Object(x.modulo)(n,t)}function g(e){var t=function(e){return 180*e/Math.PI}(-e);return Object(x.modulo)(t+90,360)}var _=[32,64,128,256,512,1024,2048,4096,8192,16384],y=2*Math.PI,I=[{name:"(none)",chords:[]},{name:"I ionian (major)",chords:["I",null,"ii",null,"iii","IV",null,"V",null,"vi",null,"vii\xba"]},{name:"II dorian",chords:["i",null,"ii","III",null,"IV",null,"v",null,"vi\xba","VII",null]},{name:"III phrygian",chords:["i","II",null,"III",null,"iv",null,"v\xba","VI",null,"vii",null]},{name:"IV lydian",chords:["I",null,"II",null,"iii",null,"iv\xba ","V",null,"vi",null,"vii"]},{name:"V mixolydian",chords:["I",null,"ii",null,"iii\xba","IV",null,"v",null,"vi","VII",null]},{name:"VI aeolian (minor)",chords:["i",null,"ii\xba","III",null,"iv",null,"v","VI",null,"VII",null]},{name:"VII locrian",chords:["i\xba","II",null,"iii",null,"iv","V",null,"VI",null,"vii",null]},{name:"major pentatonic",chords:["I",null,"ii",null,"iii",null,null,"V",null,"vi",null,null]},{name:"minor pentatonic",chords:["i",null,null,"III",null,"iv",null,"v",null,null,"VII",null]},{name:"blues major",chords:["I",null,"ii",null,null,"IV",null,"v",null,"vi",null,null]},{name:"blues minor",chords:["i",null,null,"III",null,"iv",null,null,"VI",null,"vii",null]},{name:"egyptian",chords:["i",null,"ii",null,null,"IV",null,"v",null,null,"VII",null]}],M="sine",w="square",N="sawtooth",S="triangle";function k(e){e-=.25*y;var t=y/3,n=Math.cos(-e),a=Math.cos(-e-t),i=Math.cos(-e+t);return{r:Math.round(255*n*.5+127.5),g:Math.round(255*a*.5+127.5),b:Math.round(255*i*.5+127.5)}}function T(e){return Math.atan2(-Math.sin(e),Math.cos(e))}function P(e,t,n,a,i,c,l,o){var r=n/2,s=Object(x.modulo)(a,y)===Object(x.modulo)(i,y);if(e.beginPath(),e.fillStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),s)e.arc(r,r,r*c,0,y);else{var u=Math.cos(a),h=Math.sin(a);e.moveTo(r+u*r*l,r+h*-r*l),e.lineTo(r+u*r*c,r+h*-r*c),e.arc(r,r,r*c,T(a),T(i),!0),u=Math.cos(i),h=Math.sin(i),e.moveTo(r+u*r*c,r+h*-r*c),e.lineTo(r+u*r*l,r+h*-r*l),e.arc(r,r,r*l,T(i),T(a),!1)}e.fill(),s&&(e.beginPath(),e.globalCompositeOperation="destination-out",e.arc(r,r,r*l,0,y),e.fill(),e.globalCompositeOperation="source-over")}var C,R=n(8),q=12,E=440,H=["A","A\u266f/B\u266d","B","C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d"],V=100,D=1200,A=(C={415:"baroque",427:"classical",428:"classical",429:"classical",430:"classical",430.54:"scientific",432:"\u201cfrequency of the universe\u201d",435:"diapson normal",439:"new philharmonic"},Object(R.a)(C,E,"stuttgart"),Object(R.a)(C,452,"old philharmonic"),Object(R.a)(C,466,"chorton"),C);function z(e,t){return e*Math.pow(Math.pow(2,.08333333333333333),t/V)}function L(e,t){var n,a,i=(n=e,a=t,D*Math.log2(a/n)%D);return Math.abs(i-100)<1||Math.abs(i+1100)<1?[16,15]:Math.abs(i-1100)<1||Math.abs(i+100)<1?[15,16]:Math.abs(i-200)<1||Math.abs(i+1e3)<1?[9,8]:Math.abs(i-1e3)<1||Math.abs(i+200)<1?[8,9]:Math.abs(i-300)<1||Math.abs(i+900)<1?[5,3]:Math.abs(i-900)<1||Math.abs(i+300)<1?[3,5]:Math.abs(i-400)<1||Math.abs(i+800)<1?[5,4]:Math.abs(i-800)<1||Math.abs(i+400)<1?[4,5]:Math.abs(i-500)<1||Math.abs(i+700)<1?[3,2]:Math.abs(i-700)<1||Math.abs(i+500)<1?[2,3]:Math.abs(i-600)<1||Math.abs(i+600)<1?[13,9]:void 0}function B(e,t,n,a,i,c,l,o,r){var s=n/2,u={x:s+Math.cos(e)*s*i,y:s+Math.sin(-e)*s*i},h={x:s+Math.cos(t)*s*i,y:s+Math.sin(-t)*s*i},d=L(c,l);if(d){a.lineWidth=1;var v=h.x-u.x,b=h.y-u.y,f=Math.sqrt(Math.pow(v,2)+Math.pow(b,2)),m=f/d[0]/2,j=f/d[1]/2;a.strokeStyle="rgb(".concat(o.r,", ").concat(o.g,", ").concat(o.b,")");for(var p=0;p<d[0];p++){a.beginPath();var x=u.x+v/d[0]*(p+.5),O=u.y+b/d[0]*(p+.5);a.arc(x,O,m,0,y),a.stroke()}a.strokeStyle="rgb(".concat(r.r,", ").concat(r.g,", ").concat(r.b,")");for(var g=0;g<d[1];g++){a.beginPath();var _=u.x+v/d[1]*(g+.5),I=u.y+b/d[1]*(g+.5);a.arc(_,I,j,0,y),a.stroke()}}a.globalCompositeOperation="source-over",a.strokeStyle="white",a.lineWidth=2,a.beginPath(),a.moveTo(u.x,u.y),a.lineTo(h.x,h.y),a.stroke()}var F=n(0);function W(e){var t=e.className,n=e.activePitches,i=e.baseFrequencies,c=e.diameter,l=e.mode,o=e.pitchSequence,s=Object(a.useRef)(),u=Object(a.useState)(null),h=Object(r.a)(u,2),v=h[0],f=h[1],m=Object(a.useState)(null),j=Object(r.a)(m,2),x=j[0],g=j[1];return Object(a.useEffect)((function(){s.current&&(f(new p(s.current)),g(new p(void 0,c,c)))}),[s,c]),Object(a.useEffect)((function(){v&&(v.resize(c,c),x.resize(c,c))}),[v,x,c]),Object(a.useEffect)((function(){if(v){var e=o.length,t=function(e){for(var t=[],n=360/e,a=0;a<e;a++)t.push(k(O(a*n)));return t}(e);v.clearRect(),x.clearRect(),function(){for(var a=y/e/2,i=I[l].chords,r=0;r<e;r++){var s=o[r]/e*360,u=t[r],h=n.indexOf(r)>=0,d=O(s);i[r];P(x,u,c,d-a,d+a,h?1:.95,h?.12:.1)}}(),function(){for(var a=0;a<n.length;a++)for(var l=n[a],r=360/e*o.indexOf(l),s=i[o.indexOf(l)],u=a+1;u<n.length;u++){var h=n[u],d=360/e*o.indexOf(h),v=i[o.indexOf(h)],b=t[l],f=t[h];B(O(r),O(d),c,x,.4,s,v,b,f)}}(),v.drawImage(x)}}),[n,i,c,l,o,x,v]),Object(F.jsx)("canvas",{className:b()(d.a.root,t),ref:s})}var G=n(1),Y=n.n(G);function Z(e,t){var n=String(e);return 1===e?n+=" (chromatic)":e===t-1?n+=" (reverse chromatic)":t===q&&7===e&&(n+=" (circle of fifths)"),n}function X(e){var t=e.a4,n=e.setA4,a=e.eq,i=e.setEq,c=e.mode,l=e.setMode,r=e.oscillator,s=e.setOscillator,u=e.pitchSkip,h=e.setPitchSkip,d=e.semitones,v=e.setSemitones,f=e.transposition,m=e.setTransposition,j=e.pitchSkipOptions;function p(e){var t=e.target.value;s(t)}function x(e,t){var n=t.target.value,c=Object(o.a)(a);c[e]=n,i(c)}return Object(F.jsxs)("form",{className:Y.a.root,children:[Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsx)("h2",{className:Y.a.title,children:"Oscillator"}),Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",checked:r===M,value:M,onChange:p}),Object(F.jsx)("div",{className:Y.a.labelText,children:M})]}),Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",checked:r===w,value:w,onChange:p}),Object(F.jsx)("div",{className:Y.a.labelText,children:w})]}),Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",checked:r===N,value:N,onChange:p}),Object(F.jsx)("div",{className:Y.a.labelText,children:N})]}),Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",checked:r===S,value:S,onChange:p}),Object(F.jsx)("div",{className:Y.a.labelText,children:S})]})]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsxs)("h2",{className:Y.a.title,children:["EQ",Object(F.jsx)("button",{className:Y.a.reset,onClick:function(){i([0,0,0,0,0,0,0,0,0,0])},children:"reset"})]}),Object(F.jsx)("div",{className:Y.a.verticalRangeHolder,children:a.map((function(e,t){return Object(F.jsx)("input",{className:Y.a.verticalRange,type:"range",min:"-1",max:.27,step:"0.01",value:e,onChange:x.bind(null,t)},t)}))})]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsxs)("h2",{className:Y.a.title,children:["Semitones",Object(F.jsx)("button",{className:Y.a.reset,onClick:function(){v(q)},children:"reset"})]}),Object(F.jsxs)("label",{className:b()(Y.a.label,Y.a.wide),children:[Object(F.jsx)("input",{className:Y.a.input,type:"range",min:1,max:240,value:d,step:"1",onChange:function(e){var t=e.target.value;v(parseInt(t))}}),Object(F.jsx)("div",{className:Y.a.labelText,children:d})]})]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsx)("h2",{className:Y.a.title,children:"Transposition"}),H.map((function(e,t){return Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",value:t*V,name:"transposition",checked:f===t*V,onChange:function(e){var t=e.target.value;m(parseInt(t))}}),Object(F.jsx)("div",{className:Y.a.labelText,children:e})]},e)}))]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsx)("h2",{className:Y.a.title,children:"Mode"}),I.map((function(e,t){return Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",value:t,name:"mode",checked:c===t,onChange:function(e){var t=e.target.value;l(parseInt(t))}}),Object(F.jsx)("div",{className:Y.a.labelText,children:e.name})]},e.name)}))]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsx)("h2",{className:Y.a.title,children:"Pitch Skip"}),j.map((function(e){return Object(F.jsxs)("label",{className:Y.a.label,children:[Object(F.jsx)("input",{className:Y.a.input,type:"radio",value:e,name:"pitchSkip",checked:u===e,onChange:function(e){var t=e.target.value;h(parseInt(t))}}),Object(F.jsx)("div",{className:Y.a.labelText,children:Z(e,d)})]},e)}))]}),Object(F.jsxs)("div",{className:Y.a.property,children:[Object(F.jsxs)("h2",{className:Y.a.title,children:["A4",Object(F.jsx)("button",{className:Y.a.reset,onClick:function(){n(E)},children:"reset"})]}),Object(F.jsxs)("label",{className:b()(Y.a.label,Y.a.wide),children:[Object(F.jsx)("input",{className:Y.a.input,type:"range",min:390,max:490,value:t,step:"1",onChange:function(e){var t=e.target.value;n(parseInt(t))}}),Object(F.jsxs)("div",{className:Y.a.labelText,children:[t,A[t]&&" (".concat(A[t],")")]})]})]})]})}var J=n(11),Q=n.n(J);function U(e){var t=e.pitchNamesSorted,n=e.diameter,a=e.chordNamesSorted,i=t.length;return Object(F.jsx)("div",{className:Q.a.root,children:t.map((function(e,t){var c,l,o=360/i*t,r=e.length>1,s=-.475;return r?(c="translate(0%, -50%) rotate(".concat(o,"deg) translate(0%, 50%) translateY(").concat(n*s,"px) rotate(",90,"deg)"),l="0 50%"):(c="translate(-50%, 0) rotate(".concat(o,"deg) translateY(").concat(n*s,"px) "),l="50% 0"),Object(F.jsx)("div",{className:b()(Q.a.button,r&&Q.a.small,!a[t]&&Q.a.deemphesized),style:{transform:c,transformOrigin:l},children:e},t)}))})}var K=n(15),$=n.n(K);function ee(e){var t=e.chordNamesSorted,n=e.diameter,a=t.length;return Object(F.jsx)("div",{className:$.a.root,children:t.map((function(e,t){if(!e)return null;var i=360/a*t;return Object(F.jsx)("div",{className:$.a.button,style:{transform:"translate(-50%, -50%) rotate(".concat(i,"deg) translateY(").concat(-.22*n,"px)")},children:e},t)}))})}var te=n(23),ne=n.n(te);function ae(e){var t=e.pitchSequence,n=e.callback,i=e.diameter,c=Object(a.useRef)();function l(e){var a=e.targetTouches;a||n([]);for(var l=c.current.getBoundingClientRect(),o=y/t.length/2,r=[],s=0;s<a.length;s++){var u=a[s],h=u.clientX,d=u.clientY,v=h-l.x-.5*i,b=-(d-l.y-.5*i);if(Math.sqrt(Math.pow(v,2)+Math.pow(b,2))<=i/2){var f=g(Object(x.modulo)(Math.atan2(b,v),y)-o),m=Math.floor(f/360*t.length);r.push(t[m])}}n(r)}return Object(F.jsx)("div",{ref:c,className:ne.a.root,onTouchMove:function(e){l(e)},onTouchStart:function(e){l(e)},onTouchEnd:function(e){l(e)},onTouchCancel:function(e){l(e)}})}var ie=n(24),ce=n(25);function le(e){var t=e.component,n=void 0===t?"div":t,i=e.callback,c=Object(ce.a)(e,["component","callback"]),l=Object(a.useState)(!1),o=Object(r.a)(l,2),s=o[0],u=o[1];return Object(F.jsx)(n,Object(ie.a)({onClick:s?null:function(){u(!0),i()}},c))}function oe(e){for(var t=[1],n=2;n<e;n++)re(e,n)&&t.push(n);return t}function re(e,t){for(var n=[],a=0;a<e;a++){var i=a*t%e;if(void 0!==n[i])return!1;n[i]=i}return n}function se(e,t){return Object(o.a)(Array(e).keys()).map((function(n){var a=(n/e*q+t/V)%q,i=Math.floor(a),c=H[i],l=a%1;return l?"".concat(c).concat(String(Object(x.round)(l,.001)).slice(1,5)):c}))}function ue(e,t){for(var n=[],a=0;a<e;a++){for(var i=z(t,a*V*(q/e));i/2>20;)i/=2;n.push(i)}return n}function he(e,t){for(var n=[],a=0;a<e;a++)n.push(a*t%e);return n}function de(e,t){return e.map((function(n,a){return e[a*t%e.length]}))}var ve,be,fe,me,je,pe=n(16);function xe(e,t){fe&&fe.close(),fe=new(window.AudioContext||window.webkitAudioContext),(me=fe.createGain()).connect(fe.destination),me.gain.value=.1,je=me;for(var n=0;n<t.length;n++){var a=fe.createBiquadFilter();0===n?a.type="lowshelf":n===t.length-1?a.type="highshelf":a.type="peaking",a.frequency.value=_[n],a.gain.value=40*t[n],a.connect(je),je=a}me.connect(je),be=[],ve=e.map((function(e){return function(e){var t=[];for(;e<2e4;)t.push(e),e*=2;return t}(e)}))}function Oe(e,t,n){be&&(t&&!be[e]?function(e,t){var n=[];be[e]=n;var a,i=Object(pe.a)(ve[e]);try{for(i.s();!(a=i.n()).done;){var c=a.value,l=fe.createOscillator();l.frequency.value=c,l.type=t,l.connect(je),l.start(),n.push(l)}}catch(o){i.e(o)}finally{i.f()}}(e,n):!t&&be[e]&&function(e){var t,n=Object(pe.a)(be[e]);try{for(n.s();!(t=n.n()).done;)t.value.stop()}catch(a){n.e(a)}finally{n.f()}be[e]=null}(e))}var ge=n(17),_e=n.n(ge),ye=n(12),Ie="undefined"!==typeof window?window:null,Me={addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}};function we(){var e=_e.a.parse(window.location.search,{parseNumbers:!0,arrayFormat:"comma"});function t(t,n,i){Object(a.useEffect)((function(){function a(){window.history.pushState(null,null,"".concat(window.location.origin).concat(window.location.pathname,"?").concat(_e.a.stringify(e,{arrayFormat:"comma"})))}Object(ye.isEqual)(e[t],n)||(Object(ye.isEqual)(i,n)&&void 0!==e[t]?(delete e[t],a()):Object(ye.isEqual)(i,n)||(e[t]=n,a()))}),[n,t,i])}var n=Object(a.useState)(e.a4||E),i=Object(r.a)(n,2),c=i[0],l=i[1];t("a4",c,E);var s=Object(a.useState)(e.oscillator||M),h=Object(r.a)(s,2),d=h[0],v=h[1];t("oscillator",d,M);var b=Object(a.useState)(e.semitones||q),f=Object(r.a)(b,2),m=f[0],j=f[1];t("semitones",m,q);var p=Object(a.useState)(void 0!==e.transposition?e.transposition:300),x=Object(r.a)(p,2),O=x[0],g=x[1];t("transposition",O,300);var y=Object(a.useState)(se(m,O)),w=Object(r.a)(y,2),N=w[0],S=w[1];Object(a.useEffect)((function(){S(se(m,O))}),[m,O]);var k=Object(a.useState)(oe(m)),T=Object(r.a)(k,2),P=T[0],C=T[1];Object(a.useEffect)((function(){C(oe(m))}),[m]);var R=e.pitchSkip?e.pitchSkip:P[0],H=Object(a.useState)(R),V=Object(r.a)(H,2),D=V[0],A=V[1];Object(a.useEffect)((function(){P.indexOf(D)<0&&A(P[0])}),[P,D]),t("pitchSkip",D,R);for(var L=[],B=0;B<_.length;B++)L.push(0);var G=Object(a.useState)(e.eq||L),Y=Object(r.a)(G,2),Z=Y[0],J=Y[1];t("eq",Z,L);var Q=Object(a.useState)(z(c,O)),K=Object(r.a)(Q,2),$=K[0],te=K[1];Object(a.useEffect)((function(){te(z(c,O))}),[O,c]);var ne=Object(a.useState)(ue(m,$)),ie=Object(r.a)(ne,2),ce=ie[0],re=ie[1];Object(a.useEffect)((function(){re(ue(m,$))}),[m,$]);var ve=Object(a.useState)(he(m,D)),be=Object(r.a)(ve,2),fe=be[0],me=be[1];Object(a.useEffect)((function(){me(he(m,D))}),[m,D]);var je=Object(a.useState)(de(N,D)),pe=Object(r.a)(je,2),ge=pe[0],we=pe[1];Object(a.useEffect)((function(){we(de(N,D))}),[N,D]);var Ne=Object(a.useState)(e.mode||0),Se=Object(r.a)(Ne,2),ke=Se[0],Te=Se[1];t("mode",ke,0);var Pe=Object(a.useState)([]),Ce=Object(r.a)(Pe,2),Re=Ce[0],qe=Ce[1];Object(a.useEffect)((function(){qe(function(e,t,n){for(var a=Object(o.a)(I[t].chords),i=[],c=0;c<e;c++){var l=c/e*a.length;i.push(a[l]||null)}return i.map((function(t,a){return i[a*n%e]}))}(m,ke,D))}),[m,D,ke]);var Ee=Object(a.useState)([]),He=Object(r.a)(Ee,2),Ve=He[0],De=He[1],Ae=Math.min.apply(Math,Object(o.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie||Me,t=Object(a.useState)(e.innerHeight),n=Object(r.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)(e.innerWidth),o=Object(r.a)(l,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){function t(){c(e.innerHeight),u(e.innerWidth)}return e.addEventListener("resize",t),function(){e.removeEventListener("resize",t)}}),[e]),[s,i]}())),ze=Object(a.useState)(!1),Le=Object(r.a)(ze,2),Be=Le[0],Fe=Le[1];return Object(F.jsxs)(le,{className:u.a.root,callback:xe.bind(null,ce,Z),children:[Object(F.jsx)("div",{className:u.a.contentHolder}),Object(F.jsxs)("div",{className:u.a.wheelHolder,style:{width:"".concat(Ae,"px"),height:"".concat(Ae,"px")},children:[Object(F.jsx)(W,{activePitches:Ve,baseFrequencies:ce,diameter:Ae,pitchSequence:fe,mode:ke}),Object(F.jsx)(U,{pitchNamesSorted:ge,diameter:Ae,chordNamesSorted:Re}),Object(F.jsx)(ee,{chordNamesSorted:Re,diameter:Ae}),Object(F.jsx)(ae,{callback:function(e){for(var t=[].concat(Object(o.a)(e),[]),n=0;n<m;n++)t.indexOf(n)>=0?Oe(n,!0,d):Oe(n,!1,d);De(t)},diameter:Ae,pitchSequence:fe})]}),Be&&Object(F.jsx)("div",{className:u.a.menuHolder,children:Object(F.jsx)(X,{a4:c,setA4:l,eq:Z,setEq:J,mode:ke,setMode:Te,oscillator:d,setOscillator:v,pitchSkip:D,setPitchSkip:A,semitones:m,setSemitones:j,transposition:O,setTransposition:g,pitchSkipOptions:P})}),Object(F.jsx)("button",{className:u.a.menuButton,onClick:function(){Be&&xe(ce,Z),Fe(!Be)},children:Be?"x":"menu"})]})}var Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),c(e),l(e)}))};l.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(we,{})}),document.getElementById("root")),Ne()},9:function(e,t,n){e.exports={root:"App_root__nWMuC",menuHolder:"App_menuHolder__243kY",menuButton:"App_menuButton__3IBp4",contentHolder:"App_contentHolder__3Zpi7",wheelHolder:"App_wheelHolder__1I76D"}}},[[47,1,2]]]);
//# sourceMappingURL=main.76ada347.chunk.js.map