(this["webpackJsonpshepard-wheel"]=this["webpackJsonpshepard-wheel"]||[]).push([[0],[,,function(e,t,n){e.exports={root:"Menu_root__3QA5H",property:"Menu_property__qoOWz",columns:"Menu_columns__3o8dK",title:"Menu_title__tE_9H",label:"Menu_label__3hKMT",labelText:"Menu_labelText__2uoMn",input:"Menu_input__17q9X"}},,,,,,,function(e,t,n){e.exports={root:"App_root__nWMuC",menuHolder:"App_menuHolder__243kY",menuButton:"App_menuButton__3IBp4",contentHolder:"App_contentHolder__3Zpi7",wheelHolder:"App_wheelHolder__1I76D"}},,,,,function(e,t,n){e.exports={root:"PitchLabel_root__3-xxj",button:"PitchLabel_button__29U3k",small:"PitchLabel_small__3x-Zk"}},,function(e,t,n){e.exports={root:"ChordLabel_root__U_GCi",button:"ChordLabel_button__3bTYZ"}},,,function(e,t,n){e.exports={root:"Display_root__ig8ld"}},function(e,t,n){e.exports={root:"TouchPad_root__22wzt"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(18),c=n.n(o),r=(n(25),n(3)),s=n(9),l=n.n(s),h=2e4,u=["A","A\u266f/B\u266d","B","C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d"],d=["I",null,"ii",null,"iii","IV",null,"V",null,"vi",null,"vii\xba"],f="sine",v="square",p="sawtooth",b="triangle",m=n(8),j=function(e){for(var t=[],n=1;n<e;n++)_(e,n)&&t.push(n);return t};function _(e,t){Object(m.a)(Array(e).keys());for(var n=[],a=0;a<e;a++){var i=a*t%e;if(void 0!==n[i])return!1;n[i]=i}return n}var x=n(4),g=function(e,t){return Object(m.a)(Array(e).keys()).map((function(n){var a=(n/e*12+t)%12,i=Math.floor(a),o=u[i],c=a%1;return c?"".concat(o).concat(String(Object(x.round)(c,.001)).slice(1,5)):o}))},O=function(e,t,n){return e*Math.pow(Math.pow(2,1/n),t)},y=function(e,t){for(var n=[],a=0;a<e;a++){for(var i=O(t,a,e);i/2>20;)i/=2;n.push(i)}return n},w=function(e,t){for(var n=[],a=0;a<e;a++)n.push(a*t%e);return n},M=function(e){return Object(m.a)(Array(e).keys()).map((function(t){var n=d.length,a=t/e*n%n;return a%1?null:d[a]}))},P=function(e,t){return e.map((function(n,a){return e[a*t%e.length]}))},k=n(6),N=n(7),S=n(13),T=n(12),C=n(19),I=n.n(C),R=n(11),H=n.n(R);function D(e,t,n,a,i){var o=Math.cos(e),c=Math.sin(e),r=t-o*t-c*-n,s=n-c*t-o*n;i.call(a,o,c,-c,o,r,s)}var A=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("canvas"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.offsetWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.offsetHeight,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.devicePixelRatio;Object(k.a)(this,e),this.resize=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio;if(!e||!n){var i=!!t._element.parentNode;e=i?t._element.offsetWidth:t._width,n=i?t._element.offsetHeight:t._height}t._devicePixelRatio=a,t._width=e,t._height=n,t._element.width=e*t._devicePixelRatio,t._element.height=n*t._devicePixelRatio,t._imageDataHandler=null,t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.arc=function(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t._context.arc(e,n,a,i,o,c)},this.beginPath=function(){t._context.beginPath()},this.bezierCurveTo=function(){var e;(e=t._context).bezierCurveTo.apply(e,arguments)},this.clearRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.clearRect(e,n,a,i),t._imageDataHandler=null},this.clip=function(){var e;(e=t._context).clip.apply(e,arguments)},this.closePath=function(){t._context.closePath()},this.drawImage=function(n,a,i,o,c,r,s,l,h){var u=n instanceof e;"number"===typeof r?u?(a*=t._devicePixelRatio,i*=t._devicePixelRatio,o*=t._devicePixelRatio,c*=t._devicePixelRatio,t._context.drawImage(n.element,a,i,o,c,r,s,l,h)):t._context.drawImage(n,a,i,o,c,r,s,l,h):u?(o=o||n.width,c=c||n.height,t._drawImageDest(n.element,a,i,o,c)):t._drawImageDest(n,a,i,o,c),t._imageDataHandler=null},this._drawImageDest=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.width,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.height;t._context.drawImage(e,n,a,i,o)},this.fill=function(){var e;(e=t._context).fill.apply(e,arguments),t._imageDataHandler=null},this.fillRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.fillRect(e,n,a,i),t._imageDataHandler=null},this.lineTo=function(){var e;(e=t._context).lineTo.apply(e,arguments)},this.moveTo=function(){var e;(e=t._context).moveTo.apply(e,arguments)},this.quadraticCurveTo=function(){var e;(e=t._context).quadraticCurveTo.apply(e,arguments)},this.rect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.rect(e,n,a,i)},this.stroke=function(){var e;(e=t._context).stroke.apply(e,arguments),t._imageDataHandler=null},this.resetTransform=function(){t._context.resetTransform(),t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.restore=function(){t._context.restore()},this.rotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;e&&D(e,n,a,t._context,t._context.transform)},this.save=function(){t._context.save()},this.setRotate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;D(e,n,a,t._context,t.setTransform)},this.setTransform=function(e,n,a,i,o,c){e*=t._devicePixelRatio,n*=t._devicePixelRatio,a*=t._devicePixelRatio,i*=t._devicePixelRatio,o*=t._devicePixelRatio,c*=t._devicePixelRatio,t._context.setTransform(e,n,a,i,o,c)},this.setTranslate=function(e,n){t.setTransform(1,0,0,1,e,n)},this.translate=function(e,n){t._context.translate(e,n)},this.createImageData=function(e,n){return t._context.createImageData(e,n)},this._element=n,this._context=this._element.getContext("2d"),this.resize(a,i,o)}return Object(N.a)(e,[{key:"element",get:function(){return this._element}},{key:"height",get:function(){return this._height}},{key:"imageDataHandler",get:function(){if(!this._imageDataHandler)this._width,this._devicePixelRatio,this._height,this._devicePixelRatio;return this._imageDataHandler}},{key:"width",get:function(){return this._width}},{key:"fillStyle",set:function(e){this._context.fillStyle=e}},{key:"globalCompositeOperation",set:function(e){this._context.globalCompositeOperation=e}},{key:"globalAlpha",set:function(e){this._context.globalAlpha=e}},{key:"lineWidth",set:function(e){this._context.lineWidth=e}},{key:"strokeStyle",set:function(e){this._context.strokeStyle=e}}],[{key:"quadraticThrough",value:function(e){for(var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Path2D,i=e.length,o=0;o<i-1;o++)if(t=n||e[0],n=e[o+1],0===o)a.moveTo(t.x,t.y);else if(o<i-2){var c=(t.x+n.x)/2,r=(t.y+n.y)/2;a.quadraticCurveTo(t.x,t.y,c,r)}else a.quadraticCurveTo(t.x,t.y,n.x,n.y);return a}}]),e}();function q(e){var t=function(e){return e*Math.PI/180}(-e),n=2*Math.PI,a=t+.5*Math.PI;return Object(x.modulo)(a,n)}function E(e){var t=function(e){return 180*e/Math.PI}(-e);return Object(x.modulo)(t+90,360)}function W(e,t){return Math.abs(e-t)}var z=n(0);function L(e){return Math.atan2(-Math.sin(e),Math.cos(e))}var B=function(e){Object(S.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e))._rootNode=i.a.createRef(),a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this._rootNode.current,t=this.props.diameter;this._root=new A(e),this._root.globalCompositeOperation="copy",this._buffer=new A(void 0,t,t),this._drawSlices(),this._root.drawImage(this._buffer)}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&(this._buffer.clearRect(),this._drawSlices(),this._connectPitches(),this._root.drawImage(this._buffer))}},{key:"render",value:function(){var e=this.props.className;return Object(z.jsx)("canvas",{className:H()(I.a.root,e),ref:this._rootNode})}},{key:"_drawSlices",value:function(){for(var e=this.props,t=e.activePitches,n=e.diameter,a=e.pitchSequence,i=a.length,o=Math.PI/i,c=Y(i),r=0;r<i;r++){var s=a[r]/i*360,l=c[r],h=t.indexOf(a.indexOf(r))>=0,u=q(s);F(this._buffer,l,n,u-o,u+o,h?1:.95,h?.12:.1)}}},{key:"_connectPitches",value:function(){for(var e=this.props,t=e.activePitches,n=e.baseFrequencies,a=e.diameter,i=e.pitchSequence,o=Y(i.length),c=0;c<t.length;c++)for(var r=t[c],s=360/i.length*i.indexOf(r),l=n[i.indexOf(r)],h=c+1;h<t.length;h++){var u=t[h],d=360/i.length*i.indexOf(u),f=n[i.indexOf(u)];U(q(s),q(d),a,this._buffer,.4,l,f,o[c],o[h])}}}]),n}(i.a.Component);function F(e,t,n,a,i,o,c){var r=n/2,s=Math.cos(a),l=Math.sin(a);e.beginPath(),e.fillStyle=t,e.moveTo(r+s*r*c,r+l*-r*c),e.lineTo(r+s*r*o,r+l*-r*o),e.arc(r,r,r*o,L(a),L(i),!0),s=Math.cos(i),l=Math.sin(i),e.moveTo(r+s*r*o,r+l*-r*o),e.lineTo(r+s*r*c,r+l*-r*c),e.arc(r,r,r*c,L(i),L(a),!1),e.fill()}function Y(e){for(var t=[],n=2*Math.PI/e,a=0;a<e;a++)t.push(G(a*n));return t}function G(e){var t=2*Math.PI/3,n=Math.cos(e),a=(Math.sin(e),Math.cos(e-t)),i=(Math.sin(e-t),Math.cos(e+t)),o=(Math.sin(e+t),Math.round(255*n*.5+127.5)),c=Math.round(255*a*.5+127.5),r=Math.round(255*i*.5+127.5);return"rgb(".concat(o,", ").concat(c,", ").concat(r,")")}function U(e,t,n,a,i,o,c,r,s){var l=n/2,h={x:l+Math.cos(e)*l*i,y:l+Math.sin(-e)*l*i},u={x:l+Math.cos(t)*l*i,y:l+Math.sin(-t)*l*i},d=function(e,t){for(var n=[15,9,5,5,3,25],a=[8,8,3,4,2,18];e>t;)t*=2;for(;t/2>e;)t/=2;for(var i=20,o=20,c=20,r=0;r<n.length;r++)for(var s=0;s<a.length;s++){var l=W(e*(n[r]/a[s]),t);l<i&&(i=l,o=a[s],c=n[r]);var h=W(t/2*(n[r]/a[s]),e);h<i&&(i=h,o=n[r],c=a[s])}return[o,c]}(o,c);if(d){a.lineWidth=1,a.globalCompositeOperation="lighten";var f=u.x-h.x,v=u.y-h.y,p=Math.sqrt(Math.pow(f,2)+Math.pow(v,2)),b=p/d[0]/2,m=p/d[1]/2;a.strokeStyle=r;for(var j=0;j<d[0];j++){a.beginPath();var _=h.x+f/d[0]*(j+.5),x=h.y+v/d[0]*(j+.5);a.arc(_,x,b,0,2*Math.PI),a.stroke()}a.strokeStyle=s;for(var g=0;g<d[1];g++){a.beginPath();var O=h.x+f/d[1]*(g+.5),y=h.y+v/d[1]*(g+.5);a.arc(O,y,m,0,2*Math.PI),a.stroke()}}a.globalCompositeOperation="source-over",a.strokeStyle="white",a.lineWidth=2,a.beginPath(),a.moveTo(h.x,h.y),a.lineTo(u.x,u.y),a.stroke()}var Z=n(2),J=n.n(Z);function K(e,t){var n=String(e);return 1===e?n+=" (chromatic)":e===t-1?n+=" (reverse chromatic)":12===t&&7===e&&(n+=" (circle of fifths)"),n}function V(e){var t=e.a4,n=e.setA4,a=e.oscillator,i=e.setOscillator,o=e.pitchSkip,c=e.setPitchSkip,r=e.semitones,s=e.setSemitones,l=e.transposition,h=e.setTransposition,d=e.pitchSkipOptions;function m(e){var t=e.target.value;i(t)}return Object(z.jsxs)("form",{className:J.a.root,children:[Object(z.jsxs)("div",{className:J.a.property,children:[Object(z.jsx)("h2",{className:J.a.title,children:"Oscillator"}),Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",checked:a===f,value:f,onChange:m}),Object(z.jsx)("div",{className:J.a.labelText,children:f})]}),Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",checked:a===v,value:v,onChange:m}),Object(z.jsx)("div",{className:J.a.labelText,children:v})]}),Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",checked:a===p,value:p,onChange:m}),Object(z.jsx)("div",{className:J.a.labelText,children:p})]}),Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",checked:a===b,value:b,onChange:m}),Object(z.jsx)("div",{className:J.a.labelText,children:b})]})]}),Object(z.jsxs)("div",{className:J.a.property,children:[Object(z.jsx)("h2",{className:J.a.title,children:"Semitones"}),Object(z.jsx)("label",{className:J.a.label,children:Object(z.jsx)("input",{className:J.a.input,type:"range",min:1,max:120,value:r,step:"1",onChange:function(e){var t=e.target.value;s(parseInt(t))}})})]}),Object(z.jsxs)("div",{className:J.a.property,children:[Object(z.jsx)("h2",{className:J.a.title,children:"Transposition"}),u.map((function(e,t){return Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",value:t,name:"transposition",checked:l===t,onChange:function(e){var t=e.target.value;h(parseInt(t))}}),Object(z.jsx)("div",{className:J.a.labelText,children:e})]},e)}))]}),Object(z.jsxs)("div",{className:J.a.property,children:[Object(z.jsx)("h2",{className:J.a.title,children:"Pitch Skip"}),d.map((function(e){return Object(z.jsxs)("label",{className:J.a.label,children:[Object(z.jsx)("input",{className:J.a.input,type:"radio",value:e,name:"pitchSkip",checked:o===e,onChange:function(e){var t=e.target.value;c(parseInt(t))}}),Object(z.jsx)("div",{className:J.a.labelText,children:K(e,r)})]},e)}))]}),Object(z.jsxs)("div",{className:J.a.property,children:[Object(z.jsx)("h2",{className:J.a.title,children:"A4"}),Object(z.jsx)("label",{className:J.a.label,children:Object(z.jsx)("input",{className:J.a.input,type:"number",min:20,max:2e4,value:t,step:"1",onChange:function(e){var t=e.target.value;n(parseInt(t))}})})]})]})}var X=n(14),Q=n.n(X);function $(e){var t=e.pitchNamesSorted,n=e.diameter,a=t.length;return Object(z.jsx)("div",{className:Q.a.root,children:t.map((function(e,t){var i,o,c=360/a*t,r=e.length>1,s=-.475;return r?(i="translate(0%, -50%) rotate(".concat(c,"deg) translate(0%, 50%) translateY(").concat(n*s,"px) rotate(",90,"deg)"),o="0 50%"):(i="translate(-50%, 0) rotate(".concat(c,"deg) translateY(").concat(n*s,"px) "),o="50% 0"),Object(z.jsx)("div",{className:H()(Q.a.button,r&&Q.a.small),style:{transform:i,transformOrigin:o},children:e},t)}))})}var ee=n(16),te=n.n(ee);function ne(e){var t=e.chordNamesSorted,n=e.diameter,a=t.length;return Object(z.jsx)("div",{className:te.a.root,children:t.map((function(e,t){if(!e)return null;var i=360/a*t;return Object(z.jsx)("div",{className:te.a.button,style:{transform:"translate(-50%, -50%) rotate(".concat(i,"deg) translateY(").concat(-.22*n,"px)")},children:e},t)}))})}var ae=n(20),ie=n.n(ae);function oe(e){var t=e.pitchSequence,n=e.callback,i=e.diameter,o=Object(a.useRef)(null);function c(e){var a=e.targetTouches;a||n([]);for(var c=o.current.getBoundingClientRect(),r=Math.PI/t.length,s=[],l=0;l<a.length;l++){var h=a[l],u=h.clientX,d=h.clientY,f=u-c.x-.5*i,v=-(d-c.y-.5*i);if(Math.sqrt(Math.pow(f,2)+Math.pow(v,2))<=i/2){var p=E(Object(x.modulo)(Math.atan2(v,f),2*Math.PI)-r),b=Math.floor(p/360*t.length);s.push(t[b])}}n(s)}return Object(z.jsx)("div",{ref:o,className:ie.a.root,onTouchMove:function(e){c(e)},onTouchStart:function(e){c(e)},onTouchEnd:function(e){e.targetTouches,c(e)},onTouchCancel:function(e){c(e)}})}var ce=function(e){Object(S.a)(n,e);var t=Object(T.a)(n);function n(e){var a;Object(k.a)(this,n),(a=t.call(this,e))._onResize=function(){var e=a.props.win;a.setState({innerHeight:e.innerHeight,innerWidth:e.innerWidth})};var i=e.win;return a.state={innerHeight:i.innerHeight,innerWidth:i.innerWidth},i.addEventListener("resize",a._onResize),a}return Object(N.a)(n,[{key:"componentWillUnmount",value:function(){this.props.win.removeEventListener("resize",this._onResize)}},{key:"render",value:function(){var e=this.state,t=e.innerHeight,n=e.innerWidth;return(0,this.props.children)(n,t)}}]),n}(i.a.Component);ce.defaultProps={win:"undefined"!==typeof window?window:{addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}}};var re,se,le,he,ue=n(17);function de(e){le&&le.close(),le=new(window.AudioContext||window.webkitAudioContext),(he=le.createGain()).connect(le.destination),he.gain.value=.1,se=[],re=[],re=e.map((function(e){return function(e){var t=[];for(;e<h;)t.push(e),e*=2;return t}(e)}))}function fe(e,t,n){t&&!se[e]?function(e,t){var n=[];se[e]=n;var a,i=Object(ue.a)(re[e]);try{for(i.s();!(a=i.n()).done;){var o=a.value,c=le.createOscillator();c.frequency.value=o,c.type=t,c.connect(he),c.start(),n.push(c)}}catch(r){i.e(r)}finally{i.f()}}(e,n):!t&&se[e]&&function(e){var t,n=Object(ue.a)(se[e]);try{for(n.s();!(t=n.n()).done;)t.value.stop()}catch(a){n.e(a)}finally{n.f()}se[e]=null}(e)}function ve(){var e=Object(a.useState)(440),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(f),c=Object(r.a)(o,2),s=c[0],h=c[1],u=Object(a.useState)(12),d=Object(r.a)(u,2),v=d[0],p=d[1],b=Object(a.useState)(3),m=Object(r.a)(b,2),_=m[0],x=m[1],k=Object(a.useState)(g(v,_)),N=Object(r.a)(k,2),S=N[0],T=N[1];Object(a.useEffect)((function(){T(g(v,_))}),[v,_]);var C=Object(a.useState)(j(v)),I=Object(r.a)(C,2),R=I[0],H=I[1];Object(a.useEffect)((function(){H(j(v))}),[v]);var D=Object(a.useState)(R[0]),A=Object(r.a)(D,2),q=A[0],E=A[1];Object(a.useEffect)((function(){E(R[0])}),[R]);var W=Object(a.useState)(O(n,_,12)),L=Object(r.a)(W,2),F=L[0],Y=L[1];Object(a.useEffect)((function(){Y(O(n,_,12))}),[_,n]);var G=Object(a.useState)(y(v,F)),U=Object(r.a)(G,2),Z=U[0],J=U[1];Object(a.useEffect)((function(){J(y(v,F))}),[v,F]);var K=Object(a.useState)(w(v,q)),X=Object(r.a)(K,2),Q=X[0],ee=X[1];Object(a.useEffect)((function(){ee(w(v,q))}),[v,q]);var te=Object(a.useState)(P(S,_)),ae=Object(r.a)(te,2),ie=ae[0],re=ae[1];Object(a.useEffect)((function(){re(P(S,q))}),[S,q]);var se=Object(a.useState)(P(M(v),q)),le=Object(r.a)(se,2),he=le[0],ue=le[1];Object(a.useEffect)((function(){ue(P(M(v),q))}),[v,q]);var ve=Object(a.useState)([]),pe=Object(r.a)(ve,2),be=pe[0],me=pe[1],je=Object(a.useState)(!1),_e=Object(r.a)(je,2),xe=_e[0],ge=_e[1];var Oe=Object(a.useState)(!1),ye=Object(r.a)(Oe,2),we=ye[0],Me=ye[1];function Pe(e){for(var t=0;t<v;t++)e.indexOf(t)>=0?fe(t,!0,s):fe(t,!1,s);me(e)}return Object(z.jsxs)("div",{className:l.a.root,onClick:xe?null:function(){de(Z),ge(!0)},children:[Object(z.jsx)("div",{className:l.a.contentHolder}),Object(z.jsx)(ce,{children:function(e,t){var n=Math.min(e,t);return Object(z.jsxs)("div",{className:l.a.wheelHolder,style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:[Object(z.jsx)(B,{activePitches:be,baseFrequencies:Z,diameter:n,pitchSequence:Q}),Object(z.jsx)($,{pitchNamesSorted:ie,diameter:n}),Object(z.jsx)(ne,{chordNamesSorted:he,diameter:n}),xe&&Object(z.jsx)(oe,{callback:Pe,diameter:n,pitchSequence:Q})]})}}),we&&Object(z.jsx)("div",{className:l.a.menuHolder,children:Object(z.jsx)(V,{a4:n,setA4:i,oscillator:s,setOscillator:h,pitchSkip:q,setPitchSkip:E,semitones:v,setSemitones:p,transposition:_,setTransposition:x,pitchSkipOptions:R})}),Object(z.jsx)("button",{className:l.a.menuButton,onClick:function(){we&&de(Z),Me(!we)},children:we?"close menu":"open menu"})]})}var pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(z.jsx)(i.a.StrictMode,{children:Object(z.jsx)(ve,{})}),document.getElementById("root")),pe()}],[[27,1,2]]]);
//# sourceMappingURL=main.d16a4d56.chunk.js.map