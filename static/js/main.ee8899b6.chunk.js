(this["webpackJsonpshepard-wheel"]=this["webpackJsonpshepard-wheel"]||[]).push([[0],{1:function(e,t,n){e.exports={root:"Menu_root__3QA5H",property:"Menu_property__qoOWz",title:"Menu_title__tE_9H",label:"Menu_label__3hKMT",labelText:"Menu_labelText__2uoMn",input:"Menu_input__17q9X"}},14:function(e,t,n){e.exports={root:"PitchLabel_root__3-xxj",button:"PitchLabel_button__29U3k",small:"PitchLabel_small__3x-Zk"}},17:function(e,t,n){e.exports={root:"ChordLabel_root__U_GCi",button:"ChordLabel_button__3bTYZ"}},22:function(e,t,n){e.exports={root:"Display_root__ig8ld"}},23:function(e,t,n){e.exports={root:"TouchPad_root__22wzt"}},28:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),o=n(21),c=n.n(o),l=(n(28),n(3)),r=n(8),s=n.n(r),u=12,h=["A","A\u266f/B\u266d","B","C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d"],d=[{name:"I ionian (major)",chords:["I",null,"ii",null,"iii","IV",null,"V",null,"vi",null,"vii\xba"]},{name:"II dorian",chords:["i",null,"ii","III",null,"IV",null,"v",null,"vi\xba","VII",null]},{name:"III phrygian",chords:["i","II",null,"III",null,"iv",null,"v\xba","VI",null,"vii",null]},{name:"IV lydian",chords:["I",null,"II",null,"iii",null,"iv\xba ","V",null,"vi",null,"vii"]},{name:"V mixolydian",chords:["I",null,"ii",null,"iii\xba","IV",null,"v",null,"vi","VII",null]},{name:"VI aeolian (minor)",chords:["i",null,"ii\xba","III",null,"iv",null,"v","VI",null,"VII",null]},{name:"VII locrian",chords:["i\xba","II",null,"iii",null,"iv","V",null,"VI",null,"vii",null]},{name:"major pentatonic",chords:["I",null,"ii",null,"iii",null,null,"V",null,"vi",null,null]},{name:"minor pentatonic",chords:["i",null,null,"III",null,"iv",null,"v",null,null,"VII",null]},{name:"blues major",chords:["I",null,"ii",null,null,"IV",null,"v",null,"vi",null,null]},{name:"blues minor",chords:["i",null,null,"III",null,"iv",null,null,"VI",null,"vii",null]},{name:"egyptian",chords:["i",null,"ii",null,null,"IV",null,"v",null,null,"VII",null]}],v="sine",f="square",b="sawtooth",p="triangle";var m={415:"baroque",427:"classical",428:"classical",429:"classical",430:"classical",430.54:"scientific",432:"\u201cfrequency of the universe\u201d",435:"diapson normal",439:"new philharmonic",440:"stuttgart",452:"old philharmonic",466:"chorton",DEFAULT:440},j=n(12),x=function(e){for(var t=[1],n=2;n<e;n++)g(e,n)&&t.push(n);return t};function g(e,t){Object(j.a)(Array(e).keys());for(var n=[],a=0;a<e;a++){var i=a*t%e;if(void 0!==n[i])return!1;n[i]=i}return n}var _=n(4),O=function(e,t){return Object(j.a)(Array(e).keys()).map((function(n){var a=(n/e*u+t)%u,i=Math.floor(a),o=h[i],c=a%1;return c?"".concat(o).concat(String(Object(_.round)(c,.001)).slice(1,5)):o}))},I=function(e,t,n){return e*Math.pow(Math.pow(2,1/n),t)},y=function(e,t){for(var n=[],a=0;a<e;a++){for(var i=I(t,a,e);i/2>20;)i/=2;n.push(i)}return n},M=function(e,t){for(var n=[],a=0;a<e;a++)n.push(a*t%e);return n},w=function(e,t){return e.map((function(n,a){return e[a*t%e.length]}))},P=n(6),N=n(7),k=n(13),S=n(11),T=n(22),C=n.n(T),R=n(10),H=n.n(R);function D(e,t,n,a,i){var o=Math.cos(e),c=Math.sin(e),l=t-o*t-c*-n,r=n-c*t-o*n;i.call(a,o,c,-c,o,l,r)}var E=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("canvas"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.offsetWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.offsetHeight,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.devicePixelRatio;Object(P.a)(this,e),this.resize=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio;if(!e||!n){var i=!!t._element.parentNode;e=i?t._element.offsetWidth:t._width,n=i?t._element.offsetHeight:t._height}t._devicePixelRatio=a,t._width=e,t._height=n,t._element.width=e*t._devicePixelRatio,t._element.height=n*t._devicePixelRatio,t._imageDataHandler=null,t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.arc=function(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t._context.arc(e,n,a,i,o,c)},this.beginPath=function(){t._context.beginPath()},this.bezierCurveTo=function(){var e;(e=t._context).bezierCurveTo.apply(e,arguments)},this.clearRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.clearRect(e,n,a,i),t._imageDataHandler=null},this.clip=function(){var e;(e=t._context).clip.apply(e,arguments)},this.closePath=function(){t._context.closePath()},this.drawImage=function(n,a,i,o,c,l,r,s,u){var h=n instanceof e;"number"===typeof l?h?(a*=t._devicePixelRatio,i*=t._devicePixelRatio,o*=t._devicePixelRatio,c*=t._devicePixelRatio,t._context.drawImage(n.element,a,i,o,c,l,r,s,u)):t._context.drawImage(n,a,i,o,c,l,r,s,u):h?(o=o||n.width,c=c||n.height,t._drawImageDest(n.element,a,i,o,c)):t._drawImageDest(n,a,i,o,c),t._imageDataHandler=null},this._drawImageDest=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.width,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.height;t._context.drawImage(e,n,a,i,o)},this.fill=function(){var e;(e=t._context).fill.apply(e,arguments),t._imageDataHandler=null},this.fillRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.fillRect(e,n,a,i),t._imageDataHandler=null},this.lineTo=function(){var e;(e=t._context).lineTo.apply(e,arguments)},this.moveTo=function(){var e;(e=t._context).moveTo.apply(e,arguments)},this.quadraticCurveTo=function(){var e;(e=t._context).quadraticCurveTo.apply(e,arguments)},this.rect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.rect(e,n,a,i)},this.stroke=function(){var e;(e=t._context).stroke.apply(e,arguments),t._imageDataHandler=null},this.resetTransform=function(){t._context.resetTransform(),t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.restore=function(){t._context.restore()},this.rotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;e&&D(e,n,a,t._context,t._context.transform)},this.save=function(){t._context.save()},this.setRotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;D(e,n,a,t._context,t.setTransform)},this.setTransform=function(e,n,a,i,o,c){e*=t._devicePixelRatio,n*=t._devicePixelRatio,a*=t._devicePixelRatio,i*=t._devicePixelRatio,o*=t._devicePixelRatio,c*=t._devicePixelRatio,t._context.setTransform(e,n,a,i,o,c)},this.setTranslate=function(e,n){t.setTransform(1,0,0,1,e,n)},this.translate=function(e,n){t._context.translate(e,n)},this.createImageData=function(e,n){return t._context.createImageData(e,n)},this._element=n,this._context=this._element.getContext("2d"),this.resize(a,i,o)}return Object(N.a)(e,[{key:"element",get:function(){return this._element}},{key:"height",get:function(){return this._height}},{key:"imageDataHandler",get:function(){if(!this._imageDataHandler)this._width,this._devicePixelRatio,this._height,this._devicePixelRatio;return this._imageDataHandler}},{key:"width",get:function(){return this._width}},{key:"fillStyle",set:function(e){this._context.fillStyle=e}},{key:"globalCompositeOperation",set:function(e){this._context.globalCompositeOperation=e}},{key:"globalAlpha",set:function(e){this._context.globalAlpha=e}},{key:"lineWidth",set:function(e){this._context.lineWidth=e}},{key:"strokeStyle",set:function(e){this._context.strokeStyle=e}}],[{key:"quadraticThrough",value:function(e){for(var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Path2D,i=e.length,o=0;o<i-1;o++)if(t=n||e[0],n=e[o+1],0===o)a.moveTo(t.x,t.y);else if(o<i-2){var c=(t.x+n.x)/2,l=(t.y+n.y)/2;a.quadraticCurveTo(t.x,t.y,c,l)}else a.quadraticCurveTo(t.x,t.y,n.x,n.y);return a}}]),e}();function V(e){var t=function(e){return e*Math.PI/180}(-e),n=2*Math.PI,a=t+.5*Math.PI;return Object(_.modulo)(a,n)}function A(e){var t=function(e){return 180*e/Math.PI}(-e);return Object(_.modulo)(t+90,360)}var q=function(e,t){var n,a,i=(n=e,a=t,1200*Math.log2(a/n));return Math.abs(i-100)<1||Math.abs(i+1100)<1?[16,15]:Math.abs(i-1100)<1||Math.abs(i+100)<1?[15,16]:Math.abs(i-200)<1||Math.abs(i+1e3)<1?[9,8]:Math.abs(i-1e3)<1||Math.abs(i+200)<1?[8,9]:Math.abs(i-300)<1||Math.abs(i+900)<1?[5,3]:Math.abs(i-900)<1||Math.abs(i+300)<1?[3,5]:Math.abs(i-400)<1||Math.abs(i+800)<1?[5,4]:Math.abs(i-800)<1||Math.abs(i+400)<1?[4,5]:Math.abs(i-500)<1||Math.abs(i+700)<1?[3,2]:Math.abs(i-700)<1||Math.abs(i+500)<1?[2,3]:Math.abs(i-600)<1||Math.abs(i+600)<1?[13,9]:void 0},W=n(0);function L(e){return Math.atan2(-Math.sin(e),Math.cos(e))}var z=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(P.a)(this,n),(a=t.call(this,e))._rootNode=i.a.createRef(),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this._rootNode.current,t=this.props.diameter;this._root=new E(e),this._root.globalCompositeOperation="copy",this._buffer=new E(void 0,t,t),this._drawSlices(),this._root.drawImage(this._buffer)}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&(this._root.clearRect(),this._buffer.clearRect(),this._drawSlices(),this._connectPitches(),this._root.drawImage(this._buffer))}},{key:"render",value:function(){var e=this.props.className;return Object(W.jsx)("canvas",{className:H()(C.a.root,e),ref:this._rootNode})}},{key:"_drawSlices",value:function(){for(var e=this.props,t=e.activePitches,n=e.diameter,a=e.pitchSequence,i=e.mode,o=a.length,c=Math.PI/o,l=B(o),r=d[i].chords,s=0;s<o;s++){var u=a[s]/o*360,h=l[s],v=t.indexOf(s)>=0,f=V(u),b=!!r[s];F(this._buffer,h,n,f-c,f+c,v?1:.95,v?.12:.1,b)}}},{key:"_connectPitches",value:function(){for(var e=this.props,t=e.activePitches,n=e.baseFrequencies,a=e.diameter,i=e.pitchSequence,o=B(i.length),c=0;c<t.length;c++)for(var l=t[c],r=360/i.length*i.indexOf(l),s=n[i.indexOf(l)],u=c+1;u<t.length;u++){var h=t[u],d=360/i.length*i.indexOf(h),v=n[i.indexOf(h)],f=o[i.indexOf(l)],b=o[i.indexOf(h)];Y(V(r),V(d),a,this._buffer,.4,s,v,f,b)}}}]),n}(i.a.Component);function F(e,t,n,a,i,o,c,l){var r=n/2,s=Object(_.modulo)(a,2*Math.PI)===Object(_.modulo)(i,2*Math.PI);if(e.beginPath(),e.fillStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),s)e.arc(r,r,r*o,0,2*Math.PI);else{var u=Math.cos(a),h=Math.sin(a);e.moveTo(r+u*r*c,r+h*-r*c),e.lineTo(r+u*r*o,r+h*-r*o),e.arc(r,r,r*o,L(a),L(i),!0),u=Math.cos(i),h=Math.sin(i),e.moveTo(r+u*r*o,r+h*-r*o),e.lineTo(r+u*r*c,r+h*-r*c),e.arc(r,r,r*c,L(i),L(a),!1)}e.fill(),s&&(e.beginPath(),e.globalCompositeOperation="destination-out",e.arc(r,r,r*c,0,2*Math.PI),e.fill(),e.globalCompositeOperation="source-over")}function B(e){for(var t=[],n=360/e,a=0;a<e;a++)t.push(U(V(a*n)));return t}function U(e){e-=.5*Math.PI;var t=2*Math.PI/3,n=Math.cos(-e),a=(Math.sin(-e),Math.cos(-e-t)),i=(Math.sin(-e-t),Math.cos(-e+t));Math.sin(-e+t);return{r:Math.round(255*n*.5+127.5),g:Math.round(255*a*.5+127.5),b:Math.round(255*i*.5+127.5)}}function Y(e,t,n,a,i,o,c,l,r){var s=n/2,u={x:s+Math.cos(e)*s*i,y:s+Math.sin(-e)*s*i},h={x:s+Math.cos(t)*s*i,y:s+Math.sin(-t)*s*i},d=q(o,c);if(d){a.lineWidth=1;var v=h.x-u.x,f=h.y-u.y,b=Math.sqrt(Math.pow(v,2)+Math.pow(f,2)),p=b/d[0]/2,m=b/d[1]/2;a.strokeStyle="rgb(".concat(l.r,", ").concat(l.g,", ").concat(l.b,")");for(var j=0;j<d[0];j++){a.beginPath();var x=u.x+v/d[0]*(j+.5),g=u.y+f/d[0]*(j+.5);a.arc(x,g,p,0,2*Math.PI),a.stroke()}a.strokeStyle="rgb(".concat(r.r,", ").concat(r.g,", ").concat(r.b,")");for(var _=0;_<d[1];_++){a.beginPath();var O=u.x+v/d[1]*(_+.5),I=u.y+f/d[1]*(_+.5);a.arc(O,I,m,0,2*Math.PI),a.stroke()}}a.globalCompositeOperation="source-over",a.strokeStyle="white",a.lineWidth=2,a.beginPath(),a.moveTo(u.x,u.y),a.lineTo(h.x,h.y),a.stroke()}var G=n(1),Z=n.n(G);function J(e,t){var n=String(e);return 1===e?n+=" (chromatic)":e===t-1?n+=" (reverse chromatic)":12===t&&7===e&&(n+=" (circle of fifths)"),n}function X(e){var t=e.a4,n=e.setA4,a=e.mode,i=e.setMode,o=e.oscillator,c=e.setOscillator,l=e.pitchSkip,r=e.setPitchSkip,s=e.semitones,u=e.setSemitones,j=e.transposition,x=e.setTransposition,g=e.pitchSkipOptions;function _(e){var t=e.target.value;c(t)}return Object(W.jsxs)("form",{className:Z.a.root,children:[Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"Oscillator"}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",checked:o===v,value:v,onChange:_}),Object(W.jsx)("div",{className:Z.a.labelText,children:v})]}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",checked:o===f,value:f,onChange:_}),Object(W.jsx)("div",{className:Z.a.labelText,children:f})]}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",checked:o===b,value:b,onChange:_}),Object(W.jsx)("div",{className:Z.a.labelText,children:b})]}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",checked:o===p,value:p,onChange:_}),Object(W.jsx)("div",{className:Z.a.labelText,children:p})]})]}),Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"Semitones"}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"range",min:1,max:120,value:s,step:"1",onChange:function(e){var t=e.target.value;u(parseInt(t))}}),Object(W.jsx)("div",{className:Z.a.labelText,children:s})]})]}),Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"Transposition"}),h.map((function(e,t){return Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",value:t,name:"transposition",checked:j===t,onChange:function(e){var t=e.target.value;x(parseInt(t))}}),Object(W.jsx)("div",{className:Z.a.labelText,children:e})]},e)}))]}),Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"Mode"}),d.map((function(e,t){return Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",value:t,name:"mode",checked:a===t,onChange:function(e){var t=e.target.value;i(parseInt(t))}}),Object(W.jsx)("div",{className:Z.a.labelText,children:e.name})]},e.name)}))]}),Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"Pitch Skip"}),g.map((function(e){return Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"radio",value:e,name:"pitchSkip",checked:l===e,onChange:function(e){var t=e.target.value;r(parseInt(t))}}),Object(W.jsx)("div",{className:Z.a.labelText,children:J(e,s)})]},e)}))]}),Object(W.jsxs)("div",{className:Z.a.property,children:[Object(W.jsx)("h2",{className:Z.a.title,children:"A4"}),Object(W.jsxs)("label",{className:Z.a.label,children:[Object(W.jsx)("input",{className:Z.a.input,type:"range",min:390,max:490,value:t,step:"1",onChange:function(e){var t=e.target.value;n(parseInt(t))}}),Object(W.jsxs)("div",{className:Z.a.labelText,children:[t,m[t]&&" (".concat(m[t],")")]})]})]})]})}var K=n(14),Q=n.n(K);function $(e){var t=e.pitchNamesSorted,n=e.diameter,a=e.mode,i=t.length,o=d[a].chords;return Object(W.jsx)("div",{className:Q.a.root,children:t.map((function(e,t){if(!o[t])return null;var a,c,l=360/i*t,r=e.length>1,s=-.475;return r?(a="translate(0%, -50%) rotate(".concat(l,"deg) translate(0%, 50%) translateY(").concat(n*s,"px) rotate(",90,"deg)"),c="0 50%"):(a="translate(-50%, 0) rotate(".concat(l,"deg) translateY(").concat(n*s,"px) "),c="50% 0"),Object(W.jsx)("div",{className:H()(Q.a.button,r&&Q.a.small),style:{transform:a,transformOrigin:c},children:e},t)}))})}var ee=n(17),te=n.n(ee);function ne(e){var t=e.chordNamesSorted,n=e.diameter,a=t.length;return Object(W.jsx)("div",{className:te.a.root,children:t.map((function(e,t){if(!e)return null;var i=360/a*t;return Object(W.jsx)("div",{className:te.a.button,style:{transform:"translate(-50%, -50%) rotate(".concat(i,"deg) translateY(").concat(-.22*n,"px)")},children:e},t)}))})}var ae=n(23),ie=n.n(ae);function oe(e){var t=e.pitchSequence,n=e.callback,i=e.diameter,o=Object(a.useRef)(null);function c(e){var a=e.targetTouches;a||n([]);for(var c=o.current.getBoundingClientRect(),l=Math.PI/t.length,r=[],s=0;s<a.length;s++){var u=a[s],h=u.clientX,d=u.clientY,v=h-c.x-.5*i,f=-(d-c.y-.5*i);if(Math.sqrt(Math.pow(v,2)+Math.pow(f,2))<=i/2){var b=A(Object(_.modulo)(Math.atan2(f,v),2*Math.PI)-l),p=Math.floor(b/360*t.length);r.push(t[p])}}n(r)}return Object(W.jsx)("div",{ref:o,className:ie.a.root,onTouchMove:function(e){c(e)},onTouchStart:function(e){c(e)},onTouchEnd:function(e){e.targetTouches,c(e)},onTouchCancel:function(e){c(e)}})}var ce=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(e){var a;Object(P.a)(this,n),(a=t.call(this,e))._onResize=function(){var e=a.props.win;a.setState({innerHeight:e.innerHeight,innerWidth:e.innerWidth})};var i=e.win;return a.state={innerHeight:i.innerHeight,innerWidth:i.innerWidth},i.addEventListener("resize",a._onResize),a}return Object(N.a)(n,[{key:"componentWillUnmount",value:function(){this.props.win.removeEventListener("resize",this._onResize)}},{key:"render",value:function(){var e=this.state,t=e.innerHeight,n=e.innerWidth;return(0,this.props.children)(n,t)}}]),n}(i.a.Component);ce.defaultProps={win:"undefined"!==typeof window?window:{addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}}};var le,re,se,ue,he=n(18);function de(e){se&&se.close(),se=new(window.AudioContext||window.webkitAudioContext),(ue=se.createGain()).connect(se.destination),ue.gain.value=.1,re=[],le=[],le=e.map((function(e){return function(e){var t=[];for(;e<2e4;)t.push(e),e*=2;return t}(e)}))}function ve(e,t,n){t&&!re[e]?function(e,t){var n=[];re[e]=n;var a,i=Object(he.a)(le[e]);try{for(i.s();!(a=i.n()).done;){var o=a.value,c=se.createOscillator();c.frequency.value=o,c.type=t,c.connect(ue),c.start(),n.push(c)}}catch(l){i.e(l)}finally{i.f()}}(e,n):!t&&re[e]&&function(e){var t,n=Object(he.a)(re[e]);try{for(n.s();!(t=n.n()).done;)t.value.stop()}catch(a){n.e(a)}finally{n.f()}re[e]=null}(e)}var fe=n(19),be=n.n(fe);function pe(e){window.history.pushState(null,null,"".concat(window.location.origin,"?").concat(be.a.stringify(e)))}function me(e,t,n,i){Object(a.useEffect)((function(){!function(e,t,n,a){e[t]!==n&&(n===a&&void 0!==e[t]?(delete e[t],pe(e)):n!==a&&(e[t]=n,pe(e)))}(e,t,n,i)}),[n])}function je(){var e=be.a.parse(window.location.search,{parseNumbers:!0}),t=Object(a.useState)(e.a4||m.DEFAULT),n=Object(l.a)(t,2),i=n[0],o=n[1];me(e,"a4",i,m.DEFAULT);var c=Object(a.useState)(e.oscillator||v),r=Object(l.a)(c,2),h=r[0],f=r[1];me(e,"oscillator",h,v);var b=Object(a.useState)(e.semitones||u),p=Object(l.a)(b,2),j=p[0],g=p[1];me(e,"semitones",j,u);var _=Object(a.useState)(void 0!==e.transposition?e.transposition:3),P=Object(l.a)(_,2),N=P[0],k=P[1];me(e,"transposition",N,3);var S=Object(a.useState)(O(j,N)),T=Object(l.a)(S,2),C=T[0],R=T[1];Object(a.useEffect)((function(){R(O(j,N))}),[j,N]);var H=Object(a.useState)(x(j)),D=Object(l.a)(H,2),E=D[0],V=D[1];Object(a.useEffect)((function(){V(x(j))}),[j]);var A=e.pitchSkip?e.pitchSkip:E[0],q=Object(a.useState)(A),L=Object(l.a)(q,2),F=L[0],B=L[1];Object(a.useEffect)((function(){E.indexOf(F)<0&&B(E[0])}),[E]),me(e,"pitchSkip",F,A);var U=Object(a.useState)(I(i,N,u)),Y=Object(l.a)(U,2),G=Y[0],Z=Y[1];Object(a.useEffect)((function(){Z(I(i,N,u))}),[N,i]);var J=Object(a.useState)(y(j,G)),K=Object(l.a)(J,2),Q=K[0],ee=K[1];Object(a.useEffect)((function(){ee(y(j,G))}),[j,G]);var te=Object(a.useState)(M(j,F)),ae=Object(l.a)(te,2),ie=ae[0],le=ae[1];Object(a.useEffect)((function(){le(M(j,F))}),[j,F]);var re=Object(a.useState)(w(C,N)),se=Object(l.a)(re,2),ue=se[0],he=se[1];Object(a.useEffect)((function(){he(w(C,F))}),[C,F]);var fe=Object(a.useState)(e.mode||0),pe=Object(l.a)(fe,2),je=pe[0],xe=pe[1];me(e,"mode",je,0);var ge=Object(a.useState)([]),_e=Object(l.a)(ge,2),Oe=_e[0],Ie=_e[1];Object(a.useEffect)((function(){var e=function(e,t){var n=d[t].chords,a=n.length;return n.map((function(t,i){var o=i/e*a%a;return o%1?null:n[o]}))}(j,je);Ie(w(e,F))}),[j,F,je]);var ye=Object(a.useState)([]),Me=Object(l.a)(ye,2),we=Me[0],Pe=Me[1],Ne=Object(a.useState)(!1),ke=Object(l.a)(Ne,2),Se=ke[0],Te=ke[1];var Ce=Object(a.useState)(!1),Re=Object(l.a)(Ce,2),He=Re[0],De=Re[1];function Ee(e){for(var t=0;t<j;t++)e.indexOf(t)>=0?ve(t,!0,h):ve(t,!1,h);Pe(e)}return Object(W.jsxs)("div",{className:s.a.root,onClick:Se?null:function(){de(Q),Te(!0)},children:[Object(W.jsx)("div",{className:s.a.contentHolder}),Object(W.jsx)(ce,{children:function(e,t){var n=Math.min(e,t);return Object(W.jsxs)("div",{className:s.a.wheelHolder,style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:[Object(W.jsx)(z,{activePitches:we,baseFrequencies:Q,diameter:n,pitchSequence:ie,mode:je}),Object(W.jsx)($,{pitchNamesSorted:ue,diameter:n,mode:je}),Object(W.jsx)(ne,{chordNamesSorted:Oe,diameter:n}),Se&&Object(W.jsx)(oe,{callback:Ee,diameter:n,pitchSequence:ie})]})}}),He&&Object(W.jsx)("div",{className:s.a.menuHolder,children:Object(W.jsx)(X,{a4:i,setA4:o,mode:je,setMode:xe,oscillator:h,setOscillator:f,pitchSkip:F,setPitchSkip:B,semitones:j,setSemitones:g,transposition:N,setTransposition:k,pitchSkipOptions:E})}),Object(W.jsx)("button",{className:s.a.menuButton,onClick:function(){He&&de(Q),De(!He)},children:He?"x":"menu"})]})}var xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(je,{})}),document.getElementById("root")),xe()},8:function(e,t,n){e.exports={root:"App_root__nWMuC",menuHolder:"App_menuHolder__243kY",menuButton:"App_menuButton__3IBp4",contentHolder:"App_contentHolder__3Zpi7",wheelHolder:"App_wheelHolder__1I76D"}}},[[43,1,2]]]);
//# sourceMappingURL=main.ee8899b6.chunk.js.map